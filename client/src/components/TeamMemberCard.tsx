import { motion } from "framer-motion";

interface TeamMemberCardProps {
  name: string;
  role: string;
  imageUrl: string;
}

const TeamMemberCard = ({ name, role, imageUrl }: TeamMemberCardProps) => {
  return (
    <div className="text-center">
      <motion.div 
        className="relative mb-6 overflow-hidden rounded-lg aspect-square"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3 }}
      >
        <img 
          src={imageUrl} 
          alt={name} 
          className="object-cover w-full h-full transition-transform duration-500 hover:scale-110" 
        />
      </motion.div>
      <h4 className="font-serif text-xl font-bold">{name}</h4>
      <p className="text-black">{role}</p>
    </div>
  );
};

export default TeamMemberCard;
