import {
  ChevronRight,
  Database,
  ExternalLink,
  Globe,
  Layers,
  Zap,
} from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const projects = [
    {
      title: "AI Conversational Agent & CRM",
      company: "Bottoms Up Coffee",
      description:
        "Comprehensive AI-powered booking and customer management system with automated workflows.",
      image:
        "https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: [
        "AI",
        "Airtable",
        "Make.com",
        "Google Calendar",
        "Email Automation",
      ],
      features: [
        "AI chatbot for customer queries and bookings",
        "Airtable CRM integration for data analytics",
        "Automated Google Calendar scheduling",
        "Email notification system",
        "Workflow automation with Make.com",
      ],
      link: "https://hellobottomsup.co.za/",
      icon: Zap,
      category: "AI & Automation",
      color: "from-purple-600 to-pink-600",
    },
    {
      title: "Central Maintenance Systems",
      company: "Lewis Furniture",
      description:
        "Suite of five financial parameter management systems with compliance features.",
      image:
        "https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: [".NET", "SQL Server", "Financial Systems", "Reporting"],
      features: [
        "Five integrated maintenance systems",
        "Regulatory compliance features",
        "Robust reporting tools",
        "Intuitive user interfaces",
        "Strategic financial decision support",
      ],
      icon: Database,
      category: "Enterprise Systems",
      color: "from-blue-600 to-teal-600",
    },
    // {
    //   title: "Diesel Tracking Mobile App",
    //   company: "Titanic Trucking",
    //   description: "Mobile application for logistics company to track diesel consumption with real-time data sync.",
    //   image: "https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpg?auto=compress&cs=tinysrgb&w=800",
    //   technologies: [".NET MAUI", ".NET Core API", "SQL Server", "Mobile Development"],
    //   features: [
    //     "Cross-platform mobile application",
    //     "Real-time data synchronization",
    //     "Driver-friendly interface",
    //     "Fuel consumption analytics",
    //     "Backend API integration"
    //   ],
    //   icon: Smartphone,
    //   category: "Mobile Development",
    //   color: "from-green-600 to-blue-600"
    // },
    {
      title: "IoT Data Processing System",
      company: "DFM Technologies",
      description:
        "Satellite data retrieval and processing system for water moisture monitoring.",
      image:
        "https://images.pexels.com/photos/8566471/pexels-photo-8566471.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["REST APIs", "Data Processing", ".NET", "IoT Integration"],
      features: [
        "Nanosatellite data retrieval",
        "Real-time data processing",
        "Water moisture monitoring",
        "API integration with Astro Cast",
        "Data conversion and standardization",
      ],
      icon: Globe,
      category: "IoT & Data Processing",
      color: "from-orange-600 to-red-600",
    },
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setExpandedProject(null);
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
    setExpandedProject(expandedProject === index ? null : index);
  };

  const handleLinkClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-20 bg-slate-50 dark:bg-slate-800 relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className={`flex items-center justify-center mb-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <Layers className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className="text-5xl font-bold text-slate-900 dark:text-white">
              Featured Projects
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
            Showcasing impactful solutions across various industries and
            technologies
          </p>
          {isMobile && (
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
              Tap to expand details
            </p>
          )}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group bg-white dark:bg-slate-700 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-200 dark:border-slate-600 hover:border-transparent cursor-pointer ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onClick={() => toggleExpanded(index)}
            >
              {/* Project image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                {/* Category badge */}
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1 rounded-full text-white text-sm font-medium bg-gradient-to-r ${project.color} shadow-lg backdrop-blur-sm`}
                  >
                    {project.category}
                  </span>
                </div>

                {/* Icon */}
                <div className="absolute bottom-4 left-4 flex items-center">
                  <div
                    className={`p-3 rounded-lg bg-gradient-to-r ${
                      project.color
                    } shadow-lg backdrop-blur-sm transition-transform duration-300 ${
                      expandedProject === index ? "scale-110 rotate-12" : ""
                    }`}
                  >
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Expand indicator */}
                <div className="absolute bottom-4 right-4">
                  <ChevronRight
                    className={`w-5 h-5 text-white transition-all duration-300 ${
                      expandedProject === index ? "rotate-90" : ""
                    }`}
                  />
                </div>

                {/* Hover overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                ></div>
              </div>

              {/* Project content */}
              <div className="p-8 relative">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm">
                    {project.company}
                  </p>
                </div>

                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies preview */}
                <div className="mb-4">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                    Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-slate-100 dark:bg-slate-600 text-slate-700 dark:text-slate-200 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 bg-slate-200 dark:bg-slate-500 text-slate-600 dark:text-slate-300 rounded-full text-sm">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Expanded content */}
                <div
                  className={`transition-all duration-500 ease-in-out ${
                    expandedProject === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <div className="pt-4 border-t border-slate-200 dark:border-slate-600 space-y-4">
                    {/* All technologies */}
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center">
                        <div className="w-2 h-2 bg-teal-600 rounded-full mr-2"></div>
                        All Technologies:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-slate-100 dark:bg-slate-600 hover:bg-slate-200 dark:hover:bg-slate-500 text-slate-700 dark:text-slate-200 rounded-full text-sm transition-all duration-200 hover:scale-105"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key features */}
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mr-2"></div>
                        Key Features:
                      </h4>
                      <ul className="space-y-1">
                        {project.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-start gap-2 text-slate-600 dark:text-slate-300 text-sm"
                          >
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action buttons */}
                    <div className="flex gap-4 pt-2">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/btn flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all duration-300 text-sm shadow-lg hover:shadow-xl hover:scale-105"
                          onClick={handleLinkClick}
                        >
                          <ExternalLink className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-200" />
                          View Live
                        </a>
                      )}
                      {/* <button
                        className="group/btn flex items-center gap-2 px-4 py-2 border-2 border-slate-300 dark:border-slate-500 hover:border-slate-400 dark:hover:border-slate-400 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white font-semibold rounded-lg transition-all duration-300 text-sm hover:scale-105"
                        onClick={handleLinkClick}
                      >
                        <Github className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-200" />
                        Details
                      </button> */}
                    </div>
                  </div>
                </div>

                {/* Bottom accent line */}
                <div
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${project.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
