import React from "react";
import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Brain, Rocket, Cloud, Settings } from "lucide-react";

interface Skill {
  name: string;
  proficiency: number; // 0-100
  description?: string;
}

interface SkillCategory {
  title: string;
  icon?: React.ReactNode;
  tooltip?: string;
  skills: Skill[];
}

interface SkillsDashboardProps {
  categories?: SkillCategory[];
}

const defaultCategories: SkillCategory[] = [
  {
    title: "LLMs & Intelligent Agents",
    icon: <Brain size={20} />,
    tooltip: "Large Language Models, Retrieval-Augmented Generation, AI agents",
    skills: [
      {
        name: "LangChain / LlamaIndex",
        proficiency: 90,
        description: "Frameworks for RAG and agent orchestration",
      },
      {
        name: "OpenAI / Azure OpenAI",
        proficiency: 95,
        description: "Prompt engineering, fine-tuning, deployment",
      },
      {
        name: "Vector DBs (Pinecone, FAISS)",
        proficiency: 85,
        description: "Indexing and retrieval for knowledge-based systems",
      },
      {
        name: "RAG Pipelines",
        proficiency: 90,
        description: "Designing scalable Retrieval-Augmented Generation flows",
      },
      {
        name: "Agentic Workflows",
        proficiency: 80,
        description: "Multi-agent collaboration using tools like LangGraph",
      },
    ],
  },
  {
    title: "MLOps & AI Engineering",
    icon: <Settings size={20} />,
    tooltip: "Production-grade model development, versioning, and monitoring",
    skills: [
      {
        name: "MLflow / Weights & Biases",
        proficiency: 85,
        description: "Experiment tracking and model lifecycle management",
      },
      {
        name: "Docker / Kubernetes",
        proficiency: 80,
        description: "Scalable deployment of ML services",
      },
      {
        name: "CI/CD for ML",
        proficiency: 75,
        description: "Automated training/testing/deployment pipelines",
      },
      {
        name: "Monitoring / Alerting",
        proficiency: 70,
        description: "Post-deployment model performance tracking",
      },
    ],
  },
  {
    title: "Cloud & API Deployment",
    icon: <Cloud size={20} />,
    tooltip: "Deploying ML/AI applications to the cloud using scalable APIs",
    skills: [
      {
        name: "Azure ML / AWS SageMaker",
        proficiency: 80,
        description: "Model training & deployment in cloud environments",
      },
      {
        name: "FastAPI / Flask",
        proficiency: 90,
        description: "Production-grade RESTful services for ML models",
      },
      {
        name: "Serverless (Lambda / Azure Functions)",
        proficiency: 75,
        description: "Lightweight and cost-effective model serving",
      },
      {
        name: "Postman / Swagger",
        proficiency: 85,
        description: "API testing and documentation best practices",
      },
    ],
  },
  {
    title: "AI Application Stack",
    icon: <Rocket size={20} />,
    tooltip: "Full-stack AI project execution: from data to deployment",
    skills: [
      {
        name: "Python / Pandas / NumPy",
        proficiency: 95,
        description: "Core data processing and scripting skills",
      },
      {
        name: "Scikit-learn / XGBoost",
        proficiency: 85,
        description: "Baseline modeling and quick experimentation",
      },
      {
        name: "HuggingFace Transformers",
        proficiency: 90,
        description: "LLM and fine-tuning workflows",
      },
      {
        name: "Streamlit / Gradio",
        proficiency: 80,
        description: "Quick AI demos and POCs",
      },
    ],
  },
];

const SkillCard = ({ category }: { category: SkillCategory }) => (
  <Card className="h-full bg-card hover:shadow-xl transition duration-300 border border-border/50">
    <CardHeader>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="flex items-center justify-center gap-2 cursor-help">
              <span className="text-xl font-bold">{category.icon}</span>
              <CardTitle className="text-lg font-semibold">
                {category.title}
              </CardTitle>
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p className="text-xs">{category.tooltip}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </CardHeader>
    <CardContent className="space-y-4">
      {category.skills.map((skill, index) => (
        <TooltipProvider key={index}>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">{skill.name}</span>
                  <Badge variant="outline" className="text-xs">
                    {skill.proficiency}%
                  </Badge>
                </div>
                <Progress
                  value={skill.proficiency}
                  className="h-2 bg-muted"
                />
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-xs">{skill.description || skill.name}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </CardContent>
  </Card>
);

const SkillsDashboard: React.FC<SkillsDashboardProps> = ({
  categories = defaultCategories,
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-20 px-4 md:px-8 bg-background" id="skills">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-4xl font-bold mb-4">AI Engineer Skillset</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              I specialize in building production-grade AI systems, from
              foundational modeling to advanced LLMs, cloud deployment, and
              real-world applications. Here’s a snapshot of my capabilities:
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"
          >
            {categories.map((category, index) => (
              <motion.div key={index} variants={itemVariants}>
                <SkillCard category={category} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsDashboard;
