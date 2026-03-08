'use client';

import SectionTitle from "@/components/section-title";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function ProgrammingSection() {
  const [activeTab, setActiveTab] = useState(0);

  const programmingSkills = [
    {
      category: "Core",
      skills: [
        { name: "HTML5", description: "Semantic HTML, Accessibility" },
        { name: "CSS3", description: "SASS, Responsive Design" },
        { name: "JavaScript", description: "ES6+, DOM Manipulation" },
      ],
    },
    {
      category: "Frameworks",
      skills: [
        { name: "Bootstrap", description: "Bootstrap 5, Components" },
        { name: "Tailwind CSS", description: "Utility-first, Responsive" },
        { name: "ReactJS", description: "Component-based, State Management" },
        { name: "NextJS", description: "Server-side Rendering, Routing" },
        { name: "Swiper.js", description: "Sliders, Carousels" },
        { name: "Font Awesome", description: "Icon Library, UI Elements" },
      ],
    },
    {
      category: "Languages",
      skills: [
        { name: "Python", description: "Django, Flask, Data Science" },
        { name: "C++", description: "STL, Algorithms" },
        { name: "Java", description: "Spring Boot, OOP" },
        { name: "PHP", description: "Laravel, WordPress" },
      ],
    },
    {
      category: "Tools",
      skills: [
        { name: "Git", description: "Version Control, GitHub" },
        { name: "GitHub", description: "Repositories, CI/CD" },
        { name: "GitHub Desktop", description: "GUI, Simplified Workflow" },
        { name: "VS Code", description: "Extensions, Debugging" },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", description: "REST APIs, Event-driven" },
        { name: "Express.js", description: "Routing, Middleware" },
        { name: "TypeScript", description: "Type Safety, Backend" },
        { name: "MongoDB", description: "NoSQL, Aggregation" },
        { name: "Mongoose", description: "ODM, Schema Validation" },
        { name: "MySQL", description: "Joins, Indexing" },
        { name: "JWT", description: "Auth, Token Security" },
        { name: "bcrypt", description: "Password Hashing" },
        { name: "CORS", description: "Cross-Origin Requests" },
        { name: "Cloudinary", description: "Media Management" },
      ],
    },
    {
      category: "Docs",
      skills: [
        { name: "jsPDF", description: "PDF Generation" },
        { name: "html2canvas", description: "HTML to Canvas/Image" },
      ],
    },
    {
      category: "Deployment",
      skills: [
        { name: "Vercel", description: "Static Hosting, Serverless" },
        { name: "Netlify", description: "JAMstack, Continuous Deployment" },
        { name: "Render", description: "PaaS, Docker" },
        { name: "Apache", description: "Web Server, Configuration" },
      ],
    },
  ];

  const active = programmingSkills[activeTab];

  return (
    <section className="mt-32" id="programming">
      <SectionTitle
        title="Programming Skills"
        description="Technologies & Tools I Use for Development"
      />

      <motion.div
        className="max-w-3xl mx-auto mt-10 px-4"
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
      >
        {/* Tab Bar */}
        <div className="flex flex-wrap gap-2 mb-6">
          {programmingSkills.map((cat, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 ${
                activeTab === index
                  ? "text-white"
                  : "text-gray-400 hover:text-gray-200"
              }`}
            >
              {activeTab === index && (
                <motion.span
                  layoutId="tab-pill"
                  className="absolute inset-0 rounded-full glass border border-white/20"
                  transition={{ type: "spring", stiffness: 400, damping: 35 }}
                />
              )}
              <span className="relative z-10">{cat.category}</span>
            </button>
          ))}
        </div>

        {/* Skills Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="glass rounded-2xl p-6"
          >
            <p className="text-xs text-gray-400 mb-4 uppercase tracking-widest">
              {active.skills.length} technologies
            </p>
            <div className="flex flex-wrap gap-3">
              {active.skills.map((skill, i) => (
                <div
                  key={i}
                  className="px-4 py-2.5 rounded-xl bg-white/8 border border-white/10 hover:bg-white/15 hover:-translate-y-0.5 transition duration-200"
                >
                  <p className="text-sm font-medium text-white">{skill.name}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{skill.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
