import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import TestimonialCard from "@/components/TestimonialCard";
import ProcessStep from "@/components/ProcessStep";
import { services, featuredProjects, testimonials, processSteps } from "@/lib/data";
import { fadeIn, staggerContainer } from "@/lib/animations";

const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-screen pt-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
            alt="Modern architectural building"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-primary bg-opacity-50"></div>
        </div>

        <motion.div
          className="container relative z-10 mx-auto px-4 h-full flex flex-col justify-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <div className="max-w-2xl text-white">
            <motion.h1
              className="font-serif text-4xl md:text-6xl font-bold mb-4"
              variants={fadeIn("up", 0.3)}
            >
              YS Architects
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl mb-8"
              variants={fadeIn("up", 0.4)}
            >
              Where vision meets precision in architectural excellence
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={fadeIn("up", 0.5)}
            >
              <Link href="/portfolio">
                <div className="inline-block bg-[#C9A227] text-[#333333] px-8 py-3 rounded font-['Poppins',sans-serif] font-medium transition-all hover:bg-opacity-90 text-center cursor-pointer">
                  View Our Work
                </div>
              </Link>
              <Link href="/contact">
                <div className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded font-['Poppins',sans-serif] font-medium transition-all hover:bg-white hover:bg-opacity-10 text-center cursor-pointer">
                  Get In Touch
                </div>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          animate="visible"
        >
          <button 
            onClick={() => {
              document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-block hover:text-[#C9A227] transition-colors cursor-pointer"
          >
            <ChevronDown className="w-8 h-8" />
          </button>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.span className="text-[#C9A227] font-medium" variants={fadeIn("up", 0.2)}>
              What We Do
            </motion.span>
            <motion.h2
              className="font-serif text-4xl font-bold mt-2 mb-6"
              variants={fadeIn("up", 0.3)}
            >
              Our Services
            </motion.h2>
            <motion.div className="w-16 h-1 bg-[#C9A227] mx-auto mb-8" variants={fadeIn("up", 0.4)}></motion.div>
            <motion.p className="text-lg" variants={fadeIn("up", 0.5)}>
              We offer comprehensive architectural services tailored to your unique vision and requirements. Our expertise spans from concept to completion, ensuring excellence at every stage.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {services.slice(0, 3).map((service, index) => (
              <motion.div key={index} variants={fadeIn("up", 0.2 + index * 0.1)}>
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Link href="/services">
              <div className="inline-block bg-[#333333] text-white px-8 py-3 rounded font-['Poppins',sans-serif] font-medium transition-all hover:bg-[#222222] cursor-pointer">
                View All Services
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-100 text-[#333333]">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.span className="text-[#C9A227] font-medium" variants={fadeIn("up", 0.2)}>
              How We Work
            </motion.span>
            <motion.h2
              className="font-serif text-4xl font-bold mt-2 mb-6 text-[#333333]"
              variants={fadeIn("up", 0.3)}
            >
              Our Design Process
            </motion.h2>
            <motion.div className="w-16 h-1 bg-[#C9A227] mx-auto mb-8" variants={fadeIn("up", 0.4)}></motion.div>
            <motion.p className="text-lg text-[#333333]" variants={fadeIn("up", 0.5)}>
              Our systematic approach ensures that each project receives the attention it deserves, from initial concept to final execution.
            </motion.p>
          </motion.div>

          <motion.div
            className="max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            <div className="grid md:grid-cols-2 gap-8 md:gap-16">
              {processSteps.map((step, index) => (
                <motion.div key={index} variants={fadeIn("up", 0.2 + index * 0.1)}>
                  <ProcessStep
                    number={index + 1}
                    title={step.title}
                    description={step.description}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
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

      {/* Testimonials Section */}
      <section className="py-20 bg-neutral">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.span className="text-[#C9A227] font-medium" variants={fadeIn("up", 0.2)}>
              Client Feedback
            </motion.span>
            <motion.h2
              className="font-serif text-4xl font-bold mt-2 mb-6"
              variants={fadeIn("up", 0.3)}
            >
              What Our Clients Say
            </motion.h2>
            <motion.div className="w-16 h-1 bg-[#C9A227] mx-auto mb-8" variants={fadeIn("up", 0.4)}></motion.div>
            <motion.p className="text-lg" variants={fadeIn("up", 0.5)}>
              We take pride in our collaborative approach and the relationships we build with our clients. Here's what they have to say about working with YS Architects.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={fadeIn("up", 0.2 + index * 0.1)}>
                <TestimonialCard {...testimonial} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.h2
              className="font-serif text-4xl font-bold mb-6"
              variants={fadeIn("up", 0.3)}
            >
              Ready to Transform Your Space?
            </motion.h2>
            <motion.p className="text-lg mb-8" variants={fadeIn("up", 0.4)}>
              Let's bring your architectural vision to life. Contact us today for a consultation.
            </motion.p>
            <motion.div variants={fadeIn("up", 0.5)}>
              <Link href="/contact">
                <div className="inline-block bg-[#C9A227] text-[#333333] px-8 py-3 rounded font-['Poppins',sans-serif] font-medium transition-all hover:bg-opacity-90 cursor-pointer">
                  Get In Touch
                </div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
