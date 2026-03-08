'use client';

import { useState } from 'react';
import PortfolioGallery from '@/sections/work/portfolio-gallery';
import SectionTitle from '@/components/section-title';
import { motion } from 'framer-motion';

export default function WorkPage() {
    const [activeFilter, setActiveFilter] = useState('all');

    return (
        <>
            {/* Background gradients matching main page */}
            <motion.div 
                className="fixed inset-0 overflow-hidden -z-20 pointer-events-none"
                initial={{ opacity: 0.4 }}
                whileInView={{ opacity: 0.5 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <div className="absolute rounded-full top-80 left-2/5 -translate-x-1/2 size-130 bg-[#89D1D1] blur-[100px]" />
                <div className="absolute rounded-full top-80 right-0 -translate-x-1/2 size-130 bg-[#908FDB] blur-[100px]" />
                <div className="absolute rounded-full top-0 left-1/2 -translate-x-1/2 size-130 bg-[#89D1D1] blur-[100px]" />
            </motion.div>

            <main className="px-4">
                {/* Hero Section */}
                <section className="flex flex-col items-center mt-32">
                    <motion.div 
                        className="flex items-center gap-3"
                        initial={{ y: -20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        <p>Browse My Work</p>
                        <button className="btn glass py-1 px-3 text-xs">
                            Portfolio
                        </button>
                    </motion.div>
                    
                    <motion.h1 
                        className="text-center text-4xl/13 md:text-6xl/19 mt-4 font-semibold tracking-tight max-w-3xl"
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
                    >
                        Creative Work & Projects
                    </motion.h1>
                    
                    <motion.p 
                        className="text-center text-gray-100 text-base/7 max-w-md mt-6"
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        A showcase of my graphic design, motion graphics, video editing, and creative projects. Each piece tells a unique story and demonstrates my passion for visual excellence.
                    </motion.p>
                </section>

                {/* Portfolio Gallery Section */}
                <section className="mt-32" id="portfolio-gallery">
                    <PortfolioGallery 
                        activeFilter={activeFilter} 
                        setActiveFilter={setActiveFilter} 
                    />
                </section>
            </main>
        </>
    );
}
