export const projects = [
  {
    id: 'real-estate-platform',
    title: 'Real Estate Platform',
    description: 'A robust and fully featured real estate listing platform with multilingual support (Arabic, French, English), property search, user engagement tracking, and complete administrative management.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    technologies: ['Django', 'Django REST Framework', 'PostgreSQL', 'JWT', 'Djoser', 'Celery', 'Redis', 'Docker', 'Nginx', 'React', 'TailwindCSS'],
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
    description: 'A comprehensive meal planning application tailored for students with AI-powered recipe generation using a fine-tuned T5 model and personalized recommendations based on nutritional goals.',
    image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    technologies: ['Django', 'Django REST Framework', 'Flutter', 'T5 AI Model', 'PostgreSQL', 'REST API'],
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
    description: 'An integration of YOLO object detection with SLAM-based navigation using ROS2. Intended to help mobile robots perform scene understanding and autonomous navigation in simulated or physical environments.',
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
        caption:  'Sensor Data Visualization'
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
    id: 'arduino-face-recognition',
    title: 'Arduino Face Recognition System',
    description: 'A biometric system using Arduino and camera modules for face recognition — ideal for smart lock or attendance systems. Integrates hardware components with computer vision for secure access control.',
    image: '/media/projects/face-recognition/testing-thumb.jpg',
    technologies: ['Arduino', 'OpenCV', 'C++', 'Serial Communication', 'Face Recognition', 'Embedded Hardware'],
    features: [
      'Real-time face detection and recognition',
      'Low-resource implementation for Arduino',
      'Access control integration',
      'User database management',
      'Biometric security system',
      'Serial communication between components',
      'Energy-efficient operation'
    ],
    github: 'https://github.com/MADMEKk/arduino-face-recognition',
    liveDemo: 'https://github.com/MADMEKk/arduino-face-recognition',
    featured: false,
    media: [
      {
        type: 'screenshot',
        url: '/media/projects/face-recognition/testing.jpg',
        thumbnail: '/media/projects/face-recognition/testing-thumb.jpg',
        caption: 'Face Detection in Action'
      },
      {
        type: 'screenshot',
        url: '/media/projects/face-recognition/testing2.jpg',
        thumbnail: '/media/projects/face-recognition/testing2-thumb.jpg',
        caption: 'Face Detection in Action'
      }
    ]
  },
  {
    id: 'ai-practice',
    title: 'AI Research & Practice',
    description: 'Practice space for foundational AI experiments and deep learning models. Useful for testing ML architectures and training small models for educational or research purposes.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    technologies: ['PyTorch', 'NumPy', 'Neural Networks', 'Deep Learning', 'Algorithm Prototyping'],
    features: [
      'Neural network design experiments',
      'Algorithm prototyping and testing',
      'Educational ML model implementations',
      'Research-oriented AI development',
      'Performance benchmarking',
      'Model architecture exploration',
      'Training pipeline development'
    ],
    github: 'https://github.com/MADMEKk/ai_practice',
    liveDemo: 'https://github.com/MADMEKk/ai_practice',
    featured: false,
    media: [
      {
        type: 'screenshot',
        url: '/media/projects/ai-practice/neural-network.jpg',
        thumbnail: '/media/projects/ai-practice/neural-network-thumb.jpg',
        caption: 'Neural Network Architecture'
      },
      {
        type: 'screenshot',
        url: '/media/projects/ai-practice/training-results.jpg',
        thumbnail: '/media/projects/ai-practice/training-results-thumb.jpg',
        caption: 'Model Training Results'
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
    id: "property-management",
    title: "Property Management System",
    description: "A comprehensive property management platform with web admin panel and mobile app for tenants and property managers.",
    longDescription: `
      This property management system provides a complete solution for property owners and managers to handle their real estate portfolios efficiently. The platform includes modules for tenant management, maintenance requests, payment processing, and property analytics.
      
      The system consists of a Django backend with REST API, a React admin dashboard for property managers, and a Flutter mobile application for tenants and on-site staff.
    `,
    technologies: ["Django", "Django REST Framework", "React", "Redux", "Flutter", "PostgreSQL", "Docker", "Nginx"],
    features: [
      "Property listing and tenant management",
      "Maintenance request tracking",
      "Automated payment processing",
      "Document management system",
      "Analytics dashboard",
      "Mobile app for tenants and managers"
    ],
    github: "https://github.com/yourusername/property-management",
    demo: "https://property-management-demo.example.com",
    image: "/images/projects/property-management.jpg",
    category: "Full Stack"
  },
  {
    id: "face-recognition",
    title: "Face Recognition System",
    description: "A facial recognition system built with Python, OpenCV, and deep learning for secure authentication and attendance tracking.",
    longDescription: `
      This face recognition system uses computer vision and deep learning techniques to identify and verify individuals. It's designed for applications like secure access control, attendance tracking, and personalized user experiences.
      
      The system employs a combination of OpenCV for image processing and a convolutional neural network for face detection and recognition, with high accuracy and performance.
    `,
    technologies: ["Python", "OpenCV", "TensorFlow", "Keras", "Flask", "SQLite"],
    features: [
      "Real-time face detection and recognition",
      "User enrollment and management",
      "Attendance tracking and reporting",
      "Access control integration",
      "Web-based admin interface"
    ],
    github: "https://github.com/yourusername/face-recognition",
    demo: "https://face-recognition-demo.example.com",
    image: "/images/projects/face-recognition.jpg",
    category: "Machine Learning",
    media: [
      {
        type: "image",
        url: "/media/projects/face-recognition/testing.jpg",
        thumbnail: "/media/projects/face-recognition/testing-thumb.jpg",
        caption: "Testing Face Recognition System"
      },
      {
        type: "image",
        url: "/media/projects/face-recognition/testing2.jpg",
        thumbnail: "/media/projects/face-recognition/testing2-thumb.jpg",
        caption: "Face Recognition System Testing Session"
      }
    ]
  },
  {
    id: "data-visualization",
    title: "Data Visualization Dashboard",
    description: "Interactive data visualization dashboard for analyzing and presenting complex datasets with real-time filtering.",
    longDescription: `
      This data visualization dashboard transforms complex datasets into intuitive, interactive visualizations. It enables users to explore data through various chart types, apply filters in real-time, and export insights in multiple formats.
      
      Built with a Python backend for data processing and a modern frontend for visualization, the system handles large datasets efficiently while providing a responsive user experience.
    `,
    technologies: ["Python", "Django", "Pandas", "Matplotlib", "D3.js", "React", "PostgreSQL"],
    features: [
      "Interactive charts and graphs",
      "Real-time data filtering",
      "Custom report generation",
      "Data export in multiple formats",
      "User-defined visualization settings",
      "API integration for live data sources"
    ],
    github: "https://github.com/yourusername/data-visualization",
    demo: "https://data-viz-demo.example.com",
    image: "/images/projects/data-visualization.jpg",
    category: "Data Science"
  },
  {
    id: "mobile-inventory",
    title: "Mobile Inventory Management",
    description: "A Flutter-based inventory management application with barcode scanning and real-time stock updates.",
    longDescription: `
      This mobile inventory management application streamlines inventory tracking for businesses of all sizes. It features barcode scanning for quick product identification, real-time stock updates, and comprehensive reporting.
      
      The app is built with Flutter for cross-platform compatibility and connects to a Django backend for data management and synchronization across multiple devices.
    `,
    technologies: ["Flutter", "Dart", "Django", "REST API", "SQLite", "PostgreSQL"],
    features: [
      "Barcode and QR code scanning",
      "Real-time inventory tracking",
      "Low stock alerts",
      "Purchase order management",
      "Sales and inventory reports",
      "Multi-location support",
      "Offline functionality with sync"
    ],
    github: "https://github.com/yourusername/mobile-inventory",
    demo: "https://inventory-app-demo.example.com",
    image: "/images/projects/mobile-inventory.jpg",
    category: "Mobile Development"
  },
  {
    id: "arduino-projects",
    title: "Arduino IoT Projects",
    description: "Collection of Arduino-based IoT projects including home automation, environmental monitoring, and gesture control systems.",
    longDescription: `
      This collection showcases various Arduino-based IoT projects I've developed, ranging from home automation systems to environmental monitoring solutions and gesture control interfaces.
      
      Each project demonstrates different aspects of embedded systems development, sensor integration, and IoT connectivity, with practical applications in everyday scenarios.
    `,
    technologies: ["Arduino", "C++", "IoT", "Sensors", "Bluetooth", "WiFi", "MQTT"],
    features: [
      "Home automation controls",
      "Environmental monitoring systems",
      "Gesture recognition interfaces",
      "Remote control applications",
      "Data logging and visualization",
      "Integration with mobile apps"
    ],
    github: "https://github.com/yourusername/arduino-projects",
    image: "/images/projects/arduino-projects.jpg",
    category: "IoT & Embedded Systems",
    media: [
      {
        type: "video",
        url: "/media/projects/arduino/hand-recognition.mp4",
        thumbnail: "/media/projects/arduino/hand-recognition-thumb.jpg",
        caption: "Testing MediaPipe Hand Recognition with Arduino and LED"
      }
    ]
  },
  {
    id: "smart-farming",
    title: "Smart Farming IoT System",
    description: "IoT-based smart farming system with sensors for monitoring soil conditions, automated irrigation, and crop health analysis.",
    longDescription: `
      This smart farming system leverages IoT technology to optimize agricultural practices through real-time monitoring and automation. It includes a network of sensors that collect data on soil moisture, temperature, humidity, and light levels.
      
      The system uses this data to automate irrigation, provide insights for crop management, and predict optimal conditions for different crops, helping farmers increase yield while conserving resources.
    `,
    technologies: ["Raspberry Pi", "Arduino", "Python", "IoT Sensors", "Machine Learning", "Solar Power", "Web Dashboard"],
    features: [
      "Real-time soil condition monitoring",
      "Automated irrigation system",
      "Weather data integration",
      "Crop health analysis",
      "Energy-efficient solar power",
      "Mobile alerts and notifications",
      "Data-driven farming recommendations"
    ],
    github: "https://github.com/yourusername/smart-farming",
    image: "/images/projects/smart-farming.jpg",
    category: "IoT & Embedded Systems",
    media: [
      {
        type: "image",
        url: "/media/projects/smart-farming/sensors-prep.jpg",
        thumbnail: "/media/projects/smart-farming/sensors-prep-thumb.jpg",
        caption: "Smart Farming IoT Sensors Preparation"
      },
      {
        type: "image",
        url: "/media/projects/smart-farming/sensors-prep2.jpg",
        thumbnail: "/media/projects/smart-farming/sensors-prep2-thumb.jpg",
        caption: "IoT Sensors Setup for Smart Farming Project"
      }
    ]
  }
]; 