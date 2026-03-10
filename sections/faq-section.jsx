import SectionTitle from "@/components/section-title";
import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function FaqSection() {
  const [isOpen, setIsOpen] = useState(false);
  const data = [
    {
      question: "What types of design projects do you take on?",
      answer:
        "I work on brand identity design, social media graphics, print design, video editing, motion graphics, promotional content, and UI/UX design. If you have a unique project in mind, feel free to reach out!",
    },
    {
      question: "What is your typical turnaround time?",
      answer:
        "Project timelines vary based on complexity and scope. Simple graphics typically take 2-3 days, while comprehensive branding or video projects may take 1-3 weeks. Rush delivery is available for an additional fee.",
    },
    {
      question: "Do you offer revisions?",
      answer:
        "Yes! Each package includes a set number of revision rounds to ensure you're completely satisfied with the final product. Additional revisions can be accommodated if needed.",
    },
    {
      question: "What file formats will I receive?",
      answer:
        "You'll receive all source files and final outputs in industry-standard formats (PNG, JPG, PDF, SVG for graphics; MP4, MOV for videos). Specific formats can be customized based on your needs.",
    },
    {
      question: "Can you work with existing brand guidelines?",
      answer:
        "Absolutely! I can seamlessly integrate with your existing brand guidelines, or help develop new ones if you're starting from scratch.",
    },
    {
      question: "What software do you use?",
      answer:
        "I work with industry-standard tools including Adobe Creative Suite, Photoshop, CorelDraw, Davinci Resolve, After Effects, Premiere Pro, Figma and other professional design and video editing software.",
    },
  ];

  return (
    <section className="mt-32" id="faq">
      <SectionTitle
        title="Frequently Asked Questions"
        description="Common questions about my services, process, and how we can work together."
      />
      <div className="mx-auto mt-12 space-y-4 w-full max-w-xl">
        {data.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col glass rounded-md"
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: `${index * 0.15}`,
              type: "spring",
              stiffness: 320,
              damping: 70,
              mass: 1,
            }}
          >
            <h3
              className="flex cursor-pointer hover:bg-white/10 transition items-start justify-between gap-4 p-4 font-medium"
              onClick={() => setIsOpen(isOpen === index ? null : index)}
              data-accordion
              data-cursor="accordion"
            >
              {item.question}
              <ChevronDownIcon
                className={`size-5 transition-all shrink-0 duration-400 ${isOpen === index ? "rotate-180" : ""}`}
              />
            </h3>
            <p
              className={`px-4 text-sm transition-all duration-400 overflow-hidden ${isOpen === index ? "pt-2 pb-4 max-h-80" : "max-h-0"}`}
            >
              {item.answer}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
