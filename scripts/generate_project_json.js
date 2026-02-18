const fs = require('fs');
const path = require('path');
const url = require('url');

const directory = "c:\\Users\\mmad\\Desktop\\portfokio\\My_portfolio\\public\\media\\projects\\multistore_platform";

try {
    const fileNames = fs.readdirSync(directory);
    const pngFiles = fileNames.filter(f => f.endsWith('.png'));

    const mediaItems = pngFiles.map(f => {
        // Manually encode spaces and special chars if needed, or use encodeURIComponent
        // but encodeURIComponent encodes everything including / if full path.
        // here f is just filename.
        const encodedName = encodeURIComponent(f);
        const itemUrl = `/media/projects/multistore_platform/${encodedName}`;

        return {
            type: "screenshot",
            url: itemUrl,
            thumbnail: itemUrl,
            caption: `Dashboard View`
        };
    });

    const projectData = {
        id: "enterprise-marketplace",
        title: "Enterprise Multi-Vendor Marketplace Platform",
        description: "Shoplify is a scalable, full-featured multi-vendor e-commerce platform designed to empower entrepreneurs to launch their own online stores within a unified marketplace.",
        longDescription: `Shoplify is a scalable, full-featured multi-vendor e-commerce platform designed to empower entrepreneurs to launch their own online stores within a unified marketplace. Built with a robust Django backend and a high-performance React frontend, the platform offers a seamless experience for vendors to manage products, orders, and store designs, while providing customers with a diverse and secure shopping environment.

Key Features:
• Advanced Vendor Dashboard: A comprehensive control panel for vendors to manage their entire business lifecycle.
• Drag-and-Drop Store Builder: A sophisticated interface allowing vendors to customize their storefronts.
• Tiered Subscription System: Enforces usage limits based on plan tiers (products, images, analytics).
• Global Reach & Localization: Fully localized for Arabic and French markets with RTL support.
• Integrated Marketing Suite: Support for Facebook, TikTok, Snapchat pixels and WhatsApp.
• Real-Time Analytics: Interactive dashboards providing deep insights into sales and engagement.

Technical Architecture:
• Backend: Django, DRF, PostgreSQL, Redis, Celery (Async tasks)
• Frontend: React, Tailwind CSS, Radix UI, dnd-kit, Chart.js
• DevOps: Docker, Nginx, Gunicorn
• Security: JWT authentication with RBAC`,
        image: mediaItems.length > 0 ? mediaItems[0].url : "",
        technologies: ["Django", "React", "PostgreSQL", "Docker", "Redis", "Celery", "Tailwind CSS", "Nginx"],
        features: [
            "Advanced Vendor Dashboard",
            "Drag-and-Drop Store Builder",
            "Tiered Subscription System",
            "Global Reach & Localization",
            "Integrated Marketing Suite",
            "Real-Time Analytics"
        ],
        github: "#",
        liveDemo: "#",
        featured: true,
        media: mediaItems
    };

    console.log(JSON.stringify(projectData, null, 2));

} catch (err) {
    console.error("Error:", err);
}
