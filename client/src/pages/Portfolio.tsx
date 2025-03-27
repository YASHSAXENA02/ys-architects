import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { allProjects } from "@/lib/data";
import { fadeIn, staggerContainer } from "@/lib/animations";

type ProjectCategory = "all" | "residential" | "commercial" | "cultural" | "urban" | "educational";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "residential", label: "Residential" },
    { id: "commercial", label: "Commercial" },
    { id: "cultural", label: "Cultural" },
    { id: "urban", label: "Urban Planning" },
    { id: "educational", label: "Educational" },
  ];

  const filteredProjects = activeCategory === "all" 
    ? allProjects 
    : allProjects.filter(project => project.category.toLowerCase() === activeCategory);

  return (
    <div className="pt-24">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center mb-16"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.span className="text-accent font-medium" variants={fadeIn("up", 0.2)}>
              Our Work
            </motion.span>
            <motion.h2
              className="font-serif text-4xl font-bold mt-2 mb-6"
              variants={fadeIn("up", 0.3)}
            >
              Our Portfolio
            </motion.h2>
            <motion.div className="w-16 h-1 bg-accent mx-auto mb-8" variants={fadeIn("up", 0.4)}></motion.div>
            <motion.p className="text-lg" variants={fadeIn("up", 0.5)}>
              Explore our diverse collection of architectural projects spanning residential, commercial, cultural, and public spaces. Each project reflects our commitment to innovative design and exceptional quality.
            </motion.p>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center mb-12 gap-2"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                className={`px-6 py-2 rounded-full ${
                  activeCategory === category.id
                    ? "bg-accent text-primary"
                    : "bg-neutral text-primary hover:bg-gray-200"
                } transition-colors`}
                onClick={() => setActiveCategory(category.id as ProjectCategory)}
                variants={fadeIn("up", 0.3 + index * 0.05)}
              >
                {category.label}
              </motion.button>
            ))}
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={staggerContainer}
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  variants={fadeIn("up", 0.2 + index * 0.05)}
                  layout
                >
                  <ProjectCard {...project} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <section className="py-20 bg-neutral">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.h3
              className="font-serif text-3xl font-bold mb-6"
              variants={fadeIn("up", 0.3)}
            >
              Our Design Philosophy
            </motion.h3>
            <motion.div className="w-16 h-1 bg-accent mx-auto mb-8" variants={fadeIn("up", 0.4)}></motion.div>
            <motion.p className="text-lg" variants={fadeIn("up", 0.5)}>
              Each project in our portfolio reflects our core design principles and commitment to creating spaces that are both beautiful and functional.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            <motion.div className="text-center" variants={fadeIn("up", 0.3)}>
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="h-8 w-8 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h4 className="font-serif text-xl font-bold mb-4">Innovation</h4>
              <p className="text-gray-600">
                We embrace creative thinking and new technologies to push the boundaries of what's possible in architectural design.
              </p>
            </motion.div>

            <motion.div className="text-center" variants={fadeIn("up", 0.4)}>
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="h-8 w-8 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </div>
              <h4 className="font-serif text-xl font-bold mb-4">Sustainability</h4>
              <p className="text-gray-600">
                Environmental responsibility is woven into every project, from material selection to energy-efficient systems.
              </p>
            </motion.div>

            <motion.div className="text-center" variants={fadeIn("up", 0.5)}>
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="h-8 w-8 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h4 className="font-serif text-xl font-bold mb-4">Functionality</h4>
              <p className="text-gray-600">
                We design spaces that not only look beautiful but also enhance the daily experience of those who use them.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.h3
              className="font-serif text-3xl font-bold mb-6"
              variants={fadeIn("up", 0.3)}
            >
              Have a Project in Mind?
            </motion.h3>
            <motion.p className="text-lg mb-8" variants={fadeIn("up", 0.4)}>
              Let's discuss how we can bring your vision to life. Our team is ready to collaborate with you from concept to completion.
            </motion.p>
            <motion.div variants={fadeIn("up", 0.5)}>
              <a
                href="/contact"
                className="inline-block bg-accent text-primary px-8 py-3 rounded font-medium transition-all hover:bg-opacity-90"
              >
                Start a Conversation
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
