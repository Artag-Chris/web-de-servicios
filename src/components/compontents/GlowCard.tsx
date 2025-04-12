import { useRef, MouseEvent, ReactNode } from "react";

interface GlowCardProps {
    card: {
        review: string;
    };
    index: number;
    children?: ReactNode; // Para contenido adicional opcional dentro de la tarjeta
}

const GlowCard: React.FC<GlowCardProps> = ({ card, index, children }) => {
    // refs para todas las tarjetas
    const cardRefs = useRef<HTMLDivElement[]>([]);

    // Manejar el movimiento del mouse sobre una tarjeta para rotar el efecto de brillo
    const handleMouseMove =
        (index: number) => (e: MouseEvent<HTMLDivElement>) => {
            // Obtener la tarjeta actual
            const card = cardRefs.current[index];
            if (!card) return;

            // Obtener la posición del mouse relativa a la tarjeta
            const rect = card.getBoundingClientRect();
            const mouseX = e.clientX - rect.left - rect.width / 2;
            const mouseY = e.clientY - rect.top - rect.height / 2;

            // Calcular el ángulo desde el centro de la tarjeta hasta el mouse
            let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);

            // Ajustar el ángulo para que esté entre 0 y 360
            angle = (angle + 360) % 360;

            // Establecer el ángulo como una variable CSS
            card.style.setProperty("--start", `${angle + 60}deg`);
        };

    // Renderizar el componente con el evento del mouse
    return (
        <div
            ref={(el) => {
                if (el) cardRefs.current[index] = el;
            }}
            onMouseMove={handleMouseMove(index)}
            className="card card-border timeline-card rounded-xl p-10 mb-5 break-inside-avoid-column"
        >
            <div className="glow"></div>
            <div className="flex items-center gap-1 mb-5">
                {Array.from({ length: 5 }, (_, i) => (
                    <img key={i}
                      //   src="/images/star.png"
                         alt="star" className="size-5" />
                ))}
            </div>
            <div className="mb-5">
                <p className="text-white-50 text-lg">{card.review}</p>
            </div>
            {children}
        </div>
    );
};

export default GlowCard;