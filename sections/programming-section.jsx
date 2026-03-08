import SectionTitle from "@/components/section-title";
import { CodeIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function ProgrammingSection() {
  const refs = useRef([]);

  const programmingSkills = [
    {
      category: "Core Technologies",
      skills: [
        { name: "HTML5", description: "Semantic HTML, Accessibility" },
        { name: "CSS3", description: "SASS, Responsive Design" },
        { name: "JavaScript", description: "ES6+, DOM Manipulation" },
      ],
    },
    {
      category: "Frameworks & Libraries",
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
      category: "Programming Languages",
      skills: [
        { name: "Python", description: "Django, Flask, Data Science" },
        { name: "C++", description: "STL, Algorithms" },
        { name: "Java", description: "Spring Boot, OOP" },
        { name: "PHP", description: "Laravel, WordPress" },
      ],
    },
    {
      category: "Development Tools",
      skills: [
        { name: "Git", description: "Version Control, GitHub" },
        { name: "GitHub", description: "Repositories, CI/CD" },
        { name: "GitHub Desktop", description: "GUI App, Simplified Workflow" },
        { name: "VS Code", description: "Extensions, Debugging" },
      ],
    },
    {
      category: "Backend & APIs",
      skills: [
        { name: "Node.js", description: "REST APIs, Event-driven Architecture" },
        { name: "Express.js", description: "Routing, Middleware" },
        { name: "TypeScript", description: "Type Safety, Backend Development" },
        // { name: "Django", description: "ORM, REST Framework" },
        // { name: "Spring Boot", description: "Microservices, REST APIs" },
        { name: "MongoDB", description: "NoSQL, Aggregation" },
        { name: "Mongoose", description: "ODM, Schema Validation" },
        { name: "MySQL", description: "Joins, Indexing" },
        { name: "JWT", description: "Authentication, Token-based Security" },
        { name: "bcrypt", description: "Password Hashing, Security" },
        { name: "CORS", description: "Cross-Origin Requests" },
        { name: "Cloudinary", description: "Media Management, Image Uploads" },
        // { name: "PostgreSQL", description: "Advanced SQL, Optimization" },
        // { name: "Redis", description: "Caching, Pub/Sub" }
      ],
    },
    {
      category: "Document Generation",
      skills: [
        { name: "jsPDF", description: "PDF Generation, Documents" },
        { name: "html2canvas", description: "HTML to Canvas/Image" },
      ],
    },
    {
      category: "Deployment & Hosting",
      skills: [
        { name: "Vercel", description: "Static Hosting, Serverless" },
        { name: "Netlify", description: "JAMstack, Continuous Deployment" },
        { name: "Render", description: "PaaS, Docker" },
        { name: "Apache", description: "Web Server, Configuration" },
      ],
    },
  ];

  return (
    <section className="mt-32" id="programming">
      <SectionTitle
        title="Programming Skills"
        description="Technologies & Tools I Use for Development"
      />

      <div className="max-w-6xl mx-auto mt-12 space-y-12">
        {programmingSkills.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: categoryIndex * 0.1,
              type: "spring",
              stiffness: 320,
              damping: 70,
              mass: 1,
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <CodeIcon className="size-5" />
              <h3 className="text-xl font-semibold text-white">
                {category.category}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  ref={(el) => {
                    const index = categoryIndex * 10 + skillIndex;
                    refs.current[index] = el;
                  }}
                  className="glass p-4 rounded-lg hover:-translate-y-0.5 transition duration-300"
                  style={{ opacity: 0 }}
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: skillIndex * 0.05,
                    type: "spring",
                    stiffness: 320,
                    damping: 70,
                    mass: 1,
                  }}
                >
                  <h4 className="text-base font-medium text-white mb-2">
                    {skill.name}
                  </h4>
                  <p className="text-sm text-gray-300">{skill.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
