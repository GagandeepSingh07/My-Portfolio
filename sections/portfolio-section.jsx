'use client';

import SectionTitle from "@/components/section-title";
import { ExternalLinkIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

// Option 3 — Fanned Cards with hover animation
function FannedCards() {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="mx-auto cursor-default"
      style={{ width: 160, height: 160 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <svg width="160" height="160" viewBox="0 0 120 120" fill="none">
        <defs>
          <linearGradient id="cardGradPF" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#89D1D1" />
            <stop offset="100%" stopColor="#908FDB" />
          </linearGradient>
        </defs>
        {/* Bottom card */}
        <rect x="30" y="46" width="64" height="44" rx="8"
          fill="#908FDB" fillOpacity={hovered ? 0.32 : 0.22}
          stroke="#908FDB" strokeOpacity={hovered ? 0.6 : 0.4} strokeWidth="1.2"
          style={{
            transition: "all 0.35s ease",
            transform: hovered ? "rotate(-13deg)" : "rotate(-8deg)",
            transformOrigin: "62px 68px",
          }}
        />
        {/* Middle card */}
        <rect x="28" y="42" width="64" height="44" rx="8"
          fill="#89D1D1" fillOpacity={hovered ? 0.30 : 0.22}
          stroke="#89D1D1" strokeOpacity={hovered ? 0.65 : 0.5} strokeWidth="1.2"
          style={{
            transition: "all 0.35s ease",
            transform: hovered ? "rotate(-5deg)" : "rotate(-3deg)",
            transformOrigin: "60px 64px",
          }}
        />
        {/* Top card — lifts on hover */}
        <rect x="28" y="38" width="64" height="44" rx="8"
          fill="url(#cardGradPF)" fillOpacity="0.28"
          stroke="white" strokeOpacity={hovered ? 0.75 : 0.55} strokeWidth="1.4"
          style={{
            transition: "all 0.35s ease",
            transform: hovered ? "translateY(-6px)" : "translateY(0)",
          }}
        />
        {/* Lines on top card */}
        <line x1="38" y1="52" x2="70" y2="52"
          stroke="white" strokeOpacity={hovered ? 0.6 : 0.4} strokeWidth="1.5" strokeLinecap="round"
          style={{ transition: "all 0.35s ease", transform: hovered ? "translateY(-6px)" : "translateY(0)" }}
        />
        <line x1="38" y1="60" x2="58" y2="60"
          stroke="white" strokeOpacity={hovered ? 0.4 : 0.25} strokeWidth="1.2" strokeLinecap="round"
          style={{ transition: "all 0.35s ease", transform: hovered ? "translateY(-6px)" : "translateY(0)" }}
        />
      </svg>
    </div>
  );
}

export default function PortfolioSection() {
  return (
    <section className="mt-32" id="portfolio">
      <motion.div
        className="max-w-4xl mx-auto mt-12 glass p-10 md:p-12 rounded-2xl text-center"
        initial={{ y: 150, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
      >
        <FannedCards />

        <SectionTitle
          title="My Portfolio"
          description="Here's a collection of my latest work in graphic design, motion graphics, video editing, and web design. These projects showcase my skills, creativity, and attention to detail."
        />

        <motion.div
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
          className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4"
        >
          <a
            href="/work"
            className="btn glass flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20"
          >
            View Full Portfolio →
          </a>
          <a
            href="https://www.instagram.com/sonn.chidiya/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn glass flex items-center justify-center gap-2"
          >
            @sonn.chidiya — Instagram
            <ExternalLinkIcon className="size-4 shrink-0" />
          </a>
          <a
            href="https://www.youtube.com/@TheGhostByteGaming?sub_confirmation=1"
            target="_blank"
            rel="noopener noreferrer"
            className="btn glass flex items-center justify-center gap-2"
          >
            Ghost Byte Channel
            <ExternalLinkIcon className="size-4 shrink-0" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
