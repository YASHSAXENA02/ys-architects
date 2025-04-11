import { Link } from "wouter";

const ContactCTA = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-primary-custom/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-lg mb-8">
            Contact us today to schedule a consultation and take the first step toward bringing your vision to life.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center bg-[#D4AF37] hover:bg-opacity-90 text-white px-8 py-3 rounded-sm font-medium transition-colors shadow-md"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
