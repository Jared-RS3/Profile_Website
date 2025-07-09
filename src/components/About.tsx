import React, { useEffect, useRef, useState } from "react";
import { Code, Zap, Target, Users } from "lucide-react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description:
        "Expertise in both frontend and backend technologies, creating end-to-end solutions.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Zap,
      title: "Workflow Automation",
      description:
        "Specialized in Make.com and Airtable integrations for business process optimization.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Target,
      title: "Problem Solving",
      description:
        "Strong analytical skills with focus on delivering high-quality, user-centric solutions.",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description:
        "Experience working with cross-functional teams and stakeholders across various projects.",
      color: "from-purple-500 to-pink-500",
    },
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

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-12 sm:py-16 lg:py-20 bg-slate-50 dark:bg-slate-800 relative overflow-hidden transition-colors duration-500"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12 sm:mb-16">
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            About Me
          </h2>
          <div
            className={`w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-6 sm:mb-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
          ></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div
            className={`space-y-4 sm:space-y-6 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white relative">
              <span className="relative z-10">
                Passionate Developer Ready to Make an Impact
              </span>
              <div
                className="absolute bottom-0 left-0 w-full h-2 sm:h-3 bg-gradient-to-r from-blue-200 to-teal-200 dark:from-blue-800 dark:to-teal-800 -z-10 transform scale-x-0 origin-left transition-transform duration-1000 delay-500"
                style={{ transform: isVisible ? "scaleX(1)" : "scaleX(0)" }}
              ></div>
            </h3>
            <div className="prose prose-base sm:prose-lg text-slate-700 dark:text-slate-300 space-y-3 sm:space-y-4">
              <p className="leading-relaxed text-sm sm:text-base">
                I am a{" "}
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  25-year-old Software Developer
                </span>{" "}
                from Cape Town with
                <span className="font-semibold text-teal-600 dark:text-teal-400">
                  {" "}
                  3 years of hands-on experience
                </span>{" "}
                in building robust web applications and efficient backend
                systems. My expertise spans across C#, React.js, and workflow
                automation using Make.com and Airtable.
              </p>
              <p className="leading-relaxed text-sm sm:text-base">
                As a{" "}
                <span className="font-semibold text-purple-600 dark:text-purple-400">
                  creative individual
                </span>
                , I enjoy developing applications that enhance user experience
                and meet complex business needs. I have a proven track record in
                designing scalable solutions and implementing automated
                workflows that streamline business processes.
              </p>
              <p className="leading-relaxed text-sm sm:text-base">
                I am eager to join a dynamic team where I can learn from
                experienced professionals while contributing my skills and fresh
                perspective to drive company success. My strong analytical and
                problem-solving abilities, combined with a focus on delivering
                <span className="font-semibold text-green-600 dark:text-green-400">
                  {" "}
                  high-quality, user-centric software solutions
                </span>
                , make me a valuable addition to any development team.
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className={`group bg-white dark:bg-slate-700 p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 dark:border-slate-600 hover:border-transparent hover:-translate-y-2 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: `${index * 200 + 300}ms`,
                  animationDelay: `${index * 200 + 300}ms`,
                }}
              >
                <div className="relative overflow-hidden rounded-lg mb-3 sm:mb-4">
                  <div
                    className={`flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${item.color} rounded-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-20 rounded-lg transition-opacity duration-300`}
                  ></div>
                </div>
                <h4 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {item.title}
                </h4>
                <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* Hover Effect Line */}
                <div className="mt-3 sm:mt-4 h-0.5 bg-gradient-to-r from-blue-600 to-teal-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
