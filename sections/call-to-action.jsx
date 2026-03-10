import { ArrowRightIcon, MailIcon } from "lucide-react";
import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <motion.div
      className="flex flex-col max-w-5xl mt-40 px-4 mx-auto items-center justify-center text-center py-16 rounded-xl glass"
      id="contact"
      initial={{ y: 150, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
    >
      <motion.h2
        className="text-2xl md:text-4xl font-medium mt-2"
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
      >
        Let's Work Together!
      </motion.h2>
      <motion.p
        className="mt-4 text-sm max-w-md"
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 200, damping: 70, mass: 1 }}
      >
        Have a project in mind? Let's collaborate to create stunning visuals
        that tell your story and captivate your audience. Get in touch to
        discuss your creative needs!
      </motion.p>
      <motion.div
        className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto"
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
      >
        <a
          href="/work"
          className="btn glass transition-none flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20"
          data-cursor="link"
        >
          View My Work
          <ArrowRightIcon className="size-4" />
        </a>
        <a
          href="mailto:singhgagan40951@gmail.com"
          className="btn glass transition-none flex items-center justify-center gap-2"
          data-cursor="mail"
        >
          <MailIcon className="size-4" />
          Email Me
        </a>
        <a
          href="tel:+918427505176"
          className="btn glass transition-none flex items-center justify-center gap-2"
          data-cursor="phone"
        >
          Call Now
          <ArrowRightIcon className="size-4" />
        </a>
      </motion.div>
    </motion.div>
  );
}
