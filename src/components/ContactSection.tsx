"use client";

import React from "react";
import { motion } from "framer-motion";
import { Send, Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent } from "./ui/card";

const ContactSection = () => {
  const links = [
    {
      icon: Mail,
      label: "contact@aiportfolio.com",
      href: "mailto:contact@aiportfolio.com",
    },
    {
      icon: Github,
      label: "GitHub Profile",
      href: "https://github.com/ai-engineer",
    },
    {
      icon: Linkedin,
      label: "LinkedIn Profile",
      href: "https://linkedin.com/in/ai-engineer",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 md:px-6 bg-background">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
        className="max-w-6xl mx-auto"
      >
        {/* Header */}
        <motion.div
          variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-purple-500">
            Let’s Build Something Intelligent Together
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base">
            Whether it’s a collaboration, an opportunity, or a unique challenge — I’m all ears and ready to connect.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Contact Form */}
          <motion.div
            variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
          >
            <Card className="border border-border bg-card/60 backdrop-blur-md">
              <CardContent className="p-6 space-y-6">
                <form
                  // action="https://formspree.io/f/mnnzdqln" // ✅ Formspree (Primary)
                  action="https://formsubmit.co/ghulamhussain.career@gmail.com" // ✅ Formsubmit (Active)
                  method="POST"
                  className="space-y-6"
                >
                  {/* Formsubmit-specific hidden inputs */}
                  <input type="hidden" name="_captcha" value="false" />
                  <input
                    type="hidden"
                    name="_next"
                    value="https://ghulamhussainkhuhro.vercel.app/thank-you"
                  />

                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input id="name" name="name" placeholder="Your name" required />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Let’s create something amazing..."
                      required
                      className="min-h-[140px]"
                    />
                  </div>

                  <Button type="submit" className="w-full group">
                    <span className="flex items-center gap-2">
                      Send Message
                      <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </form>

              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
            className="space-y-10"
          >
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Me</h3>
              <ul className="space-y-3">
                {links.map(({ icon: Icon, label, href }, idx) => (
                  <a
                    key={idx}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-md hover:bg-muted transition-all group"
                  >
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="group-hover:text-primary transition-colors">
                      {label}
                    </span>
                    <ExternalLink className="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </ul>
            </div>

            <div className="border border-border rounded-lg p-5 bg-card/40">
              <h4 className="font-medium mb-2">📬 Response Time</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                I usually respond within <strong>24–48 hours</strong>. For urgent inquiries,
                please indicate it in your message.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
