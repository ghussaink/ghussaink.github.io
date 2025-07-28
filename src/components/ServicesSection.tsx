import React from "react";
import { motion } from "framer-motion";
import {
  Bot,
  Brain,
  Database,
  Rocket,
  MessageSquareCode,
  Workflow,
} from "lucide-react";
import { Card, CardContent } from "./ui/card";

const services = [
  {
    title: "AI Agent Development",
    icon: Bot,
    description:
      "Design and build autonomous agents for task automation, RAG pipelines, and decision-support systems.",
  },
  {
    title: "LLM Application Integration",
    icon: Brain,
    description:
      "Embed GPT-like models into SaaS products, internal tools, or user-facing applications with tailored prompting.",
  },
  {
    title: "Conversational AI Systems",
    icon: MessageSquareCode,
    description:
      "Develop smart chatbots with memory, context handling, and API integrations powered by LLMs.",
  },
  {
    title: "ML Model Deployment",
    icon: Rocket,
    description:
      "Deploy machine learning models using FastAPI, Streamlit, or Docker with scalable, production-ready infrastructure.",
  },
  {
    title: "Data Pipelines & Automation",
    icon: Workflow,
    description:
      "Create ETL pipelines, automate workflows, and integrate AI into real-time systems using Airflow and LangChain.",
  },
  {
    title: "AI Prototyping & Consulting",
    icon: Database,
    description:
      "Rapidly prototype and consult on AI solutions for startups and enterprises to accelerate product development.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 px-4 md:px-8 bg-background">
      <motion.div
        className="max-w-6xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent"
        >
          Services I Offer
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-muted-foreground mb-12 max-w-2xl mx-auto"
        >
          I bring intelligent automation, AI integration, and production-ready solutions to startups, founders, and teams looking to scale smart.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="hover:shadow-lg border border-muted/20 bg-card/60 backdrop-blur-sm transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="bg-primary/10 w-fit p-3 rounded-full">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ServicesSection;
