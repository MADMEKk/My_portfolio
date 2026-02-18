import os
import urllib.parse
import json

directory = r"c:\Users\mmad\Desktop\portfokio\My_portfolio\public\media\projects\multistore_platform"
files = sorted([f for f in os.listdir(directory) if f.endswith('.png')])

media_items = []
for f in files:
    # URL encode the filename
    encoded_name = urllib.parse.quote(f)
    url = f"/media/projects/multistore_platform/{encoded_name}"
    media_items.append({
        "type": "screenshot",
        "url": url,
        "thumbnail": url, # Using same for thumbnail for now
        "caption": f"Dashboard View - {f.split(' ')[-1].replace('.png','')}" # Simple caption
    })

project_data = {
    "id": "enterprise-marketplace",
    "title": "Enterprise Multi-Vendor Marketplace Platform",
    "description": "Shoplify is a scalable, full-featured multi-vendor e-commerce platform designed to empower entrepreneurs to launch their own online stores within a unified marketplace.",
    "longDescription": """Shoplify is a scalable, full-featured multi-vendor e-commerce platform designed to empower entrepreneurs to launch their own online stores within a unified marketplace. Built with a robust Django backend and a high-performance React frontend, the platform offers a seamless experience for vendors to manage products, orders, and store designs, while providing customers with a diverse and secure shopping environment.

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
• Security: JWT authentication with RBAC""",
    "image": media_items[0]["url"] if media_items else "",
    "technologies": ["Django", "React", "PostgreSQL", "Docker", "Redis", "Celery", "Tailwind CSS", "Nginx"],
    "features": [
        "Advanced Vendor Dashboard",
        "Drag-and-Drop Store Builder",
        "Tiered Subscription System",
        "Global Reach & Localization",
        "Integrated Marketing Suite",
        "Real-Time Analytics"
    ],
    "github": "#",
    "liveDemo": "#",
    "featured": True,
    "media": media_items
}

print(json.dumps(project_data, indent=2))
