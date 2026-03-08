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

            {/* Mobile layout */}
            <div className="md:hidden max-w-lg mx-auto mt-10 px-4 space-y-6">
                {educationData.map((item, index) => (
                    <motion.div
                        key={index}
                        className="glass rounded-2xl p-6"
                        initial={{ y: 60, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            delay: index * 0.15,
                            type: "spring",
                            stiffness: 320,
                            damping: 70,
                            mass: 1
                        }}
                    >
                        {/* Top row: icon + year */}
                        <div className="flex items-center gap-3 mb-4">
                            <div className="glass p-2.5 rounded-lg shrink-0">
                                <item.icon className="size-5" />
                            </div>
                            <span className="text-xs font-medium text-[#89D1D1] tracking-wide">{item.year}</span>
                        </div>
                        {/* Content */}
                        <h3 className="text-lg font-semibold text-white mb-1">{item.degree}</h3>
                        <p className="text-sm text-gray-300 mb-3">{item.institution}</p>
                        <p className="text-sm text-gray-100 leading-relaxed">{item.description}</p>
                    </motion.div>
                ))}
            </div>

            {/* Desktop layout — alternating timeline */}
            <div className="hidden md:block max-w-5xl mx-auto mt-12 relative">
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-white/30 to-transparent -translate-x-1/2" />

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
                                if (card) card.classList.add("transition", "duration-300");
                            }}
                        >
                            <div className="absolute left-1/2 -translate-x-1/2 top-6 w-5 h-5 rounded-full bg-white/30 border-2 border-white/30 z-10" />

                            <div className={`w-5/12 ${index % 2 === 0 ? 'mr-auto pr-8' : 'ml-auto pl-8'}`}>
                                <div className="glass p-6 rounded-xl hover:-translate-y-0.5 transition duration-300">
                                    <div className="flex items-start gap-4">
                                        <div className="glass p-3 rounded-lg shrink-0">
                                            <item.icon className="size-6" />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm text-gray-300 mb-2">{item.year}</p>
                                            <h3 className="text-xl font-semibold text-white mb-2">{item.degree}</h3>
                                            <p className="text-sm font-medium text-gray-200 mb-3">{item.institution}</p>
                                            <p className="text-sm text-gray-100 leading-relaxed">{item.description}</p>
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
