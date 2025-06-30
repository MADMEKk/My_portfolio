#!/usr/bin/env node

/**
 * Simple script to generate thumbnails for media files
 */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Configuration
const MEDIA_DIR = path.join(__dirname, '../public/media');
const THUMB_SIZE = 300;
const THUMB_SUFFIX = '-thumb';

// Process a directory recursively
function processDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory()) {
      processDirectory(fullPath);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if (['.jpg', '.jpeg', '.png', '.webp'].includes(ext) && !entry.name.includes(THUMB_SUFFIX)) {
        generateThumbnail(fullPath);
      }
    }
  }
}

// Generate thumbnail for a file
async function generateThumbnail(file) {
  const ext = path.extname(file);
  const basename = path.basename(file, ext);
  const dirname = path.dirname(file);
  const thumbName = `${basename}${THUMB_SUFFIX}${ext}`;
  const thumbPath = path.join(dirname, thumbName);
  
  // Skip if thumbnail already exists
  if (fs.existsSync(thumbPath)) {
    console.log(`Thumbnail already exists: ${thumbPath}`);
    return;
  }
  
  try {
    await sharp(file)
      .resize(THUMB_SIZE, THUMB_SIZE, { fit: 'cover' })
      .toFile(thumbPath);
    console.log(`Generated thumbnail: ${thumbPath}`);
  } catch (error) {
    console.error(`Error generating thumbnail for ${file}:`, error);
  }
}

// Main function
function main() {
  try {
    console.log('Processing media directory...');
    processDirectory(MEDIA_DIR);
    console.log('Done!');
  } catch (error) {
    console.error('Error:', error);
  }
}

main(); 