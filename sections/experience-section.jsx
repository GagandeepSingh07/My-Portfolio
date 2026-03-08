import SectionTitle from "@/components/section-title";
import { BriefcaseIcon, AwardIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function ExperienceSection() {
    const ref = useRef([]);

    const experienceData = [
        {
            period: "Jun 2025 - Present",
            title: "Teacher - Graphic Designer & Computer Basics",
            company: "@TeachingHubAcademy",
            companyUrl: "https://teahinghubacademy.com/",
            location: "DCN, Nurmahal",
            description: "Passionate about teaching creative design and essential computer skills. I help students build confidence using tools like Photoshop, CorelDraw, Premiere Pro, Web Development and MS Office while developing their creativity and digital literacy.",
            icon: BriefcaseIcon,
            current: true,
        },
        {
            period: "Sep 2024 - Present",
            title: "Freelance - Graphic Designer & Video Editor",
            company: "@Sonn.Chidiya",
            companyUrl: "https://www.instagram.com/sonn.chidiya/",
            location: "Instagram & Youtube",
            description: "Worked as a video editor and graphic designer, creating engaging visual content, editing videos, and designing graphics for social media posts.",
            icon: BriefcaseIcon,
            current: true,
        },
        {
            period: "2020 - 2025",
            title: "Social Media Manager",
            company: "@TheGhostByteGaming",
            companyUrl: "https://www.youtube.com/@TheGhostByteGaming?sub_confirmation=1",
            location: "YouTube Channel",
            description: "Managing social media presence, creating content, editing videos, handling SEO, and engaging with the audience to grow the channel.",
            icon: BriefcaseIcon,
        },
        {
            period: "Jul 2024 - Aug 2024",
            title: "Motion Graphic & Video Editor",
            company: "Editsta Creation",
            companyUrl: "#",
            location: "Company",
            description: "Creating visually engaging motion graphics and video content for the channel, gaining valuable experience in video editing and design.",
            icon: BriefcaseIcon,
        },
        {
            period: "Jun 2024 - Jul 2024",
            title: "Intern Graphic Designer",
            company: "Libertas Media",
            companyUrl: "#",
            location: "Company",
            description: "Assisted in creating visual content for various media platforms, gaining hands-on experience in graphic design.",
            icon: BriefcaseIcon,
        },
        {
            period: "2022 - 2025",
            title: "Vice President - Design Club",
            company: "Lyallpur Khalsa College Technical Campus",
            companyUrl: "#",
            location: "Jalandhar",
            description: "Led design projects, organized workshops, and collaborated with College events/competitions for real-world design experience.",
            icon: AwardIcon,
        },
    ];

    return (
        <section className="mt-32" id="experience">
            <SectionTitle
                title="Experience"
                description="My Professional Journey"
            />

            <div className="max-w-4xl mx-auto mt-12 relative px-4">
                {/* Timeline line - fixed position */}
                <div className="absolute left-6.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-white/30 to-transparent" />

                <div className="space-y-8">
                    {experienceData.map((item, index) => (
                        <motion.div
                            key={index}
                            ref={(el) => (ref.current[index] = el)}
                            className="relative"
                            initial={{ y: 150, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: index * 0.1,
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
                            {/* Timeline dot - simple circle */}
                            <div className="absolute left-0.5 top-6 w-5 h-5 rounded-full bg-white/30 border-2 border-white/30 z-10" />

                            {/* Content card with left margin for dot */}
                            <div className="ml-12 glass p-6 rounded-xl hover:-translate-y-0.5 transition duration-300">
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-2 flex-wrap">
                                            <h3 className="text-lg font-semibold text-white">
                                                {item.title}
                                            </h3>
                                            {item.current && (
                                                <span className="px-2 py-0.5 text-xs rounded-full glass">
                                                    Current
                                                </span>
                                            )}
                                        </div>
                                        <a 
                                            href={item.companyUrl} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="text-sm font-medium text-gray-200 hover:text-white transition"
                                        >
                                            {item.company}
                                        </a>
                                        <p className="text-xs text-gray-300 mt-1">{item.location}</p>
                                    </div>
                                    <p className="text-sm text-gray-300 whitespace-nowrap">{item.period}</p>
                                </div>
                                <p className="text-sm text-gray-100 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
