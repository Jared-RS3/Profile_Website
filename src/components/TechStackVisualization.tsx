import React, { useState, useEffect } from 'react';
import { Layers, Cpu, Database, Globe, Smartphone, Cloud } from 'lucide-react';

const TechStackVisualization = () => {
  const [activeLayer, setActiveLayer] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const techStack = [
    {
      layer: 'Frontend',
      icon: Globe,
      color: 'from-blue-500 to-cyan-500',
      technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3'],
      description: 'Modern, responsive user interfaces'
    },
    {
      layer: 'Backend',
      icon: Cpu,
      color: 'from-purple-500 to-pink-500',
      technologies: ['C#', '.NET Core', 'ASP.NET', 'Node.js', 'REST APIs'],
      description: 'Robust server-side architecture'
    },
    {
      layer: 'Database',
      icon: Database,
      color: 'from-green-500 to-teal-500',
      technologies: ['SQL Server', 'MySQL', 'Firebase', 'Entity Framework'],
      description: 'Efficient data management'
    },
    {
      layer: 'Mobile',
      icon: Smartphone,
      color: 'from-orange-500 to-red-500',
      technologies: ['.NET MAUI', 'Cross-platform', 'Mobile APIs'],
      description: 'Native mobile experiences'
    },
    {
      layer: 'Cloud & DevOps',
      icon: Cloud,
      color: 'from-indigo-500 to-purple-500',
      technologies: ['Azure', 'Docker', 'CI/CD', 'Git', 'Azure DevOps'],
      description: 'Scalable cloud solutions'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveLayer(prev => (prev + 1) % techStack.length);
        setIsAnimating(false);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-slate-900 rounded-xl p-8 shadow-2xl border border-slate-700 relative overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 opacity-10">
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

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-8">
          <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
            <Layers className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-white font-bold text-xl">Tech Stack Architecture</h3>
            <p className="text-slate-400">Full-stack development expertise</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Stack Visualization */}
          <div className="space-y-4">
            {techStack.map((stack, index) => {
              const IconComponent = stack.icon;
              const isActive = index === activeLayer;
              
              return (
                <div
                  key={index}
                  className={`relative p-4 rounded-lg border-2 transition-all duration-500 cursor-pointer ${
                    isActive
                      ? 'border-blue-500 bg-blue-500/10 scale-105'
                      : 'border-slate-600 bg-slate-800/50 hover:border-slate-500'
                  } ${isAnimating && isActive ? 'animate-pulse' : ''}`}
                  onClick={() => setActiveLayer(index)}
                >
                  <div className="flex items-center gap-4">
                    <div className={`flex items-center justify-center w-10 h-10 bg-gradient-to-r ${stack.color} rounded-lg ${
                      isActive ? 'scale-110' : ''
                    } transition-transform duration-300`}>
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className={`font-semibold transition-colors duration-300 ${
                        isActive ? 'text-blue-400' : 'text-white'
                      }`}>
                        {stack.layer}
                      </h4>
                      <p className="text-slate-400 text-sm">{stack.description}</p>
                    </div>
                    {isActive && (
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    )}
                  </div>
                  
                  {/* Active layer indicator */}
                  {isActive && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-r"></div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Technology Details */}
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                {(() => {
                  const ActiveIcon = techStack[activeLayer].icon;
                  return (
                    <div className={`flex items-center justify-center w-12 h-12 bg-gradient-to-r ${techStack[activeLayer].color} rounded-lg`}>
                      <ActiveIcon className="w-6 h-6 text-white" />
                    </div>
                  );
                })()}
                <div>
                  <h4 className="text-white font-bold text-lg">{techStack[activeLayer].layer}</h4>
                  <p className="text-slate-400">{techStack[activeLayer].description}</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h5 className="text-white font-semibold mb-3">Technologies & Tools:</h5>
              <div className="grid grid-cols-2 gap-3">
                {techStack[activeLayer].technologies.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="flex items-center gap-2 p-3 bg-slate-700 rounded-lg hover:bg-slate-600 transition-all duration-200 hover:scale-105"
                    style={{
                      animationDelay: `${techIndex * 100}ms`,
                      opacity: 0,
                      animation: `fadeInUp 0.5s ease-out ${techIndex * 100}ms forwards`
                    }}
                  >
                    <div className={`w-2 h-2 bg-gradient-to-r ${techStack[activeLayer].color} rounded-full`}></div>
                    <span className="text-slate-200 text-sm font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Progress indicator */}
            <div className="mt-6 flex gap-2">
              {techStack.map((_, index) => (
                <div
                  key={index}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    index === activeLayer ? 'bg-blue-500 w-8' : 'bg-slate-600 w-2'
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default TechStackVisualization;