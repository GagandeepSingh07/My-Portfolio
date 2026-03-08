'use client';

import SectionTitle from "@/components/section-title";
import { motion } from "framer-motion";
import Image from "next/image";

const skillsData = [
    {
        name: "Adobe Photoshop",
        icon: "/images/icons/software/photoshop.png",
        description: "Expertly retouch and manipulate images for creative and professional projects.",
        level: "Advanced"
    },
    {
        name: "Adobe After Effects",
        icon: "/images/icons/software/after-effects.png",
        description: "Create stunning motion graphics and visual effects for videos and animations.",
        level: "Advanced"
    },
    {
        name: "Adobe Premiere Pro",
        icon: "/images/icons/software/premiere-pro.png",
        description: "Edit videos with powerful tools for cinematic or pro-grade productions.",
        level: "Advanced"
    },
    {
        name: "DaVinci Resolve",
        icon: "/images/icons/software/davinci-resolve.png",
        description: "Professional color correction for filmmakers & content creators.",
        level: "Intermediate"
    },
    {
        name: "CorelDraw",
        icon: "/images/icons/software/coreldraw.png",
        description: "Design vector graphics and layouts with precision for branding and print projects.",
        level: "Advanced"
    },
    {
        name: "Affinity Designer",
        icon: "/images/icons/software/affinity.png",
        description: "Create stunning vector graphics, layouts, and digital designs.",
        level: "Intermediate"
    },
    {
        name: "Adobe Illustrator",
        icon: "/images/icons/software/illustrator.png",
        description: "Design scalable vector illustrations and graphics for digital and print media.",
        level: "Intermediate"
    },
    {
        name: "Blender",
        icon: "/images/icons/software/blender.png",
        description: "3D modeling, animation, and rendering for beginner-level creative projects.",
        level: "Beginner"
    },
    {
        name: "Autodesk Maya",
        icon: "/images/icons/software/maya.png",
        description: "Craft intricate 3D models, animations, and simulations for various media.",
        level: "Intermediate"
    },
    {
        name: "Figma",
        icon: "/images/icons/software/figma.png",
        description: "Interface design and prototyping for web and app development.",
        level: "Intermediate"
    },
];

export default function SkillsSection() {

    const getLevelColor = (level) => {
        switch(level) {
            case 'Advanced': return 'text-green-400';
            case 'Intermediate': return 'text-cyan-400';
            case 'Beginner': return 'text-blue-400';
            default: return 'text-gray-400';
        }
    };

    return (
        <section className="mt-32" id="skills">
            <SectionTitle
                title="My Skills"
                description="Software I Work With"
            />

            <div className="flex flex-wrap items-stretch justify-center gap-6 mt-10 px-6">
                {skillsData.map((skill, index) => (
                    <motion.div
                        key={index}
                        className="p-6 rounded-xl space-y-4 glass max-w-80 w-full flex flex-col"
                        initial={{ y: 150, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        whileHover={{ y: -4, transition: { type: "spring", stiffness: 400, damping: 25, mass: 0.5 } }}
                        viewport={{ once: true }}
                        transition={{
                            delay: Math.min(index * 0.1, 0.5),
                            type: "spring",
                            stiffness: 320,
                            damping: 70,
                            mass: 1
                        }}
                    >
                        <div className="flex items-center gap-3">
                            <Image
                                src={skill.icon}
                                alt={skill.name}
                                width={36}
                                height={36}
                                className="object-contain flex-shrink-0"
                            />
                            <div className="flex flex-col min-w-0">
                                <h3 className="text-base font-medium text-white leading-snug">
                                    {skill.name}
                                </h3>
                                <span className={`text-xs font-semibold ${getLevelColor(skill.level)}`}>
                                    {skill.level}
                                </span>
                            </div>
                        </div>
                        <p className="text-gray-100 text-sm leading-relaxed flex-grow">
                            {skill.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
