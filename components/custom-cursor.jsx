'use client';

import { useEffect, useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    MousePointer2,
    ExternalLink,
    PenLine,
    Ban,
    ZoomIn,
    ZoomOut,
    Play,
    Loader,
    Download,
    Mail,
    Phone,
    ChevronDown,
    Expand,
} from 'lucide-react';

// ─── State map ────────────────────────────────────────────────────────────────
const CURSOR_STATES = {
    default:    { icon: MousePointer2, label: null,         color: '#ffffff',   glow: 'rgba(255,255,255,0.18)',   bg: 'transparent' },
    link:       { icon: ExternalLink,  label: 'Open',       color: '#89D1D1',   glow: 'rgba(137,209,209,0.22)',   bg: 'rgba(137,209,209,0.10)' },
    input:      { icon: PenLine,       label: 'Type',       color: '#c4b5fd',   glow: 'rgba(168,85,247,0.22)',    bg: 'rgba(168,85,247,0.10)' },
    prohibited: { icon: Ban,           label: null,         color: '#f87171',   glow: 'rgba(239,68,68,0.25)',     bg: 'rgba(239,68,68,0.12)' },
    zoomin:     { icon: ZoomIn,        label: 'Zoom',       color: '#67e8f9',   glow: 'rgba(6,182,212,0.22)',     bg: 'rgba(6,182,212,0.10)' },
    zoomout:    { icon: ZoomOut,       label: 'Zoom out',   color: '#67e8f9',   glow: 'rgba(6,182,212,0.22)',     bg: 'rgba(6,182,212,0.10)' },
    play:       { icon: Play,          label: 'Play',       color: '#86efac',   glow: 'rgba(34,197,94,0.22)',     bg: 'rgba(34,197,94,0.10)' },
    loading:    { icon: Loader,        label: 'Loading…',   color: '#fdba74',   glow: 'rgba(249,115,22,0.22)',    bg: 'rgba(249,115,22,0.10)' },
    download:   { icon: Download,      label: 'Download',   color: '#93c5fd',   glow: 'rgba(59,130,246,0.22)',    bg: 'rgba(59,130,246,0.10)' },
    mail:       { icon: Mail,          label: 'Email',      color: '#89D1D1',   glow: 'rgba(137,209,209,0.22)',   bg: 'rgba(137,209,209,0.10)' },
    phone:      { icon: Phone,         label: 'Call',       color: '#86efac',   glow: 'rgba(34,197,94,0.22)',     bg: 'rgba(34,197,94,0.10)' },
    expand:     { icon: Expand,        label: 'View',       color: '#ffffff',   glow: 'rgba(255,255,255,0.18)',   bg: 'rgba(255,255,255,0.08)' },
    accordion:  { icon: ChevronDown,   label: 'Toggle',     color: '#cbd5e1',   glow: 'rgba(255,255,255,0.15)',   bg: 'rgba(255,255,255,0.08)' },
};

// The pill height in px — shared between the clip div and the motion.span
const PILL_H = 18;

// ─── Resolve from a single element ───────────────────────────────────────────
function resolveFromElement(el) {
    if (!el) return null;
    const tag       = el.tagName?.toUpperCase();
    const role      = el.getAttribute?.('role');
    const href      = el.getAttribute?.('href') || el.closest('a')?.getAttribute('href');
    const disabled  = el.disabled || el.getAttribute?.('disabled') !== null || el.closest('[disabled]');
    const classList = el.classList;
    const dataAttr  = el.dataset?.cursor || el.closest('[data-cursor]')?.dataset.cursor;

    if (dataAttr && CURSOR_STATES[dataAttr])                                                                             return dataAttr;
    if (disabled || classList.contains('cursor-not-allowed') || el.closest('[aria-disabled="true"]'))                    return 'prohibited';
    if (classList.contains('loading') || el.closest('.loading') || el.getAttribute?.('aria-busy') === 'true')           return 'loading';
    if (el.closest('[data-modal-image]') || classList.contains('cursor-zoom-out') || el.closest('.cursor-zoom-out'))    return 'zoomout';
    if (el.closest('[data-portfolio-image]') || classList.contains('cursor-zoom-in'))                                    return 'zoomin';
    if (classList.contains('play-cursor') || el.closest('.play-cursor') || el.closest('[data-play]'))                   return 'play';
    if (el.getAttribute?.('download') !== null || el.closest('[download]') || href?.includes('drive.google.com') || href?.includes('.pdf') || href?.includes('.zip')) return 'download';
    if (href?.startsWith('mailto:') || el.closest('a[href^="mailto:"]'))                                                 return 'mail';
    if (href?.startsWith('tel:')    || el.closest('a[href^="tel:"]'))                                                    return 'phone';
    if (classList.contains('accordion-trigger') || el.closest('[data-accordion]') || (tag === 'H3' && el.closest('[class*="faq"]'))) return 'accordion';
    if (['INPUT', 'TEXTAREA', 'SELECT'].includes(tag) || el.getAttribute?.('contenteditable') === 'true')               return 'input';

    const isClickable = tag === 'A' || tag === 'BUTTON' || role === 'button' || role === 'link' ||
        el.onclick !== null || classList.contains('cursor-pointer') || el.closest('a') || el.closest('button');
    if (isClickable) return 'link';

    return null;
}

// ─── Proximity probe ─────────────────────────────────────────────────────────
const PROBE_RADIUS = 20;
const PROBE_ANGLES = 8;

function resolveCursorState(target, x, y) {
    const direct = resolveFromElement(target);
    if (direct !== null) return direct;
    for (let i = 0; i < PROBE_ANGLES; i++) {
        const angle = (i / PROBE_ANGLES) * 2 * Math.PI;
        const nearby = document.elementFromPoint(
            x + Math.round(Math.cos(angle) * PROBE_RADIUS),
            y + Math.round(Math.sin(angle) * PROBE_RADIUS),
        );
        if (nearby && nearby !== target) {
            const result = resolveFromElement(nearby);
            if (result !== null) return result;
        }
    }
    return 'default';
}

// ─── Motion configs ───────────────────────────────────────────────────────────
const POS_SPRING   = { type: 'spring', stiffness: 2200, damping: 42,  mass: 0.2  };
const GLOW_SPRING  = { type: 'spring', stiffness: 200,  damping: 26,  mass: 0.35 };
const CLICK_SPRING = { type: 'spring', stiffness: 600,  damping: 28,  mass: 0.2  };
const ICON_EASE    = { duration: 0.12, ease: [0.4, 0, 0.2, 1] };
// Barrel roll — tighter spring so the roll feels crisp, not wobbly
const ROLL_SPRING  = { type: 'spring', stiffness: 500,  damping: 38,  mass: 0.18 };

// ─── Component ───────────────────────────────────────────────────────────────
export default function CustomCursor() {
    const [pos,         setPos]         = useState({ x: -200, y: -200 });
    const [cursorState, setCursorState] = useState('default');
    const [visible,     setVisible]     = useState(false);
    const [clicking,    setClicking]    = useState(false);

    // Single source of truth for state resolution — runs only from mousemove.
    // mouseover is removed entirely; it was racing with the rAF-throttled
    // mousemove handler and causing double-update jitter.
    const rafRef      = useRef(null);
    const pendingRef  = useRef(null);   // latest resolved state waiting for next frame

    const handleMouseMove = useCallback((e) => {
        const x = e.clientX;
        const y = e.clientY;
        setPos({ x, y });
        setVisible(true);

        // Resolve synchronously (cheap DOM reads) but commit to React only
        // once per animation frame so rapid mousemove events are batched.
        pendingRef.current = resolveCursorState(e.target, x, y);

        if (!rafRef.current) {
            rafRef.current = requestAnimationFrame(() => {
                rafRef.current = null;
                if (pendingRef.current !== null) {
                    setCursorState(pendingRef.current);
                    pendingRef.current = null;
                }
            });
        }
    }, []);

    const handleMouseLeave = useCallback(() => setVisible(false), []);
    const handleMouseEnter = useCallback(() => setVisible(true),  []);
    const handleMouseDown  = useCallback(() => setClicking(true),  []);
    const handleMouseUp    = useCallback(() => setClicking(false), []);

    useEffect(() => {
        window.addEventListener('mousemove',    handleMouseMove,   { passive: true });
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mouseenter', handleMouseEnter);
        document.addEventListener('mousedown',  handleMouseDown);
        document.addEventListener('mouseup',    handleMouseUp);
        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
            window.removeEventListener('mousemove',    handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseenter', handleMouseEnter);
            document.removeEventListener('mousedown',  handleMouseDown);
            document.removeEventListener('mouseup',    handleMouseUp);
        };
    }, [handleMouseMove, handleMouseLeave, handleMouseEnter, handleMouseDown, handleMouseUp]);

    const state     = CURSOR_STATES[cursorState] ?? CURSOR_STATES.default;
    const Icon      = state.icon;
    const isLoading = cursorState === 'loading';
    const hasLabel  = Boolean(state.label);

    return (
        <>
            {/* ── Glow ring ── */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[999990] rounded-full w-10 h-10"
                animate={{
                    x:               pos.x - 10,
                    y:               pos.y - 10,
                    opacity:         visible ? (clicking ? 0.7 : 0.4) : 0,
                    scale:           clicking ? 0.65 : cursorState === 'default' ? 1 : 1.5,
                    backgroundColor: state.glow,
                }}
                transition={{
                    x:               GLOW_SPRING,
                    y:               GLOW_SPRING,
                    opacity:         { duration: 0.2 },
                    scale:           CLICK_SPRING,
                    backgroundColor: { duration: 0.25, ease: 'easeInOut' },
                }}
                style={{ filter: 'blur(6px)' }}
            />

            {/* ── Cursor wrapper ── */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[999999] flex items-center gap-1.5 select-none"
                animate={{
                    x:       pos.x - 2,
                    y:       pos.y - 2,
                    opacity: visible ? 1 : 0,
                    scale:   clicking ? 0.82 : 1,
                }}
                transition={{
                    x:       POS_SPRING,
                    y:       POS_SPRING,
                    opacity: { duration: 0.15 },
                    scale:   CLICK_SPRING,
                }}
            >
                {/* ── Icon bubble ── */}
                <motion.div
                    className="rounded-full p-1.5 flex-shrink-0"
                    animate={{ backgroundColor: state.bg }}
                    transition={{ duration: 0.22, ease: 'easeInOut' }}
                >
                    <AnimatePresence mode="popLayout" initial={false}>
                        <motion.div
                            key={cursorState}
                            initial={{ opacity: 0, scale: 0.6, y:  4 }}
                            animate={{ opacity: 1, scale: 1,   y:  0 }}
                            exit={{    opacity: 0, scale: 0.6, y: -4 }}
                            transition={ICON_EASE}
                        >
                            <Icon
                                width={20}
                                height={20}
                                style={{ color: state.color }}
                                className={`drop-shadow-md ${isLoading ? 'animate-spin' : ''}`}
                                strokeWidth={2}
                                fill={cursorState === 'play' ? state.color : 'none'}
                            />
                        </motion.div>
                    </AnimatePresence>
                </motion.div>

                {/* Pill — width is always exactly the text width.
                 * A hidden sizer <span> renders the current label at full
                 * opacity:0 so the pill's intrinsic width = text + padding.
                 * The animated clip window sits absolute on top of it.
                 * No guessing, no fixed px — pure content-driven sizing.
                 */}
                <motion.div
                    className="relative overflow-hidden rounded-full backdrop-blur-sm flex-shrink-0"
                    animate={{
                        opacity:         hasLabel ? 1 : 0,
                        maxWidth:        hasLabel ? 200 : 0,
                        backgroundColor: state.bg,
                    }}
                    transition={{
                        maxWidth:        hasLabel
                            ? { type: 'spring', stiffness: 420, damping: 36, mass: 0.2 }
                            : { duration: 0.12, ease: [0.4, 0, 1, 1] },
                        opacity:         { duration: 0.12 },
                        backgroundColor: { duration: 0.22, ease: 'easeInOut' },
                    }}
                    style={{
                        height:      PILL_H,
                        border:      '1px solid rgba(255,255,255,0.10)',
                    }}
                >
                    {/* Invisible sizer — sets the pill's natural width to match the text */}
                    <span
                        aria-hidden="true"
                        className="px-2.5 text-[10px] font-semibold tracking-wide whitespace-nowrap block"
                        style={{ opacity: 0, lineHeight: `${PILL_H}px` }}
                    >
                        {state.label}
                    </span>

                    {/* Clip window — absolute, covers sizer exactly */}
                    <div className="absolute inset-0 overflow-hidden">
                        <AnimatePresence mode="popLayout" initial={false}>
                            <motion.span
                                key={state.label ?? 'empty'}
                                initial={{ y:  PILL_H, opacity: 0 }}
                                animate={{ y:  0,       opacity: 1 }}
                                exit={{    y: -PILL_H,  opacity: 0 }}
                                transition={ROLL_SPRING}
                                className="absolute inset-0 flex items-center justify-center whitespace-nowrap text-[10px] font-semibold tracking-wide"
                                style={{ color: state.color, lineHeight: 1 }}
                            >
                                {state.label}
                            </motion.span>
                        </AnimatePresence>
                    </div>
                </motion.div>
            </motion.div>
        </>
    );
}
