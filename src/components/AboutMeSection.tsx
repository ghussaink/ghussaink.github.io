  "use client";
  import { motion } from "framer-motion";
  import { BadgeCheck, Sparkles } from "lucide-react";

  const aboutPoints = [
  "Built and deployed 6+ LLM-based applications including support bots and RAG systems",
  "Hands-on with LangChain, GPT-4, vector search, and scalable AI agents",
  "Experience integrating Azure OpenAI, Streamlit, FAISS, and custom data pipelines",
  "Skilled in prompt engineering, ML workflows, and real-world AI deployment",
];


  const AboutMeSection = () => {
    return (
      // ✅ Non-animated anchor target wrapper
      <div id="about" className="scroll-mt-28"> 
        <motion.section
          className="py-24 px-4 md:px-8 bg-background"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Text Content */}
            <motion.div
              className="space-y-6"
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                About Me
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                I'm <strong>Ghulam Hussain</strong>, an aspiring AI Engineer focused on building real-world intelligent systems. With a strong foundation in machine learning, NLP, and LLM development, I specialize in deploying scalable AI solutions that drive automation and business value.
              </p>
              <ul className="space-y-4">
                {aboutPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <BadgeCheck className="text-green-500 mt-1 shrink-0" />
                    <span className="text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Tech Badge Panel */}
            <motion.div
              className="flex flex-wrap gap-3 justify-start md:justify-center"
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {[
                "LLMs",
                "AI Agents",
                "Prompt Engineering",
                "ML Pipelines",
                "LangChain",
                "Streamlit",
                "Pinecone",
                "ChromaDB",
                "OpenAI API",
              ].map((skill, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1 px-3 py-1 text-sm font-medium rounded-full bg-muted text-foreground shadow-sm dark:bg-muted/30"
                >
                  <Sparkles className="h-4 w-4 text-yellow-500" />
                  {skill}
                </span>
              ))}
            </motion.div>
          </div>
        </motion.section>
      </div>
    );
  };

  export default AboutMeSection;
