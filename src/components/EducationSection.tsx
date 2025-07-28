"use client";
import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  duration: string;
  details?: string;
}

const educationData: EducationItem[] = [
  {
    degree: "Bachelor of Science in Software Engineering",
    institution: "Mehran University of Engineering and Technology (MUET)",
    location: "Jamshoro, Pakistan",
    duration: "2023 – 2027",
    details:
      "GPA: 3.79 (94.75%). Specialized in Machine Learning, NLP, and Intelligent Systems. Gained practical experience building ML models using Python, cloud platforms, and open-source tools.",
  },
  {
    degree: "AI/ML Certifications & Specializations",
    institution: "Coursera, DeepLearning.AI, Microsoft Learn, fast.ai",
    location: "Remote",
    duration: "2023 – Present",
    details:
      "Completed coursework in Prompt Engineering, LLMOps, Vector Search, and Generative AI. Certified in Machine Learning (Andrew Ng), LLMs, and 20+ micro-courses across applied AI domains.",
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const EducationSection = () => (
  <motion.section
    id="education"
    className="py-20 px-4 bg-background"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={sectionVariants}
  >
    <div className="max-w-5xl mx-auto text-center mb-12">
      <h2 className="text-4xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-cyan-500">
        Education
      </h2>
      <p className="text-muted-foreground text-lg">
        My academic background & continuous learning journey in AI.
      </p>
    </div>

    <div className="space-y-8 max-w-4xl mx-auto">
      {educationData.map((edu, idx) => (
        <motion.div
          key={idx}
          whileHover={{ scale: 1.02 }}
          className="flex gap-4 items-start border-l-4 border-primary pl-6 py-4 bg-card rounded-xl shadow-sm"
        >
          <GraduationCap className="text-primary shrink-0 mt-1" />
          <div>
            <h3 className="text-xl font-semibold">{edu.degree}</h3>
            <p className="text-sm text-muted-foreground">
              {edu.institution} · {edu.location}
            </p>
            <p className="text-sm text-muted-foreground italic mb-2">{edu.duration}</p>
            {edu.details && <p className="text-muted-foreground text-sm">{edu.details}</p>}
          </div>
        </motion.div>
      ))}
    </div>
  </motion.section>
);

export default EducationSection;
