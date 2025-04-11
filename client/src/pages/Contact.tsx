import { motion } from "framer-motion";
import ContactForm from "@/components/contact/ContactForm";
import { fadeIn, staggerContainer } from "@/lib/animations";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

const Contact = () => {
  return (
    <div className="relative">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center mb-16"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.span
              className="text-[#C9A227] font-medium"
              variants={fadeIn("up", 0.2)}
            >
              Get In Touch
            </motion.span>
            <motion.h2
              className="font-serif text-4xl font-bold mt-2 mb-6"
              variants={fadeIn("up", 0.3)}
            >
              Contact Us
            </motion.h2>
            <motion.div
              className="w-16 h-1 bg-[#C9A227] mx-auto mb-8"
              variants={fadeIn("up", 0.4)}
            ></motion.div>
            <motion.p className="text-lg" variants={fadeIn("up", 0.5)}>
              Ready to discuss your project? We'd love to hear from you. Reach
              out to our team using any of the methods below.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn("right", 0.3)}
            >
              <h3 className="font-serif text-2xl font-bold mb-6">
                Send Us a Message
              </h3>
              <ContactForm />
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn("left", 0.3)}
            >
              <h3 className="font-serif text-2xl font-bold mb-6">
                Our Information
              </h3>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 bg-neutral rounded-full flex items-center justify-center">
                      <MapPin className="text-xl text-[#C9A227]" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Address</h4>
                    <p className="text-gray-600">
                      1131 Sector 4<br />
                      Gurugram, Haryana 122001
                      <br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 bg-neutral rounded-full flex items-center justify-center">
                      <Clock className="text-xl text-[#C9A227]" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Office Hours</h4>
                    <p className="text-gray-600">
                      Monday - Friday: 10:00 AM - 7:00 PM
                    </p>
                    <p className="text-gray-600">
                      Saturday & Sunday: By appointment
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 bg-neutral rounded-full flex items-center justify-center">
                      <Mail className="text-xl text-[#C9A227]" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Email</h4>
                    <p className="text-gray-600">info@ysarchitects.in</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 bg-neutral rounded-full flex items-center justify-center">
                      <Phone className="text-xl text-[#C9A227]" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Phone</h4>
                    <p className="text-gray-600">+91-9999997370</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <br />
                  <div>
                    <p className="text-gray-700 mb-3">
                      Chat with us directly on WhatsApp for immediate assistance
                    </p>
                    <a
                      aria-label="Chat on WhatsApp"
                      href="https://wa.me/9999997370"
                    >
                      {" "}
                      <img
                        alt="Chat on WhatsApp"
                        src="/WhatsAppButtonGreenMedium.svg"
                      />
                    </a>
                  </div>
                </div>

                <div className="pt-4">
                  <h4 className="font-bold mb-4">Connect With Us</h4>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.instagram.com/ysarchitects.co.in/"
                      className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center transition-all hover:bg-accent hover:text-primary"
                    >
                      <Instagram size={18} />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center transition-all hover:bg-accent hover:text-primary"
                    >
                      <Linkedin size={18} />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center transition-all hover:bg-accent hover:text-primary"
                    >
                      <Twitter size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d876.8110844358692!2d77.0101499974011!3d28.47218738525627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1743153822782!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="YS Architects office location"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
