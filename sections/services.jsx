import SectionTitle from "@/components/section-title";
import { BrushIcon, VideoIcon, PaletteIcon, SparklesIcon, MonitorIcon, Wand2Icon, UserPenIcon, NotebookPen } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function Services() {

    const refs = useRef([]);

    const servicesData = [
        {
            icon: BrushIcon,
            title: "Graphic Design",
            description: "Creating stunning visual designs including logos, branding, posters, and digital artwork that communicate your message effectively.",
        },
        {
            icon: VideoIcon,
            title: "Video Editing",
            description: "Professional video editing services using Premiere Pro and DaVinci Resolve for compelling storytelling and polished productions.",
        },
        {
            icon: SparklesIcon,
            title: "Motion Graphics",
            description: "Dynamic motion graphics and animations using After Effects to bring your content to life with engaging visual effects.",
        },
        {
            icon: NotebookPen,
            title: "Social Media Management",
            description: "Strategic social media management including content planning, scheduling, audience engagement, and analytics to grow your online presence.",
        },
        {
            icon: PaletteIcon,
            title: "Social Media Content",
            description: "Eye-catching graphics and videos designed specifically for social media platforms to boost engagement and reach.",
        },
        {
            icon: Wand2Icon,
            title: "Brand Identity",
            description: "Developing cohesive brand identities that reflect your company's values and resonate with your target audience.",
        },
        {
            icon: UserPenIcon,
            title: "2D/3D Animation",
            description: "Creating animated content using tools like Maya and Blender for explainer videos, character animations, and visual storytelling.",
        },
        {
            icon: MonitorIcon,
            title: "Web Design",
            description: "Designing beautiful and functional websites with modern UI/UX principles using Figma and web technologies.",
        }
    ];

    return (
        <section className="mt-32" id="services">
            <SectionTitle
                title="Services I Offer"
                description="Comprehensive creative solutions from concept to execution, tailored to bring your vision to life."
            />

            <div className="flex flex-wrap items-stretch justify-center gap-6 mt-10 px-6">
                {servicesData.map((service, index) => (
                    <motion.div
                        key={index}
                        ref={(el) => (refs.current[index] = el)}
                        className="hover:-translate-y-0.5 p-6 rounded-xl space-y-4 glass max-w-80 w-full flex flex-col"
                        initial={{ y: 150, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            delay: index * 0.15,
                            type: "spring",
                            stiffness: 320,
                            damping: 70,
                            mass: 1
                        }}
                        onAnimationComplete={() => {
                            const card = refs.current[index];
                            if (card) {
                                card.classList.add("transition", "duration-300");
                            }
                        }}
                    >
                        <service.icon className="size-8.5" />
                        <h3 className="text-base font-medium text-white">
                            {service.title}
                        </h3>
                        <p className="text-gray-100 text-sm leading-relaxed flex-grow">
                            {service.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
