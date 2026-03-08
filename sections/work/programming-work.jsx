'use client';

import { motion } from 'framer-motion';
import { Code, Globe, Database, Terminal } from 'lucide-react';

const programmingProjects = [
    {
        icon: <Code className="text-white" size={28} />,
        title: 'React Projects',
        projects: [
            {
                name: 'E-Commerce Platform',
                description: 'Full-featured online shopping platform with cart and checkout',
                tech: 'React, Redux, Stripe API',
                link: '#'
            },
            {
                name: 'Task Manager Dashboard',
                description: 'Interactive dashboard for managing tasks and projects',
                tech: 'React, Firebase, Material-UI',
                link: '#'
            }
        ]
    },
    {
        icon: <Globe className="text-white" size={28} />,
        title: 'Next.js Projects',
        projects: [
            {
                name: 'Portfolio Website',
                description: 'Modern portfolio with animations and responsive design',
                tech: 'Next.js, Tailwind CSS, Framer Motion',
                link: '#'
            },
            {
                name: 'Blog Platform',
                description: 'Content management system with markdown support',
                tech: 'Next.js, MDX, Vercel',
                link: '#'
            }
        ]
    },
    {
        icon: <Database className="text-white" size={28} />,
        title: 'Full Stack Projects',
        projects: [
            {
                name: 'Social Media App',
                description: 'Real-time chat and social networking platform',
                tech: 'Node.js, Express, MongoDB, Socket.io',
                link: '#'
            },
            {
                name: 'API Service',
                description: 'RESTful API with authentication and authorization',
                tech: 'Node.js, JWT, PostgreSQL',
                link: '#'
            }
        ]
    },
    {
        icon: <Terminal className="text-white" size={28} />,
        title: 'JavaScript Projects',
        projects: [
            {
                name: 'Weather App',
                description: 'Real-time weather information with geolocation',
                tech: 'JavaScript, OpenWeather API, CSS3',
                link: '#'
            },
            {
                name: 'Calculator App',
                description: 'Scientific calculator with memory functions',
                tech: 'Vanilla JavaScript, HTML5, CSS3',
                link: '#'
            }
        ]
    }
];

export default function ProgrammingWork() {
    return (
        <section className="max-w-5xl mx-auto mt-32">
            <motion.div 
                className="text-center mb-12"
                initial={{ y: 120, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
            >
                <h2 className="text-3xl font-semibold text-white">
                    Programming Projects
                </h2>
                <p className="mt-4 text-gray-100 text-sm/7 max-w-md mx-auto">
                    Web development projects showcasing modern technologies and best practices
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {programmingProjects.map((category, index) => (
                    <motion.div 
                        key={index}
                        className="glass rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1"
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                            delay: index * 0.1,
                            type: "spring", 
                            stiffness: 260, 
                            damping: 70, 
                            mass: 1 
                        }}
                    >
                        <div className="flex items-center p-6 gap-4 border-b border-white/10">
                            <div className="w-12 h-12 flex items-center justify-center glass rounded-xl">
                                {category.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-white">
                                {category.title}
                            </h3>
                        </div>

                        <div className="p-6 flex flex-col gap-4">
                            {category.projects.map((project, pIndex) => (
                                <div 
                                    key={pIndex}
                                    className="p-4 glass rounded-xl transition-all duration-300 hover:bg-white/15"
                                >
                                    <h4 className="text-base font-semibold text-white mb-2">
                                        {project.name}
                                    </h4>
                                    <p className="text-sm text-gray-100 leading-relaxed mb-2">
                                        {project.description}
                                    </p>
                                    <p className="text-xs text-gray-100/60 mb-3">
                                        {project.tech}
                                    </p>
                                    <a 
                                        href={project.link}
                                        className="inline-flex items-center gap-2 text-white text-sm hover:underline"
                                    >
                                        View Project →
                                    </a>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
