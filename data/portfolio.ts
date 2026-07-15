import { PortfolioData } from "@/lib/types";
import { projects } from "./projects";
import { skills } from "./skills";
import { experience } from "./experience";
import { education } from "./education";
import { achievements } from "./achievements";
import { socials } from "./socials";
import { certifications } from "./certifications";

export const portfolioData: PortfolioData = {
  person: {
    name: "Trishna Tanaya",
    role: "Software Engineer",
    title: "Building elegant systems with purpose",
    location: "Bhubaneswar, Odisha",
    email: "trishna0049@gmail.com",
    availability: "Open to engineering roles",
    summary:
      "B.Tech Information Technology student at VIT Vellore. Full-stack developer passionate about building scalable, AI-powered applications.",
    bio: [
      "Hi, I'm Trishna Tanaya, a B.Tech Information Technology student at VIT Vellore and a full-stack software developer passionate about building scalable, AI-powered applications. I enjoy working across modern web technologies, backend systems, and machine learning to create products that solve real-world problems. From real-time collaboration platforms to enterprise AI solutions and e-commerce products, I love turning ideas into polished user experiences. I'm always eager to learn, build, and contribute to impactful engineering teams.",
    ],
    currentFocus: "Building real-time collaborative tools and distributed systems.",
    resumeUrl: "/resume",
    avatar: "/illustrations/hero-orb.svg",
    stats: [
      { label: "CGPA", value: "8.27" },
      { label: "Projects", value: "5" },
    ],
  },
  nav: [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "achievements", label: "Achievements" },
    { id: "contact", label: "Contact" },
    { id: "resume", label: "Resume" },
  ],
  hero: {
    greeting: "Hi, I'm",
    subtitle: "B.Tech Information Technology student at VIT Vellore. Building scalable, AI-powered applications.",
    roles: [
      "Software Engineer",
      "Full Stack Developer",
      "AI/ML Enthusiast",
    ],
    actions: [
      { label: "View Projects", href: "#projects", variant: "primary" },
      { label: "Download Resume", href: "/resume", variant: "secondary" },
      { label: "Get in Touch", href: "#contact", variant: "outline" },
    ],
    social: socials,
  },
  about: {
    title: "About Me",
    bio: [
      "Hi, I'm Trishna Tanaya, a B.Tech Information Technology student at VIT Vellore and a full-stack software developer passionate about building scalable, AI-powered applications. I enjoy working across modern web technologies, backend systems, and machine learning to create products that solve real-world problems. From real-time collaboration platforms to enterprise AI solutions and e-commerce products, I love turning ideas into polished user experiences. I'm always eager to learn, build, and contribute to impactful engineering teams.",
    ],
    currentFocus: "Building real-time collaborative tools and distributed systems.",
    interests: ["Full-Stack Development", "AI & NLP", "Distributed Systems", "Data Analytics"],
  },
  projects,
  skills,
  experience,
  education,
  achievements,
  certifications,
  contact: {
    heading: "Get in Touch",
    blurb:
      "Feel free to reach out for collaborations, opportunities, or just to connect.",
    links: socials,
  },
};
