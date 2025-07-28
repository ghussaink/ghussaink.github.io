// components/ProjectShowcase.tsx

import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

interface Technology {
  name: string;
  color?: "default" | "secondary" | "destructive" | "outline";
}

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: Technology[];
  githubUrl?: string;
  demoUrl?: string;
}

interface ProjectShowcaseProps {
  projects?: Project[];
  title?: string;
  subtitle?: string;
}

const defaultProjects: Project[] = [
  {
    id: "1",
    title: "Context-Aware RAG Chatbot",
    description:
      "Created an LLM-powered chatbot with document-aware memory using LangChain and OpenAI APIs. Supports long conversations with persistent context and semantic RAG retrieval.",
    image: "RAG.jpg",
    technologies: [
      { name: "LangChain", color: "secondary" },
      { name: "OpenAI" },
      { name: "RAG Pipelines" },
      { name: "Streamlit", color: "outline" },
    ],
    githubUrl: "https://github.com/ghulamhussainkhuhro/context-aware-chatbot-langchain",
  },
  {
    id: "2",
    title: "WhatsApp GPT Bot",
    description:
      "Integrated Azure OpenAI + LangChain to deploy a GPT bot for WhatsApp with long-term memory and Streamlit UI. Used Twilio for real-time message routing and feedback tracking.",
    image: "waBOT.jpg",
    technologies: [
      { name: "LangChain", color: "secondary" },
      { name: "Azure OpenAI" },
      { name: "Streamlit" },
      { name: "Twilio", color: "outline" },
    ],
    githubUrl: "https://github.com/ghulamhussainkhuhro/whatsapp-gpt-bot",
  },
  {
    id: "3",
    title: "Auto Ticket Tagger (LLM)",
    description:
      "Developed an automated support ticket labeling system using GPT-3.5 with zero/few-shot prompting. Cut manual triage time by 70% for simulated datasets.",
    image: "ticket.jpg",
    technologies: [
      { name: "OpenAI" },
      { name: "Prompt Engineering", color: "secondary" },
      { name: "Python" },
    ],
    githubUrl: "https://github.com/ghulamhussainkhuhro/auto-ticket-tagger-llm",
  },
  {
  id: "4",
  title: "Customer Churn Prediction System",
  description:
    "Built a modular ML pipeline to predict customer churn using scikit-learn, ColumnTransformer, and GridSearchCV. Achieved 80% accuracy with clean reproducible code, model persistence, and evaluation tracking.",
  image: "Churn.jpg",
  technologies: [
    { name: "scikit-learn", color: "secondary" },
    { name: "GridSearchCV" },
    { name: "Python" },
    { name: "Pipeline Architecture", color: "outline" },
  ],
  githubUrl: "https://github.com/ghulamhussainkhuhro/customer-churn-prediction-system",
}

];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  hover: {
    y: -6,
    transition: { duration: 0.3 },
  },
};

const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({
  projects = defaultProjects,
  title = "Featured Projects",
  subtitle = "AI-powered applications I've built — solving real-world problems with engineering precision and innovation.",
}) => {
  return (
    <section id="projects" className="w-full px-4 py-20 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        {/* Project Cards Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover="hover"
              className="group"
            >
              <Card className="h-full overflow-hidden border border-border hover:border-primary/50 shadow-sm transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <CardHeader>
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <Badge key={index} variant={tech.color || "default"}>
                        {tech.name}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="flex items-center gap-4 pt-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm inline-flex items-center gap-1 text-foreground hover:text-primary transition-colors"
                    >
                      <Github size={16} />
                      GitHub
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm inline-flex items-center gap-1 text-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
