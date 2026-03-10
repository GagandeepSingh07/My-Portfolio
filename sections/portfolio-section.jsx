'use client';

import SectionTitle from "@/components/section-title";
import { ExternalLinkIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

// Scattered polaroid-style photo grid with hover lift effect
function PortfolioPreview() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const photos = [
    {
      src: "/images/portfolio/social-media/cosmogen-shampoo.jpg",
      // top-left
      style: {
        top: 0, left: 0, width: "52%", height: "52%",
        transform: "rotate(-4deg)",
        transformOrigin: "center center",
        borderRadius: 10,
        zIndex: 1,
      },
      hoverStyle: { transform: "rotate(-6deg) translate(-3px, -5px)", zIndex: 10 },
    },
    {
      src: "/images/portfolio/3d-work/procedural-planet.png",
      // top-right
      style: {
        top: 0, right: 0, width: "52%", height: "52%",
        transform: "rotate(5deg)",
        transformOrigin: "center center",
        borderRadius: 10,
        zIndex: 2,
      },
      hoverStyle: { transform: "rotate(7deg) translate(3px, -5px)", zIndex: 10 },
    },
    {
      src: "/images/portfolio/logos/logo-competition-2.png",
      // bottom-left
      style: {
        bottom: 0, left: 0, width: "52%", height: "52%",
        transform: "rotate(3deg)",
        transformOrigin: "center center",
        borderRadius: 10,
        zIndex: 2,
      },
      hoverStyle: { transform: "rotate(5deg) translate(-3px, 5px)", zIndex: 10 },
    },
    {
      src: "/images/portfolio/3d-work/interior-design.png",
      // bottom-right
      style: {
        bottom: 0, right: 0, width: "52%", height: "52%",
        transform: "rotate(-3deg)",
        transformOrigin: "center center",
        borderRadius: 10,
        zIndex: 1,
      },
      hoverStyle: { transform: "rotate(-5deg) translate(3px, 5px)", zIndex: 10 },
    },
  ];

  return (
    <div
      className="mx-auto cursor-default"
      style={{ width: 200, height: 200, position: "relative" }}
    >
      {photos.map((photo, i) => (
        <div
          key={i}
          onMouseEnter={() => setHoveredIdx(i)}
          onMouseLeave={() => setHoveredIdx(null)}
          style={{
            position: "absolute",
            overflow: "hidden",
            boxShadow: hoveredIdx === i
              ? "0 12px 32px rgba(0,0,0,0.5)"
              : "0 4px 14px rgba(0,0,0,0.35)",
            border: "2px solid rgba(255,255,255,0.15)",
            transition: "transform 0.35s ease, box-shadow 0.35s ease, z-index 0s",
            ...photo.style,
            ...(hoveredIdx === i ? photo.hoverStyle : {}),
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photo.src}
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
              transition: "opacity 0.35s ease",
              opacity: hoveredIdx === null ? 0.82 : hoveredIdx === i ? 1 : 0.5,
            }}
          />
        </div>
      ))}
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
        <PortfolioPreview />

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
