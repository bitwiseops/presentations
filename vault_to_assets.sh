#!/bin/bash

# Input file (modify this if needed)
INPUT_FILE="/mnt/d/Vaults/notes/Web/Videos/AI/But what is a GPT  Visual intro to Transformers  Chapter 5  Deep Learning.md"

# Source directory for images
SOURCE_DIR="/mnt/d/Vaults/notes/_attachments"

# Destination directory for images
DEST_DIR="/mnt/c/Users/bitwise/projects/presentations/slides/2025-03-19/assets"

# Ensure destination directory exists
# mkdir -p "$DEST_DIR"

# Extract all image references and execute copy commands
line_number=0
sed -n 's/.*!\[\[\([^]]*\)\]\].*/\1/p' "$INPUT_FILE" | while read -r IMAGE_NAME; do
    line_number=$((line_number + 1))
    
    # Extract timestamp from filename (assuming format like Pasted image YYYYMMDDHHMMSS.png)
    TIMESTAMP=$(echo "$IMAGE_NAME" | grep -oP '\d{14}' || date +%Y%m%d%H%M%S)
    
    # Escape spaces for bash
    ESCAPED_IMAGE_NAME=$(echo "$IMAGE_NAME" | sed 's/ /\\ /g')
    
    # Generate destination filename with line number and extracted timestamp
    DEST_FILE="$DEST_DIR/${line_number}_${TIMESTAMP}.png"
    
    # Execute copy command
    cp "$SOURCE_DIR/$IMAGE_NAME" "$DEST_FILE"
    
    # Print HTML tag
    echo "<img src=\"assets/${line_number}_${TIMESTAMP}.png\" width=\"50%\">"

done