const pkg = require('./package.json')
const glob = require('glob')
const yargs = require('yargs')
const through = require('through2');
const qunit = require('node-qunit-puppeteer')
const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');

const { rollup } = require('rollup')
const terser = require('@rollup/plugin-terser')
const babel = require('@rollup/plugin-babel').default
const commonjs = require('@rollup/plugin-commonjs')
const resolve = require('@rollup/plugin-node-resolve').default
const sass = require('sass')

const gulp = require('gulp')
const tap = require('gulp-tap')
const zip = require('gulp-zip')
const header = require('gulp-header')
const eslint = require('gulp-eslint')
const minify = require('gulp-clean-css')
const connect = require('gulp-connect')
const autoprefixer = require('gulp-autoprefixer')
const ejs = require('gulp-ejs');
const rename = require('gulp-rename');
const prettify = require('gulp-prettify');
const { done } = require('qunit');

const root = yargs.argv.root || '.'
const port = yargs.argv.port || 8000
const host = yargs.argv.host || 'localhost'

const banner = `/*!
* reveal.js ${pkg.version}
* ${pkg.homepage}
* MIT licensed
*
* Copyright (C) 2011-2024 Hakim El Hattab, https://hakim.se
*/\n`

// Prevents warnings from opening too many test pages
process.setMaxListeners(20);

const babelConfig = {
    babelHelpers: 'bundled',
    ignore: ['node_modules'],
    compact: false,
    extensions: ['.js', '.html'],
    plugins: [
        'transform-html-import-to-string'
    ],
    presets: [[
        '@babel/preset-env',
        {
            corejs: 3,
            useBuiltIns: 'usage',
            modules: false
        }
    ]]
};

// Our ES module bundle only targets newer browsers with
// module support. Browsers are targeted explicitly instead
// of using the "esmodule: true" target since that leads to
// polyfilling older browsers and a larger bundle.
const babelConfigESM = JSON.parse(JSON.stringify(babelConfig));
babelConfigESM.presets[0][1].targets = {
    browsers: [
        'last 2 Chrome versions',
        'last 2 Safari versions',
        'last 2 iOS versions',
        'last 2 Firefox versions',
        'last 2 Edge versions',
    ]
};

let cache = {};

gulp.task('create-slides', () => {
    // create slides.html from all md files in each slides folder


})

// Creates a bundle with broad browser support, exposed
// as UMD
gulp.task('js-es5', () => {
    return rollup({
        cache: cache.umd,
        input: 'js/index.js',
        plugins: [
            resolve(),
            commonjs(),
            babel(babelConfig),
            terser()
        ]
    }).then(bundle => {
        cache.umd = bundle.cache;
        return bundle.write({
            name: 'Reveal',
            file: './dist/reveal.js',
            format: 'umd',
            banner: banner,
            sourcemap: true
        });
    });
})

// Creates an ES module bundle
gulp.task('js-es6', () => {
    return rollup({
        cache: cache.esm,
        input: 'js/index.js',
        plugins: [
            resolve(),
            commonjs(),
            babel(babelConfigESM),
            terser()
        ]
    }).then(bundle => {
        cache.esm = bundle.cache;
        return bundle.write({
            file: './dist/reveal.esm.js',
            format: 'es',
            banner: banner,
            sourcemap: true
        });
    });
})
gulp.task('js', gulp.parallel('js-es5', 'js-es6'));

// Creates a UMD and ES module bundle for each of our
// built-in plugins
gulp.task('plugins', () => {
    return Promise.all([
        { name: 'RevealHighlight', input: './plugin/highlight/plugin.js', output: './plugin/highlight/highlight' },
        { name: 'RevealMarkdown', input: './plugin/markdown/plugin.js', output: './plugin/markdown/markdown' },
        { name: 'RevealSearch', input: './plugin/search/plugin.js', output: './plugin/search/search' },
        { name: 'RevealNotes', input: './plugin/notes/plugin.js', output: './plugin/notes/notes' },
        { name: 'RevealZoom', input: './plugin/zoom/plugin.js', output: './plugin/zoom/zoom' },
        { name: 'RevealMath', input: './plugin/math/plugin.js', output: './plugin/math/math' },
    ].map(plugin => {
        return rollup({
            cache: cache[plugin.input],
            input: plugin.input,
            plugins: [
                resolve(),
                commonjs(),
                babel({
                    ...babelConfig,
                    ignore: [/node_modules\/(?!(highlight\.js|marked)\/).*/],
                }),
                terser()
            ]
        }).then(bundle => {
            cache[plugin.input] = bundle.cache;
            bundle.write({
                file: plugin.output + '.esm.js',
                name: plugin.name,
                format: 'es'
            })

            bundle.write({
                file: plugin.output + '.js',
                name: plugin.name,
                format: 'umd'
            })
        });
    }));
})

// a custom pipeable step to transform Sass to CSS
function compileSass() {
    return through.obj((vinylFile, encoding, callback) => {
        const transformedFile = vinylFile.clone();

        sass.render({
            data: transformedFile.contents.toString(),
            file: transformedFile.path,
        }, (err, result) => {
            if (err) {
                callback(err);
            }
            else {
                transformedFile.extname = '.css';
                transformedFile.contents = result.css;
                callback(null, transformedFile);
            }
        });
    });
}

gulp.task('css-themes', () => gulp.src(['./css/theme/source/*.{sass,scss}'])
    .pipe(compileSass())
    .pipe(gulp.dest('./dist/theme')))

gulp.task('css-core', () => gulp.src(['css/reveal.scss'])
    .pipe(compileSass())
    .pipe(autoprefixer())
    .pipe(minify({ compatibility: 'ie9' }))
    .pipe(header(banner))
    .pipe(gulp.dest('./dist')))

gulp.task('css', gulp.parallel('css-themes', 'css-core'))

gulp.task('qunit', () => {

    let serverConfig = {
        root,
        port: 8009,
        host: 'localhost',
        name: 'test-server'
    }

    let server = connect.server(serverConfig)

    let testFiles = glob.sync('test/*.html')

    let totalTests = 0;
    let failingTests = 0;

    let tests = Promise.all(testFiles.map(filename => {
        return new Promise((resolve, reject) => {
            qunit.runQunitPuppeteer({
                targetUrl: `http://${serverConfig.host}:${serverConfig.port}/${filename}`,
                timeout: 20000,
                redirectConsole: false,
                puppeteerArgs: ['--allow-file-access-from-files']
            })
                .then(result => {
                    if (result.stats.failed > 0) {
                        console.log(`${'!'} ${filename} [${result.stats.passed}/${result.stats.total}] in ${result.stats.runtime}ms`.red);
                        // qunit.printResultSummary(result, console);
                        qunit.printFailedTests(result, console);
                    }
                    else {
                        console.log(`${'✔'} ${filename} [${result.stats.passed}/${result.stats.total}] in ${result.stats.runtime}ms`.green);
                    }

                    totalTests += result.stats.total;
                    failingTests += result.stats.failed;

                    resolve();
                })
                .catch(error => {
                    console.error(error);
                    reject();
                });
        })
    }));

    return new Promise((resolve, reject) => {

        tests.then(() => {
            if (failingTests > 0) {
                reject(new Error(`${failingTests}/${totalTests} tests failed`.red));
            }
            else {
                console.log(`${'✔'} Passed ${totalTests} tests`.green.bold);
                resolve();
            }
        })
            .catch(() => {
                reject();
            })
            .finally(() => {
                server.close();
            });

    });
})

gulp.task('eslint', () => gulp.src(['./js/**', 'gulpfile.js'])
    .pipe(eslint())
    .pipe(eslint.format()))

gulp.task('test', gulp.series('eslint', 'qunit'))

gulp.task('default', gulp.series(gulp.parallel('js', 'css', 'plugins'), 'test'))

gulp.task('build', gulp.parallel('js', 'css', 'plugins'))

gulp.task('package', gulp.series(() =>

    gulp.src(
        [
            './index.html',
            './dist/**',
            './lib/**',
            './images/**',
            './plugin/**',
            './**/*.md'
        ],
        { base: './' }
    )
        .pipe(zip('reveal-js-presentation.zip')).pipe(gulp.dest('./'))

))

gulp.task('reload', () => gulp.src(['index-template.html'])
    .pipe(connect.reload()));

gulp.task('serve', () => {

    connect.server({
        root: root,
        port: port,
        host: host,
        livereload: true
    })

    const slidesRoot = root.endsWith('/') ? root : root + '/'
    gulp.watch([
        slidesRoot + '**/*.html',
        slidesRoot + '**/*.md',
        `!${slidesRoot}**/node_modules/**`, // ignore node_modules
    ], gulp.series('reload'))

    gulp.watch(['js/**'], gulp.series('js', 'reload', 'eslint'))

    gulp.watch(['plugin/**/plugin.js', 'plugin/**/*.html'], gulp.series('plugins', 'reload'))

    gulp.watch([
        'css/theme/source/**/*.{sass,scss}',
        'css/theme/template/*.{sass,scss}',
    ], gulp.series('css-themes', 'reload'))

    gulp.watch([
        'css/*.scss',
        'css/print/*.{sass,scss,css}'
    ], gulp.series('css-core', 'reload'))

    gulp.watch(['test/*.html'], gulp.series('test'))

})

// Function to get YAML data from a file
function getYamlData(file) {
    return yaml.load(fs.readFileSync(file, 'utf8'));
}

const OUT_DIR = './gh-pages/';

function copyAssetsRecursive(sourceDir, targetDir) {
    if (!fs.existsSync(sourceDir)) return;

    fs.readdirSync(sourceDir, { withFileTypes: true }).forEach((entry) => {
        const fullPath = path.join(sourceDir, entry.name);
        const targetPath = path.join(targetDir, entry.name);

        if (entry.isDirectory()) {
            // Ensure directory exists in target location
            if (!fs.existsSync(targetPath)) {
                fs.mkdirSync(targetPath, { recursive: true });
            }
            // Recursively process subdirectories
            copyAssetsRecursive(fullPath, targetPath);
        } else {
            // Process files
            gulp.src(fullPath)
                .pipe(rename(entry.name))
                .pipe(gulp.dest(targetDir));
        }
    });
}

// Process each slide directory
function processSlides(done) {
    const slidesDir = 'slides/';
    fs.readdirSync(slidesDir).filter(function (folder) {
        return fs.statSync(path.join(slidesDir, folder)).isDirectory();
    }).forEach(function (folder) {
        const configPath = path.join(slidesDir, folder, 'config.yml');
        const templatePath = path.join(slidesDir, 'index-template.html');
        const assetsPath = path.join(slidesDir, folder, 'assets');
        const folderPath = path.join(slidesDir, folder);

        const configData = getYamlData(configPath);
        configData.folder = folder;

        // Process template with config data
        gulp.src(templatePath)
            .pipe(ejs(configData, {
                views: [folderPath]
            }))
            .pipe(prettify({
                indent_size: 2, // Set options according to your project's coding standards
                wrap_attributes: 'auto' // Example option: wraps attributes to new lines
            }))
            .pipe(rename('index.html'))
            .pipe(gulp.dest(path.join(OUT_DIR, folder)));

        // Copy slides.md as is
        // gulp.src(slidePath)
        //     .pipe(rename('slides.md'))
        //     .pipe(gulp.dest(path.join(OUT_DIR, folder)));


        fs.readdirSync(folderPath).filter(function (file) {
            return fs.statSync(path.join(folderPath, file)).isFile() && file.endsWith('.md');
        }).forEach(function (file) {
            gulp.src(path.join(folderPath, file))
                .pipe(rename(file))
                .pipe(gulp.dest(path.join(OUT_DIR, folder)));
        });

        // Copy assets as is
        // if (fs.existsSync(assetsPath) && fs.readdirSync(assetsPath).length > 0) {
        //     fs.readdirSync(assetsPath).filter(function (file) {
        //         return fs.statSync(path.join(assetsPath, file)).isFile();
        //     }).forEach(function (file) {
        //         gulp.src(path.join(assetsPath, file))
        //             .pipe(rename(file))
        //             .pipe(gulp.dest(path.join(OUT_DIR, folder, 'assets')));
        //     });
        // }

        const targetPath = path.join(OUT_DIR, folder, 'assets');
        copyAssetsRecursive(assetsPath, targetPath);

    });

    done();
}

// Process each slide directory
function processRoot(done) {
    const templatePath = './index-template.html';
    const configData = getYamlData('./config.yml');

    configData.slides = [];
    const slidesDir = './slides/';
    fs.readdirSync(slidesDir).filter(function (folder) {
        return fs.statSync(path.join(slidesDir, folder)).isDirectory();
    }).forEach(function (folder) {
        const slideConfig = getYamlData(path.join(slidesDir, folder, 'config.yml'));
        configData.slides.push({
            title: slideConfig.title,
            path: folder
        });
    });

    // Process template with config data
    gulp.src(templatePath)
        .pipe(ejs(configData))
        .pipe(prettify({
            indent_size: 2, // Set options according to your project's coding standards
            wrap_attributes: 'auto' // Example option: wraps attributes to new lines
        }))
        .pipe(rename('index.html'))
        .pipe(gulp.dest(`./gh-pages/`));

    done();
}

// Gulp task
gulp.task('create_slides', processSlides);
gulp.task('create_root', processRoot);

function copy_deps(done) {
    gulp.src(
        [
            './dist/**',
            './assets/**',
            './plugin/**',
            './libs/**',
        ],
        { base: './' }
    )
        .pipe(gulp.dest('./gh-pages/'))

    done();
}
gulp.task('copy_dependencies', copy_deps)

gulp.task('generate', gulp.series('build', gulp.parallel('create_slides', 'create_root'), 'copy_dependencies'));

gulp.task('serve_gh_pages', () => {

    connect.server({
        root: OUT_DIR,
        port: 8080,
        host: 'localhost',
        livereload: true
    })

    gulp.watch(['js/**'], gulp.series('js', 'copy_dependencies', 'reload', 'eslint'))

    gulp.watch(['plugin/**/plugin.js', 'plugin/**/*.html'], gulp.series('plugins', 'reload'))

    gulp.watch([
        'css/theme/source/**/*.{sass,scss}',
        'css/theme/template/*.{sass,scss}',
    ], gulp.series('css-themes', 'copy_dependencies', 'reload'))

    gulp.watch([
        'css/*.scss',
        'css/print/*.{sass,scss,css}'
    ], gulp.series('css-core', 'copy_dependencies', 'reload'))

    gulp.watch(['slides/**/*'], gulp.series(gulp.parallel('create_slides', 'create_root'), 'copy_dependencies', 'reload'))

});

// Task to process text and extract images
gulp.task("extract-text-images", function (done) {

    const argv = yargs
        .option("input", {
            alias: "i",
            describe: "Path to the input text file",
            type: "string",
            demandOption: true,
        })
        .option("output", {
            alias: "o",
            describe: "Path to the output folder",
            type: "string",
            demandOption: true,
        })
        .option("attachments", {
            alias: "a",
            describe: "Path to the source attachments folder to copy images",
            type: "string",
        })
        .help()
        .alias("help", "h")
        .argv;

    try {
        const inputFile = argv.input;
        const outputFile = path.join(argv.output, 'extracted.txt');

        // Read the input file synchronously
        const text = fs.readFileSync(inputFile, "utf8");

        // Regex patterns
        const paragraphWithImagesRegex = /([\s\S]+?)(?=\n!|\n\n|$)/g;
        const imageRegex = /\!\[\[Pasted image (\d+).png\]\]/g;

        let output = [];
        let imageCount = 1;

        // Process each paragraph
        const matches = text.match(paragraphWithImagesRegex);
        if (matches) {
            matches.forEach((block) => {
                block = block.trim();
                if (!block) return;

                // Extract and process images within the paragraph
                let imageMatches = [...block.matchAll(imageRegex)];
                imageMatches.forEach((match, i, matches) => {
                    // copy image to assets folder
                    let imageSource = path.join(argv.attachments, `Pasted image ${match[1]}.png`);
                    let imageDestination = path.join(argv.output, 'assets', `${imageCount}_${match[1]}.png`);
                    fs.copyFileSync(imageSource, imageDestination);

                    let timestamp = match[1];
                    output.push('<!-- .slide: class="align-center" -->\n\n');
                    output.push(`<img src="assets/${imageCount}_${timestamp}.png" style="max-height: 55vh;">\n\n`);
                    imageCount++;
                    // Add a separator line (`--`) after last image in the paragraph
                    if (i === matches.length - 1) {
                        let paragraphText = block.replace(imageRegex, "").trim(); // Remove image references from text

                        if (paragraphText) {
                            output.push("Notes:\n");
                            output.push(paragraphText + "\n");
                        }
                        output.push("\n--\n");
                    }
                });

            });
        }

        // Remove the last separator to avoid trailing `--`
        if (output[output.length - 1] === "--") {
            output.pop();
        }

        // Write output file synchronously
        fs.writeFileSync(outputFile, output.join("\n"), "utf8");
        console.log(`✔ Extraction complete. Output saved to: ${outputFile}`);
        done();
    } catch (error) {
        console.error("❌ Error processing file:", error);
    }
});