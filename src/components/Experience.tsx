import {
  Award,
  Briefcase,
  Calendar,
  ChevronDown,
  Code,
  Database,
  ExternalLink,
  Globe,
  MapPin,
  Smartphone,
  Star,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Experience = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredMetric, setHoveredMetric] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const experiences = [
    {
      year: "2024",
      company: "Forviz Mazars",
      role: "Software Developer & Data Analyst",
      location: "Cape Town",
      duration: "12 months",
      type: "Full-time",
      description:
        "As a software engineer at Company Forvis Mazars, I developed Python tools and Power BI dashboards that automated data processing and reporting for both the IT Audit and Corporate Finance teams, saving time and improving accuracy.",
      impact: {
        efficiency: 85,
        satisfaction: 87,
        automation: 80,
        innovation: 78,
      },
      metrics: [
        // {
        //   icon: TrendingUp, // or BarChartHorizontal or Activity
        //   label: "Process Automation",
        //   value: "+50%",
        //   color: "from-green-400 to-emerald-500",
        // },
        // {
        //   icon: TimerReset, // Lucide icon for time efficiency
        //   label: "Audit Time Saved",
        //   value: "30+ hrs/mo",
        //   color: "from-blue-400 to-cyan-500",
        // },
        // {
        //   icon: FileText, // represents reporting
        //   label: "Reports Auto-Generated",
        //   value: "5+",
        //   color: "from-purple-500 to-indigo-500",
        // },
        // {
        //   icon: Workflow, // automation/workflow
        //   label: "Manual Steps Removed",
        //   value: "10+",
        //   color: "from-yellow-400 to-orange-500",
        // },
      ],

      achievements: [
        "Built Python automation tools for the IT Audit team to process and structure large, unstructured Excel data sets",
        "Applied audit-specific logic in scripts to reduce manual work and improve data accuracy",
        "Created real-time Power BI dashboards using Power Query for clearer audit insights",
        "Developed Python reporting tools for Corporate Finance to process raw financial data and generate required reports",
        "Helped automate and speed up month-end reporting, reducing errors and saving time",
        // "Served as the sole software engineer, supporting both audit and finance teams with technical solutions",
      ],

      technologies: [
        { name: "Python", level: 90, icon: Code },
        { name: "Node JS", level: 85, icon: Zap },
        { name: "SQL Server", level: 88, icon: Database },
        { name: "Power BI", level: 82, icon: Globe },
        { name: "Power Query", level: 82, icon: Globe },
        { name: "Power Apps", level: 82, icon: Globe },
        { name: "Wordpress", level: 82, icon: Globe },
      ],
      color: "from-orange-500 to-red-500",
      gradient: "bg-gradient-to-br from-orange-900/20 to-red-900/20",
      testimonial:
        "Working with enterprise systems requires precision. Jared delivered exactly what we needed.",
    },
    {
      year: "2023",
      company: "Bottoms Up Coffee",
      role: "AI & Automation Developer",
      location: "Cape Town",
      duration: "6 months",
      type: "Contract",
      description:
        "Revolutionized customer engagement through AI-powered conversational systems and intelligent automation workflows.",
      impact: {
        efficiency: 85,
        satisfaction: 92,
        automation: 78,
        innovation: 95,
      },
      metrics: [
        {
          label: "Customer Engagement",
          value: "+40%",
          icon: Users,
          color: "from-blue-500 to-cyan-500",
        },
        {
          label: "Booking Automation",
          value: "80%",
          icon: Zap,
          color: "from-green-500 to-emerald-500",
        },
        {
          label: "Response Time",
          value: "-75%",
          icon: Target,
          color: "from-purple-500 to-pink-500",
        },
        {
          label: "Client Satisfaction",
          value: "98%",
          icon: Award,
          color: "from-orange-500 to-red-500",
        },
      ],
      achievements: [
        "Architected AI conversational agent increasing customer engagement by 40%",
        "Automated booking system reducing manual intervention by 80%",
        "Integrated Airtable CRM with Make.com for seamless workflow automation",
        "Implemented Google Calendar API for real-time scheduling",
        "Designed intelligent email notification system with 98% delivery rate",
      ],
      technologies: [
        { name: "AI/ML", level: 90, icon: Code },
        { name: "Airtable", level: 95, icon: Database },
        { name: "Make.com", level: 88, icon: Zap },
        { name: "Google APIs", level: 85, icon: Globe },
      ],
      color: "from-purple-500 to-pink-500",
      gradient: "bg-gradient-to-br from-purple-900/20 to-pink-900/20",
      link: "https://hellobottomsup.co.za/",
      testimonial:
        "Jared transformed our entire customer interaction process. The AI system he built is simply phenomenal!",
    },
    {
      year: "2023",
      company: "Lewis Furniture",
      role: "Systems Developer",
      location: "Cape Town",
      duration: "4 months",
      type: "Full-time",
      description:
        "Engineered comprehensive financial management ecosystem with advanced compliance and reporting capabilities.",
      impact: {
        efficiency: 92,
        satisfaction: 88,
        automation: 85,
        innovation: 82,
      },
      metrics: [
        {
          label: "System Integration",
          value: "5 Systems",
          icon: Database,
          color: "from-blue-500 to-teal-500",
        },
        {
          label: "Compliance Rate",
          value: "100%",
          icon: Award,
          color: "from-green-500 to-emerald-500",
        },
        {
          label: "Report Efficiency",
          value: "+60%",
          icon: TrendingUp,
          color: "from-purple-500 to-indigo-500",
        },
        {
          label: "Data Accuracy",
          value: "99.8%",
          icon: Target,
          color: "from-orange-500 to-yellow-500",
        },
      ],
      achievements: [
        "Developed 5 integrated financial management systems from scratch",
        "Achieved 100% regulatory compliance across all modules",
        "Improved reporting efficiency by 60% through automated dashboards",
        "Implemented real-time data validation with 99.8% accuracy",
        "Created intuitive interfaces reducing training time by 50%",
      ],
      technologies: [
        { name: ".NET Core", level: 95, icon: Code },
        { name: "SQL Server", level: 90, icon: Database },
        { name: "Financial APIs", level: 85, icon: Globe },
        { name: "Reporting", level: 88, icon: TrendingUp },
      ],
      color: "from-blue-500 to-teal-500",
      gradient: "bg-gradient-to-br from-blue-900/20 to-teal-900/20",
      testimonial:
        "The financial systems Jared built are incredibly robust and have streamlined our entire operation.",
    },
    {
      year: "2022",
      company: "DFM Technologies",
      role: "Full-Stack Developer",
      location: "Cape Town",
      duration: "8 months",
      type: "Full-time",
      description:
        "Pioneered cutting-edge IoT data processing solutions and intelligent spam detection systems.",
      impact: {
        efficiency: 88,
        satisfaction: 90,
        automation: 92,
        innovation: 94,
      },
      metrics: [
        {
          label: "Spam Detection",
          value: "95%",
          icon: Target,
          color: "from-red-500 to-pink-500",
        },
        {
          label: "IoT Devices",
          value: "1000+",
          icon: Globe,
          color: "from-green-500 to-blue-500",
        },
        {
          label: "Data Processing",
          value: "24/7",
          icon: Zap,
          color: "from-purple-500 to-indigo-500",
        },
        {
          label: "System Uptime",
          value: "99.9%",
          icon: Award,
          color: "from-orange-500 to-red-500",
        },
      ],
      achievements: [
        "Built advanced spam detection system with 95% accuracy using ML algorithms",
        "Processed satellite IoT data for 1000+ connected devices in real-time",
        "Developed Progressive Web App with offline-first architecture",
        "Implemented data decoding system for water moisture monitoring",
        "Created scalable API infrastructure handling 10k+ requests/minute",
      ],
      technologies: [
        { name: ".NET MVC", level: 92, icon: Code },
        { name: "Blazor WASM", level: 85, icon: Globe },
        { name: "IoT APIs", level: 88, icon: Smartphone },
        { name: "ML/AI", level: 80, icon: Zap },
      ],
      color: "from-green-500 to-blue-500",
      gradient: "bg-gradient-to-br from-green-900/20 to-blue-900/20",
      testimonial:
        "Jared's IoT solutions are incredibly sophisticated. His technical expertise is outstanding.",
    },
    {
      year: "2022",
      company: "BeingIT",
      role: "Software Developer",
      location: "Cape Town",
      duration: "6 months",
      type: "Full-time",
      description:
        "Delivered enterprise-grade solutions for PWC auditing systems with advanced automation capabilities.",
      impact: {
        efficiency: 85,
        satisfaction: 87,
        automation: 80,
        innovation: 78,
      },
      metrics: [
        {
          label: "Client Systems",
          value: "PWC Scale",
          icon: Users,
          color: "from-blue-500 to-purple-500",
        },
        {
          label: "Automation",
          value: "+50%",
          icon: Zap,
          color: "from-green-500 to-teal-500",
        },
        {
          label: "Data Validation",
          value: "99.5%",
          icon: Target,
          color: "from-purple-500 to-pink-500",
        },
        {
          label: "Ticket Resolution",
          value: "-70%",
          icon: Award,
          color: "from-orange-500 to-red-500",
        },
      ],
      achievements: [
        "Managed PWC client access systems for enterprise-scale operations",
        "Built automated ticket management system reducing resolution time by 70%",
        "Improved data validation processes achieving 99.5% accuracy",
        "Created SODA System integration for seamless data retrieval",
        "Implemented PowerShell automation scripts for system maintenance",
      ],
      technologies: [
        { name: "C# .NET", level: 90, icon: Code },
        { name: "SQL Server", level: 88, icon: Database },
        { name: "PowerShell", level: 85, icon: Zap },
        { name: "Enterprise APIs", level: 82, icon: Globe },
      ],
      color: "from-orange-500 to-red-500",
      gradient: "bg-gradient-to-br from-orange-900/20 to-red-900/20",
      testimonial:
        "Working with enterprise systems requires precision. Jared delivered exactly what we needed.",
    },

    // {
    //   year: '2022',
    //   company: 'Titanic Trucking',
    //   role: 'Mobile App Developer',
    //   location: 'Cape Town',
    //   duration: '3 months',
    //   type: 'Contract',
    //   description: 'Crafted innovative mobile solution for logistics optimization with real-time tracking capabilities.',
    //   impact: {
    //     efficiency: 90,
    //     satisfaction: 85,
    //     automation: 88,
    //     innovation: 86
    //   },
    //   metrics: [
    //     { label: 'Cross-Platform', value: 'iOS + Android', icon: Smartphone, color: 'from-indigo-500 to-purple-500' },
    //     { label: 'Tracking Accuracy', value: '99%', icon: Target, color: 'from-green-500 to-emerald-500' },
    //     { label: 'Error Reduction', value: '-90%', icon: Award, color: 'from-blue-500 to-cyan-500' },
    //     { label: 'Real-time Sync', value: '<1s', icon: Zap, color: 'from-purple-500 to-pink-500' }
    //   ],
    //   achievements: [
    //     'Developed cross-platform mobile app using .NET MAUI',
    //     'Implemented real-time data synchronization with <1s latency',
    //     'Reduced fuel tracking errors by 90% through intelligent validation',
    //     'Created intuitive driver interface improving adoption by 95%',
    //     'Built robust offline-first architecture for remote operations'
    //   ],
    //   technologies: [
    //     { name: '.NET MAUI', level: 88, icon: Smartphone },
    //     { name: '.NET Core API', level: 90, icon: Code },
    //     { name: 'Mobile APIs', level: 85, icon: Globe },
    //     { name: 'Real-time Sync', level: 87, icon: Zap }
    //   ],
    //   color: 'from-indigo-500 to-purple-500',
    //   gradient: 'bg-gradient-to-br from-indigo-900/20 to-purple-900/20',
    //   testimonial: "The mobile app Jared built transformed our logistics operations completely."
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const toggleExpanded = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden"
    >
      {/* Animated Background */}
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

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className={`flex items-center justify-center mb-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div className="relative">
              <Briefcase className="w-12 h-12 text-blue-400 animate-pulse" />
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">2+</span>
              </div>
            </div>
            <h2 className="text-5xl font-bold text-white ml-4 bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
              Professional Experience
            </h2>
          </div>
          <div
            className={`w-32 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 mx-auto mb-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
          ></div>
          <p
            className={`text-xl text-blue-100 max-w-4xl mx-auto transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }`}
          >
            Click any experience card to explore detailed achievements,
            technologies, and impact metrics
          </p>
        </div>

        {/* Experience Cards Grid */}
        <div className="space-y-7 ">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 overflow-hidden cursor-pointer ${
                expandedCard === index
                  ? "ring-2 ring-blue-500/50 shadow-2xl shadow-blue-500/20"
                  : "hover:shadow-xl"
              } ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => toggleExpanded(index)}
            >
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 ${exp.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              ></div>

              {/* Main Card Content */}
              <div className="relative z-10 p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6 flex-1">
                    {/* Year Badge */}
                    <div
                      className={`flex items-center justify-center w-16 h-16 bg-gradient-to-r ${exp.color} rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <span className="text-white font-bold text-lg">
                        {exp.year}
                      </span>
                    </div>

                    {/* Experience Info */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                          {exp.role}
                        </h3>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            exp.type === "Full-time"
                              ? "bg-green-500/20 text-green-400 border border-green-500/30"
                              : "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                          }`}
                        >
                          {exp.type}
                        </span>
                      </div>

                      <p className="text-xl text-blue-300 font-semibold mb-2">
                        {exp.company}
                      </p>

                      <div className="flex items-center gap-4 text-slate-300 text-sm">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.duration}</span>
                        </div>
                      </div>
                    </div>

                    {/* Quick Metrics Preview */}
                    <div className="hidden lg:flex gap-3">
                      {exp.metrics.slice(0, 2).map((metric, metricIndex) => {
                        const IconComponent = metric.icon;
                        return (
                          <div
                            key={metricIndex}
                            className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105"
                          >
                            <div
                              className={`w-8 h-8 bg-gradient-to-r ${metric.color} rounded-lg flex items-center justify-center mb-2`}
                            >
                              <IconComponent className="w-4 h-4 text-white" />
                            </div>
                            <div className="text-lg font-bold text-white">
                              {metric.value}
                            </div>
                            <div className="text-xs text-slate-300">
                              {metric.label}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Expand Button */}
                  <div className="flex items-center gap-4 ml-4">
                    {exp.link && (
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all duration-300 hover:scale-105"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span className="ml-2">View Live</span>
                      </a>
                    )}

                    <div
                      className={`p-2 rounded-lg bg-white/10 transition-all duration-300 ${
                        expandedCard === index
                          ? "rotate-180 bg-blue-500/20"
                          : "group-hover:bg-white/20"
                      }`}
                    >
                      <ChevronDown className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-200 mt-4 leading-relaxed">
                  {exp.description}
                </p>
              </div>

              {/* Expanded Content */}
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  expandedCard === index
                    ? "max-h-[900px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6 border-t border-slate-700/50">
                  <div className="grid lg:grid-cols-2 gap-8 pt-6">
                    {/* Left Column - Metrics & Achievements */}
                    <div className="space-y-6">
                      {/* Impact Metrics */}
                      <div>
                        <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                          <TrendingUp className="w-6 h-6 text-green-400 mr-2" />
                          Impact Metrics
                        </h4>
                        <div className="grid grid-cols-2 gap-3">
                          {exp.metrics.map((metric, metricIndex) => {
                            const IconComponent = metric.icon;
                            return (
                              <div
                                key={metricIndex}
                                className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105"
                                onMouseEnter={() =>
                                  setHoveredMetric(metricIndex)
                                }
                                onMouseLeave={() => setHoveredMetric(null)}
                              >
                                <div
                                  className={`w-10 h-10 bg-gradient-to-r ${metric.color} rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}
                                >
                                  <IconComponent className="w-5 h-5 text-white" />
                                </div>
                                <div className="text-xl font-bold text-white mb-1">
                                  {metric.value}
                                </div>
                                <div className="text-sm text-slate-300">
                                  {metric.label}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Key Achievements */}
                      <div>
                        <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                          <Star className="w-6 h-6 text-yellow-400 mr-2" />
                          Key Achievements
                        </h4>
                        <div className="space-y-3">
                          {exp.achievements.map((achievement, achIndex) => (
                            <div
                              key={achIndex}
                              className="flex items-start gap-3 p-3 bg-white/5 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300"
                            >
                              <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-slate-200 text-sm leading-relaxed">
                                {achievement}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Column - Technologies & Testimonial */}
                    <div className="space-y-6">
                      {/* Technology Stack */}
                      <div>
                        <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                          <Code className="w-6 h-6 text-purple-400 mr-2" />
                          Technology Stack
                        </h4>
                        <div className="space-y-3">
                          {exp.technologies.map((tech, techIndex) => {
                            const IconComponent = tech.icon;
                            return (
                              <div
                                key={techIndex}
                                className="bg-white/5 rounded-lg p-4 border border-white/10 hover:border-white/20 transition-all duration-300"
                              >
                                <div className="flex items-center gap-3 mb-3">
                                  <IconComponent className="w-5 h-5 text-blue-400" />
                                  <span className="text-white font-semibold">
                                    {tech.name}
                                  </span>
                                  <span className="text-slate-300 text-sm ml-auto">
                                    {tech.level}%
                                  </span>
                                </div>
                                <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                                  <div
                                    className={`h-full bg-gradient-to-r ${exp.color} transition-all duration-1000 ease-out`}
                                    style={{ width: `${tech.level}%` }}
                                  ></div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Client Testimonial */}
                      {/* <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl p-6 border border-blue-500/20">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-white text-xl">💬</span>
                          </div>
                          <div>
                            <p className="text-blue-100 italic text-lg leading-relaxed mb-2">"{exp.testimonial}"</p>
                            <p className="text-blue-300 font-semibold">— Client Feedback</p>
                          </div>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div
          className={`mt-16 text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 animate-pulse"></div>

            <div className="relative z-10">
              <h3 className="text-4xl font-bold text-white mb-4">
                Ready to Add Your Project to This Timeline?
              </h3>
              <p className="text-blue-100 mb-8 max-w-3xl mx-auto text-lg">
                Each project represents a milestone in innovation. Let's create
                the next breakthrough together and set new industry standards
                that others will aspire to reach.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => {
                    const contactSection = document.getElementById("contact");
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="group px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white font-bold rounded-xl hover:from-blue-700 hover:via-purple-700 hover:to-blue-800 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl text-lg"
                >
                  <span className="group-hover:scale-110 transition-transform duration-200 inline-block">
                    🚀 Let's Build Something Revolutionary
                  </span>
                </button>
                <button
                  onClick={() => {
                    const projectsSection = document.getElementById("projects");
                    if (projectsSection) {
                      projectsSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="group px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold rounded-xl transition-all duration-300 hover:scale-105 text-lg"
                >
                  <span className="group-hover:scale-110 transition-transform duration-200 inline-block">
                    💼 Explore Detailed Case Studies
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

export default Experience;
