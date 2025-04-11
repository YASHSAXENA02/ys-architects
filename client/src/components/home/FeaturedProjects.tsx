import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Project } from "@shared/schema";
import SectionHeading from "@/components/ui/section-heading";
import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { featuredProjects } from "@/lib/data";

const FeaturedProjects = () => {
  return (
    <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.span className="text-[#C9A227] font-medium" variants={fadeIn("up", 0.2)}>
              Our Work
            </motion.span>
            <motion.h2
              className="font-serif text-4xl font-bold mt-2 mb-6"
              variants={fadeIn("up", 0.3)}
            >
              Featured Projects
            </motion.h2>
            <motion.div className="w-16 h-1 bg-[#C9A227] mx-auto mb-8" variants={fadeIn("up", 0.4)}></motion.div>
            <motion.p className="text-lg" variants={fadeIn("up", 0.5)}>
              Explore our diverse portfolio of architectural projects spanning residential, commercial, cultural, and public spaces.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {featuredProjects.slice(0, 6).map((project, index) => (
              <motion.div key={index} variants={fadeIn("up", 0.2 + index * 0.1)}>
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Link href="/portfolio">
              <div className="inline-block bg-[#C9A227] text-[#333333] px-8 py-3 rounded font-['Poppins',sans-serif] font-medium transition-all hover:bg-opacity-90 cursor-pointer">
                View All Projects
              </div>
            </Link>
          </div>
        </div>
      </section>
  );
};

export default FeaturedProjects;
