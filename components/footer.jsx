"use client";
import {
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
  MailIcon,
  PhoneIcon,
  GithubIcon,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

// Behance Icon
const BehanceIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 800 400"
    className="size-5"
  >
    <text
      x="50%"
      y="70%"
      textAnchor="middle"
      dominantBaseline="middle"
      fontFamily="Arial, Helvetica, sans-serif"
      fontSize="700"
      fill="currentColor"
    >
      Bē
    </text>
  </svg>
);

// Gumroad Icon (Shopping/Store)
const GumroadIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="size-5"
  >
    <circle cx="9" cy="21" r="1" />
    <circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Portfolio", href: "/#portfolio" },
    { name: "Work", href: "/work" },
    {
      name: "Resume",
      href: "https://drive.google.com/file/d/1VUl3psB8Pkk5g15UYmqgui1bkNQgVhXN/view?usp=sharing",
    },
  ];

  const socialLinks = [
    {
      icon: LinkedinIcon,
      href: "https://www.linkedin.com/in/singhgagan07/",
      label: "LinkedIn",
    },
    {
      icon: InstagramIcon,
      href: "https://www.instagram.com/gagan.designs.07",
      label: "Instagram (Design)",
    },
    {
      icon: GithubIcon,
      href: "https://github.com/GagandeepSingh07",
      label: "GitHub",
    },
    {
      icon: YoutubeIcon,
      href: "https://www.youtube.com/@TheGhostByteGaming",
      label: "YouTube",
    },
    {
      icon: BehanceIcon,
      href: "https://www.behance.net/singhgagan07",
      label: "Behance",
    },
    {
      icon: GumroadIcon,
      href: "https://gagandeepdesigns.gumroad.com/",
      label: "Gumroad",
    },
  ];

  return (
    <motion.footer
      className="flex flex-col items-center px-4 md:px-16 lg:px-24 justify-center w-full pt-16 mt-40 glass border-0"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Link href="/" className="text-2xl font-bold tracking-tight">
        <span className="text-white">Portfolio</span>
        <span className="text-[#89D1D1]">.</span>
      </Link>

      <p className="text-center text-gray-200 max-w-md mt-6">
        Entry-level graphic designer & video editor with a strong foundation in
        various creative fields.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-5xl mt-12">
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <div className="flex flex-col gap-3">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="py-1.5 transition hover:text-gray-300 text-sm"
                target={link.href.startsWith("http") ? "_blank" : "_self"}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : ""}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
          <div className="flex flex-col gap-3">
            <a
            href="mailto:singhgagan40951@gmail.com"
            className="flex items-center gap-2 py-1.5 text-sm hover:text-gray-300 transition"
            >
            <MailIcon className="size-4" />
            singhgagan40951@gmail.com
            </a>
            <a
            href="tel:+918427505176"
            className="flex items-center gap-2 py-1.5 text-sm hover:text-gray-300 transition"
            >
            <PhoneIcon className="size-4" />
            +91 84275-05176
            </a>
          </div>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
          <div className="flex flex-wrap gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:-translate-y-0.5 text-gray-200 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="size-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <hr className="w-full border-white/20 mt-12" />

      <div className="flex flex-col md:flex-row items-center w-full justify-center gap-4 py-6">
        <p className="text-sm text-gray-300">
          © {currentYear} Gagandeep Singh. All rights reserved.
        </p>
        {/* <p className="text-sm text-gray-300">Designed & Built with 🩵</p> */}
      </div>
    </motion.footer>
  );
}
