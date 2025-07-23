"use client";
import { motion } from "framer-motion";
import { BadgeCheck, Sparkles } from "lucide-react";

const aboutPoints = [
  "4+ AI/ML projects deployed to production using real-world datasets",
  "Specialized in building intelligent agents, LLM-powered bots, and scalable ML pipelines",
  "Experience across OpenAI, LangChain, Streamlit, Pinecone & ChromaDB",
  "Strong fundamentals in statistics, Python, NLP, and end-to-end ML",
];

const AboutMeSection = () => {
  return (
    <motion.section
      id="about"
      className="py-20 px-4 md:px-8 bg-background"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Text Content */}
        <motion.div
          className="space-y-6"
          initial={{ x: 30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            I'm <strong>Ghulam Hussain</strong>, an AI/ML Engineer passionate about building scalable intelligent systems that go beyond models — solving real-world problems through automation, architecture, and innovation.
          </p>
          <ul className="space-y-4">
            {aboutPoints.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <BadgeCheck className="text-green-500 mt-1 shrink-0" />
                <span className="text-muted-foreground">{point}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Tech Badge Panel */}
        <motion.div
          className="flex flex-wrap gap-3 justify-start md:justify-center"
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {[
            "LLMs",
            "AI Agents",
            "Prompt Engineering",
            "ML Pipelines",
            "LangChain",
            "Streamlit",
            "Pinecone",
            "ChromaDB",
            "OpenAI API",
          ].map((skill, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-1 px-3 py-1 text-sm font-medium rounded-full bg-muted text-foreground shadow-sm dark:bg-muted/30"
            >
              <Sparkles className="h-4 w-4 text-yellow-500" />
              {skill}
            </span>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutMeSection;
