import { Link } from "wouter";

interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
}

const Logo = ({ variant = "dark", className = "" }: LogoProps) => {
  // Use the new color palette
  const primaryColor = variant === "dark" ? "#333333" : "#FFFFFF";
  const accentColor = "#C9A227"; // Muted Gold

  return (
    <Link href="/">
      <div className={`flex items-center space-x-2 cursor-pointer ${className}`}>
        <div className="h-10 w-12 relative">
          <svg viewBox="0 0 100 80" className="h-full w-full">
            <path d={`M10,10 L90,10 L50,70 Z`} fill={primaryColor} />
            <path d={`M30,10 L70,10 L50,40 Z`} fill={accentColor} />
          </svg>
        </div>
        <div>
          <h1 className={`font-['Playfair_Display',serif] text-xl font-semibold ${variant === 'light' ? 'text-white' : 'text-[#222222]'}`}>
            YS Architects
          </h1>
        </div>
      </div>
    </Link>
  );
};

export default Logo;
