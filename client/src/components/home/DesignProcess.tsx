import { fadeIn, staggerContainer } from "@/lib/animations";
import { processSteps } from "@/lib/data";
import { motion } from "framer-motion";
import ProcessStep from "../ProcessStep";

;

const DesignProcess = () => {
  return (
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
  );
};

export default DesignProcess;
