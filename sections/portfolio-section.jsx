import SectionTitle from "@/components/section-title";
import { ExternalLinkIcon, ImageIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function PortfolioSection() {
  const ref = useRef([]);

  return (
    <section className="mt-32" id="portfolio">
      <motion.div
        className="max-w-4xl mx-auto mt-12 glass p-12 rounded-2xl text-center"
        initial={{ y: 150, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
      >
        <ImageIcon className="size-20 mx-auto mb-6 text-gray-300" />
        <SectionTitle
          title="My Portfolio"
          description="Here's a collection of my latest work in graphic design, motion graphics, video editing, and web design. These projects showcase my skills, creativity, and attention to detail."
        />
        {/* <motion.div
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
        >
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <a
              href="/work"
              className="btn glass flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20"
            >
              View Full Portfolio →
            </a>
          </div>
        </motion.div> */}
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
        >
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a
              href="/work"
              className="btn glass flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20"
            >
              View Full Portfolio →
            </a>
            <a
              href="https://www.instagram.com/sonn.chidiya/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn glass flex items-center gap-2"
            >
              @sonn.chidiya-Instagram
              <ExternalLinkIcon className="size-4" />
            </a>
            <a
              href="https://www.youtube.com/@TheGhostByteGaming?sub_confirmation=1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn glass flex items-center gap-2"
            >
              Ghost Byte Channel
              <ExternalLinkIcon className="size-4" />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
