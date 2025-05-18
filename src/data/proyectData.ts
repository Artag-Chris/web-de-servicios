export interface ProjectProps {
  title: string
  description: string
  youtubeUrl: string
  tech: string[]
  features?: string[] // Make features optional
  liveUrl: string
  githubUrl: string
}

export const projectsData: ProjectProps[] = [
  {
    title: "Portfolio Website",
    description:
      "A modern portfolio website built with Next.js and TailwindCSS featuring smooth animations and responsive design.",
    youtubeUrl: "https://www.youtube.com/watch?v=LvsgCdWss4I&ab_channel=YourAverageTechBro", // Replace with your actual YouTube URL
    tech: ["Next.js", "React", "TailwindCSS", "Framer Motion"],
    features: [
      "Responsive design",
      "Dark/light mode",
      "Animated transitions",
      "Contact form",
      "Project showcase",
      "Blog integration",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/portfolio",
  },
  {
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Replace with your actual YouTube URL
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    features: [
      "User authentication",
      "Product search",
      "Shopping cart",
      "Payment processing",
      "Order tracking",
      "Admin dashboard",
    ],
    liveUrl: "https://example.com/ecommerce",
    githubUrl: "https://github.com/yourusername/ecommerce",
  },
  {
    title: "Task Management App",
    description: "A productivity app for managing tasks, projects, and deadlines with team collaboration features.",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Replace with your actual YouTube URL
    tech: ["TypeScript", "React", "Firebase", "TailwindCSS"],
    features: [
      "Task creation",
      "Project organization",
      "Due date reminders",
      "Team collaboration",
      "Progress tracking",
      "File attachments",
    ],
    liveUrl: "https://example.com/tasks",
    githubUrl: "https://github.com/yourusername/task-manager",
  },
  {
    title: "Weather Dashboard",
    description:
      "A real-time weather dashboard that displays current conditions and forecasts for locations worldwide.",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Replace with your actual YouTube URL
    tech: ["JavaScript", "React", "OpenWeather API", "ChartJS"],
    features: [
      "Location search",
      "Current conditions",
      "5-day forecast",
      "Weather maps",
      "Historical data",
      "Weather alerts",
    ],
    liveUrl: "https://example.com/weather",
    githubUrl: "https://github.com/yourusername/weather-app",
  },
  {
    title: "Social Media Platform",
    description: "A social networking platform with user profiles, posts, comments, and real-time messaging.",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Replace with your actual YouTube URL
    tech: ["Next.js", "GraphQL", "PostgreSQL", "Socket.io"],
    features: ["User profiles", "News feed", "Real-time chat", "Post creation", "Friend connections", "Notifications"],
    liveUrl: "https://example.com/social",
    githubUrl: "https://github.com/yourusername/social-network",
  },
  {
    title: "Fitness Tracker",
    description: "An application for tracking workouts, nutrition, and fitness progress with data visualization.",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Replace with your actual YouTube URL
    tech: ["React Native", "Redux", "Firebase", "D3.js"],
    features: [
      "Workout logging",
      "Nutrition tracking",
      "Progress charts",
      "Goal setting",
      "Exercise library",
      "Personalized plans",
    ],
    liveUrl: "https://example.com/fitness",
    githubUrl: "https://github.com/yourusername/fitness-tracker",
  },
]
