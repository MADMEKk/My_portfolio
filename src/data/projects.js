export const projects = [
  {
    id: 'enterprise-marketplace',
    title: 'Enterprise Multi-Vendor Marketplace Platform',
    description: 'Shoplify is a scalable, full-featured multi-vendor e-commerce platform designed to empower entrepreneurs to launch their own online stores within a unified marketplace.',
    longDescription: `Shoplify is a scalable, full-featured multi-vendor e-commerce platform designed to empower entrepreneurs to launch their own online stores within a unified marketplace. Built with a robust Django backend and a high-performance React frontend, the platform offers a seamless experience for vendors to manage products, orders, and store designs, while providing customers with a diverse and secure shopping environment.

Key Features:
• Advanced Vendor Dashboard: A comprehensive control panel for vendors to manage their entire business lifecycle, including product inventory, order processing, and payout requests.
• Drag-and-Drop Store Builder: A sophisticated, user-friendly interface allowing vendors to customize their storefronts. Features include drag-and-drop carousels, customizable product sections, and video integration, all without writing a single line of code.
• Tiered Subscription System: A complex subscription management engine that enforces usage limits based on plan tiers. It governs product counts, image uploads, and access to premium features like advanced analytics, ensuring a scalable business model for the platform owner.
• Global Reach & Localization: Fully localized for Arabic and French markets, with RTL (Right-to-Left) support, multi-currency capabilities, and region-specific shipping configurations.
• Integrated Marketing Suite: Built-in support for major marketing tools, including major social media pixels and direct WhatsApp integration.
• Real-Time Analytics: Interactive dashboards providing deep insights into sales performance, revenue trends, and visitor engagement.`,
    image: '/media/projects/multistore_platform/Capture%20d%27%C3%A9cran%202026-02-18%20011754.png',
    technologies: ['Django', 'React', 'PostgreSQL', 'Docker', 'Redis', 'Celery', 'Tailwind CSS', 'Nginx', 'Radix UI'],
    features: [
      'Advanced Vendor Dashboard with Role-Based Access',
      'Drag-and-Drop Store Builder',
      'Tiered Subscription System with Usage Limits',
      'Global Reach & Localization (Arabic/French/RTL)',
      'Integrated Marketing Suite (Pixels, WhatsApp)',
      'Real-Time Analytics & Reporting'
    ],
    github: '#', // Private or to be added
    liveDemo: '#', // To be added
    featured: true,
    media: [
      {
        type: 'screenshot',
        url: '/media/projects/multistore_platform/Capture%20d%27%C3%A9cran%202026-02-18%20011754.png',
        thumbnail: '/media/projects/multistore_platform/Capture%20d%27%C3%A9cran%202026-02-18%20011754.png',
        caption: 'Dashboard Overview'
      },
      {
        type: 'screenshot',
        url: '/media/projects/multistore_platform/Capture%20d%27%C3%A9cran%202026-02-18%20011842.png',
        thumbnail: '/media/projects/multistore_platform/Capture%20d%27%C3%A9cran%202026-02-18%20011842.png',
        caption: 'Analytics Dashboard'
      },
      {
        type: 'screenshot',
        url: '/media/projects/multistore_platform/Capture%20d%27%C3%A9cran%202026-02-18%20011925.png',
        thumbnail: '/media/projects/multistore_platform/Capture%20d%27%C3%A9cran%202026-02-18%20011925.png',
        caption: 'Product Management'
      },
      {
        type: 'screenshot',
        url: '/media/projects/multistore_platform/Capture%20d%27%C3%A9cran%202026-02-18%20011941.png',
        thumbnail: '/media/projects/multistore_platform/Capture%20d%27%C3%A9cran%202026-02-18%20011941.png',
        caption: 'Order Management'
      },
      {
        type: 'screenshot',
        url: '/media/projects/multistore_platform/Capture%20d%27%C3%A9cran%202026-02-18%20012011.png',
        thumbnail: '/media/projects/multistore_platform/Capture%20d%27%C3%A9cran%202026-02-18%20012011.png',
        caption: 'Store Builder Interface'
      },
      {
        type: 'screenshot',
        url: '/media/projects/multistore_platform/Capture%20d%27%C3%A9cran%202026-02-18%20012025.png',
        thumbnail: '/media/projects/multistore_platform/Capture%20d%27%C3%A9cran%202026-02-18%20012025.png',
        caption: 'Theme Customization'
      },
      {
        type: 'screenshot',
        url: '/media/projects/multistore_platform/Capture%20d%27%C3%A9cran%202026-02-18%20012048.png',
        thumbnail: '/media/projects/multistore_platform/Capture%20d%27%C3%A9cran%202026-02-18%20012048.png',
        caption: 'Subscription Plans'
      },
      {
        type: 'screenshot',
        url: '/media/projects/multistore_platform/Capture%20d%27%C3%A9cran%202026-02-18%20012102.png',
        thumbnail: '/media/projects/multistore_platform/Capture%20d%27%C3%A9cran%202026-02-18%20012102.png',
        caption: 'Marketing Tools'
      },
      {
        type: 'screenshot',
        url: '/media/projects/multistore_platform/Capture%20d%27%C3%A9cran%202026-02-18%20012119.png',
        thumbnail: '/media/projects/multistore_platform/Capture%20d%27%C3%A9cran%202026-02-18%20012119.png',
        caption: 'Pixel Integration'
      },
      {
        type: 'screenshot',
        url: '/media/projects/multistore_platform/Capture%20d%27%C3%A9cran%202026-02-18%20012136.png',
        thumbnail: '/media/projects/multistore_platform/Capture%20d%27%C3%A9cran%202026-02-18%20012136.png',
        caption: 'Customer Support'
      },
      {
        type: 'screenshot',
        url: '/media/projects/multistore_platform/Capture%20d%27%C3%A9cran%202026-02-18%20012159.png',
        thumbnail: '/media/projects/multistore_platform/Capture%20d%27%C3%A9cran%202026-02-18%20012159.png',
        caption: 'Vendor Settings'
      },
      {
        type: 'screenshot',
        url: '/media/projects/multistore_platform/Capture%20d%27%C3%A9cran%202026-02-18%20012212.png',
        thumbnail: '/media/projects/multistore_platform/Capture%20d%27%C3%A9cran%202026-02-18%20012212.png',
        caption: 'Payout Requests'
      },
      {
        type: 'screenshot',
        url: '/media/projects/multistore_platform/Capture%20d%27%C3%A9cran%202026-02-18%20012226.png',
        thumbnail: '/media/projects/multistore_platform/Capture%20d%27%C3%A9cran%202026-02-18%20012226.png',
        caption: 'Transaction History'
      },
      {
        type: 'screenshot',
        url: '/media/projects/multistore_platform/Capture%20d%27%C3%A9cran%202026-02-18%20012245.png',
        thumbnail: '/media/projects/multistore_platform/Capture%20d%27%C3%A9cran%202026-02-18%20012245.png',
        caption: 'Storefront Preview'
      },
      {
        type: 'screenshot',
        url: '/media/projects/multistore_platform/Capture%20d%27%C3%A9cran%202026-02-18%20012303.png',
        thumbnail: '/media/projects/multistore_platform/Capture%20d%27%C3%A9cran%202026-02-18%20012303.png',
        caption: 'Mobile Responsiveness'
      }
    ]
  },
  {
    id: 'real-estate-platform',
    title: 'Real Estate Platform',
    description: 'A production-grade real estate platform handling thousands of listings. Built with Django & React, it features a custom audit logging system, Celery for background image processing, and full multilingual support (Arabic/French/English).',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    technologies: ['Django', 'DRF', 'PostgreSQL', 'Docker', 'Redis', 'Celery', 'React', 'Nginx'],
    features: [
      'JWT & social media authentication',
      'User registration with custom code-based email activation',
      'Amenity tagging, image/video upload with watermarking',
      'Redis-based caching and Celery task queue',
      'Full Algeria city/state support for localized listings',
      'Role-based access control & admin panel endpoints',
      'Multilingual functionality (Arabic, French, English)',
      'SEO optimization with server-side rendering'
    ],
    github: 'https://github.com/MADMEKk/real-estate-backend',
    liveDemo: 'https://github.com/MADMEKk/Real_Estate_Front_end',
    featured: true,
    media: [


      {
        type: 'screenshot',
        url: '/media/projects/real-estate/Screenshot 2025-06-15 at 14-53-14 Aures REAL ESTATE.png',
        thumbnail: '/media/projects/real-estate/thumbs/Screenshot 2025-06-15 at 14-53-14 Aures REAL ESTATE-thumb.jpg',
        caption: 'Screenshot 2025-06-15 at 14-53-14 Aures REAL ESTATE'
      },
      {
        type: 'screenshot',
        url: '/media/projects/real-estate/Screenshot 2025-06-15 at 14-53-46 Aures REAL ESTATE.png',
        thumbnail: '/media/projects/real-estate/thumbs/Screenshot 2025-06-15 at 14-53-46 Aures REAL ESTATE-thumb.jpg',
        caption: 'Screenshot 2025-06-15 at 14-53-46 Aures REAL ESTATE'
      },
      {
        type: 'screenshot',
        url: '/media/projects/real-estate/Screenshot 2025-06-15 at 14-54-08 Aures REAL ESTATE.png',
        thumbnail: '/media/projects/real-estate/thumbs/Screenshot 2025-06-15 at 14-54-08 Aures REAL ESTATE-thumb.jpg',
        caption: 'Screenshot 2025-06-15 at 14-54-08 Aures REAL ESTATE'
      },
      {
        type: 'screenshot',
        url: '/media/projects/real-estate/Screenshot 2025-06-15 at 15-55-05 Aures REAL ESTATE.png',
        thumbnail: '/media/projects/real-estate/thumbs/Screenshot 2025-06-15 at 15-55-05 Aures REAL ESTATE-thumb.jpg',
        caption: 'Screenshot 2025-06-15 at 15-55-05 Aures REAL ESTATE'
      },
      {
        type: 'screenshot',
        url: '/media/projects/real-estate/Screenshot 2025-06-15 at 16-49-13 Aures REAL ESTATE.png',
        thumbnail: '/media/projects/real-estate/thumbs/Screenshot 2025-06-15 at 16-49-13 Aures REAL ESTATE-thumb.jpg',
        caption: 'Screenshot 2025-06-15 at 16-49-13 Aures REAL ESTATE'
      },
      {
        type: 'screenshot',
        url: '/media/projects/real-estate/Screenshot 2025-06-15 at 17-21-54 Aures REAL ESTATE.png',
        thumbnail: '/media/projects/real-estate/thumbs/Screenshot 2025-06-15 at 17-21-54 Aures REAL ESTATE-thumb.jpg',
        caption: 'Screenshot 2025-06-15 at 17-21-54 Aures REAL ESTATE'
      },
      {
        type: 'screenshot',
        url: '/media/projects/real-estate/Screenshot 2025-06-15 at 17-27-06 Aures REAL ESTATE.png',
        thumbnail: '/media/projects/real-estate/thumbs/Screenshot 2025-06-15 at 17-27-06 Aures REAL ESTATE-thumb.jpg',
        caption: 'Screenshot 2025-06-15 at 17-27-06 Aures REAL ESTATE'
      },
      {
        type: 'screenshot',
        url: '/media/projects/real-estate/Screenshot 2025-06-15 at 17-27-16 Aures REAL ESTATE.png',
        thumbnail: '/media/projects/real-estate/thumbs/Screenshot 2025-06-15 at 17-27-16 Aures REAL ESTATE-thumb.jpg',
        caption: 'Screenshot 2025-06-15 at 17-27-16 Aures REAL ESTATE'
      }
    ]
  },
  {
    id: 'meal-planning-system',
    title: 'Smart Meal Planning System',
    description: 'Smart nutrition platform that reduced planning time by 80% for students. Integrated a fine-tuned T5 Transformer model to generate recipes from leftover ingredients, all wrapped in a smooth Flutter mobile experience.',
    image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    technologies: ['Django', 'Flutter', 'AI (T5 Transformer)', 'Docker', 'PostgreSQL'],
    features: [
      'AI-Powered Recipe Generator (T5-based)',
      'User dietary profile matching',
      'Nutrition-based meal suggestions (protein, fat, energy)',
      'CRUD operations for meals/schedules',
      'Weekly meal tracking',
      'Mobile app with Flutter frontend',
      'Personalized dietary recommendations'
    ],
    github: 'https://github.com/MADMEKk/meal_plan_backend',
    liveDemo: 'https://github.com/MADMEKk/meal_planner',
    featured: true,
    media: [
      {
        type: 'screenshot',
        url: '/media/projects/meal-planner/mobile-ui.jpg',
        thumbnail: '/media/projects/meal-planner/mobile-ui-thumb.jpg',
        caption: 'Mobile App Interface'
      },
      {
        type: 'screenshot',
        url: '/media/projects/meal-planner/recipe-generation.jpg',
        thumbnail: '/media/projects/meal-planner/recipe-generation-thumb.jpg',
        caption: 'AI Recipe Generation'
      }
    ]
  },
  // {
  //   id: 'multi-robot-exploration',
  //   title: 'Multi-Robot Exploration with MAPPO',
  //   description: 'Implementation of Multi-Agent Proximal Policy Optimization (MAPPO) in a custom Python + PettingZoo maze environment to simulate cooperative exploration by multiple robots. Designed to be extensible to ROS2/Gazebo.',
  //   image: 'https://images.unsplash.com/photo-1649180556628-9ba704115795?q=80&w=862&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //   technologies: ['Python', 'PyTorch', 'PettingZoo', 'MAPPO', 'Reinforcement Learning', 'Multi-Agent Systems'],
  //   features: [
  //     'Multi-agent reinforcement learning implementation',
  //     'MAPPO (Multi-Agent Proximal Policy Optimization) algorithm',
  //     'Custom maze environment in PettingZoo',
  //     'Cooperative robot exploration simulation',
  //     'Extensible to ROS2/Gazebo integration',
  //     'Performance metrics and analysis',
  //     'Training visualization and data collection'
  //   ],
  //   github: 'https://github.com/MADMEKk/multi-robot-exploration-rl-master_mappo',
  //   liveDemo: 'https://github.com/MADMEKk/multi-robot-exploration-rl-master_mappo',
  //   featured: true,
  //   media: [
  //     {
  //       type: 'screenshot',
  //       url: '/media/projects/multi-robot/simulation.jpg',
  //       thumbnail: '/media/projects/multi-robot/simulation-thumb.jpg',
  //       caption: 'Multi-Agent Simulation Environment'
  //     },
  //     {
  //       type: 'screenshot',
  //       url: '/media/projects/multi-robot/training-graph.jpg',
  //       thumbnail: '/media/projects/multi-robot/training-graph-thumb.jpg',
  //       caption: 'Training Performance Metrics'
  //     },
  //     {
  //       type: 'video',
  //       url: 'https://www.youtube.com/embed/your-robot-video-id',
  //       thumbnail: '/media/projects/multi-robot/video-thumb.jpg',
  //       caption: 'Simulation Demo'
  //     }
  //   ]
  // },
  {
    id: 'yolo-slam-bot',
    title: 'YOLO SLAM Robot',
    description: 'Autonomous navigation robot capable of mapping unknown environments (SLAM) and detecting objects (YOLO) in real-time. Bridges the gap between ROS2 robotics logic and computer vision.',
    image: '/media/projects/yolo-slam/Screenshot from 2025-06-13 14-52-33.png',
    technologies: ['Python', 'ROS2', 'YOLO', 'SLAM', 'Computer Vision', 'Sensor Fusion'],
    features: [
      'Real-time object detection using YOLO',
      'SLAM implementation for mapping and localization',
      'Autonomous navigation capabilities',
      'Sensor fusion for improved accuracy',
      'Scene understanding for robotic applications',
      'Visualization tools for mapping results',
      'Modular architecture for easy extension'
    ],
    github: 'https://github.com/MADMEKk/yolo_slam_bot',
    liveDemo: 'https://github.com/MADMEKk/yolo_slam_bot',
    featured: false,
    media: [
      {
        type: 'screenshot',
        url: '/media/projects/yolo-slam/Screenshot from 2025-06-13 14-52-33.png',
        thumbnail: '/media/projects/yolo-slam/thumbs/Screenshot from 2025-06-13 14-52-33-thumb.jpg',
        caption: 'YOLO Object Detection'
      },
      {
        type: 'screenshot',
        url: '/media/projects/yolo-slam/Screenshot from 2025-06-13 14-51-34.png',
        thumbnail: '/media/projects/yolo-slam/thumbs/Screenshot from 2025-06-13 14-51-34-thumb.jpg',
        caption: 'SLAM Mapping Results'
      },
      {
        type: 'screenshot',
        url: '/media/projects/yolo-slam/Screenshot from 2025-06-13 14-51-34.png',
        thumbnail: '/media/projects/yolo-slam/thumbs/Screenshot from 2025-06-13 14-51-34-thumb.jpg',
        caption: 'SLAM Mapping Results'
      }  // {
      //   id: 'multi-robot-exploration',
      //   title: 'Multi-Robot Exploration with MAPPO',
      //   description: 'Implementation of Multi-Agent Proximal Policy Optimization (MAPPO) in a custom Python + PettingZoo maze environment to simulate cooperative exploration by multiple robots. Designed to be extensible to ROS2/Gazebo.',
      //   image: 'https://images.unsplash.com/photo-1649180556628-9ba704115795?q=80&w=862&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      //   technologies: ['Python', 'PyTorch', 'PettingZoo', 'MAPPO', 'Reinforcement Learning', 'Multi-Agent Systems'],
      //   features: [
      //     'Multi-agent reinforcement learning implementation',
      //     'MAPPO (Multi-Agent Proximal Policy Optimization) algorithm',
      //     'Custom maze environment in PettingZoo',
      //     'Cooperative robot exploration simulation',
      //     'Extensible to ROS2/Gazebo integration',
      //     'Performance metrics and analysis',
      //     'Training visualization and data collection'
      //   ],
      //   github: 'https://github.com/MADMEKk/multi-robot-exploration-rl-master_mappo',
      //   liveDemo: 'https://github.com/MADMEKk/multi-robot-exploration-rl-master_mappo',
      //   featured: true,
      //   media: [
      //     {
      //       type: 'screenshot',
      //       url: '/media/projects/multi-robot/simulation.jpg',
      //       thumbnail: '/media/projects/multi-robot/simulation-thumb.jpg',
      //       caption: 'Multi-Agent Simulation Environment'
      //     },
      //     {
      //       type: 'screenshot',
      //       url: '/media/projects/multi-robot/training-graph.jpg',
      //       thumbnail: '/media/projects/multi-robot/training-graph-thumb.jpg',
      //       caption: 'Training Performance Metrics'
      //     },
      //     {
      //       type: 'video',
      //       url: 'https://www.youtube.com/embed/your-robot-video-id',
      //       thumbnail: '/media/projects/multi-robot/video-thumb.jpg',
      //       caption: 'Simulation Demo'
      //  // {
      //   id: 'multi-robot-exploration',
      //   title: 'Multi-Robot Exploration with MAPPO',
      //   description: 'Implementation of Multi-Agent Proximal Policy Optimization (MAPPO) in a custom Python + PettingZoo maze environment to simulate cooperative exploration by multiple robots. Designed to be extensible to ROS2/Gazebo.',
      //   image: 'https://images.unsplash.com/photo-1649180556628-9ba704115795?q=80&w=862&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      //   technologies: ['Python', 'PyTorch', 'PettingZoo', 'MAPPO', 'Reinforcement Learning', 'Multi-Agent Systems'],
      //   features: [
      //     'Multi-agent reinforcement learning implementation',
      //     'MAPPO (Multi-Agent Proximal Policy Optimization) algorithm',
      //     'Custom maze environment in PettingZoo',
      //     'Cooperative robot exploration simulation',
      //     'Extensible to ROS2/Gazebo integration',
      //     'Performance metrics and analysis',
      //     'Training visualization and data collection'
      //   ],
      //   github: 'https://github.com/MADMEKk/multi-robot-exploration-rl-master_mappo',
      //   liveDemo: 'https://github.com/MADMEKk/multi-robot-exploration-rl-master_mappo',
      //   featured: true,
      //   media: [
      //     {
      //       type: 'screenshot',
      //       url: '/media/projects/multi-robot/simulation.jpg',
      //       thumbnail: '/media/projects/multi-robot/simulation-thumb.jpg',
      //       caption: 'Multi-Agent Simulation Environment'
      //     },
      //     {
      //       type: 'screenshot',
      //       url: '/media/projects/multi-robot/training-graph.jpg',
      //       thumbnail: '/media/projects/multi-robot/training-graph-thumb.jpg',
      //       caption: 'Training Performance Metrics'
      //     },
      //     {
      //       type: 'video',
      //       url: 'https://www.youtube.com/embed/your-robot-video-id',
      //       thumbnail: '/media/projects/multi-robot/video-thumb.jpg',
      //       caption: 'Simulation Demo'
      //     }
      //   ]
      // },     }
      //   ]
      // },


    ]
  },
  {
    id: 'smart-farming-dashboard',
    title: 'Smart Farming Dashboard',
    description: 'Admin dashboard for managing users, project submissions, evaluations, and role-based interactions for a smart farming platform that won 2nd place at the Oran hackathon, combining IoT and AI technologies.',
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    technologies: ['Django', 'React', 'IoT', 'AI', 'Data Analytics', 'Role-based Access Control'],
    features: [
      'Real-time monitoring of farm conditions',
      'IoT sensor integration and data collection',
      'Analytics and reporting tools',
      'Automated alerts and notifications',
      'Resource management optimization',
      'User management with role-based access',
      'Project submission and evaluation system',
      'Mobile-responsive design'
    ],
    github: 'https://github.com/Othmane-Menad/dashboard',
    liveDemo: 'https://github.com/Othmane-Menad/dashboard',
    featured: false,
    media: [

      {
        type: 'screenshot',
        url: '/media/projects/smart-farming/sensors-prep2.jpg',
        thumbnail: '/media/projects/smart-farming/sensors-prep2-thumb.jpg',
        caption: 'Sensor Data Visualization'
      },
      {
        type: 'screenshot',
        url: '/media/projects/smart-farming/1.jpg',
        thumbnail: '/media/projects/smart-farming/1-thumb.jpg',
        caption: 'Sensor Data Visualization'
      },
      {
        type: 'screenshot',
        url: '/media/projects/smart-farming/2.jpg',
        thumbnail: '/media/projects/smart-farming/2-thumb.jpg',
        caption: 'Sensor Data Visualization'
      },
      {
        type: 'screenshot',
        url: '/media/projects/smart-farming/3.jpg',
        thumbnail: '/media/projects/smart-farming/3-thumb.jpg',
        caption: 'Sensor Data Visualization'
      },
      {
        type: 'screenshot',
        url: '/media/projects/smart-farming/4.jpg',
        thumbnail: '/media/projects/smart-farming/4-thumb.jpg',
        caption: 'Sensor Data Visualization'
      }

    ]
  },
  {
    id: 'fire-detection-system',
    title: 'Fire Detection System',
    description: 'A comprehensive fire detection platform with both hardware and software components. The backend supports alert notification logic, user/device registration, and location tracking, while the hardware integrates flame and gas sensors.',
    image: '/media/projects/fire-detection/1_HVm63Me_kPRNy0vxekCabw.gif',
    technologies: ['Django', 'Arduino', 'Embedded Sensors', 'Computer Vision', 'Geolocation', 'IoT'],
    features: [
      'Real-time fire detection using sensors and computer vision',
      'Alert system for immediate notification',
      'User and device registration',
      'Location tracking for emergency response',
      'Integration with surveillance cameras',
      'Mobile app for remote monitoring',
      'Historical data analysis and reporting'
    ],
    github: 'https://github.com/MADMEKk/fire-detection-system',
    liveDemo: 'https://github.com/MADMEKk/fire_detection_backend_hackathon_preparation',
    featured: false,
    media: [
      {
        type: 'screenshot',
        url: '/media/projects/fire-detection/alert-system.jpg',
        thumbnail: '/media/projects/fire-detection/alert-system-thumb.jpg',
        caption: 'Alert System Interface'
      },
      {
        type: 'image',
        url: '/media/projects/fire-detection/hardware-setup.jpg',
        thumbnail: '/media/projects/fire-detection/hardware-setup-thumb.jpg',
        caption: 'Hardware Sensor Setup'
      }
    ]
  },
  {
    id: 'student-meal-prediction',
    title: 'Student Meal Prediction System',
    description: 'A Django-powered predictive system for forecasting student meal demand in university cafeterias. Helps reduce waste by adjusting food preparation based on real-time and historical data. Won 5th place at El Bayadh hackathon.',
    image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    technologies: ['Python', 'Django', 'Machine Learning', 'Data Analysis', 'Time-series Analysis', 'Predictive Modeling'],
    features: [
      'Attendance prediction using historical data',
      'Resource optimization for meal preparation',
      'Dashboard for visualizing predictions',
      'Automated reporting system',
      'Integration with student management systems',
      'Waste reduction through accurate forecasting',
      'Continuous model improvement with new data'
    ],
    github: 'https://github.com/MADMEKk/prediction_app_for_students_resturation',
    liveDemo: 'https://github.com/MADMEKk/prediction_app_for_students_resturation',
    featured: false,
    media: [
      {
        type: 'screenshot',
        url: '/media/projects/meal-prediction/prediction-dashboard.jpg',
        thumbnail: '/media/projects/meal-prediction/prediction-dashboard-thumb.jpg',
        caption: 'Prediction Dashboard'
      },
      {
        type: 'screenshot',
        url: '/media/projects/meal-prediction/data-analysis.jpg',
        thumbnail: '/media/projects/meal-prediction/data-analysis-thumb.jpg',
        caption: 'Data Analysis Charts'
      }
    ]
  },


  {
    id: 'hackathon-projects',
    title: 'Hackathon Portfolio',
    description: 'Collection of award-winning hackathon projects showcasing rapid prototyping, teamwork, and creative problem-solving skills. Includes projects that won 2nd place nationally and multiple regional awards.',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    technologies: ['Rapid Prototyping', 'Team Collaboration', 'Various Tech Stacks', 'Pitch Preparation', 'Problem Solving'],
    features: [
      'El Bayadh: Student meal prediction system – 5th place',
      'Oran: Smart farming IoT + AI – 2nd place',
      'Laghouat: Role-based dashboard system – 4th place',
      'Olympiad: Advanced smart farming (Regional 1st / National 2nd)',
      'Creative solutions to real-world problems',
      'Rapid development under time constraints',
      'Effective team collaboration'
    ],
    github: 'https://github.com/MADMEKk/hackathon',
    liveDemo: 'https://github.com/Othmane-Menad/Laghouat_hackaton_progres',
    featured: false,
    media: [
      {
        type: 'image',
        url: '/media/projects/hackathon/team-photo.jpg',
        thumbnail: '/media/projects/hackathon/team-photo-thumb.jpg',
        caption: 'Hackathon Team Photo'
      },
      {
        type: 'certificate',
        url: '/media/projects/hackathon/award-certificate.jpg',
        thumbnail: '/media/projects/hackathon/award-certificate-thumb.jpg',
        caption: 'Award Certificate'
      },
      {
        type: 'image',
        url: '/media/projects/hackathon/presentation.jpg',
        thumbnail: '/media/projects/hackathon/presentation-thumb.jpg',
        caption: 'Project Presentation'
      }
    ]
  },
  {
    id: 'wall-coloring-app',
    title: 'AR Wall Coloring App',
    description: 'Real-time augmented reality tool allowing users to visualize paint colors on their walls. Uses AI segmentation for precise edge detection and Flutter for a cross-platform experience.',
    image: '/media/projects/wall-coloring/wall-1.jpg',
    technologies: ['Django', 'Open Source Segmentation Model', 'Flutter', 'Computer Vision', 'Augmented Reality', 'Rest API'],
    features: [
      'Real-time wall segmentation and masking',
      'Realistic color overlay rendering',
      'Cross-platform support (Web, IOS, Android)',
      'High-performance backend for model inference',
      'Intuitive touch interfaces for color selection'
    ],
    github: '', // Private Repository
    liveDemo: '',
    featured: true,
    media: [
      { type: 'screenshot', url: '/media/projects/wall-coloring/wall-1.jpg', caption: 'Application Home Screen' },
      { type: 'screenshot', url: '/media/projects/wall-coloring/wall-2.jpg', caption: 'Wall Segmentation in Process' },
      { type: 'screenshot', url: '/media/projects/wall-coloring/wall-3.jpg', caption: 'Color Selection UI' },
      { type: 'screenshot', url: '/media/projects/wall-coloring/wall-4.jpg', caption: 'Masking Detail View' },
      { type: 'screenshot', url: '/media/projects/wall-coloring/wall-5.jpg', caption: 'Model Inference Feedback' },
      { type: 'screenshot', url: '/media/projects/wall-coloring/wall-6.jpg', caption: 'Final Rendering Result' },
      { type: 'screenshot', url: '/media/projects/wall-coloring/wall-7.jpg', caption: 'Multi-Room Comparison' },
      { type: 'screenshot', url: '/media/projects/wall-coloring/wall-8.jpg', caption: 'Mobile UI Navigation' },
      { type: 'screenshot', url: '/media/projects/wall-coloring/wall-9.jpg', caption: 'Cross-Platform View' }
    ]
  },
  {
    id: 'dental-clinic-software',
    title: 'Dental Clinic Management System',
    description: 'A robust, offline-first practice management solution designed for dental clinics. Features fault-tolerant LAN synchronization between doctors and receptionists without requiring internet access.',
    image: '/images/placeholders/dental-app.jpg',
    technologies: ['Flutter', 'Dart', 'Local Database', 'LAN Networking', 'Data Synchronization', 'Desktop App'],
    features: [
      'Fully offline-capable architecture',
      'Real-time LAN data synchronization',
      'Patient electronic health records (EHR)',
      'Visual appointment scheduling',
      'Role-based access (Doctor vs Receptionist)',
      'Financial reporting and billing'
    ],
    github: '', // Private Repository
    liveDemo: '',
    featured: true,
    media: [] // User to add screenshots later
  }
]; 