# Markdown Demo

---

## External 1.1

Content 1.1

Note: This will only appear in the speaker notes window.

--

## External 1.2

Content 1.2

---

## External 2

Content 2.1

---

## External 3.1

Content 3.1

--

## External 3.2

Content 3.2

--

## External 3.3 (Image)

![External Image](https://s3.amazonaws.com/static.slid.es/logo/v2/slides-symbol-512x512.png)

--

## External 3.4 (Math)

`\[ J(\theta_0,\theta_1) = \sum_{i=0} \]`

---

## echo.c

```c [287: 2|4,6]
/* All of the options in this arg are valid, so handle them. */
p = arg + 1;
do {
    if (*p == 'n')
        nflag = 0;
    if (*p == 'e')
        eflag = '\\';
} while (*++p); 
```
[source](https://git.busybox.net/busybox/tree/coreutils/echo.c?h=1_36_stable#n287)
