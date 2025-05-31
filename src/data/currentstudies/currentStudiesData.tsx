import {
  Code,
  Brain,
  Database,
  Palette,
  Zap,
  BookOpen,
  TrendingUp,
  Award,
  Calendar,
  Clock,
  Target,
} from "lucide-react";
import { useRef } from "react";

export interface Study {
  id: number;
  title: string;
  category: string;
  provider: string;
  progress: number;
  duration: string;
  startDate: string;
  status: "active" | "completed" | "upcoming";
  icon: React.ReactNode;
  description: string;
  skills: string[];
  priority: "high" | "medium" | "low";
}

export const currentStudies: Study[] = [
  {
    id: 1,
    title: "Advanced React & Next.js",
    category: "Frontend Development",
    provider: "Vercel Academy",
    progress: 75,
    duration: "8 weeks",
    startDate: "Jan 2024",
    status: "active",
    icon: <Code className="h-8 w-8" />,
    description:
      "Deep dive into React 18 features, Next.js 14, and modern frontend architecture patterns.",
    skills: ["React 18", "Next.js 14", "TypeScript", "Server Components"],
    priority: "high",
  },
  {
    id: 2,
    title: "Machine Learning Fundamentals",
    category: "Artificial Intelligence",
    provider: "Stanford Online",
    progress: 45,
    duration: "12 weeks",
    startDate: "Dec 2023",
    status: "active",
    icon: <Brain className="h-8 w-8" />,
    description:
      "Understanding ML algorithms, neural networks, and practical applications in web development.",
    skills: ["Python", "TensorFlow", "Neural Networks", "Data Analysis"],
    priority: "high",
  },
  {
    id: 3,
    title: "Database Design & Optimization",
    category: "Backend Development",
    provider: "MongoDB University",
    progress: 60,
    duration: "6 weeks",
    startDate: "Feb 2024",
    status: "active",
    icon: <Database className="h-8 w-8" />,
    description:
      "Advanced database design patterns, query optimization, and scalable architecture.",
    skills: ["MongoDB", "PostgreSQL", "Query Optimization", "Database Design"],
    priority: "medium",
  },
  {
    id: 4,
    title: "UI/UX Design Principles",
    category: "Design",
    provider: "Figma Academy",
    progress: 30,
    duration: "10 weeks",
    startDate: "Mar 2024",
    status: "active",
    icon: <Palette className="h-8 w-8" />,
    description:
      "Modern design principles, user research, and creating intuitive user experiences.",
    skills: ["Figma", "Design Systems", "User Research", "Prototyping"],
    priority: "medium",
  },
  {
    id: 5,
    title: "Cloud Architecture with AWS",
    category: "DevOps",
    provider: "AWS Training",
    progress: 20,
    duration: "14 weeks",
    startDate: "Mar 2024",
    status: "active",
    icon: <Zap className="h-8 w-8" />,
    description:
      "Building scalable cloud infrastructure and implementing DevOps best practices.",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    priority: "low",
  },
  {
    id: 6,
    title: "Advanced TypeScript",
    category: "Programming Languages",
    provider: "TypeScript Deep Dive",
    progress: 85,
    duration: "4 weeks",
    startDate: "Jan 2024",
    status: "active",
    icon: <BookOpen className="h-8 w-8" />,
    description:
      "Mastering advanced TypeScript patterns, generics, and type-level programming.",
    skills: ["TypeScript", "Generics", "Type Guards", "Advanced Patterns"],
    priority: "high",
  },
];

export const StudyIcon = ({
  study,
  index,
}: {
  study: Study;
  index: number;
}) => {
  const iconRef = useRef<HTMLDivElement>(null);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "from-blue-500 to-cyan-400";
      case "medium":
        return "from-blue-400 to-sky-300";
      case "low":
        return "from-sky-300 to-blue-200";
      default:
        return "from-blue-500 to-cyan-400";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "active":
        return <TrendingUp className="h-4 w-4" />;
      case "completed":
        return <Award className="h-4 w-4" />;
      case "upcoming":
        return <Clock className="h-4 w-4" />;
      default:
        return <Target className="h-4 w-4" />;
    }
  };

  return (
    <div
      ref={iconRef}
      className="study-icon group relative flex flex-col items-center p-6 bg-zinc-800/30 backdrop-blur-sm rounded-3xl border border-zinc-700/50 hover:border-blue-400/50 transition-all duration-500 cursor-pointer hover:shadow-lg hover:shadow-blue-500/10 hover:z-50"
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

      {/* Priority indicator */}
      <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center">
        <div
          className={`w-3 h-3 rounded-full bg-gradient-to-r ${getPriorityColor(
            study.priority
          )}`}
        ></div>
      </div>

      {/* Status badge */}
      <div className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-zinc-800 border-2 border-blue-400 flex items-center justify-center">
        {getStatusIcon(study.status)}
      </div>

      {/* Main icon */}
      <div className="relative mb-4">
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-400/20 flex items-center justify-center text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
          {study.icon}
        </div>

        {/* Progress ring */}
        <svg
          className="absolute inset-0 w-20 h-20 -rotate-90"
          viewBox="0 0 80 80"
        >
          <circle
            cx="40"
            cy="40"
            r="36"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="text-zinc-700"
          />
          <circle
            cx="40"
            cy="40"
            r="36"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeDasharray={`${2 * Math.PI * 36}`}
            strokeDashoffset={`${
              2 * Math.PI * 36 * (1 - study.progress / 100)
            }`}
            className="text-blue-400 progress-ring transition-all duration-1000"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="text-center space-y-2">
        <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
          {study.title}
        </h3>
        <p className="text-sm text-blue-400 font-medium">{study.category}</p>
        <p className="text-xs text-zinc-400">{study.provider}</p>

        {/* Progress */}
        <div className="flex items-center justify-center gap-2 text-xs text-zinc-500">
          <span>{study.progress}%</span>
          <span>•</span>
          <span>{study.duration}</span>
        </div>
      </div>

      {/* Hover details - Z-INDEX ALTO */}
      <div className="absolute inset-x-0 top-full mt-4 p-4 bg-zinc-800/95 backdrop-blur-sm rounded-xl border border-zinc-700 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-[9999] shadow-2xl shadow-black/50">
        <p className="text-sm text-zinc-300 mb-3">{study.description}</p>

        <div className="space-y-2">
          <div className="text-xs text-zinc-500">Skills:</div>
          <div className="flex flex-wrap gap-1">
            {study.skills.map((skill, skillIndex) => (
              <span
                key={skillIndex}
                className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between mt-3 text-xs text-zinc-500">
          <span className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {study.startDate}
          </span>
          <span className="capitalize">{study.status}</span>
        </div>
      </div>
    </div>
  );
};
