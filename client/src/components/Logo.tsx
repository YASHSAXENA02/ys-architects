import { Link } from "wouter";

interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
}

const Logo = ({ variant = "dark", className = "" }: LogoProps) => {
  // Update primary color to match our new theme
  const primaryColor = variant === "dark" ? "#2D4263" : "#FFFFFF";
  const accentColor = "#E8C547";

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
          <h1 className={`font-serif text-xl font-bold ${variant === 'light' ? 'text-white' : 'text-primary'}`}>
            YS Architects
          </h1>
        </div>
      </div>
    </Link>
  );
};

export default Logo;
