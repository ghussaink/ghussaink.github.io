// components/HeroSection.tsx
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "./ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

const heroVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delayChildren: 0.4,
      staggerChildren: 0.2,
    },
  },
};

const HeroSection = () => {
  const scrollToContact = () => {
    const section = document.getElementById("contact");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="py-20">
    <motion.section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 py-28 text-center bg-background"
      initial="hidden"
      animate="visible"
      variants={heroVariants}
    >
      {/* Background Blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden opacity-20">
        <div className="absolute bg-primary rounded-full w-72 h-72 top-20 left-10 blur-3xl animate-pulse" />
        <div className="absolute bg-secondary rounded-full w-60 h-60 bottom-10 right-10 blur-2xl animate-ping" />
      </div>

      <div className="max-w-3xl flex flex-col items-center space-y-6">
        <motion.div variants={heroVariants}>
          <Avatar className="h-32 w-32 border-4 border-primary shadow-md mb-4">
            <AvatarImage
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=aieng"
              alt="Avatar"
            />
            <AvatarFallback>AI</AvatarFallback>
          </Avatar>
        </motion.div>

        <motion.h1
          variants={heroVariants}
          className="text-4xl md:text-6xl font-extrabold"
        >
          Ghulam Hussain
        </motion.h1>

        <motion.h2
          variants={heroVariants}
          className="text-xl text-muted-foreground max-w-xl"
        >
          AI/ML Engineer | LLM Architect | Automation Specialist
        </motion.h2>

        <motion.p
          variants={heroVariants}
          className="text-lg text-muted-foreground max-w-2xl"
        >
          Building intelligent systems that scale — from raw data to real-world
          AI-powered impact.
        </motion.p>

        <motion.div
          variants={heroVariants}
          className="flex flex-wrap justify-center gap-4 pt-4"
        >
          <Button asChild size="lg" className="gap-2">
            <a href="/resume.pdf" download>
              <Download className="w-5 h-5" />
              Resume
            </a>
          </Button>

          <Button asChild variant="outline" size="lg" className="gap-2">
            <a
              href="https://github.com/gulamusen"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </Button>

          <Button asChild variant="outline" size="lg" className="gap-2">
            <a
              href="https://linkedin.com/in/gulamusen"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </Button>

          <Button
            onClick={scrollToContact}
            variant="secondary"
            size="lg"
            className="gap-2"
          >
            <Mail className="w-5 h-5" />
            Contact
          </Button>
        </motion.div>
      </div>
    </motion.section>
    </section>
  );
};

export default HeroSection;
