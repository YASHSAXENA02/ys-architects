import { ReactNode } from "react";

interface SectionHeadingProps {
  children: ReactNode;
  centered?: boolean;
  noMarginBottom?: boolean;
}

const SectionHeading = ({ 
  children, 
  centered = false, 
  noMarginBottom = false 
}: SectionHeadingProps) => {
  return (
    <h2 className={`
      text-3xl md:text-4xl font-bold 
      ${noMarginBottom ? '' : 'mb-6'} 
      ${centered ? 'text-center' : ''} 
      relative
    `}>
      <span className="text-accent-custom">/</span> {children}
    </h2>
  );
};

export default SectionHeading;
