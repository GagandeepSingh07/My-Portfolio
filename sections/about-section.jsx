import SectionTitle from "@/components/section-title";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
    return (
        <section className="mt-32" id="about">
            <SectionTitle
                title="About Me"
                description="Who I am"
            />

            <motion.div className="flex flex-col md:flex-row items-center justify-center gap-12 mt-12 max-w-5xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <motion.div className="flex-1 space-y-6"
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                >
                    <p className="text-gray-100 text-base/7">
                        I'm <span className="text-white font-semibold">Gagandeep Singh</span>, an entry-level graphic designer with a strong foundation in various creative fields, including video editing, motion graphics, and animation. I love transforming ideas into beautiful visuals that leave a lasting impression.
                    </p>
                    
                    <blockquote className="border-l-4 border-white/20 pl-4 italic text-gray-200">
                        "I Believe That Design Is Not Just About Making Things Look Good But Also About Solving Problems Creatively. I Am Eager To Collaborate, Learn, And Grow In This Ever-Evolving Field."
                    </blockquote>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <a href="https://drive.google.com/file/d/1VUl3psB8Pkk5g15UYmqgui1bkNQgVhXN/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn glass">
                            View Resume
                        </a>
                        <a href="#portfolio" className="btn glass">
                            View Work
                        </a>
                    </div>
                </motion.div>

                <motion.div className="flex-1 flex justify-center"
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                >
                    <div className="glass rounded-2xl p-8 max-w-sm overflow-hidden">
                        <Image
                            src="/assets/about-photo.png"
                            alt="Gagandeep Singh"
                            width={400}
                            height={400}
                            className="rounded-xl w-full"
                            priority
                        />
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
