import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
}

const ServiceCard = ({ icon, title, description, features }: ServiceCardProps) => {
  return (
    <motion.div 
      className="p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-all w-[400px] h-[400px] flex flex-col"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="w-14 h-14 bg-neutral rounded-full flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="font-serif text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600 mb-4 text-base">{description}</p>
      <ul className="space-y-2 text-gray-600 flex-grow overflow-y-auto">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-accent mr-2">
              <svg className="h-5 w-5 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ServiceCard;