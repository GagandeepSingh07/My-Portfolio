"use client";

import { ExternalLinkIcon, ArrowRightIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolio-data";

// Calculate dynamic stats from portfolio data
const totalProjects = portfolioData.length;
const uniqueCategories = [
  ...new Set(portfolioData.map((item) => item.category)),
].length;

// ── Bento cells config ────────────────────────────────────────────────────────
const cells = [
  {
    type: "image",
    src: "/images/portfolio/social-media/cosmogen-shampoo.jpg",
    alt: "Cosmogen Shampoo",
    title: "Cosmogen Shampoo",
    category: "Social Media",
    badge: "new",
    grid: "col-start-1 col-end-3 row-start-1 row-end-3",
  },
  {
    type: "image",
    src: "/images/portfolio/3d-work/procedural-planet.png",
    alt: "Procedural Planet",
    title: "Procedural Planet",
    category: "3D Work · Blender",
    badge: "recent",
    grid: "col-start-3 col-end-4 row-start-1 row-end-3",
  },
  {
    type: "text",
    grid: "col-start-1 col-end-2 row-start-3 row-end-4",
  },
  {
    type: "image",
    src: "/images/portfolio/logos/typecraft-logo.png",
    alt: "Amit Banger Logo",
    title: "Amit Banger Logo",
    category: "Logo Design · YouTube",
    badge: "recent",
    grid: "col-start-2 col-end-3 row-start-3 row-end-4",
  },
  {
    type: "image",
    src: "/images/portfolio/3d-work/interior-design.png",
    alt: "Interior Design",
    title: "Interior Design",
    category: "3D Work · Blender",
    grid: "col-start-3 col-end-4 row-start-3 row-end-4",
  },
];

// ── Ticker stat counter ───────────────────────────────────────────────────────
function TickerStat({ value, label }) {
  const [display, setDisplay] = useState(0);
  const [started, setStarted] = useState(false);
  return (
    <motion.div
      className="text-center"
      onViewportEnter={() => setStarted(true)}
    >
      <motion.span
        className="text-sm font-bold text-white block"
        animate={started ? { opacity: 1 } : { opacity: 0 }}
      >
        <motion.span
          initial={{ innerText: 0 }}
          animate={started ? { innerText: value } : {}}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          onUpdate={(latest) => setDisplay(Math.round(latest.innerText ?? 0))}
        />
        {display}+
      </motion.span>
      <span className="text-[9px] text-gray-400 uppercase tracking-wider">
        {label}
      </span>
    </motion.div>
  );
}

// ── Looping skill ticker ──────────────────────────────────────────────────────
const SKILLS = [
  "Graphic Design",
  "3D Work",
  "Motion Graphics",
  "Logo Design",
  "Video Editing",
  "Web Design",
];
function SkillTicker() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % SKILLS.length), 2000);
    return () => clearInterval(id);
  }, []);
  return (
    <div style={{ height: 18, overflow: "hidden", position: "relative" }}>
      <motion.p
        key={idx}
        className="text-xs text-gray-300 leading-relaxed"
        initial={{ y: 14, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -14, opacity: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        style={{ position: "absolute", whiteSpace: "nowrap" }}
      >
        {SKILLS[idx]}
      </motion.p>
    </div>
  );
}

// ── Bento cell ────────────────────────────────────────────────────────────────
function BentoCell({ cell, index }) {
  const [hovered, setHovered] = useState(false);

  if (cell.type === "text") {
    return (
      <motion.div
        className={`${cell.grid} glass rounded-2xl p-4 flex flex-col justify-between overflow-hidden`}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          delay: index * 0.08,
          type: "spring",
          stiffness: 280,
          damping: 70,
        }}
        style={{ position: "relative" }}
      >
        {/* Rotating conic border shimmer */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          style={{
            position: "absolute",
            inset: -2,
            borderRadius: 18,
            background:
              "conic-gradient(from 0deg, transparent 60%, #89D1D1 75%, #908FDB 85%, transparent 100%)",
            opacity: 0.35,
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
        {/* Inner mask */}
        <div
          style={{
            position: "absolute",
            inset: 1,
            borderRadius: 16,
            background: "var(--glass-bg, rgba(255,255,255,0.05))",
            backdropFilter: "blur(12px)",
            zIndex: 0,
            pointerEvents: "none",
          }}
        />
        {/* Teal orb */}
        <motion.div
          animate={{ y: [0, -8, 0], opacity: [0.15, 0.28, 0.15] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            top: -20,
            right: -20,
            width: 80,
            height: 80,
            borderRadius: "50%",
            background: "radial-gradient(circle, #89D1D1 0%, transparent 70%)",
            pointerEvents: "none",
            zIndex: 1,
          }}
        />
        {/* Purple orb */}
        <motion.div
          animate={{ y: [0, 6, 0], opacity: [0.1, 0.2, 0.1] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
          style={{
            position: "absolute",
            bottom: 8,
            left: -10,
            width: 60,
            height: 60,
            borderRadius: "50%",
            background: "radial-gradient(circle, #908FDB 0%, transparent 70%)",
            pointerEvents: "none",
            zIndex: 1,
          }}
        />
        {/* Content */}
        <div style={{ position: "relative", zIndex: 2 }}>
          <motion.p
            className="text-xs text-[#89D1D1] font-semibold tracking-widest uppercase mb-1"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 + 0.3, duration: 0.5 }}
          >
            My Portfolio
          </motion.p>
          <SkillTicker />
        </div>
        {/* Stats */}
        <motion.div
          className="flex justify-around"
          style={{ position: "relative", zIndex: 2 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.08 + 0.5, duration: 0.5 }}
        >
          <TickerStat value={totalProjects} label="Projects" />
          <div style={{ width: 1, background: "rgba(255,255,255,0.1)" }} />
          <TickerStat value={uniqueCategories} label="Categories" />
        </motion.div>
        {/* CTA */}
        <motion.a
          href="/work"
          className="flex items-center gap-1.5 text-xs font-semibold text-white hover:text-[#89D1D1] transition-colors"
          style={{ position: "relative", zIndex: 2 }}
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.08 + 0.7, duration: 0.4 }}
          whileHover={{ x: 4 }}
        >
          View All Work
          <motion.span
            animate={{ x: [0, 3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowRightIcon className="size-3" />
          </motion.span>
        </motion.a>
      </motion.div>
    );
  }

  return (
    <motion.div
      className={`${cell.grid} relative overflow-hidden rounded-2xl cursor-pointer`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.08,
        type: "spring",
        stiffness: 280,
        damping: 70,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        boxShadow: hovered
          ? "0 16px 40px rgba(0,0,0,0.5)"
          : "0 4px 16px rgba(0,0,0,0.3)",
        transition: "box-shadow 0.3s ease, transform 0.3s ease",
        transform: hovered ? "scale(1.02)" : "scale(1)",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={cell.src}
        alt={cell.alt}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          transition:
            "opacity 0.3s ease, transform 0.4s ease, filter 0.3s ease",
          opacity: hovered ? 1 : 0.85,
          transform: hovered ? "scale(1.06)" : "scale(1)",
          filter: hovered ? "grayscale(0%)" : "grayscale(100%)",
        }}
      />
      {/* Gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.15) 50%, transparent 100%)",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      />
      {/* Info overlay */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "10px 12px",
          transform: hovered ? "translateY(0)" : "translateY(8px)",
          opacity: hovered ? 1 : 0,
          transition: "transform 0.3s ease, opacity 0.3s ease",
        }}
      >
        {cell.badge && (
          <span
            style={{
              display: "inline-block",
              fontSize: "9px",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: cell.badge === "new" ? "#89D1D1" : "#908FDB",
              border: `1px solid ${cell.badge === "new" ? "#89D1D180" : "#908FDB80"}`,
              borderRadius: "4px",
              padding: "2px 6px",
              marginBottom: "4px",
            }}
          >
            {cell.badge}
          </span>
        )}
        <p
          style={{
            margin: 0,
            fontSize: "12px",
            fontWeight: 700,
            color: "white",
            lineHeight: 1.3,
          }}
        >
          {cell.title}
        </p>
        <p
          style={{
            margin: "2px 0 0",
            fontSize: "10px",
            color: "rgba(255,255,255,0.65)",
            lineHeight: 1.3,
          }}
        >
          {cell.category}
        </p>
      </div>
    </motion.div>
  );
}

// ── Mobile image card ─────────────────────────────────────────────────────────
function MobileImageCard({ cell, index }) {
  const [tapped, setTapped] = useState(false);
  return (
    <motion.div
      className="relative overflow-hidden rounded-2xl"
      style={{ height: 180 }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.07,
        type: "spring",
        stiffness: 260,
        damping: 60,
      }}
      onClick={() => setTapped((t) => !t)}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={cell.src}
        alt={cell.alt}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          filter: tapped ? "grayscale(0%)" : "grayscale(60%)",
          transform: tapped ? "scale(1.05)" : "scale(1)",
          transition: "filter 0.4s ease, transform 0.4s ease",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 55%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "10px 14px",
        }}
      >
        {cell.badge && (
          <span
            style={{
              display: "block",
              fontSize: "9px",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: cell.badge === "new" ? "#89D1D1" : "#908FDB",
              border: `1px solid ${cell.badge === "new" ? "#89D1D180" : "#908FDB80"}`,
              borderRadius: 4,
              padding: "2px 6px",
              marginBottom: 4,
              width: "fit-content",
            }}
          >
            {cell.badge}
          </span>
        )}
        <p
          style={{
            margin: 0,
            fontSize: 13,
            fontWeight: 700,
            color: "white",
            lineHeight: 1.3,
          }}
        >
          {cell.title}
        </p>
        <p
          style={{
            margin: "2px 0 0",
            fontSize: 10,
            color: "rgba(255,255,255,0.6)",
            lineHeight: 1.3,
          }}
        >
          {cell.category}
        </p>
      </div>
    </motion.div>
  );
}

// ── Tablet image card ─────────────────────────────────────────────────────────
function TabletImageCard({ cell, index }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      className="relative overflow-hidden rounded-2xl cursor-pointer"
      style={{ height: 200 }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.07,
        type: "spring",
        stiffness: 260,
        damping: 60,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={cell.src}
        alt={cell.alt}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          filter: hovered ? "grayscale(0%)" : "grayscale(80%)",
          transform: hovered ? "scale(1.06)" : "scale(1)",
          transition: "filter 0.4s ease, transform 0.4s ease",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 55%)",
          opacity: hovered ? 1 : 0.7,
          transition: "opacity 0.3s ease",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "12px 14px",
          transform: hovered ? "translateY(0)" : "translateY(5px)",
          opacity: hovered ? 1 : 0.85,
          transition: "transform 0.3s ease, opacity 0.3s ease",
        }}
      >
        {cell.badge && (
          <span
            style={{
              display: "block",
              fontSize: "9px",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: cell.badge === "new" ? "#89D1D1" : "#908FDB",
              border: `1px solid ${cell.badge === "new" ? "#89D1D180" : "#908FDB80"}`,
              borderRadius: 4,
              padding: "2px 6px",
              marginBottom: 4,
              width: "fit-content",
            }}
          >
            {cell.badge}
          </span>
        )}
        <p
          style={{
            margin: 0,
            fontSize: 13,
            fontWeight: 700,
            color: "white",
            lineHeight: 1.3,
          }}
        >
          {cell.title}
        </p>
        <p
          style={{
            margin: "2px 0 0",
            fontSize: 10,
            color: "rgba(255,255,255,0.6)",
            lineHeight: 1.3,
          }}
        >
          {cell.category}
        </p>
      </div>
    </motion.div>
  );
}

const imageCells = cells.filter((c) => c.type === "image");

// ── Header card (shared between mobile + tablet) ──────────────────────────────
function HeaderCard({ className = "", children }) {
  return (
    <motion.div
      className={`glass rounded-2xl overflow-hidden ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      style={{ position: "relative" }}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        style={{
          position: "absolute",
          inset: -2,
          borderRadius: 18,
          background:
            "conic-gradient(from 0deg, transparent 60%, #89D1D1 75%, #908FDB 85%, transparent 100%)",
          opacity: 0.35,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 1,
          borderRadius: 16,
          backdropFilter: "blur(12px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </motion.div>
  );
}

export default function PortfolioSection() {
  return (
    <section className="mt-32" id="portfolio">
      <motion.div
        className="max-w-4xl mx-auto mt-12 px-4"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 280, damping: 70 }}
      >
        {/* ── Mobile (< sm) ── */}
        <div className="sm:hidden">
          <HeaderCard className="p-5 mb-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-[#89D1D1] font-semibold tracking-widest uppercase mb-1">
                  My Portfolio
                </p>
                <SkillTicker />
              </div>
              <div className="flex gap-4">
                <TickerStat value={totalProjects} label="Projects" />
                <TickerStat value={uniqueCategories} label="Categories" />
              </div>
            </div>
            <motion.a
              href="/work"
              className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-white hover:text-[#89D1D1] transition-colors"
              whileHover={{ x: 4 }}
            >
              View All Work
              <motion.span
                animate={{ x: [0, 3, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <ArrowRightIcon className="size-3" />
              </motion.span>
            </motion.a>
          </HeaderCard>
          <div className="flex flex-col gap-3">
            {imageCells.map((cell, i) => (
              <MobileImageCard key={i} cell={cell} index={i} />
            ))}
          </div>
          <div className="flex flex-col gap-3 mt-3">
            <a
              href="https://www.instagram.com/sonn.chidiya/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn glass flex items-center justify-center gap-2"
            >
              @sonn.chidiya — Instagram{" "}
              <ExternalLinkIcon className="size-4 shrink-0" />
            </a>
            <a
              href="https://www.youtube.com/@TheGhostByteGaming?sub_confirmation=1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn glass flex items-center justify-center gap-2"
            >
              Ghost Byte Channel{" "}
              <ExternalLinkIcon className="size-4 shrink-0" />
            </a>
          </div>
        </div>

        {/* ── Tablet (sm → lg) ── */}
        <div className="hidden sm:block lg:hidden">
          <HeaderCard className="p-6 mb-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-[#89D1D1] font-semibold tracking-widest uppercase mb-1">
                  My Portfolio
                </p>
                <SkillTicker />
              </div>
              <div className="flex gap-6">
                <TickerStat value={totalProjects} label="Projects" />
                <TickerStat value={uniqueCategories} label="Categories" />
              </div>
              <motion.a
                href="/work"
                className="flex items-center gap-1.5 text-xs font-semibold text-white hover:text-[#89D1D1] transition-colors"
                whileHover={{ x: 4 }}
              >
                View All Work
                <motion.span
                  animate={{ x: [0, 3, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <ArrowRightIcon className="size-3" />
                </motion.span>
              </motion.a>
            </div>
          </HeaderCard>
          <div className="grid grid-cols-2 gap-3">
            {imageCells.map((cell, i) => (
              <TabletImageCard key={i} cell={cell} index={i} />
            ))}
          </div>
          <div className="flex gap-3 mt-3">
            <a
              href="https://www.instagram.com/sonn.chidiya/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn glass flex items-center justify-center gap-2 flex-1"
            >
              @sonn.chidiya — Instagram{" "}
              <ExternalLinkIcon className="size-4 shrink-0" />
            </a>
            <a
              href="https://www.youtube.com/@TheGhostByteGaming?sub_confirmation=1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn glass flex items-center justify-center gap-2 flex-1"
            >
              Ghost Byte Channel{" "}
              <ExternalLinkIcon className="size-4 shrink-0" />
            </a>
          </div>
        </div>

        {/* ── Desktop (lg+): bento grid ── */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-3 grid-rows-3 gap-3 h-[520px]">
            {cells.map((cell, i) => (
              <BentoCell key={i} cell={cell} index={i} />
            ))}
          </div>
          <div className="flex gap-3 mt-4">
            <a
              href="https://www.instagram.com/sonn.chidiya/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn glass flex items-center justify-center gap-2 flex-1"
            >
              @sonn.chidiya — Instagram{" "}
              <ExternalLinkIcon className="size-4 shrink-0" />
            </a>
            <a
              href="https://www.youtube.com/@TheGhostByteGaming?sub_confirmation=1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn glass flex items-center justify-center gap-2 flex-1"
            >
              Ghost Byte Channel{" "}
              <ExternalLinkIcon className="size-4 shrink-0" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
