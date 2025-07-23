import React from "react";
import { motion } from "framer-motion";
import { ArrowDownToLine, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface HeroSectionProps {
  name?: string;
  role?: string;
  tagline?: string;
  avatarUrl?: string;
  resumeUrl?: string;
  githubUrl?: string;
  linkedinUrl?: string;
}

const HeroSection = ({
  name = "Jane Doe",
  role = "AI/ML Engineer | ML Pipeline Architect | Automation Specialist",
  tagline = "Building intelligent systems that scale — from raw data to real-world impact.",
  avatarUrl = "https://api.dicebear.com/7.x/avataaars/svg?seed=aidev",
  resumeUrl = "#",
  githubUrl = "https://github.com",
  linkedinUrl = "https://linkedin.com",
}: HeroSectionProps) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[700px] w-full bg-background flex items-center justify-center overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
      {/* Animated background pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-primary"
              style={{
                width: Math.random() * 300 + 50,
                height: Math.random() * 300 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: Math.random() * 20 + 10,
              }}
            />
          ))}
        </div>
      </div>

      <motion.div
        className="relative z-10 max-w-5xl w-full flex flex-col items-center text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <Avatar className="h-40 w-40 border-4 border-primary shadow-lg">
            <AvatarImage src={avatarUrl} alt={name} />
            <AvatarFallback className="text-4xl">
              {name.charAt(0)}
            </AvatarFallback>
          </Avatar>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
        >
          {name}
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-xl sm:text-2xl text-muted-foreground mb-6 max-w-2xl"
        >
          {role}
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl mb-10 max-w-2xl"
        >
          {tagline}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Button asChild size="lg" className="gap-2">
            <a href={resumeUrl} download>
              <ArrowDownToLine className="h-5 w-5" />
              Download Resume
            </a>
          </Button>

          <Button asChild variant="outline" size="lg" className="gap-2">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
              GitHub
            </a>
          </Button>

          <Button asChild variant="outline" size="lg" className="gap-2">
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
              LinkedIn
            </a>
          </Button>

          <Button
            onClick={scrollToContact}
            variant="secondary"
            size="lg"
            className="gap-2"
          >
            <Mail className="h-5 w-5" />
            Contact Me
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
