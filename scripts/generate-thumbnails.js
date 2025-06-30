#!/usr/bin/env node

/**
 * Script to generate thumbnails for media files
 * 
 * Usage: 
 * npm install sharp glob
 * node scripts/generate-thumbnails.js
 */

const fs = require('fs');
const path = require('path');
const globModule = require('glob');
const sharp = require('sharp');

// Configuration
const MEDIA_DIR = path.join(__dirname, '../public/media');
const THUMB_SIZE = 300;
const THUMB_SUFFIX = '-thumb';
const EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp'];

// Find all image files
async function findImageFiles() {
  const patterns = EXTENSIONS.map(ext => `${MEDIA_DIR}/**/*${ext}`);
  let files = [];
  
  for (const pattern of patterns) {
    const matches = await new Promise((resolve, reject) => {
      globModule.glob(pattern, (err, matches) => {
        if (err) reject(err);
        else resolve(matches);
      });
    });
    files = [...files, ...matches];
  }
  
  // Filter out files that already have the thumb suffix
  return files.filter(file => !file.includes(THUMB_SUFFIX));
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
async function main() {
  try {
    console.log('Finding image files...');
    const files = await findImageFiles();
    console.log(`Found ${files.length} image files`);
    
    if (files.length === 0) {
      console.log('No image files found. Add images to the media directory first.');
      return;
    }
    
    console.log('Generating thumbnails...');
    for (const file of files) {
      await generateThumbnail(file);
    }
    
    console.log('Done!');
  } catch (error) {
    console.error('Error:', error);
  }
}

main(); 