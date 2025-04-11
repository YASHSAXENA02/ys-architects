import { fadeIn, staggerContainer } from "@/lib/animations";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Link } from "wouter";

const HeroSection = () => {
  return (
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
              <div className="inline-block bg-[#C9A227] text-[#333333] px-8 py-3 rounded font-['Poppins',sans-serif] font-medium transition-all hover:bg-opacity-90 text-center cursor-pointer">
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
      );
};

export default HeroSection;
