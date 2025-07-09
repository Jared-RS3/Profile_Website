import { Award, BookOpen, ChevronRight, GraduationCap } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedEducation, setExpandedEducation] = useState<number | null>(
    null
  );
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const education = [
    {
      institution: "Red Academy",
      degree: "Higher Certificate in Software Development",
      year: "2024",
      type: "Tertiary Education",
      description:
        "Comprehensive program covering software development fundamentals, programming languages, and system design principles. Followed by practical experience working on live client projects for Lewis Stores under Red Panda Software.",
      subjects: [
        "Software Development Principles",
        "Database Design & Management",
        "Web Development Technologies",
        "System Analysis & Design",
        "Programming Fundamentals",
        "Project Management",
      ],
      color: "from-red-500 to-red-600",
    },
    {
      institution: "Pearson University of Higher Education",
      degree: "Higher Certificate in Information Systems Software Development",
      year: "2022",
      type: "Tertiary Education",
      description:
        "Comprehensive program covering software development fundamentals, programming languages, and system design principles.",
      subjects: [
        "Software Development Principles",
        "Database Design & Management",
        "Web Development Technologies",
        "System Analysis & Design",
        "Programming Fundamentals",
        "Project Management",
      ],
      color: "from-blue-600 to-purple-600",
    },
    {
      institution: "De Kuilen",
      degree: "National Senior Certificate (NSC)",
      year: "2017",
      type: "Secondary Education",
      description:
        "Completed matriculation with focus on mathematics and technical subjects, laying foundation for technical career.",
      subjects: [
        "Mathematics",
        "Physical Sciences",
        "Information Technology",
        "English",
        "Technical Drawing",
      ],
      color: "from-green-600 to-teal-600",
    },
  ];

  const certifications = [
    {
      name: "Microsoft Azure Fundamentals",
      status: "In Progress",
      color: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300",
    },
    {
      name: "React.js Development",
      status: "Completed",
      color:
        "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300",
    },
    {
      name: "C# Programming",
      status: "Completed",
      color:
        "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300",
    },
    {
      name: "Database Management",
      status: "Completed",
      color: "bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300",
    },
    {
      name: "API Development & Integration",
      status: "Completed",
      color:
        "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300",
    },
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setExpandedEducation(null);
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

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

    return () => {
      window.removeEventListener("resize", checkMobile);
      observer.disconnect();
    };
  }, []);

  const toggleExpanded = (index: number) => {
    setExpandedEducation(expandedEducation === index ? null : index);
  };

  return (
    <section
      ref={sectionRef}
      id="education"
      className="py-20 bg-white dark:bg-slate-900 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-300 dark:bg-blue-700 rounded-full animate-pulse"
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
            <BookOpen className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className="text-5xl font-bold text-slate-900 dark:text-white">
              Education & Certifications
            </h2>
          </div>
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
            Strong academic foundation complemented by continuous learning
          </p>
          {isMobile && (
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
              Tap to expand details
            </p>
          )}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {education.map((edu, index) => (
            <div
              key={index}
              className={`group bg-slate-50 dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 dark:border-slate-700 hover:border-transparent relative overflow-hidden cursor-pointer ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onClick={() => toggleExpanded(index)}
            >
              {/* Background gradient on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${edu.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              ></div>

              <div className="relative z-10 p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-start flex-1">
                    <div
                      className={`flex items-center justify-center w-12 h-12 bg-gradient-to-br ${edu.color} rounded-lg mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <span
                          className={`px-3 py-1 bg-gradient-to-r ${edu.color} text-white rounded-full text-sm font-medium shadow-lg`}
                        >
                          {edu.year}
                        </span>
                        <span className="px-3 py-1 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium">
                          {edu.type}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {edu.degree}
                      </h3>
                      <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">
                        {edu.institution}
                      </h4>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-5 h-5 text-slate-400 dark:text-slate-500 group-hover:text-blue-500 transition-all duration-300 flex-shrink-0 ml-2 ${
                      expandedEducation === index ? "rotate-90" : ""
                    }`}
                  />
                </div>

                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  {edu.description}
                </p>

                {/* Expanded content */}
                <div
                  className={`transition-all duration-500 ease-in-out ${
                    expandedEducation === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <div className="pt-4 border-t border-slate-200 dark:border-slate-600">
                    <h5 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                      Key Subjects:
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {edu.subjects.map((subject, subjectIndex) => (
                        <span
                          key={subjectIndex}
                          className="px-3 py-1 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm border border-slate-200 dark:border-slate-600 hover:border-blue-300 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200 hover:scale-105"
                          style={{
                            animationDelay: `${subjectIndex * 100}ms`,
                            opacity: expandedEducation === index ? 1 : 0,
                            transform:
                              expandedEducation === index
                                ? "translateY(0)"
                                : "translateY(10px)",
                            transition: `all 0.3s ease-out ${
                              subjectIndex * 100
                            }ms`,
                          }}
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div
          className={`bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 rounded-xl p-8 shadow-lg border border-blue-100 dark:border-slate-600 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <div className="flex items-center mb-6">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-teal-600 to-blue-600 rounded-lg mr-4 shadow-lg">
              <Award className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Professional Development
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="group flex items-center justify-between p-4 bg-white dark:bg-slate-600 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 dark:border-slate-500 hover:border-blue-200 dark:hover:border-blue-400"
                style={{
                  animationDelay: `${index * 100 + 800}ms`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateX(0)" : "translateX(-20px)",
                  transition: `all 0.3s ease-out ${index * 100 + 800}ms`,
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-teal-600 rounded-full group-hover:scale-150 transition-transform duration-200"></div>
                  <span className="text-slate-700 dark:text-slate-200 font-medium group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-200">
                    {cert.name}
                  </span>
                </div>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${cert.color}`}
                >
                  {cert.status}
                </span>
              </div>
            ))}
          </div>

          <div
            className={`p-4 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-lg border border-blue-200 dark:border-blue-700 transition-all duration-1000 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
            style={{ transitionDelay: "1200ms" }}
          >
            <p className="text-blue-800 dark:text-blue-200 font-medium flex items-center">
              <span className="text-2xl mr-2">🎯</span>
              Committed to continuous learning and staying current with emerging
              technologies
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
