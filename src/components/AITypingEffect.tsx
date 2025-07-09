import React, { useState, useEffect } from 'react';
import { Brain, Cpu, Zap } from 'lucide-react';

const AITypingEffect = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const texts = [
    "Building intelligent automation systems...",
    "Crafting seamless user experiences...",
    "Optimizing database performance...",
    "Developing scalable APIs...",
    "Creating cross-platform mobile apps...",
    "Implementing AI-driven solutions...",
    "Designing robust architectures...",
    "Solving complex business problems..."
  ];

  useEffect(() => {
    const currentFullText = texts[currentIndex];
    
    const timeout = setTimeout(() => {
      if (isPaused) {
        setIsPaused(false);
        setIsDeleting(true);
        return;
      }

      if (isDeleting) {
        setCurrentText(currentFullText.substring(0, currentText.length - 1));
        
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      } else {
        setCurrentText(currentFullText.substring(0, currentText.length + 1));
        
        if (currentText === currentFullText) {
          setIsPaused(true);
        }
      }
    }, isDeleting ? 50 : isPaused ? 2000 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, isPaused, texts]);

  return (
    <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-slate-800/90 to-slate-900/90 backdrop-blur-sm rounded-xl border border-slate-700/50 shadow-2xl">
      <div className="flex items-center gap-2">
        <div className="relative">
          <Brain className="w-8 h-8 text-blue-400 animate-pulse" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
        </div>
        <div className="flex gap-1">
          <Cpu className="w-4 h-4 text-purple-400 animate-bounce" style={{ animationDelay: '0s' }} />
          <Zap className="w-4 h-4 text-yellow-400 animate-bounce" style={{ animationDelay: '0.2s' }} />
        </div>
      </div>
      
      <div className="flex-1">
        <div className="text-green-400 font-mono text-sm mb-1">
          <span className="text-slate-400">jared@portfolio:~$</span> <span className="text-blue-400">ai_developer</span> --mode=creative
        </div>
        <div className="text-white font-mono text-lg">
          {currentText}
          <span className="animate-pulse text-green-400">|</span>
        </div>
      </div>
      
      <div className="flex flex-col gap-1">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
    </div>
  );
};

export default AITypingEffect;