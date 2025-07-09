import { Code, Coffee, Heart, Pencil } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-950 dark:bg-black py-6 sm:py-8 border-t border-slate-800 dark:border-slate-900 relative overflow-hidden transition-colors duration-500">
      {/* Subtle Background Animation */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col items-center justify-center space-y-3 sm:space-y-4">
          <div className="flex items-center gap-2 text-slate-400 group text-sm sm:text-base">
            <span className="transition-colors duration-300 group-hover:text-slate-300">
              Designed in Figma
            </span>
            <Pencil className="w-3 h-3 sm:w-4 sm:h-4 text-pink-500 animate-pulse" />
            <span className="transition-colors duration-300 group-hover:text-slate-300">
              Built with
            </span>
            <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-red-500 animate-pulse" />
            <span className="transition-colors duration-300 group-hover:text-slate-300">
              using
            </span>
            <Code className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400 group-hover:rotate-12 transition-transform duration-300" />
            <span className="transition-colors duration-300 group-hover:text-slate-300">
              React.js & Tailwind CSS
            </span>
          </div>

          <div className="text-slate-500 text-xs sm:text-sm flex items-center gap-2 group">
            <Coffee className="w-3 h-3 sm:w-4 sm:h-4 text-amber-500 group-hover:rotate-12 transition-transform duration-300" />
            <span className="group-hover:text-slate-400 transition-colors duration-300 text-center">
              © 2024 Software Developer Portfolio. Designed & Developed with
              passion.
            </span>
          </div>

          <div className="text-slate-600 text-xs hover:text-slate-500 transition-colors duration-300 cursor-default text-center">
            Cape Town, South Africa • Available for opportunities worldwide
          </div>

          {/* Animated Divider */}
          <div className="w-24 sm:w-32 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
