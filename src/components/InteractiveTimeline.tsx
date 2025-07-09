import React, { useState, useEffect, useRef } from "react";
import {
  Calendar,
  MapPin,
  ExternalLink,
  ChevronRight,
  Briefcase,
} from "lucide-react";

const InteractiveTimeline = () => {
  const [activeExperience, setActiveExperience] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const timelineRef = useRef<HTMLDivElement>(null);

  const experiences = [
    {
      year: "2023",
      company: "Bottoms Up Coffee",
      role: "AI & Automation Developer",
      location: "Cape Town",
      duration: "6 months",
      type: "Contract",
      description:
        "Developed AI conversational agent and CRM automation system",
      achievements: [
        "Built AI chatbot increasing customer engagement by 40%",
        "Automated booking system reducing manual work by 80%",
        "Integrated Airtable CRM with Make.com workflows",
      ],
      technologies: ["AI", "Airtable", "Make.com", "Google Calendar API"],
      color: "from-purple-500 to-pink-500",
      link: "https://hellobottomsup.co.za/",
    },
    {
      year: "2023",
      company: "Lewis Furniture",
      role: "Systems Developer",
      location: "Cape Town",
      duration: "4 months",
      type: "Contract",
      description:
        "Developed central maintenance systems for financial parameters",
      achievements: [
        "Created 5 integrated financial management systems",
        "Ensured 100% regulatory compliance",
        "Improved reporting efficiency by 60%",
      ],
      technologies: [".NET", "SQL Server", "Financial Systems"],
      color: "from-blue-500 to-teal-500",
    },
    {
      year: "2022",
      company: "DFM Technologies",
      role: "Full-Stack Developer",
      location: "Cape Town",
      duration: "8 months",
      type: "Full-time",
      description:
        "Multiple projects including IoT data processing and web applications",
      achievements: [
        "Built spam detection system with 95% accuracy",
        "Processed satellite IoT data for 1000+ devices",
        "Developed PWA with offline capabilities",
      ],
      technologies: [".NET MVC", "Blazor", "IoT APIs", "PWA"],
      color: "from-green-500 to-blue-500",
    },
    {
      year: "2022",
      company: "BeingIT",
      role: "Software Developer",
      location: "Cape Town",
      duration: "6 months",
      type: "Contract",
      description:
        "Service delivery for PWC auditing software and support systems",
      achievements: [
        "Managed PWC client access systems",
        "Built automated ticket management system",
        "Improved data validation processes by 50%",
      ],
      technologies: ["C#", "SQL Server", "PowerShell"],
      color: "from-orange-500 to-red-500",
    },
    // {
    //   year: '2022',
    //   company: 'Titanic Trucking',
    //   role: 'Mobile App Developer',
    //   location: 'Cape Town',
    //   duration: '3 months',
    //   type: 'Contract',
    //   description: 'Created mobile diesel tracking application',
    //   achievements: [
    //     'Developed cross-platform mobile app',
    //     'Implemented real-time data sync',
    //     'Reduced fuel tracking errors by 90%'
    //   ],
    //   technologies: ['.NET MAUI', '.NET Core', 'Mobile APIs'],
    //   color: 'from-indigo-500 to-purple-500'
    // }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setActiveExperience((prev) => (prev + 1) % experiences.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <div
      ref={timelineRef}
      className="bg-slate-900 rounded-xl p-8 shadow-2xl border border-slate-700 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-8">
          <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
            <Briefcase className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-white font-bold text-xl">Career Journey</h3>
            <p className="text-slate-400">
              Interactive timeline of my professional experience
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Timeline */}
          <div className="lg:col-span-1 space-y-4">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative p-4 rounded-lg border-2 transition-all duration-500 cursor-pointer ${
                  index === activeExperience
                    ? "border-blue-500 bg-blue-500/10 scale-105"
                    : "border-slate-600 bg-slate-800/50 hover:border-slate-500"
                }`}
                onClick={() => setActiveExperience(index)}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${
                      exp.color
                    } rounded-lg flex items-center justify-center ${
                      index === activeExperience ? "scale-110" : ""
                    } transition-transform duration-300`}
                  >
                    <span className="text-white font-bold text-sm">
                      {exp.year}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h4
                      className={`font-semibold transition-colors duration-300 ${
                        index === activeExperience
                          ? "text-blue-400"
                          : "text-white"
                      }`}
                    >
                      {exp.company}
                    </h4>
                    <p className="text-slate-400 text-sm">{exp.role}</p>
                  </div>
                  <ChevronRight
                    className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${
                      index === activeExperience
                        ? "rotate-90 text-blue-400"
                        : ""
                    }`}
                  />
                </div>

                {/* Active indicator */}
                {index === activeExperience && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-r"></div>
                )}
              </div>
            ))}
          </div>

          {/* Experience Details */}
          <div className="lg:col-span-2 bg-slate-800 rounded-lg p-6 border border-slate-700">
            <div className="space-y-6">
              {/* Header */}
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${experiences[activeExperience].color} rounded-lg flex items-center justify-center`}
                    >
                      <span className="text-white font-bold">
                        {experiences[activeExperience].year}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-xl">
                        {experiences[activeExperience].role}
                      </h4>
                      <p className="text-blue-400 font-semibold">
                        {experiences[activeExperience].company}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-slate-400 text-sm">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{experiences[activeExperience].location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{experiences[activeExperience].duration}</span>
                    </div>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${experiences[activeExperience].color} text-white`}
                    >
                      {experiences[activeExperience].type}
                    </span>
                  </div>
                </div>
                {experiences[activeExperience].link && (
                  <a
                    href={experiences[activeExperience].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-200 hover:scale-105"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Project
                  </a>
                )}
              </div>

              {/* Description */}
              <p className="text-slate-300 leading-relaxed">
                {experiences[activeExperience].description}
              </p>

              {/* Achievements */}
              <div>
                <h5 className="text-white font-semibold mb-3 flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  Key Achievements:
                </h5>
                <ul className="space-y-2">
                  {experiences[activeExperience].achievements.map(
                    (achievement, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-slate-300"
                        style={{
                          animationDelay: `${index * 100}ms`,
                          opacity: 0,
                          animation: `fadeInLeft 0.5s ease-out ${
                            index * 100
                          }ms forwards`,
                        }}
                      >
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{achievement}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h5 className="text-white font-semibold mb-3 flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                  Technologies Used:
                </h5>
                <div className="flex flex-wrap gap-2">
                  {experiences[activeExperience].technologies.map(
                    (tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-full text-sm transition-all duration-200 hover:scale-105"
                        style={{
                          animationDelay: `${index * 50}ms`,
                          opacity: 0,
                          animation: `fadeInUp 0.5s ease-out ${
                            index * 50
                          }ms forwards`,
                        }}
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress indicator */}
        <div className="mt-8 flex justify-center gap-2">
          {experiences.map((_, index) => (
            <div
              key={index}
              className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${
                index === activeExperience
                  ? "bg-blue-500 w-8"
                  : "bg-slate-600 w-2 hover:bg-slate-500"
              }`}
              onClick={() => setActiveExperience(index)}
            ></div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

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

export default InteractiveTimeline;
