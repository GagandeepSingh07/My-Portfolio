import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <>
      <motion.div
        className="fixed inset-0 overflow-hidden -z-20 pointer-events-none"
        initial={{ opacity: 0.4 }}
        whileInView={{ opacity: 0.5 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute rounded-full top-80 left-2/5 -translate-x-1/2 size-130 bg-[#89D1D1] blur-[100px]" />
        <div className="absolute rounded-full top-80 right-0 -translate-x-1/2 size-130 bg-[#908FDB] blur-[100px]" />
        <div className="absolute rounded-full top-0 left-1/2 -translate-x-1/2 size-130 bg-[#89D1D1] blur-[100px]" />
      </motion.div>
      <motion.section className="flex flex-col items-center" id="home">
        <motion.div
          className="flex items-center gap-3 mt-32"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.2,
            type: "spring",
            stiffness: 320,
            damping: 70,
            mass: 1,
          }}
        >
          <p>Hi, I'm Gagandeep Singh</p>
          <button className="btn glass py-1 px-3 text-xs">
            Available for Work
          </button>
        </motion.div>
        <motion.h1
          className="text-center text-4xl md:text-6xl/19 mt-4 font-semibold tracking-tight max-w-3xl"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
        >
          A Graphic Designer and Visual Storyteller
        </motion.h1>
        <motion.p
          className="text-center text-gray-100 text-base max-w-md mt-6"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.2,
            type: "spring",
            stiffness: 320,
            damping: 70,
            mass: 1,
          }}
        >
          Passionate in creating visually captivating design that make a
          difference. Transforming ideas into beautiful visuals that leave a
          lasting impression.
        </motion.p>

        <motion.div
          className="flex flex-col md:flex-row max-md:w-full items-center gap-4 md:gap-3 mt-6"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
        >
          <a
            href="/work"
            className="btn max-md:w-full glass flex items-center justify-center py-3"
          >
            View Full Portfolio
          </a>
          <a
            href="https://drive.google.com/file/d/1VUl3psB8Pkk5g15UYmqgui1bkNQgVhXN/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn max-md:w-full glass flex items-center justify-center py-3"
          >
            View Resume
          </a>
        </motion.div>
      </motion.section>
    </>
  );
}
