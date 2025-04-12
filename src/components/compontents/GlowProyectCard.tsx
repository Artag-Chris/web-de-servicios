import { useRef, MouseEvent } from "react";
import { ProjectCardProps } from "@/data/proyectData";
import { Github } from "@styled-icons/simple-icons";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

interface GlowProjectCardProps extends ProjectCardProps {
    index: number;
}

const GlowProjectCard: React.FC<GlowProjectCardProps> = ({ project, onHover, isHovered, index }) => {
    const cardRefs = useRef<HTMLDivElement[]>([]);

    // Manejo del movimiento del mouse para el brillo
    const handleMouseMove =
        (index: number) => (e: MouseEvent<HTMLDivElement>) => {
            const card = cardRefs.current[index];
            if (!card) return;

            // Obtener posición relativa del mouse
            const rect = card.getBoundingClientRect();
            const mouseX = e.clientX - rect.left - rect.width / 2;
            const mouseY = e.clientY - rect.top - rect.height / 2;

            // Calcular el ángulo
            let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
            angle = (angle + 360) % 360;

            // Establecer el ángulo como una variable CSS
            card.style.setProperty("--start", `${angle + 60}deg`);
        };

    return (
        <div
            ref={(el) => {
                if (el) cardRefs.current[index] = el;
            }}
            onMouseMove={handleMouseMove(index)}
            onMouseEnter={() => onHover(true)}
            onMouseLeave={() => onHover(false)}
            className={`relative card card-border timeline-card rounded-xl mb-5 break-inside-avoid-column overflow-hidden ${
                isHovered ? "shadow-lg shadow-emerald-500/20" : ""
            }`}
        >
            {/* Efecto de brillo */}
            <div className="glow"></div>

            {/* Contenido del proyecto (usando ProjectCard internamente pero con estructura adaptada) */}
            <div
                className={`bg-zinc-900 border-zinc-800 overflow-hidden transition-all duration-300 h-full ${
                    isHovered ? "border-emerald-500" : "hover:border-emerald-500"
                }`}
            >
                {/* Imagen del proyecto */}
                <div className="relative h-48 w-full overflow-hidden group">
                    <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className={`object-cover transition-transform duration-700 ${
                            isHovered ? "scale-110" : "group-hover:scale-105"
                        }`}
                    />
                    <div
                        className={`absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-60 transition-opacity duration-300 ${
                            isHovered ? "opacity-80" : ""
                        }`}
                    />
                </div>

                {/* Contenido principal dentro de la tarjeta */}
                <div className="p-6 relative">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-zinc-400 mb-4 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech: string, i: number) => (
                            <Badge key={i} variant="secondary" className="bg-zinc-800 hover:bg-zinc-700 transition-colors">
                                {tech}
                            </Badge>
                        ))}
                    </div>
                    <div className="flex justify-between items-center">
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-emerald-500 hover:text-emerald-400 flex items-center gap-1 text-sm"
                        >
                            View Project <ExternalLink className="h-3 w-3" />
                        </a>
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-emerald-500 hover:text-emerald-400 flex items-center gap-1 text-sm"
                        >
                            Source Code <Github className="h-3 w-3" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GlowProjectCard;