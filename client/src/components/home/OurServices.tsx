import { fadeIn, staggerContainer } from "@/lib/animations";
import { services } from "@/lib/data";
import { motion } from "framer-motion";
import { Link } from "wouter";
import ServiceCard from "../ServiceCard";

const DesignProcess = () => {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.span
            className="text-[#C9A227] font-medium"
            variants={fadeIn("up", 0.2)}
          >
            What We Do
          </motion.span>
          <motion.h2
            className="font-serif text-4xl font-bold mt-2 mb-6"
            variants={fadeIn("up", 0.3)}
          >
            Our Services
          </motion.h2>
          <motion.div
            className="w-16 h-1 bg-[#C9A227] mx-auto mb-8"
            variants={fadeIn("up", 0.4)}
          ></motion.div>
          <motion.p className="text-lg" variants={fadeIn("up", 0.5)}>
            We offer comprehensive architectural services tailored to your
            unique vision and requirements. Our expertise spans from concept to
            completion, ensuring excellence at every stage.
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
  );
};

export default DesignProcess;
