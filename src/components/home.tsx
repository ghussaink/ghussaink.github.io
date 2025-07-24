import React from "react";
import Navbar from "./Navbar";

// ✅ Import all your sections
import HeroSection from "./HeroSection";
import AboutMeSection from "./AboutMeSection";
import ExperienceSection from "./ExperienceSection";
import EducationSection from "./EducationSection";
import SkillsDashboard from "./SkillsDashboard";
import ProjectShowcase from "./ProjectShowcase";
import ServicesSection from "./ServicesSection";
import TestimonialsSection from "./TestimonialsSection";
import ContactSection from "./ContactSection";

interface HomeProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Home: React.FC<HomeProps> = ({ isDarkMode, toggleTheme }) => {
  return (
    <div className={`min-h-screen bg-background ${isDarkMode ? "dark" : ""} scroll-smooth`}>
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      
      {/* ✅ Main Sections */}
      <HeroSection />
      <AboutMeSection />
      <ExperienceSection />
      <EducationSection />
      <SkillsDashboard />
      <ProjectShowcase />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
};

export default Home;
