
import { Skill } from "@/data/skillsData";
import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent } from "../ui/card";

export function SkillCard({ skill, index }: { skill: Skill; index: number }) {
    const [isHovered, setIsHovered] = useState(false)

    const Icon = skill.icon

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
            }}
        >
            <Card
                className="bg-zinc-800 border-zinc-700 hover:border-emerald-500 transition-all overflow-hidden h-[140px]"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <CardContent className="p-6 relative h-full">
                    <div className="flex items-center gap-2 mb-1">
                        <Icon className={`h-5 w-5 ${skill.color}`} />
                        <h3 className="font-medium text-lg">{skill.name}</h3>
                    </div>
                   

                    <div
                        className={`absolute inset-x-0 bottom-0 bg-zinc-800 p-4 transform transition-all duration-300 ease-in-out ${isHovered ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
                            }`}
                    >
                        <p className="text-zinc-300 text-sm">{skill.description}</p>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    )
}