'use client';

import Image from 'next/image';
import { Play, ExternalLink, MonitorIcon } from 'lucide-react';
import { useState, useRef } from 'react';

const badgeStyles = {
    recent: 'bg-blue-500/20 text-blue-400',
    replaced: 'bg-yellow-500/20 text-yellow-400',
    new: 'bg-green-500/20 text-green-400',
    old: 'bg-red-500/20 text-red-400'
};

// ── Website card with iframe preview + image fallback ────────────────────────
function WebsiteCard({ item }) {
    const { title, image, siteUrl, link, tech = [] } = item;
    const [iframeError, setIframeError] = useState(false);
    const [iframeLoaded, setIframeLoaded] = useState(false);
    const iframeRef = useRef(null);

    // Some sites block iframe embedding via X-Frame-Options.
    // We detect this by checking if the iframe loads but stays empty (load fires but no content).
    // The simplest reliable approach: try load, set a timeout, if not loaded → show image.
    const handleIframeLoad = () => {
        try {
            // If the site blocked framing, contentDocument will be null or restricted
            const doc = iframeRef.current?.contentDocument;
            if (!doc || doc.body?.innerHTML === '') {
                setIframeError(true);
            } else {
                setIframeLoaded(true);
            }
        } catch {
            // Cross-origin access error — means it DID load but is blocked
            // The iframe itself rendered (with the site's own content), which is fine
            setIframeLoaded(true);
        }
    };

    const handleIframeError = () => {
        setIframeError(true);
    };

    const showImage = iframeError || (!iframeLoaded && iframeError);

    return (
        <div className="glass rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group">
            {/* ── Preview area ── */}
            <div className="relative aspect-video overflow-hidden bg-black/30">
                {/* iframe */}
                {!iframeError && (
                    <iframe
                        ref={iframeRef}
                        src={siteUrl}
                        title={title}
                        onLoad={handleIframeLoad}
                        onError={handleIframeError}
                        className="absolute inset-0 w-full h-full"
                        style={{
                            border: 'none',
                            // Scale down — iframe is rendered at full desktop width then scaled to fit
                            width: '200%',
                            height: '200%',
                            transform: 'scale(0.5)',
                            transformOrigin: 'top left',
                            opacity: iframeLoaded ? 1 : 0,
                            transition: 'opacity 0.4s ease',
                            pointerEvents: 'none', // prevent interaction inside card
                        }}
                        loading="lazy"
                        sandbox="allow-scripts allow-same-origin"
                    />
                )}

                {/* Fallback image — shown when iframe errors OR while loading */}
                <div
                    className="absolute inset-0 transition-opacity duration-400"
                    style={{ opacity: iframeLoaded && !iframeError ? 0 : 1 }}
                >
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover object-top transition-all duration-500 group-hover:scale-105"
                    />
                </div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30 z-10 opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Live indicator — only when iframe is showing */}
                {iframeLoaded && !iframeError && (
                    <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 bg-black/50 backdrop-blur-sm rounded-full px-2.5 py-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                        <span className="text-[10px] font-semibold text-white/80">Live Preview</span>
                    </div>
                )}

                {/* Tech stack overlay — slides up on hover */}
                {tech.length > 0 && (
                    <div className="absolute inset-x-0 bottom-0 z-20 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
                        <div className="flex flex-wrap gap-1.5">
                            {tech.map((t, i) => (
                                <span
                                    key={i}
                                    className="text-[10px] font-semibold px-2 py-0.5 rounded-full backdrop-blur-md"
                                    style={{ background: 'rgba(0,0,0,0.55)', color: '#89D1D1', border: '1px solid rgba(137,209,209,0.3)' }}
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {/* Visit button on hover */}
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-3 right-3 z-20 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100"
                    data-cursor="link"
                    onClick={e => e.stopPropagation()}
                >
                    <div className="flex items-center gap-1.5 bg-black/50 backdrop-blur-md rounded-full px-3 py-1.5 border border-white/10">
                        <ExternalLink className="text-white" size={12} />
                        <span className="text-[10px] font-semibold text-white">Visit Site</span>
                    </div>
                </a>
            </div>

            {/* ── Card footer ── */}
            <div className="p-5 flex flex-col gap-3 flex-1">
                <h3 className="font-semibold text-base leading-tight text-white tracking-tight">
                    {title}
                </h3>
                <div className="flex gap-2 flex-wrap items-center">
                    <span className="text-xs uppercase font-medium px-3 py-1 rounded-full glass flex items-center gap-1.5">
                        <MonitorIcon size={10} />
                        {item.category.replace('-', ' ')}
                    </span>
                    {item.badge && (
                        <span className={`text-xs uppercase font-medium px-3 py-1 rounded-full ${badgeStyles[item.badge]}`}>
                            {item.badge}
                        </span>
                    )}
                    {/* <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-auto text-xs text-gray-400 hover:text-white flex items-center gap-1 transition-colors"
                        data-cursor="link"
                    >
                        <ExternalLink size={10} />
                        {siteUrl?.replace(/^https?:\/\//, '')}
                    </a> */}
                </div>
            </div>
        </div>
    );
}

export default function PortfolioCard({ item, onImageClick }) {
    const { title, image, category, badge, type, playIcon, link } = item;

    // Website cards use their own component
    if (type === 'website') {
        return <WebsiteCard item={item} />;
    }

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

            {/* Centre icon */}
            {link ? (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-2 transition-transform group-hover:scale-110" data-cursor="play">
                    <div className="w-16 h-16 rounded-full glass flex items-center justify-center backdrop-blur-md">
                        <Play className="text-white fill-white ml-1" size={24} />
                    </div>
                    <span className="flex items-center gap-1 text-[10px] font-semibold text-white/70 bg-black/40 backdrop-blur-sm rounded-full px-2 py-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ExternalLink size={9} />
                        View
                    </span>
                </div>
            ) : playIcon ? (
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

            {link ? (
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
