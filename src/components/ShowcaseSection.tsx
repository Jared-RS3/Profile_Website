import { Activity, Eye, Sparkles, TrendingUp, Zap } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import LiveMetrics from "./LiveMetrics";
import SkillsHeatmap from "./SkillsHeatmap";
import SkillsRadar from "./SkillsRadar";
import TechStackVisualization from "./TechStackVisualization";

const ShowcaseSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeDemo, setActiveDemo] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const demos = [
    // {
    //   title: 'Live Code Editor',
    //   description: 'Interactive development environment',
    //   icon: Code,
    //   component: CodeEditor,
    //   color: 'from-green-500 to-emerald-500'
    // },
    {
      title: "Skills Radar",
      description: "Interactive skill visualization",
      icon: Zap,
      component: SkillsRadar,
      color: "from-blue-500 to-purple-500",
    },
    {
      title: "Development Heatmap",
      description: "GitHub-style activity visualization",
      icon: Activity,
      component: SkillsHeatmap,
      color: "from-green-600 to-green-500",
    },
    {
      title: "Tech Stack",
      description: "Architecture visualization",
      icon: Eye,
      component: TechStackVisualization,
      color: "from-purple-500 to-pink-500",
    },
    // {
    //   title: "Career Timeline",
    //   description: "Interactive experience journey",
    //   icon: Sparkles,
    //   component: InteractiveTimeline,
    //   color: "from-orange-500 to-red-500",
    // },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setActiveDemo((prev) => (prev + 1) % demos.length);
    }, 12000); // Change demo every 12 seconds

    return () => clearInterval(interval);
  }, [isVisible, demos.length]);

  const ActiveComponent = demos[activeDemo].component;

  return (
    <section
      ref={sectionRef}
      id="showcase"
      className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
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

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className={`flex items-center justify-center mb-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <Sparkles className="w-8 h-8 text-blue-400 mr-3 animate-pulse" />
            <h2 className="text-5xl font-bold text-white">
              Interactive Showcase
            </h2>
          </div>
          <div
            className={`w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
          ></div>
          <p
            className={`text-xl text-blue-100 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }`}
          >
            Experience my skills through cutting-edge interactive demonstrations
            and real-time visualizations
          </p>
        </div>

        {/* Demo Navigation */}
        <div className="flex justify-center mb-12 overflow-x-auto">
          <div className="flex gap-2 p-2 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 min-w-max">
            {demos.map((demo, index) => {
              const IconComponent = demo.icon;
              return (
                <button
                  key={index}
                  onClick={() => setActiveDemo(index)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 whitespace-nowrap ${
                    index === activeDemo
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white scale-105 shadow-lg"
                      : "text-slate-300 hover:text-white hover:bg-slate-700/50"
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                  <div className="text-left">
                    <div className="font-semibold text-sm">{demo.title}</div>
                    <div className="text-xs opacity-80 hidden sm:block">
                      {demo.description}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Live Metrics Section */}
        <div
          className={`mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <TrendingUp className="w-6 h-6 text-green-400" />
              <h3 className="text-2xl font-bold text-white">
                Live Performance Metrics
              </h3>
            </div>
            <p className="text-blue-200">
              Real-time statistics showcasing my development journey and
              achievements
            </p>
          </div>
          <LiveMetrics />
        </div>

        {/* Active Demo */}
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              {React.createElement(demos[activeDemo].icon, {
                className: "w-6 h-6 text-blue-400",
              })}
              <h3 className="text-2xl font-bold text-white">
                {demos[activeDemo].title}
              </h3>
            </div>
            <p className="text-blue-200">{demos[activeDemo].description}</p>
          </div>

          <div className="relative">
            <ActiveComponent />

            {/* Demo indicator */}
            <div className="absolute top-4 right-4 flex gap-2">
              {demos.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeDemo
                      ? "bg-blue-400 scale-125"
                      : "bg-slate-600"
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div
          className={`mt-16 text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 relative overflow-hidden">
            {/* Background animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 animate-pulse"></div>

            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to Revolutionize Your Next Project?
              </h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto text-lg">
                These interactive demonstrations represent just a glimpse of
                what I can create. Let's collaborate and build something
                extraordinary that will set new industry standards.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => {
                    const contactSection = document.getElementById("contact");
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="group px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:via-purple-700 hover:to-blue-800 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl"
                >
                  <span className="group-hover:scale-110 transition-transform duration-200 inline-block">
                    🚀 Start Building Together
                  </span>
                </button>
                <button
                  onClick={() => {
                    const projectsSection = document.getElementById("projects");
                    if (projectsSection) {
                      projectsSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="group px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                >
                  <span className="group-hover:scale-110 transition-transform duration-200 inline-block">
                    💼 Explore My Portfolio
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
