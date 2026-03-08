'use client';

import { motion } from 'framer-motion';

export default function WorkTitle() {
    const words = [
        'PORTFOLIO',
        'CREATIONS',
        'DESIGNS',
        'PROJECTS',
        'ARTWORKS',
        'GRAPHICS',
        'ANIMATIONS',
        'MASTERPIECES',
        'PORTFOLIO'
    ];

    return (
        <div className="w-full max-w-5xl mx-auto">
            {/* Main animated title */}
            <motion.div 
                className="relative overflow-hidden mb-6"
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ 
                    delay: 0.2, 
                    type: "spring", 
                    stiffness: 200, 
                    damping: 20
                }}
            >
                {/* Glassmorphic container */}
                <div className="relative glass-card rounded-3xl p-8 md:p-12 overflow-hidden group">
                    {/* Animated border gradient */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#89D1D1]/30 via-[#908FDB]/30 to-[#89D1D1]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                    
                    {/* Inner border */}
                    <div className="absolute inset-[2px] rounded-3xl bg-gradient-to-br from-[#1c1853]/90 to-[#0a0a2e]/90 backdrop-blur-xl" />
                    
                    {/* Content */}
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
                        <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-300 tracking-tight">
                                MY
                            </h1>
                        </motion.div>

                        {/* Rotating words container */}
                        <div className="h-[60px] md:h-[80px] lg:h-[100px] overflow-hidden relative">
                            <div className="word-list">
                                {words.map((word, index) => (
                                    <div
                                        key={index}
                                        className="word h-[60px] md:h-[80px] lg:h-[100px] flex items-center"
                                    >
                                        <span className="text-4xl md:text-6xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#89D1D1] via-[#908FDB] to-[#89D1D1] animate-gradient tracking-tight drop-shadow-[0_0_30px_rgba(137,209,209,0.5)]">
                                            {word}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#89D1D1]/10 to-transparent rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-[#908FDB]/10 to-transparent rounded-full blur-3xl" />
                </div>
            </motion.div>

            {/* Subtitle */}
            <motion.div
                className="text-center"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
            >
                <p className="text-gray-400 text-lg md:text-xl tracking-wide">
                    Explore my creative journey through design and innovation
                </p>
            </motion.div>

            <style jsx>{`
                @keyframes gradient-shift {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }

                .animate-gradient {
                    background-size: 200% 200%;
                    animation: gradient-shift 3s ease infinite;
                }

                .word-list {
                    animation: spin_words 24s infinite;
                }

                @keyframes spin_words {
                    0% { transform: translateY(400%); }
                    7% { transform: translateY(400%); }
                    11% { transform: translateY(300%); }
                    18% { transform: translateY(300%); }
                    22% { transform: translateY(200%); }
                    29% { transform: translateY(200%); }
                    33% { transform: translateY(100%); }
                    40% { transform: translateY(100%); }
                    44% { transform: translateY(0%); }
                    51% { transform: translateY(0%); }
                    55% { transform: translateY(-100%); }
                    62% { transform: translateY(-100%); }
                    66% { transform: translateY(-200%); }
                    73% { transform: translateY(-200%); }
                    77% { transform: translateY(-300%); }
                    84% { transform: translateY(-300%); }
                    88% { transform: translateY(-400%); }
                    95% { transform: translateY(-400%); }
                    100% { transform: translateY(-400%); }
                }

                .glass-card {
                    background: linear-gradient(
                        135deg,
                        rgba(255, 255, 255, 0.05) 0%,
                        rgba(255, 255, 255, 0.02) 100%
                    );
                    backdrop-filter: blur(20px);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    box-shadow: 
                        0 8px 32px 0 rgba(0, 0, 0, 0.37),
                        inset 0 1px 0 0 rgba(255, 255, 255, 0.1);
                }

                @media (max-width: 768px) {
                    .word {
                        height: 60px;
                    }
                }
            `}</style>
        </div>
    );
}
