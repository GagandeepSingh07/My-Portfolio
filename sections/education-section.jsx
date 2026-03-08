import SectionTitle from "@/components/section-title";
import { GraduationCapIcon, BookOpenIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function EducationSection() {
    const ref = useRef([]);

    const educationData = [
        {
            year: "2022 - 2025",
            degree: "Bachelor of Graphics and Web Designing",
            institution: "IK Gujral Punjab Technical University, Kapurthala",
            description: "Studied principles of graphic design, web development, UI/UX, multimedia, and digital communication with hands-on projects in design tools and web technologies.",
            icon: GraduationCapIcon,
        },
        {
            year: "2021 - 2022",
            degree: "Senior Secondary Education (XII)",
            institution: "Punjab School Education Board, Mohali",
            description: "Completed Senior Secondary Education in Arts stream with an emphasis on Mathematics and History, developing strong analytical and critical thinking skills.",
            icon: BookOpenIcon,
        },
    ];

    return (
        <section className="mt-32" id="education">
            <SectionTitle
                title="Education"
                description="My Academic Journey"
            />

            <div className="max-w-5xl mx-auto mt-12 relative">
                {/* Timeline line - centered for desktop */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-white/30 to-transparent md:-translate-x-1/2" />

                <div className="space-y-16">
                    {educationData.map((item, index) => (
                        <motion.div
                            key={index}
                            ref={(el) => (ref.current[index] = el)}
                            className="relative flex items-center"
                            initial={{ y: 150, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: index * 0.2,
                                type: "spring",
                                stiffness: 320,
                                damping: 70,
                                mass: 1
                            }}
                            onAnimationComplete={() => {
                                const card = ref.current[index];
                                if (card) {
                                    card.classList.add("transition", "duration-300");
                                }
                            }}
                        >
                            {/* Timeline dot - centered */}
                            <div className="absolute left-2.5 md:left-1/2 md:-translate-x-1/2 top-6 w-5 h-5 rounded-full bg-white/30 border-2 border-white/30 z-10" />

                            {/* Content card - alternating sides */}
                            <div className={`w-full ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                                <div className="glass p-6 rounded-xl hover:-translate-y-0.5 transition duration-300">
                                    <div className="flex items-start gap-4">
                                        <div className="glass p-3 rounded-lg shrink-0">
                                            <item.icon className="size-6" />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm text-gray-300 mb-2">{item.year}</p>
                                            <h3 className="text-xl font-semibold text-white mb-2">
                                                {item.degree}
                                            </h3>
                                            <p className="text-sm font-medium text-gray-200 mb-3">
                                                {item.institution}
                                            </p>
                                            <p className="text-sm text-gray-100 leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
