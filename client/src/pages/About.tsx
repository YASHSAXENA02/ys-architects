import { motion } from "framer-motion";
import TeamMemberCard from "@/components/TeamMemberCard";
import { teamMembers } from "@/lib/data";
import { fadeIn, staggerContainer } from "@/lib/animations";

const About = () => {
  return (
    <div className="pt-24">
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

      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.h3
              className="font-serif text-3xl font-bold text-center mb-6"
              variants={fadeIn("up", 0.3)}
            >
              Our Values
            </motion.h3>
            <motion.div className="w-16 h-1 bg-[#C9A227] mx-auto mb-12" variants={fadeIn("up", 0.4)}></motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                className="text-center p-8 border border-gray-100 rounded-lg shadow-sm"
                variants={fadeIn("up", 0.5)}
              >
                <div className="w-16 h-16 bg-neutral rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="h-8 w-8 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    style={{ color: '#C9A227' }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h4 className="font-serif text-xl font-bold mb-4">Excellence</h4>
                <p className="text-gray-600">
                  We strive for perfection in every detail, from concept to completion, ensuring that each project exceeds expectations.
                </p>
              </motion.div>

              <motion.div
                className="text-center p-8 border border-gray-100 rounded-lg shadow-sm"
                variants={fadeIn("up", 0.6)}
              >
                <div className="w-16 h-16 bg-neutral rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="h-8 w-8 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    style={{ color: '#C9A227' }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <h4 className="font-serif text-xl font-bold mb-4">Innovation</h4>
                <p className="text-gray-600">
                  We embrace new ideas, technologies, and methodologies to create forward-thinking designs that shape the future.
                </p>
              </motion.div>

              <motion.div
                className="text-center p-8 border border-gray-100 rounded-lg shadow-sm"
                variants={fadeIn("up", 0.7)}
              >
                <div className="w-16 h-16 bg-neutral rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="h-8 w-8 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    style={{ color: '#C9A227' }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                </div>
                <h4 className="font-serif text-xl font-bold mb-4">Sustainability</h4>
                <p className="text-gray-600">
                  We prioritize environmentally responsible design practices that minimize ecological impact while maximizing resource efficiency.
                </p>
              </motion.div>
            </div>
          </motion.div>
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
              Our Team
            </motion.h3>
            <motion.div className="w-16 h-1 bg-[#C9A227] mx-auto mb-8" variants={fadeIn("up", 0.4)}></motion.div>
            <motion.p className="text-lg" variants={fadeIn("up", 0.5)}>
              Meet the talented individuals who bring our architectural visions to life. Our diverse team combines creativity, technical expertise, and passion for design.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {teamMembers.map((member, index) => (
              <motion.div key={index} variants={fadeIn("up", 0.2 + index * 0.1)}>
                <TeamMemberCard {...member} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20">
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
              Our Approach
            </motion.h3>
            <motion.div className="w-16 h-1 bg-[#C9A227] mx-auto mb-8" variants={fadeIn("up", 0.4)}></motion.div>
            <motion.p className="text-lg mb-12" variants={fadeIn("up", 0.5)}>
              At YS Architects, we follow a collaborative and client-centered approach that ensures your vision is realized with precision and creativity.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn("right", 0.3)}>
              <img
                src="https://images.unsplash.com/photo-1664575602276-acd073f104c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="Architectural design meeting"
                className="rounded-lg shadow-lg"
              />
            </motion.div>
            <motion.div variants={fadeIn("left", 0.3)}>
              <h4 className="font-serif text-2xl font-bold mb-6">Client-Centric Philosophy</h4>
              <p className="mb-6 text-gray-600">
                We believe that great architecture begins with listening. By understanding your goals, preferences, and requirements, we create spaces that truly resonate with your vision.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-accent mr-3 mt-1">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>Collaborative design process from start to finish</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 mt-1">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>Regular communication and progress updates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 mt-1">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>Transparent project management and budget control</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 mt-1">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>Personalized solutions tailored to your specific needs</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
