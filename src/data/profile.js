export const profile = {
  name: "Aladine",
  role: "Full-Stack Engineer & AI Specialist",
  bio: "I build scalable full-stack systems and experiment with AI agents. Winner of national hackathons and passionate about merging complex backend logic with intuitive UI.",
  about: `
    I don't just write code; I engineer solutions. From winning national hackathons to building offline-first distributed systems for dental clinics, I obsess over performance, reliability, and user experience.
    
    My background combines rigorous computer science fundamentals (Master’s in CS) with pragmatic, "shipping-focused" development. Whether it's training T5 models for meal planning or architecting custom LAN sync protocols, I love solving hard technical problems.
    
    When I'm not coding, I'm likely researching multi-agent systems or optimizing my home lab. I speak Arabic, English, and French, and I thrive in fast-paced, innovative teams.
  `,
  location: "Algeria , Oran",
  email: "aeddine360@gmail.com",
  phone: "+213 000 000 000",
  social: {
    linkedin: "https://linkedin.com/in/yourusername",
    github: "https://github.com/yourusername",
    twitter: "https://twitter.com/yourusername",
  },
  experience: [
    {
      position: "Full-Stack Developer",
      company: "Property Management Platform",
      period: "2021 - Present",
      location: "Remote",
      description: "Building a Django + React + Flutter platform for property management.",
      achievements: [
        "Built REST APIs with DRF, JWT auth, and Docker deployment",
        "Developed admin dashboard and mobile app"
      ]
    },
    {
      position: "Python Developer",
      company: "Data Analysis Projects",
      period: "2020 - 2021",
      location: "Remote",
      description: "Data analysis and visualization projects.",
      achievements: [
        "Created automated data pipelines with Pandas",
        "Implemented basic ML models for pattern analysis"
      ]
    },
    {
      position: "Robotics Enthusiast",
      company: "Personal Lab",
      period: "2019 - Present",
      location: "Home Lab",
      description: "Exploring ROS2, Gazebo, and reinforcement learning.",
      achievements: [
        "Learning SLAM and multi-agent navigation",
        "Experimenting with multi-robot RL algorithms"
      ]
    }
  ],
  education: [
    {
      degree: "Master’s Degree in Computer Science",
      institution: "University of Oran 1 Ahmed Ben Bella",
      period: "2023 - 2025",
      description: "Focusing on AI, machine learning and advanced system design.",
    },
    {
      degree: "Bachelor’s Degree in Computer Science",
      institution: "University of Oran 1 Ahmed Ben Bella",
      period: "2020 - 2023",
      description: "Built my foundation in software engineering and machine learning.",
    }
  ],
  competitions: [
    {
      name: "Algerian Olympiad of Innovation & Technology",
      project: "Smart Farming with IoT & AI (Enhanced Version)",
      achievements: ["1st Place — Regional", "2nd Place — National"],
      technologies: ["IoT", "AI (classification, regression)", "Solar automation"],
      skills: ["Research", "AI implementation", "Embedded systems", "National-level pitching"],
      impact: "Real-time agriculture optimization system to increase yield and automate irrigation/fertilization",
      year: "2022",
      media: [
        {
          type: "certificate",
          url: "/media/competitions/olympiad/certificate.jpg",
          thumbnail: "/media/competitions/olympiad/certificate-thumb.jpg",
          caption: "National Innovation Olympiad Certificate"
        },
        {
          type: "image",
          url: "/media/competitions/olympiad/shield.jpg",
          thumbnail: "/media/competitions/olympiad/shield-thumb.jpg",
          caption: "Shield of Recognition and Appreciation"
        },
        {
          type: "screenshot",
          url: "/media/competitions/olympiad/presentation.jpg",
          thumbnail: "/media/competitions/olympiad/presentation-thumb.jpg",
          caption: "Olympiad Presentation"
        },
        {
          type: "screenshot",
          url: "/media/competitions/olympiad/presentation2.jpg",
          thumbnail: "/media/competitions/olympiad/presentation2-thumb.jpg",
          caption: "Olympiad Presentation Slide"
        }
      ]
    },
    {
      name: "Oran Hackathon",
      project: "Smart Farming with IoT and AI",
      achievements: ["2nd Place"],
      technologies: ["IoT sensors", "ML models for crop prediction"],
      skills: ["Sensor integration", "AI model training", "Presentation", "Teamwork"],
      impact: "Recommended optimal crop types and farming strategies based on environmental data",
      year: "2021",
      media: [
        {
          type: "certificate",
          url: "/media/competitions/oran/certificate.jpg",
          thumbnail: "/media/competitions/oran/certificate-thumb.jpg",
          caption: "Oran Hackathon Certificate"
        },
        {
          type: "image",
          url: "/media/competitions/oran/honoring.jpg",
          thumbnail: "/media/competitions/oran/honoring-thumb.jpg",
          caption: "Oran Hackathon Honoring"
        },
        {
          type: "image",
          url: "/media/competitions/oran/honoring1.jpg",
          thumbnail: "/media/competitions/oran/honoring1-thumb.jpg",
          caption: "Oran Hackathon Team Recognition"
        },
        {
          type: "image",
          url: "/media/competitions/oran/honoring2.jpg",
          thumbnail: "/media/competitions/oran/honoring2-thumb.jpg",
          caption: "Oran Hackathon Award Ceremony"
        },
        {
          type: "image",
          url: "/media/competitions/oran/winning.jpg",
          thumbnail: "/media/competitions/oran/winning-thumb.jpg",
          caption: "Winning at Oran Hackathon"
        },
        {
          type: "video",
          url: "/media/competitions/oran/hackathon.mp4",
          thumbnail: "/media/competitions/oran/winning-thumb.jpg", // Reusing image as video thumbnail
          caption: "Oran Hackathon Video"
        }
      ]
    },
    {
      name: "Laghouat Hackathon",
      project: "Innovation Management Platform",
      achievements: ["4th Place"],
      technologies: ["Django", "Role-based authentication", "Real-time dashboard"],
      skills: ["System design", "Database modeling", "User management"],
      features: ["Project submission", "Evaluation routing", "Live updates", "Exportable reports"],
      year: "2021",
      media: [
        {
          type: "image",
          url: "/media/competitions/laghouat/participation.jpg",
          thumbnail: "/media/competitions/laghouat/participation-thumb.jpg",
          caption: "Laghouat Hackathon Participation"
        },
        {
          type: "video",
          url: "/media/competitions/laghouat/laghouat.mp4",
          thumbnail: "/media/competitions/laghouat/participation-thumb.jpg", // Reusing image as video thumbnail
          caption: "Laghouat Hackathon Event"
        },
        {
          type: "video",
          url: "/media/competitions/laghouat/presentation.mp4",
          thumbnail: "/media/competitions/laghouat/participation-thumb.jpg", // Reusing image as video thumbnail
          caption: "Laghouat Hackathon Presentation"
        }
      ]
    },
    {
      name: "El Bayadh Hackathon",
      project: "Student Meal Consumption Prediction System",
      achievements: ["5th Place"],
      technologies: ["Django", "Basic ML", "Data Analytics", "Time Series Forecasting"],
      skills: ["Data analysis", "Prediction modeling", "Backend development", "Rapid prototyping"],
      impact: "Helped predict daily food demand to reduce waste in university canteens by analyzing historical consumption patterns",
      year: "2020",
      media: [
        {
          type: "image",
          url: "/media/competitions/elbayadh/photo_2025-06-15_19-19-27.jpg",
          thumbnail: "/media/competitions/elbayadh/photo_2025-06-15_19-19-27-thumb.jpg",
          caption: "El Bayadh Hackathon Team Presentation"
        },
        {
          type: "image",
          url: "/media/competitions/elbayadh/photo_2025-06-15_19-19-33.jpg",
          thumbnail: "/media/competitions/elbayadh/photo_2025-06-15_19-19-33-thumb.jpg",
          caption: "Project Demo at El Bayadh Hackathon"
        },
        {
          type: "image",
          url: "/media/competitions/elbayadh/photo_2025-06-15_19-19-42.jpg",
          thumbnail: "/media/competitions/elbayadh/photo_2025-06-15_19-19-42-thumb.jpg",
          caption: "System Architecture Explanation"
        },
        {
          type: "image",
          url: "/media/competitions/elbayadh/photo_2025-06-15_19-20-02.jpg",
          thumbnail: "/media/competitions/elbayadh/photo_2025-06-15_19-20-02-thumb.jpg",
          caption: "Data Analysis Presentation"
        },
        {
          type: "image",
          url: "/media/competitions/elbayadh/photo_2025-06-15_19-20-15.jpg",
          thumbnail: "/media/competitions/elbayadh/photo_2025-06-15_19-20-15-thumb.jpg",
          caption: "El Bayadh Hackathon Award Ceremony"
        },
        {
          type: "image",
          url: "/media/competitions/elbayadh/1734040013321.jpg",
          thumbnail: "/media/competitions/elbayadh/1734040013321-thumb.jpg",
          caption: "Algorithm Implementation Discussion"
        }
      ]
    }
  ]
}; 