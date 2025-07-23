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
    title: "Neural Machine Translation System",
    description:
      "End-to-end multilingual translation system using attention-based Transformers. Scored 32.4 BLEU on WMT benchmarks.",
    image:
      "https://images.unsplash.com/photo-1546833998-877b37c2e5c4?w=800&q=80",
    technologies: [
      { name: "PyTorch" },
      { name: "Transformers", color: "secondary" },
      { name: "FastAPI" },
      { name: "Docker", color: "outline" },
    ],
    githubUrl: "https://github.com",
    demoUrl: "https://demo.com",
  },
  {
    id: "2",
    title: "Automated ML Pipeline Framework",
    description:
      "MLOps system with auto feature engineering, retraining, and cloud deployment. Enabled reproducibility and CI/CD.",
    image:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80",
    technologies: [
      { name: "Python" },
      { name: "MLflow", color: "secondary" },
      { name: "Airflow" },
      { name: "Kubernetes", color: "outline" },
    ],
    githubUrl: "https://github.com",
  },
  {
    id: "3",
    title: "LLM-Powered Document Analysis",
    description:
      "Legal doc parser using fine-tuned LLMs. Extracted actionable insights with 94% accuracy on multi-domain corpora.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    technologies: [
      { name: "LangChain" },
      { name: "HuggingFace", color: "secondary" },
      { name: "LlamaIndex" },
      { name: "AWS Lambda", color: "outline" },
    ],
    githubUrl: "https://github.com",
    demoUrl: "https://demo.com",
  },
  {
    id: "4",
    title: "Computer Vision for Retail Analytics",
    description:
      "Real-time object detection for customer behavior analysis in retail stores. Helped optimize layout for +13% sales uplift.",
    image:
      "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=800&q=80",
    technologies: [
      { name: "TensorFlow" },
      { name: "OpenCV", color: "secondary" },
      { name: "YOLO" },
      { name: "Azure ML", color: "outline" },
    ],
    githubUrl: "https://github.com",
  },
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
