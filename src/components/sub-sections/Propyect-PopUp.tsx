import { Project, Position } from "@/data/proyectData";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image"
import { Badge } from "@/components/ui/badge"

export function ProjectPopup({ project, isVisible, position }: { project: Project; isVisible: boolean; position: Position }) {
    if (!isVisible) return null
  
    return (
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed z-50 bg-zinc-800 border border-emerald-500 rounded-lg shadow-xl shadow-emerald-500/20 w-[350px] md:w-[400px]"
            style={{
              top: `${position.y + 20}px`,
              left: `${position.x}px`,
              transform: "translateX(-50%)",
            }}
          >
            <div className="p-6">
              <div className="relative h-40 w-full mb-4 rounded-md overflow-hidden">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-70" />
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                </div>
              </div>
  
              <p className="text-zinc-300 mb-4">{project.description}</p>
  
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-emerald-500 mb-2">Key Features:</h4>
                <ul className="grid grid-cols-2 gap-x-2 gap-y-1">
                  {project.features.map((feat, idx) => (
                    <li key={idx} className="text-zinc-400 text-sm flex items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mr-2"></span>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
  
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <Badge key={i} variant="secondary" className="bg-zinc-700">
                    {tech}
                  </Badge>
                ))}
              </div>
  
              <div className="flex gap-2">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded text-sm font-medium flex items-center gap-1.5 transition-colors"
                >
                  Live Demo <ExternalLink className="h-3.5 w-3.5" />
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-zinc-700 hover:bg-zinc-600 text-white px-4 py-2 rounded text-sm font-medium flex items-center gap-1.5 transition-colors"
                >
                  GitHub <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    )
  }