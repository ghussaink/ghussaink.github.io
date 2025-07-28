"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export interface TestimonialItem {
  name: string;
  role: string;
  avatar: string;
  quote: string;
  rating: number;
}

const testimonialData: TestimonialItem[] = [
  {
    name: "Mentor - AI Bootcamp",
    role: "Senior AI Mentor",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=mentor1",
    quote:
      "Showed exceptional initiative and skill in building LLM-based tools during the bootcamp. One of the standout performers in my cohort.",
    rating: 5,
  },
  {
    name: "Teammate - Internship",
    role: "Data Scientist, DevelopersHub",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=colleague1",
    quote:
      "Worked alongside Ghulam during our internship. His LangChain and deployment work was critical to shipping our LLM project on time.",
    rating: 5,
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

const TestimonialsSection = () => (
  <motion.section
    id="testimonials"
    className="py-20 px-4 bg-background"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={sectionVariants}
  >
    <div className="max-w-5xl mx-auto text-center mb-12">
      <h2 className="text-4xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
        Endorsements & Feedback
      </h2>
      <p className="text-muted-foreground text-lg">
        Powerful words from people I’ve worked with in the AI industry.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
      {testimonialData.map((item, index) => (
        <motion.div
          key={index}
          className="relative border border-muted/20 rounded-2xl p-6 bg-card shadow-md hover:shadow-lg transition-shadow"
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <img
              src={item.avatar}
              alt={item.name}
              className="h-14 w-14 rounded-full border border-muted/30 shadow-sm"
            />
            <div className="text-left">
              <h3 className="font-semibold text-lg">{item.name}</h3>
              <p className="text-sm text-muted-foreground">{item.role}</p>
            </div>
          </div>

          <blockquote className="italic text-muted-foreground mb-4">
            “{item.quote}”
          </blockquote>

          <div className="flex items-center gap-1 text-yellow-400">
            {[...Array(item.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 stroke-yellow-400" />
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </motion.section>
);

export default TestimonialsSection;
