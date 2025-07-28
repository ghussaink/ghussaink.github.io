import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { Brain, Rocket, Cloud, Settings } from "lucide-react";

const categories = [
  {
    title: "LLMs & AI Agents",
    icon: <Brain className="w-5 h-5" />,
    tooltip:
      "Experience with LangChain, Retrieval-Augmented Generation (RAG), and vector databases.",
    skills: [
      { name: "LangChain / LlamaIndex", level: 90 },
      { name: "OpenAI / Azure OpenAI", level: 95 },
      { name: "FAISS / Pinecone (Vector DBs)", level: 85 },
      { name: "RAG Pipelines", level: 90 },
      { name: "Agentic Workflows", level: 80 },
    ],
  },
  {
    title: "MLOps & Engineering",
    icon: <Settings className="w-5 h-5" />,
    tooltip:
      "ML lifecycle management with Docker, CI/CD pipelines, monitoring, and reproducibility tools.",
    skills: [
      { name: "MLflow / Weights & Biases", level: 85 },
      { name: "Docker / Kubernetes", level: 80 },
      { name: "CI/CD Workflows", level: 75 },
      { name: "Monitoring & Logging", level: 70 },
    ],
  },
  {
    title: "Cloud Deployment & APIs",
    icon: <Cloud className="w-5 h-5" />,
    tooltip:
      "APIs, serverless deployment, and integration tools like FastAPI, Lambda, and Swagger.",
    skills: [
      { name: "FastAPI / Flask", level: 90 },
      { name: "Azure ML / AWS SageMaker", level: 80 },
      { name: "Serverless (Lambda, Azure Fn)", level: 75 },
      { name: "Postman / Swagger", level: 85 },
    ],
  },
  {
    title: "Core AI Development",
    icon: <Rocket className="w-5 h-5" />,
    tooltip:
      "Solid foundations in Python, ML libraries, and transformer-based modeling.",
    skills: [
      { name: "Python / Pandas / NumPy", level: 95 },
      { name: "scikit-learn / XGBoost", level: 85 },
      { name: "HuggingFace Transformers", level: 90 },
      { name: "Streamlit / Gradio", level: 80 },
    ],
  },
];

const SkillsDashboard = () => {
  return (
    <section id="skills" className="py-20 px-4 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold">AI Engineer Skillset</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Production-ready AI expertise across modeling, LLMs, cloud deployment, and application delivery.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="group transition-all duration-300 border border-border hover:shadow-lg hover:-translate-y-1">
                <CardHeader className="pb-2">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="flex items-center gap-2 cursor-help">
                          {cat.icon}
                          <CardTitle className="text-lg font-semibold">{cat.title}</CardTitle>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="text-xs max-w-xs">{cat.tooltip}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {cat.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-sm rounded-full bg-muted text-foreground"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsDashboard;
