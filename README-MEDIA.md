# Media Management System

This document provides information about the media management system implemented in the portfolio project.

## Directory Structure

The media files are organized in the following directory structure:

```
public/
  └── media/
      ├── competitions/
      │   ├── olympiad/
      │   ├── oran/
      │   ├── laghouat/
      │   └── elbayadh/
      └── projects/
          ├── face-recognition/
          ├── arduino/
          └── smart-farming/
```

## Media Types

The system supports the following media types:
- Images (`type: "image"`)
- Screenshots (`type: "screenshot"`)
- Certificates (`type: "certificate"`)
- Videos (`type: "video"`)

## Media Object Structure

Media objects in the data files follow this structure:

```javascript
{
  type: "image", // One of: "image", "screenshot", "certificate", "video"
  url: "/media/path/to/file.jpg", // Path to the full-size media file
  thumbnail: "/media/path/to/file-thumb.jpg", // Path to the thumbnail
  caption: "Description of the media" // Caption displayed with the media
}
```

## Thumbnail Generation

Thumbnails are automatically generated using the `generate-thumbnails-simple.js` script:

```bash
node scripts/generate-thumbnails-simple.js
```

This script:
1. Recursively searches for images in the media directory
2. Generates thumbnails with the suffix "-thumb" (e.g., "image.jpg" → "image-thumb.jpg")
3. Resizes thumbnails to 300px width while maintaining aspect ratio

## Adding New Media

To add new media:

1. Create appropriate directories if they don't exist
2. Copy your media files to the appropriate directories
3. Run the thumbnail generation script
4. Update the data files (`src/data/profile.js` or `src/data/projects.js`) to reference the media

Example:

```javascript
// In src/data/projects.js
{
  id: "project-id",
  // ... other project properties
  media: [
    {
      type: "image",
      url: "/media/projects/project-id/image.jpg",
      thumbnail: "/media/projects/project-id/image-thumb.jpg",
      caption: "Project Image"
    }
  ]
}
```

## Video Support

The system supports two types of videos:
1. YouTube embeds (URLs containing "youtube.com/embed" or "youtu.be")
2. Local video files (e.g., MP4)

For local videos, thumbnails should be provided as they aren't automatically generated.

## Components

The media gallery is implemented in the `MediaGallery.js` component, which:
- Displays thumbnails in a grid
- Shows full-size images in a lightbox when clicked
- Plays videos in a modal when clicked
- Supports both YouTube embeds and local video files 