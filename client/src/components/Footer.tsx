import { Link } from "wouter";
import Logo from "./Logo";
import { Instagram, Linkedin, Twitter, Pin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#333333] text-white py-16">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="mb-6">
              <Logo variant="light" />
            </div>
            <p className="text-white mb-6 font-['Lato',sans-serif]">
              Creating spaces that inspire, function flawlessly, and stand the test of time.
            </p>
            <div className="flex space-x-4">
              <button className="text-white hover:text-[#C9A227] transition-colors">
              <a
              href="https://www.instagram.com/ysarchitects.co.in/"
              target="_blank"
              rel="noopener noreferrer"
              >
                <Instagram size={20} />
              </a>
              </button>
              <button className="text-white hover:text-[#C9A227] transition-colors">
                <Linkedin size={20} />
              </button>
              <button className="text-white hover:text-[#C9A227] transition-colors">
                <Twitter size={20} />
              </button>
            </div>
          </div>

          <div>
            <h3 className="font-['Poppins',sans-serif] font-semibold text-lg mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/">
                  <div className="text-white hover:text-[#C9A227] transition-colors cursor-pointer">Home</div>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <div className="text-white hover:text-[#C9A227] transition-colors cursor-pointer">About Us</div>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <div className="text-white hover:text-[#C9A227] transition-colors cursor-pointer">Services</div>
                </Link>
              </li>
              <li>
                <Link href="/portfolio">
                  <div className="text-white hover:text-[#C9A227] transition-colors cursor-pointer">Portfolio</div>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <div className="text-white hover:text-[#C9A227] transition-colors cursor-pointer">Contact</div>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-['Poppins',sans-serif] font-semibold text-lg mb-6 text-white">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services">
                  <div className="text-white hover:text-[#C9A227] transition-colors cursor-pointer">Architectural Design</div>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <div className="text-white hover:text-[#C9A227] transition-colors cursor-pointer">Urban Planning</div>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <div className="text-white hover:text-[#C9A227] transition-colors cursor-pointer">Interior Design</div>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <div className="text-white hover:text-[#C9A227] transition-colors cursor-pointer">Sustainable Design</div>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <div className="text-white hover:text-[#C9A227] transition-colors cursor-pointer">3D Visualization</div>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-['Poppins',sans-serif] font-semibold text-lg mb-6 text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-[#C9A227] mr-3">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <span className="text-white">
                  1131 Sector 4<br />Gurgaon, HR 122001
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#C9A227] mr-3">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <span className="text-white">info@ysarchitects.in</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#C9A227] mr-3">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                <span className="text-white">+91-9999997370</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white text-sm mb-4 md:mb-0 font-['Lato',sans-serif]">
            &copy; {new Date().getFullYear()} YS Architects. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <button className="text-white hover:text-[#C9A227] text-sm transition-colors">Privacy Policy</button>
            <button className="text-white hover:text-[#C9A227] text-sm transition-colors">Terms of Service</button>
            <button className="text-white hover:text-[#C9A227] text-sm transition-colors">Cookie Policy</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
