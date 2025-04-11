import { motion } from "framer-motion";
import { testimonials } from "@/lib/data";
import { fadeIn, staggerContainer } from "@/lib/animations";
import TestimonialCard from "../TestimonialCard";

const Testimonials = () => {
  return (
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
  );
};

export default Testimonials;
