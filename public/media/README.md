# Media Files for Portfolio

This directory contains all media files for your portfolio, including images, certificates, screenshots, and video thumbnails.

## Directory Structure

```
media/
├── competitions/         # Competition-related media
│   ├── olympiad-certificate.jpg
│   ├── olympiad-certificate-thumb.jpg
│   └── ...
├── projects/             # Project-related media
│   ├── real-estate/      # Real Estate Platform project
│   │   ├── dashboard.jpg
│   │   ├── dashboard-thumb.jpg
│   │   └── ...
│   ├── meal-planner/     # Meal Planning System project
│   └── ...
└── README.md             # This file
```

## How to Add Media

### 1. For Projects

1. Place your media files in the appropriate project folder (e.g., `projects/real-estate/`)
2. Create thumbnails for each image (recommended size: 300x300px)
3. Update the `media` array in `src/data/projects.js` for the corresponding project:

```javascript
media: [
  {
    type: 'screenshot',  // Options: 'screenshot', 'image', 'certificate', 'video'
    url: '/media/projects/real-estate/dashboard.jpg',
    thumbnail: '/media/projects/real-estate/dashboard-thumb.jpg',
    caption: 'Admin Dashboard',
    description: 'Optional longer description that appears in the lightbox'
  },
  // Add more media items...
]
```

### 2. For Competitions

1. Place your media files in the `competitions` folder
2. Create thumbnails for each image (recommended size: 300x300px)
3. Update the `media` array in `src/data/profile.js` for the corresponding competition:

```javascript
media: [
  {
    type: 'certificate',  // Options: 'screenshot', 'image', 'certificate', 'video'
    url: '/media/competitions/olympiad-certificate.jpg',
    thumbnail: '/media/competitions/olympiad-certificate-thumb.jpg',
    caption: 'National Innovation Olympiad Certificate'
  },
  // Add more media items...
]
```

### 3. For Videos

For videos, you have two options:

1. **YouTube/Vimeo Embed** (Recommended):
   - Use the embed URL in the `url` field (e.g., `https://www.youtube.com/embed/YOUR_VIDEO_ID`)
   - Create a thumbnail image and specify it in the `thumbnail` field

2. **Self-hosted Video**:
   - Place your video file in the appropriate folder
   - Use the path to the video file in the `url` field
   - Create a thumbnail image and specify it in the `thumbnail` field

## Recommendations

- **Image Formats**: Use `.jpg` or `.webp` for better compression
- **Thumbnail Size**: 300x300px works well for the gallery grid
- **Full Image Size**: Keep full-size images under 1200px width for performance
- **Video Thumbnails**: Create custom thumbnails that accurately represent the video content
- **File Names**: Use descriptive names with hyphens (e.g., `admin-dashboard.jpg`)
- **File Size**: Compress images to reduce file size and improve loading times 