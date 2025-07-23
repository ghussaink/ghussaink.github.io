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
      "Built an end-to-end translation system using transformer architecture with attention mechanisms. Achieved BLEU score of 32.4 on WMT dataset.",
    image:
      "https://images.unsplash.com/photo-1546833998-877b37c2e5c4?w=800&q=80",
    technologies: [
      { name: "PyTorch", color: "default" },
      { name: "Transformers", color: "secondary" },
      { name: "FastAPI", color: "default" },
      { name: "Docker", color: "outline" },
    ],
    githubUrl: "https://github.com",
    demoUrl: "https://demo.com",
  },
  {
    id: "2",
    title: "Automated ML Pipeline Framework",
    description:
      "Developed a production-grade MLOps pipeline with automated feature engineering, model training, and deployment capabilities.",
    image:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80",
    technologies: [
      { name: "Python", color: "default" },
      { name: "MLflow", color: "secondary" },
      { name: "Airflow", color: "default" },
      { name: "Kubernetes", color: "outline" },
    ],
    githubUrl: "https://github.com",
  },
  {
    id: "3",
    title: "LLM-Powered Document Analysis",
    description:
      "Created a system that extracts insights from legal documents using fine-tuned LLMs with 94% accuracy on benchmark datasets.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    technologies: [
      { name: "LangChain", color: "default" },
      { name: "HuggingFace", color: "secondary" },
      { name: "LlamaIndex", color: "default" },
      { name: "AWS Lambda", color: "outline" },
    ],
    githubUrl: "https://github.com",
    demoUrl: "https://demo.com",
  },
  {
    id: "4",
    title: "Computer Vision for Retail Analytics",
    description:
      "Implemented a real-time object detection system for retail stores to track customer behavior and optimize store layouts.",
    image:
      "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=800&q=80",
    technologies: [
      { name: "TensorFlow", color: "default" },
      { name: "OpenCV", color: "secondary" },
      { name: "YOLO", color: "default" },
      { name: "Azure ML", color: "outline" },
    ],
    githubUrl: "https://github.com",
  },
];

const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({
  projects = defaultProjects,
  title = "Featured Projects",
  subtitle = "Explore my recent AI engineering work that demonstrates my technical expertise and problem-solving abilities.",
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
    hover: {
      y: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <section className="w-full py-16 px-4 md:px-8 bg-background" id="projects">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover="hover"
            >
              <Card className="h-full overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 bg-card">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <Badge key={index} variant={tech.color}>
                        {tech.name}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-start gap-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm hover:text-primary transition-colors"
                    >
                      <Github size={16} />
                      <span>GitHub</span>
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm hover:text-primary transition-colors"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
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
