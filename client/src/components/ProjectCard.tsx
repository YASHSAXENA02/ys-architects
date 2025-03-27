import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  category: string;
  location: string;
  imageUrl: string;
}

const ProjectCard = ({ title, description, category, location, imageUrl }: ProjectCardProps) => {
  return (
    <motion.div 
      className="project-card group relative rounded-lg overflow-hidden cursor-pointer"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <img 
        src={imageUrl} 
        alt={title} 
        className="w-full h-72 object-cover"
      />
      <motion.div 
        className="absolute inset-0 bg-primary bg-opacity-80 p-6 flex flex-col justify-end"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div>
          <h3 className="font-serif text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-gray-300 mb-4">{description}</p>
          <span className="text-accent font-medium">{category} | {location}</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
