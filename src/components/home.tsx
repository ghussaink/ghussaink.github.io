import React, { useState } from "react";
import { Sun, Moon } from "lucide-react";

import HeroSection from "./HeroSection";
import AboutMeSection from "./AboutMeSection";
import ExperienceSection from "./ExperienceSection";
import EducationSection from "./EducationSection";
import SkillsDashboard from "./SkillsDashboard";
import ProjectShowcase from "./ProjectShowcase";
import ServicesSection from "./ServicesSection";
import TestimonialsSection from "./TestimonialsSection";
import ContactSection from "./ContactSection";

import { Button } from "./ui/button";

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  return (
    <div className={`min-h-screen bg-background ${isDarkMode ? "dark" : ""} scroll-smooth`}>
      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border px-4 py-3">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-bold">AI.Engineer</div>
          <div className="flex items-center gap-6">
            <a href="#about" className="hidden md:block hover:text-primary transition-colors">About</a>
            <a href="#experience" className="hidden md:block hover:text-primary transition-colors">Experience</a>
            <a href="#education" className="hidden md:block hover:text-primary transition-colors">Education</a>
            <a href="#skills" className="hidden md:block hover:text-primary transition-colors">Skills</a>
            <a href="#projects" className="hidden md:block hover:text-primary transition-colors">Projects</a>
            <a href="#services" className="hidden md:block hover:text-primary transition-colors">Services</a>
            <a href="#testimonials" className="hidden md:block hover:text-primary transition-colors">Testimonials</a>
            <a href="#contact" className="hidden md:block hover:text-primary transition-colors">Contact</a>
            <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Sections */}
      <main className="container mx-auto px-4 py-8 space-y-24">
        <section id="hero"><HeroSection /></section>
        <section id="about"><AboutMeSection /></section>
        <section id="experience"><ExperienceSection /></section>
        <section id="education"><EducationSection /></section>
        <section id="skills"><SkillsDashboard /></section>
        <section id="projects"><ProjectShowcase /></section>
        <section id="services"><ServicesSection /></section>
        <section id="testimonials"><TestimonialsSection /></section>
        <section id="contact"><ContactSection /></section>
      </main>

      {/* Footer */}
      <footer className="bg-muted py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} AI Engineer. All rights reserved.</p>
          <p className="mt-1">Built with React, Tailwind CSS, and Framer Motion</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
