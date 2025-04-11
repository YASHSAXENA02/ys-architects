import { motion } from "framer-motion";
import { services, processSteps } from "@/lib/data";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { Link } from "wouter";
import ServiceCard from "@/components/ServiceCard";
import ProcessStep from "@/components/ProcessStep";

const Services = () => {
  return (
    <div className="relative">
      {/* Services Intro Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center mb-16"
            initial="hidden"
            animate="visible"
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
            {services.map((service, index) => (
              <motion.div key={index} variants={fadeIn("up", 0.2 + index * 0.1)}>
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-neutral text-[#333333]">
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

      {/* Additional Services Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn("right", 0.3)}>
              <h3 className="font-serif text-3xl font-bold mb-6">Tailored Solutions</h3>
              <p className="mb-4">
                Every project is unique, and we approach each one with fresh perspectives and innovative ideas. Our team works closely with you to understand your specific requirements, preferences, and vision.
              </p>
              <p className="mb-6">
                Whether you're looking to design a new home, renovate an existing space, or develop a commercial property, we have the expertise to bring your vision to life.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-accent mr-3 mt-1">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>Custom residential designs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 mt-1">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>Commercial and office spaces</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 mt-1">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>Hospitality and retail design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 mt-1">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>Cultural and institutional buildings</span>
                </li>
              </ul>
            </motion.div>
            <motion.div variants={fadeIn("left", 0.3)}>
              <img
                src="https://images.unsplash.com/photo-1616587894289-86480e533129?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="Architects working on blueprints"
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Specialized Services */}
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
              Specialized Services
            </motion.h3>
            <motion.div className="w-16 h-1 bg-accent mx-auto mb-8" variants={fadeIn("up", 0.4)}></motion.div>
            <motion.p className="text-lg" variants={fadeIn("up", 0.5)}>
              Beyond our core architectural services, we offer specialized expertise in the following areas.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            <motion.div
              className="bg-white p-8 rounded-lg shadow-md"
              variants={fadeIn("up", 0.3)}
            >
              <div className="w-14 h-14 bg-neutral rounded-full flex items-center justify-center mb-6">
                <svg
                  className="h-7 w-7 text-[#C9A227]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h4 className="font-serif text-xl font-bold mb-4">Historic Preservation</h4>
              <p className="text-[#333333]">
                Respectful restoration and adaptive reuse of historic buildings, preserving architectural heritage while incorporating modern functionality.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-lg shadow-md"
              variants={fadeIn("up", 0.4)}
            >
              <div className="w-14 h-14 bg-neutral rounded-full flex items-center justify-center mb-6">
                <svg
                  className="h-7 w-7 text-[#C9A227]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h4 className="font-serif text-xl font-bold mb-4">Parametric Design</h4>
              <p className="text-[#333333]">
                Using advanced computational techniques to generate complex, data-driven architectural solutions that optimize form, function, and performance.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-lg shadow-md"
              variants={fadeIn("up", 0.5)}
            >
              <div className="w-14 h-14 bg-neutral rounded-full flex items-center justify-center mb-6">
                <svg
                  className="h-7 w-7 text-[#C9A227]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <h4 className="font-serif text-xl font-bold mb-4">Building Performance Analysis</h4>
              <p className="text-[#333333]">
                Comprehensive assessment of energy efficiency, thermal comfort, and environmental impact to create high-performance buildings that exceed standards.
              </p>
            </motion.div>
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
            <motion.h3
              className="font-serif text-3xl font-bold mb-6"
              variants={fadeIn("up", 0.3)}
            >
              Ready to Start Your Project?
            </motion.h3>
            <motion.p className="text-lg mb-8" variants={fadeIn("up", 0.4)}>
              Contact us today to schedule a consultation and discuss how we can bring your architectural vision to life.
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

export default Services;
