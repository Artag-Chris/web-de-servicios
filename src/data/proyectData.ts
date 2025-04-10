// Project data with GitHub and live URLs
export const projectsData = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured online store with payment processing, user authentication, and admin dashboard. Includes responsive design and SEO optimization.",
      tech: ["Next.js", "Node.js", "MongoDB", "Stripe"],
      image: "/placeholder.svg?height=400&width=600",
      githubUrl: "https://github.com/yourusername/ecommerce",
      liveUrl: "https://ecommerce-example.com",
      features: ["User authentication", "Payment processing", "Admin dashboard", "Order tracking"],
    },
    {
      title: "Task Management App",
      description:
        "A collaborative project management tool with real-time updates and team collaboration features. Includes drag-and-drop task organization and notification system.",
      tech: ["React", "Firebase", "Tailwind CSS", "Redux"],
      image: "/placeholder.svg?height=400&width=600",
      githubUrl: "https://github.com/yourusername/task-manager",
      liveUrl: "https://taskmanager-example.com",
      features: ["Real-time updates", "Team collaboration", "Task assignment", "Progress tracking"],
    },
    {
      title: "Social Media Dashboard",
      description:
        "Analytics dashboard for social media managers with data visualization and reporting tools. Includes customizable widgets and exportable reports.",
      tech: ["TypeScript", "D3.js", "Express", "PostgreSQL"],
      image: "/placeholder.svg?height=400&width=600",
      githubUrl: "https://github.com/yourusername/social-dashboard",
      liveUrl: "https://social-dashboard-example.com",
      features: ["Data visualization", "Custom reports", "Multi-platform analytics", "Trend analysis"],
    },
    {
      title: "Weather Forecast App",
      description:
        "A weather application that provides real-time forecasts, radar maps and severe weather alerts for locations worldwide.",
      tech: ["React Native", "Redux", "Weather API", "Geolocation"],
      image: "/placeholder.svg?height=400&width=600",
      githubUrl: "https://github.com/yourusername/weather-app",
      liveUrl: "https://weather-app-example.com",
      features: ["Real-time forecasts", "Location tracking", "Weather alerts", "Interactive maps"],
    },
    {
      title: "Recipe Finder",
      description:
        "A web application that helps users find recipes based on ingredients they have, dietary restrictions, and cuisine preferences.",
      tech: ["Vue.js", "Express", "MongoDB", "Recipe API"],
      image: "/placeholder.svg?height=400&width=600",
      githubUrl: "https://github.com/yourusername/recipe-finder",
      liveUrl: "https://recipe-finder-example.com",
      features: ["Ingredient search", "Dietary filters", "Saved recipes", "Meal planning"],
    },
  ]
  
  export interface ProjectCardProps {
    project: Project;
    onHover: (isHovered: boolean) => void;
    isHovered: boolean;
  }

  export interface Project {
    title: string;
    description: string;
    tech: string[];
    image: string;
    githubUrl: string;
    liveUrl: string;
    features: string[];
  }

  export interface Position {
    x: number;
    y: number;
  }