'use client';

import Image from 'next/image';
import { Play, ExternalLink } from 'lucide-react';

const badgeStyles = {
    recent: 'bg-blue-500/20 text-blue-400',
    replaced: 'bg-yellow-500/20 text-yellow-400',
    new: 'bg-green-500/20 text-green-400',
    old: 'bg-red-500/20 text-red-400'
};

export default function PortfolioCard({ item, onImageClick }) {
    const { title, image, category, badge, type, playIcon, link } = item;

    const getAspectRatio = () => {
        if (type === 'video') return 'aspect-video';
        if (type === 'reel') return 'aspect-[9/16]';
        if (type === 'landing') return 'aspect-video';
        return 'aspect-square';
    };

    // Shared content inside the clickable area
    const cardMedia = (
        <>
            <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-all duration-500 group-hover:scale-105"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30 z-10 opacity-0 group-hover:opacity-100 transition-opacity" />

            {/* Centre icon — play for videos/reels/animation, external link icon for link-only cards */}
            {link ? (
                // Link card: show play icon (if playIcon) with a small external-link badge
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-2 transition-transform group-hover:scale-110" data-cursor="play">
                    <div className="w-16 h-16 rounded-full glass flex items-center justify-center backdrop-blur-md">
                        <Play className="text-white fill-white ml-1" size={24} />
                    </div>
                    {/* Small "opens externally" hint */}
                    <span className="flex items-center gap-1 text-[10px] font-semibold text-white/70 bg-black/40 backdrop-blur-sm rounded-full px-2 py-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ExternalLink size={9} />
                        View
                    </span>
                </div>
            ) : playIcon ? (
                // Image-modal card with play icon
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 transition-transform group-hover:scale-110" data-cursor="play">
                    <div className="w-16 h-16 rounded-full glass flex items-center justify-center backdrop-blur-md">
                        <Play className="text-white fill-white ml-1" size={24} />
                    </div>
                </div>
            ) : null}
        </>
    );

    return (
        <div className="glass rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group">

            {/* ── Clickable media area ── */}
            {link ? (
                // Opens external URL in new tab — no lightbox
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`relative overflow-hidden block ${getAspectRatio()}`}
                    data-cursor="play"
                >
                    {cardMedia}
                </a>
            ) : (
                // Opens fullscreen image lightbox
                <div
                    className={`relative overflow-hidden cursor-pointer ${getAspectRatio()}`}
                    onClick={() => onImageClick(image)}
                    data-cursor="expand"
                    data-portfolio-image
                >
                    {cardMedia}
                </div>
            )}

            {/* ── Card footer ── */}
            <div className="p-5 flex flex-col gap-3 flex-1">
                <h3 className="font-semibold text-base leading-tight text-white tracking-tight">
                    {title}
                </h3>

                <div className="flex gap-2 flex-wrap">
                    <span className="text-xs uppercase font-medium px-3 py-1 rounded-full glass">
                        {category.replace('-', ' ')}
                    </span>

                    {badge && (
                        <span className={`text-xs uppercase font-medium px-3 py-1 rounded-full ${badgeStyles[badge]}`}>
                            {badge}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}
