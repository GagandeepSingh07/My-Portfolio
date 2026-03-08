'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio-data';
import PortfolioCard from '@/components/work/portfolio-card';
import FullscreenModal from '@/components/work/fullscreen-modal';

const filters = [
    { id: 'all', label: 'All' },
    { id: 'social-media', label: 'Social Media Posts' },
    { id: '3d-work', label: '3D Work' },
    { id: 'logos', label: 'Logos' },
    { id: 'animation', label: 'Animation' },
    { id: 'videos', label: 'Videos' },
    { id: 'reels', label: 'Reels' },
    { id: 'gaming', label: 'Gaming' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'programming', label: 'Programming' }
];

export default function PortfolioGallery({ activeFilter, setActiveFilter }) {
    const [filteredItems, setFilteredItems] = useState(portfolioData);
    const [isAnimating, setIsAnimating] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState('');

    useEffect(() => {
        setIsAnimating(true);
        
        setTimeout(() => {
            if (activeFilter === 'all') {
                setFilteredItems(portfolioData);
            } else {
                setFilteredItems(
                    portfolioData.filter(item => item.category === activeFilter)
                );
            }
            setIsAnimating(false);
        }, 260);
    }, [activeFilter]);

    const handleFilterClick = (filterId) => {
        setActiveFilter(filterId);
    };

    const getCategoryCount = (filterId) => {
        if (filterId === 'all') return portfolioData.length;
        return portfolioData.filter(item => item.category === filterId).length;
    };

    const getCategoryLabel = (categoryId) => {
        const filter = filters.find(f => f.id === categoryId);
        return filter ? filter.label : categoryId;
    };

    const groupedByCategory = () => {
        const grouped = {};
        portfolioData.forEach(item => {
            if (!grouped[item.category]) {
                grouped[item.category] = [];
            }
            grouped[item.category].push(item);
        });
        return grouped;
    };

    const openModal = (imageSrc) => {
        setCurrentImage(imageSrc);
        setModalOpen(true);
    };

    return (
        <div className="max-w-5xl mx-auto mt-12">
            {/* Filter Buttons */}
            <motion.div 
                className="flex gap-3 mb-12 flex-wrap justify-center"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
            >
                {filters.map(filter => {
                    const count = getCategoryCount(filter.id);
                    
                    return (
                        <motion.button
                            key={filter.id}
                            onClick={() => handleFilterClick(filter.id)}
                            className={`btn glass px-4 py-2 text-sm transition-all duration-300 ${
                                activeFilter === filter.id
                                    ? 'bg-white/20'
                                    : count === 0
                                    ? 'opacity-50 cursor-not-allowed'
                                    : ''
                            }`}
                            whileHover={count > 0 ? { scale: 1.05 } : {}}
                            whileTap={count > 0 ? { scale: 0.95 } : {}}
                            disabled={count === 0}
                            data-cursor={count === 0 ? 'prohibited' : 'accordion'}
                        >
                            {filter.label}
                            <span className="inline-block text-xs px-2 py-0.5 rounded-full ml-2 bg-white/10">
                                {count}
                            </span>
                        </motion.button>
                    );
                })}
            </motion.div>

            {/* Portfolio Grid - Show separate containers by category when 'all' is selected */}
            {activeFilter === 'all' ? (
                <div 
                    className={`transition-opacity duration-300 ${
                        isAnimating ? 'opacity-0' : 'opacity-100'
                    }`}
                >
                    {Object.entries(groupedByCategory()).map(([category, items]) => (
                        items.length > 0 && (
                            <div key={category} className="mb-16">
                                <h3 className="text-2xl font-semibold text-white mb-6 capitalize">
                                    {getCategoryLabel(category)}
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
                                    {items.map((item, index) => (
                                        <motion.div
                                            key={`${item.category}-${index}`}
                                            initial={{ y: 50, opacity: 0 }}
                                            whileInView={{ y: 0, opacity: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ 
                                                delay: index * 0.05,
                                                type: "spring", 
                                                stiffness: 260, 
                                                damping: 70, 
                                                mass: 1 
                                            }}
                                        >
                                            <PortfolioCard 
                                                item={item} 
                                                onImageClick={openModal}
                                            />
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        )
                    ))}
                </div>
            ) : (
                /* Single grid when a specific category is selected */
                <div 
                    className={`transition-opacity duration-300 ${
                        isAnimating ? 'opacity-0' : 'opacity-100'
                    }`}
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
                        {filteredItems.map((item, index) => (
                            <motion.div
                                key={`${item.category}-${index}`}
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ 
                                    delay: index * 0.05,
                                    type: "spring", 
                                    stiffness: 260, 
                                    damping: 70, 
                                    mass: 1 
                                }}
                            >
                                <PortfolioCard 
                                    item={item} 
                                    onImageClick={openModal}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            )}

            {/* Empty State - Only show when filtering by a specific category with no items */}
            {activeFilter !== 'all' && filteredItems.length === 0 && (
                <motion.div 
                    className="text-center py-20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    <p className="text-gray-100 text-base">No items in this category yet.</p>
                </motion.div>
            )}

            {/* Fullscreen Modal */}
            <FullscreenModal 
                isOpen={modalOpen}
                imageSrc={currentImage}
                onClose={() => setModalOpen(false)}
            />
        </div>
    );
}
