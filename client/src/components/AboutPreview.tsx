import { fadeIn, staggerContainer } from "@/lib/animations";
import { motion } from "framer-motion";

const AboutPreview = () => {
  return (
    <section className="py-20 bg-neutral">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center mb-16"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.span className="text-[#C9A227] font-medium" variants={fadeIn("up", 0.2)}>
              About Us
            </motion.span>
            <motion.h2
              className="font-serif text-4xl font-bold mt-2 mb-6"
              variants={fadeIn("up", 0.3)}
            >
              Our Architectural Journey
            </motion.h2>
            <motion.div className="w-16 h-1 bg-[#C9A227] mx-auto mb-8" variants={fadeIn("up", 0.4)}></motion.div>
            <motion.p className="text-lg" variants={fadeIn("up", 0.5)}>
              YS Architects was founded with a vision to create spaces that inspire, function flawlessly, and stand the test of time. Our journey has been guided by a commitment to excellence and a passion for transforming environments.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn("right", 0.3)}>
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1053&q=80"
                alt="Architects collaborating"
                className="rounded-lg shadow-lg"
              />
            </motion.div>
            <motion.div variants={fadeIn("left", 0.3)}>
              <h3 className="font-serif text-3xl font-bold mb-6">Our Story</h3>
              <p className="mb-4">
                Founded in 2005 by visionary architects Yasmine Stevens and Samuel Yang, YS Architects began as a small studio with big ideas. What started as a collaborative effort between two friends has grown into a renowned firm with projects spanning across continents.
              </p>
              <p className="mb-4">
                We believe that architecture should not only be aesthetically pleasing but also functional, sustainable, and contextually relevant. Each project is an opportunity to create something meaningful that enhances lives and communities.
              </p>
              <p className="mb-8">
                Today, our team of talented architects, designers, and visionaries continue to push boundaries and redefine what's possible in architectural design.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
                <div>
                  <p className="text-4xl font-bold text-accent" style={{ color: '#C9A227' }}>15+</p>
                  <p className="text-sm uppercase font-medium mt-2">Years Experience</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-accent" style={{ color: '#C9A227' }}>200+</p>
                  <p className="text-sm uppercase font-medium mt-2">Projects</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-accent" style={{ color: '#C9A227' }}>25</p>
                  <p className="text-sm uppercase font-medium mt-2">Team Members</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-accent" style={{ color: '#C9A227' }}>18</p>
                  <p className="text-sm uppercase font-medium mt-2">Awards</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
  );
};

export default AboutPreview;
