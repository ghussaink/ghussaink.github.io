import { Briefcase, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { Card } from "./ui/card";

const experiences = [
  {
    role: "AI/ML Intern",
    company: "DevelopersHub Corporation",
    location: "Remote — Pakistan",
    duration: "May 2025 – July 2025",
    description:
      "Designed and deployed 6+ real-world LLM applications including PDF support bots and RAG assistants. Built vector-search powered agents using LangChain and GPT-4. Improved system performance through prompt engineering and scalable ML pipelines.",
    link: "https://developershub.dev",
  },
  {
    role: "Freelance AI Engineer",
    company: "Self-Employed",
    location: "Remote",
    duration: "2024 – Present",
    description:
      "Delivered custom AI solutions for startups and solo founders. Built LLM-based chatbots, automation agents, and RAG systems using OpenAI APIs, LangChain, and FAISS. Focused on rapid prototyping, deployment via Streamlit/FastAPI, and client-ready AI workflows.",
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
    },
  }),
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-500">
            My Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here’s a snapshot of my journey building real-world AI systems,
            solving complex problems, and collaborating with teams to deliver intelligent solutions.
          </p>
        </div>

        <div className="space-y-8 relative before:absolute before:left-5 before:top-0 before:bottom-0 before:w-1 before:bg-muted/20">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              className="relative pl-12"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={itemVariants}
            >
              <div className="absolute left-0 top-2 bg-primary text-white p-2 rounded-full shadow-md">
                <Briefcase size={16} />
              </div>

              <Card className="p-6 border border-muted/20 bg-card/50 backdrop-blur-md shadow-md hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                  <h3 className="text-lg md:text-xl font-semibold">{exp.role}</h3>
                  <span className="text-sm text-muted-foreground">{exp.duration}</span>
                </div>
                <div className="flex flex-wrap items-center text-sm mb-2 text-muted-foreground">
                  <span>{exp.company}</span>
                  <span className="mx-2">•</span>
                  <span>{exp.location}</span>
                  {exp.link && (
                    <>
                      <span className="mx-2">•</span>
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary hover:underline"
                      >
                        Visit <ExternalLink className="ml-1 w-4 h-4" />
                      </a>
                    </>
                  )}
                </div>
                <p className="text-sm">{exp.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
