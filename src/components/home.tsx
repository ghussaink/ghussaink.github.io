import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import HeroSection from "./HeroSection";
import ProjectShowcase from "./ProjectShowcase";
import SkillsDashboard from "./SkillsDashboard";
import ContactSection from "./ContactSection";
import { Button } from "./ui/button";

interface EducationItem {
  degree: string;
  university: string;
  years: string;
  specialization: string;
}

interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  contributions: string[];
  logo: string;
}

interface TestimonialItem {
  name: string;
  role: string;
  avatar: string;
  quote: string;
}

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Sample education data
  const educationData: EducationItem[] = [
    {
      degree: "Master of Science in Artificial Intelligence",
      university: "Stanford University",
      years: "2020-2022",
      specialization: "Deep Learning & Natural Language Processing",
    },
    {
      degree: "Bachelor of Science in Computer Science",
      university: "MIT",
      years: "2016-2020",
      specialization: "Machine Learning & Data Structures",
    },
  ];

  // Sample experience data
  const experienceData: ExperienceItem[] = [
    {
      company: "Google AI",
      role: "AI Research Engineer",
      duration: "Jan 2022 - Present",
      contributions: [
        "Developed and optimized large language models for enterprise applications",
        "Implemented MLOps pipelines reducing deployment time by 40%",
        "Led a team of 3 engineers in building an automated data labeling system",
      ],
      logo: "https://api.dicebear.com/7.x/avataaars/svg?seed=google",
    },
    {
      company: "OpenAI",
      role: "ML Engineering Intern",
      duration: "May 2021 - Aug 2021",
      contributions: [
        "Contributed to fine-tuning algorithms for GPT models",
        "Built evaluation frameworks for measuring model performance",
        "Optimized inference pipelines for production environments",
      ],
      logo: "https://api.dicebear.com/7.x/avataaars/svg?seed=openai",
    },
  ];

  // Sample testimonial data
  const testimonialData: TestimonialItem[] = [
    {
      name: "Dr. Sarah Chen",
      role: "AI Research Director, Google",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
      quote:
        "One of the most self-driven AI engineers I've mentored — always delivers exceptional results.",
    },
    {
      name: "Michael Rodriguez",
      role: "Senior ML Engineer, OpenAI",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
      quote:
        "Exceptional problem-solving skills and deep technical knowledge in ML systems.",
    },
    {
      name: "Prof. James Wilson",
      role: "Stanford University",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=james",
      quote:
        "A brilliant student with remarkable insights into cutting-edge AI research.",
    },
  ];

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // Apply theme to document body
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  // Animation variants for sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className={`min-h-screen bg-background ${isDarkMode ? "dark" : ""}`}>
      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border px-4 py-3">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-bold">AI.Engineer</div>
          <div className="flex items-center gap-6">
            <a
              href="#projects"
              className="hidden md:block hover:text-primary transition-colors"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="hidden md:block hover:text-primary transition-colors"
            >
              Skills
            </a>
            <a
              href="#education"
              className="hidden md:block hover:text-primary transition-colors"
            >
              Education
            </a>
            <a
              href="#experience"
              className="hidden md:block hover:text-primary transition-colors"
            >
              Experience
            </a>
            <a
              href="#contact"
              className="hidden md:block hover:text-primary transition-colors"
            >
              Contact
            </a>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section id="hero">
          <HeroSection />
        </section>

        {/* Projects Section */}
        <motion.section
          id="projects"
          className="py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            Featured Projects
          </h2>
          <ProjectShowcase />
        </motion.section>

        {/* Skills Section */}
        <motion.section
          id="skills"
          className="py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            Skills Dashboard
          </h2>
          <SkillsDashboard />
        </motion.section>

        {/* Education Section */}
        <motion.section
          id="education"
          className="py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                className="border border-border rounded-xl p-6 bg-card"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold">{item.degree}</h3>
                <p className="text-lg text-primary">{item.university}</p>
                <p className="text-muted-foreground">{item.years}</p>
                <p className="mt-2">Specialization: {item.specialization}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          id="experience"
          className="py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
          <div className="space-y-8">
            {experienceData.map((item, index) => (
              <motion.div
                key={index}
                className="border border-border rounded-xl p-6 bg-card"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full overflow-hidden bg-muted">
                    <img
                      src={item.logo}
                      alt={item.company}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{item.role}</h3>
                    <p className="text-primary">{item.company}</p>
                    <p className="text-sm text-muted-foreground">
                      {item.duration}
                    </p>
                  </div>
                </div>
                <ul className="list-disc pl-5 space-y-1">
                  {item.contributions.map((contribution, idx) => (
                    <li key={idx}>{contribution}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Testimonials Section */}
        <motion.section
          id="testimonials"
          className="py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            What People Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonialData.map((item, index) => (
              <motion.div
                key={index}
                className="border border-border rounded-xl p-6 bg-card"
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 rounded-full overflow-hidden bg-muted">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">{item.role}</p>
                  </div>
                </div>
                <blockquote className="italic text-muted-foreground">
                  "{item.quote}"
                </blockquote>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          className="py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
          <ContactSection />
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="bg-muted py-8 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-bold">AI Engineer</h3>
              <p className="text-muted-foreground">San Francisco, CA</p>
              <p className="text-muted-foreground">contact@aiengineer.dev</p>
            </div>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                className="hover:text-primary transition-colors"
              >
                Resume
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} AI Engineer. All rights reserved.
            </p>
            <p className="mt-1">
              Built with React, Tailwind CSS, and Framer Motion
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
