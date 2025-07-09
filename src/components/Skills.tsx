import {
  Code2,
  Globe,
  LineChart,
  Monitor,
  Smartphone,
  Star,
  Zap,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const skillCategories = [
    {
      icon: Code2,
      title: "Backend Development",
      color: "from-blue-600 to-blue-700",
      skills: [
        { name: "C#", featured: true },
        { name: "ASP.NET", featured: true },
        { name: ".NET MVC", featured: false },
        { name: ".NET MAUI", featured: false },
        { name: ".NET Blazor", featured: false },
        { name: "JAVA", featured: false },
        { name: "Node.js", featured: false },
      ],
    },
    {
      icon: Globe,
      title: "Frontend Development",
      color: "from-purple-600 to-purple-700",
      skills: [
        { name: "React.js", featured: true },
        { name: "HTML/CSS", featured: true },
        { name: "JavaScript", featured: true },
        { name: "Figma", featured: false },
        { name: "jQuery", featured: false },
        { name: "Tailwind CSS", featured: false },
      ],
    },
    {
      icon: Monitor,
      title: "Database & Cloud",
      color: "from-teal-600 to-teal-700",
      skills: [
        { name: "MSSQL", featured: true },
        { name: "MySQL", featured: false },
        { name: "Firebase", featured: false },
        { name: "Azure DevOps", featured: false },
        { name: "Docker", featured: false },
        { name: "GraphQL", featured: false },
      ],
    },
    {
      icon: Smartphone,
      title: "Tools & Automation",
      color: "from-orange-600 to-orange-700",
      skills: [
        { name: "Make.com", featured: true },
        { name: "Airtable", featured: true },
        { name: "Zapier", featured: false },
        { name: "APIs", featured: true },
        { name: "Postman", featured: false },
        { name: "Git", featured: false },
        { name: "RabbitMQ", featured: false },
      ],
    },
    {
      icon: LineChart,
      title: "Data Analytics",
      color: "from-pink-600 to-pink-700",
      skills: [
        { name: "Python", featured: true },
        { name: "Microsoft Tools", featured: true },
        { name: "Pandas", featured: false },
        { name: "Excel", featured: false },
        { name: "Power BI", featured: false },
        { name: "Power Query", featured: false },
        { name: "Power Apps", featured: false },
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile",
      color: "from-yellow-600 to-yellow-600",
      skills: [
        { name: "React-Native", featured: true },
        { name: ".NET MAUI", featured: true },
        { name: "Flutter Flow", featured: true },
      ],
    },
  ];

  const platforms = ["UI", "APP", "WEB", "WINDOWS", "DATA ANALYTICS"];

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

  const handleCategoryHover = (index: number | null) => {
    setHoveredCategory(index);
  };

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-20 bg-white dark:bg-slate-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-200 dark:bg-blue-800 rounded-full animate-pulse"
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
          <h2
            className={`text-5xl font-bold text-slate-900 dark:text-white mb-6 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Technical Skills
          </h2>
          <div
            className={`w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
          ></div>
          <p
            className={`text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }`}
          >
            Comprehensive expertise across multiple technologies and platforms
          </p>
        </div>

        {/* Platform badges */}
        <div className="flex justify-center gap-4 mb-16 flex-wrap">
          {platforms.map((platform, index) => (
            <span
              key={index}
              className={`px-6 py-3 bg-gradient-to-r from-slate-700 to-slate-800 dark:from-slate-600 dark:to-slate-700 text-white font-semibold rounded-full text-sm shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }`}
              style={{
                transitionDelay: `${index * 100 + 200}ms`,
                cursor: "default",
              }}
            >
              {platform}
            </span>
          ))}
        </div>

        {/* Skills grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`group bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-slate-200 dark:border-slate-600 hover:border-opacity-50 relative overflow-hidden ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${categoryIndex * 200}ms` }}
              onMouseEnter={() => handleCategoryHover(categoryIndex)}
              onMouseLeave={() => handleCategoryHover(null)}
            >
              {/* Hover effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              ></div>

              <div className="relative z-10">
                {/* Category header */}
                <div className="flex items-center mb-6">
                  <div
                    className={`flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>

                {/* Featured skills */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3 flex items-center">
                    <Star className="w-4 h-4 text-yellow-500 mr-2" />
                    Core Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills
                      .filter((skill) => skill.featured)
                      .map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className={`group/skill px-4 py-2 bg-gradient-to-r ${category.color} text-white rounded-lg text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-default relative overflow-hidden`}
                          style={{
                            animationDelay: `${skillIndex * 100}ms`,
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible
                              ? "translateY(0)"
                              : "translateY(10px)",
                            transition: `all 0.3s ease-out ${
                              skillIndex * 100
                            }ms`,
                          }}
                        >
                          <span className="relative z-10">{skill.name}</span>
                          <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover/skill:scale-x-100 transition-transform duration-300 origin-left"></div>
                        </span>
                      ))}
                  </div>
                </div>

                {/* Additional skills */}
                <div>
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3 flex items-center">
                    <Zap className="w-4 h-4 text-blue-500 mr-2" />
                    Additional Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills
                      .filter((skill) => !skill.featured)
                      .map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1.5 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-sm border border-slate-200 dark:border-slate-600 hover:border-blue-300 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200 hover:scale-105 cursor-default"
                          style={{
                            animationDelay: `${skillIndex * 50 + 300}ms`,
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible
                              ? "translateY(0)"
                              : "translateY(10px)",
                            transition: `all 0.3s ease-out ${
                              skillIndex * 50 + 300
                            }ms`,
                          }}
                        >
                          {skill.name}
                        </span>
                      ))}
                  </div>
                </div>

                {/* Floating decoration */}
                {hoveredCategory === categoryIndex && (
                  <div className="absolute top-4 right-4 opacity-20">
                    <div
                      className={`w-16 h-16 rounded-full bg-gradient-to-br ${category.color} animate-pulse`}
                    ></div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
