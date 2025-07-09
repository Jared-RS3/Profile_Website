import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative w-12 h-6 sm:w-16 sm:h-8 rounded-full p-0.5 sm:p-1 transition-all duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 group"
      style={{
        background: isDark 
          ? 'linear-gradient(135deg, #1e293b 0%, #334155 100%)' 
          : 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)'
      }}
    >
      {/* Toggle Track */}
      <div className="relative w-full h-full rounded-full overflow-hidden">
        {/* Background Stars for Dark Mode */}
        <div className={`absolute inset-0 transition-opacity duration-500 ${isDark ? 'opacity-100' : 'opacity-0'}`}>
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-0.5 h-0.5 bg-white rounded-full animate-pulse"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${1 + Math.random()}s`
              }}
            />
          ))}
        </div>

        {/* Background Clouds for Light Mode */}
        <div className={`absolute inset-0 transition-opacity duration-500 ${!isDark ? 'opacity-30' : 'opacity-0'}`}>
          <div className="absolute top-0.5 left-1.5 w-1.5 h-0.5 bg-white/40 rounded-full"></div>
          <div className="absolute top-1 right-2 w-1 h-0.5 bg-white/40 rounded-full"></div>
          <div className="absolute bottom-0.5 left-3 w-0.5 h-0.5 bg-white/40 rounded-full"></div>
        </div>
      </div>

      {/* Toggle Button */}
      <div
        className={`absolute top-0.5 sm:top-1 w-5 h-5 sm:w-6 sm:h-6 rounded-full shadow-lg transform transition-all duration-500 ease-in-out flex items-center justify-center ${
          isDark 
            ? 'translate-x-6 sm:translate-x-8 bg-slate-700 shadow-slate-900/50' 
            : 'translate-x-0 bg-white shadow-blue-500/30'
        }`}
      >
        {/* Sun Icon */}
        <Sun 
          className={`w-2.5 h-2.5 sm:w-3 sm:h-3 text-yellow-500 absolute transition-all duration-300 ${
            isDark 
              ? 'opacity-0 rotate-90 scale-0' 
              : 'opacity-100 rotate-0 scale-100'
          }`}
        />
        
        {/* Moon Icon */}
        <Moon 
          className={`w-2.5 h-2.5 sm:w-3 sm:h-3 text-blue-200 absolute transition-all duration-300 ${
            isDark 
              ? 'opacity-100 rotate-0 scale-100' 
              : 'opacity-0 -rotate-90 scale-0'
          }`}
        />

        {/* Glow Effect */}
        <div 
          className={`absolute inset-0 rounded-full transition-all duration-500 ${
            isDark 
              ? 'shadow-[0_0_8px_rgba(147,197,253,0.5)]' 
              : 'shadow-[0_0_8px_rgba(251,191,36,0.5)]'
          }`}
        />
      </div>

      {/* Hover Ring Effect */}
      <div className="absolute inset-0 rounded-full border border-transparent group-hover:border-white/20 transition-all duration-300"></div>
    </button>
  );
};

export default ThemeToggle;