import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Progress } from "@/components/ui/progress";

interface Skill {
  name: string;
  proficiency: number; // 0-100
  description?: string;
}

interface SkillCategory {
  title: string;
  icon?: React.ReactNode;
  skills: Skill[];
}

interface SkillsDashboardProps {
  categories?: SkillCategory[];
}

const defaultCategories: SkillCategory[] = [
  {
    title: "Core AI & ML Skills",
    skills: [
      {
        name: "Supervised Learning",
        proficiency: 90,
        description: "Classification, regression, and ensemble methods",
      },
      {
        name: "Unsupervised Learning",
        proficiency: 85,
        description:
          "Clustering, dimensionality reduction, and anomaly detection",
      },
      {
        name: "Deep Learning",
        proficiency: 80,
        description: "CNNs, RNNs, Transformers, and attention mechanisms",
      },
      {
        name: "MLOps",
        proficiency: 75,
        description: "ML pipelines, data versioning, and model monitoring",
      },
      {
        name: "LLM Integration",
        proficiency: 85,
        description: "Fine-tuning, prompt engineering, and API integration",
      },
    ],
  },
  {
    title: "Deployment & Engineering",
    skills: [
      {
        name: "FastAPI / Flask",
        proficiency: 85,
        description: "Building robust ML APIs and services",
      },
      {
        name: "Docker / Kubernetes",
        proficiency: 80,
        description: "Containerization and orchestration of ML systems",
      },
      {
        name: "CI/CD",
        proficiency: 75,
        description: "Automated testing and deployment pipelines",
      },
      {
        name: "Git",
        proficiency: 90,
        description: "Version control and collaborative development",
      },
      {
        name: "Cloud Platforms",
        proficiency: 80,
        description: "AWS, Azure, GCP for ML deployment",
      },
    ],
  },
  {
    title: "Automation & Tools",
    skills: [
      {
        name: "Python",
        proficiency: 95,
        description: "Primary programming language for ML development",
      },
      {
        name: "Pandas / NumPy",
        proficiency: 90,
        description: "Data manipulation and numerical computing",
      },
      {
        name: "Scikit-learn",
        proficiency: 85,
        description: "ML algorithms and evaluation metrics",
      },
      {
        name: "Prompt Engineering",
        proficiency: 80,
        description: "Crafting effective prompts for LLMs",
      },
      {
        name: "REST APIs",
        proficiency: 85,
        description: "Designing and consuming RESTful services",
      },
    ],
  },
];

const SkillCard = ({ category }: { category: SkillCategory }) => {
  return (
    <Card className="h-full bg-card hover:shadow-lg transition-all duration-300 border border-border/50">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-center">
          {category.title}
        </CardTitle>
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
                  <Progress value={skill.proficiency} className="h-2" />
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
};

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
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-16 px-4 md:px-8 bg-background" id="skills">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="space-y-8"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Skills Dashboard
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My technical expertise spans across various domains of AI and
              machine learning, from core algorithms to deployment and
              automation tools.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
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
