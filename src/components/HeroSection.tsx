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
        className="relative min-h-screen flex items-center justify-center px-4 py-28 text-center bg-background"
        initial="hidden"
        animate="visible"
        variants={heroVariants}
      >
        {/* Optional static blur blobs */}
        <div className="absolute inset-0 -z-10 opacity-10">
          <div className="absolute bg-primary rounded-full w-60 h-60 top-24 left-16 blur-3xl" />
          <div className="absolute bg-secondary rounded-full w-48 h-48 bottom-16 right-16 blur-2xl" />
        </div>

        <div className="max-w-3xl flex flex-col items-center space-y-6">
          <motion.div variants={heroVariants}>
            <Avatar className="h-28 w-28 border-4 border-primary shadow-md mb-4">
              <AvatarImage
                src="/myprofile.jpg" // Add your real image here
                alt="Ghulam Hussain - AI Engineer"
              />
              <AvatarFallback>GH</AvatarFallback>
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
            AI Engineer | LLM Developer | GPT-4 Specialist
          </motion.h2>

          <motion.p
            variants={heroVariants}
            className="text-lg text-muted-foreground max-w-2xl"
          >
            Deploying LLM-powered agents, RAG pipelines, and real-world AI apps using LangChain, GPT-4, and Azure OpenAI.
          </motion.p>

          <motion.p
            variants={heroVariants}
            className="text-base text-muted-foreground max-w-2xl"
          >
            I build intelligent systems that automate workflows, enhance support, and drive data-informed decisions — using scalable AI tools and modern ML infrastructure.
          </motion.p>

          <motion.div
            variants={heroVariants}
            className="flex flex-wrap justify-center gap-4 pt-4"
          >
            <Button asChild size="lg" className="gap-2">
              <a href="/Ghulam_Hussain_Resume_AI_Engineer.pdf" download>
                <Download className="w-5 h-5" />
                Resume
              </a>
            </Button>

            <Button asChild variant="outline" size="lg" className="gap-2">
              <a
                href="https://github.com/ghulamhussainkhuhro"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </Button>

            <Button asChild variant="outline" size="lg" className="gap-2">
              <a
                href="https://linkedin.com/in/ghulamhussainkhuhro"
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
