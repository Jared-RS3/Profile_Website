import { Linkedin, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isVisible, setIsVisible] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "jaredmoodley9@gmail.com",
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=jaredmoodley9@gmail.com",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "Email to Inquire",
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=jaredmoodley9@gmail.com",
      color: "from-green-500 to-green-600",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Cape Town, South Africa",
      link: "https://maps.google.com/?q=Cape+Town,+South+Africa",
      color: "from-purple-500 to-purple-600",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/jared-tyler-moodley-b36636179/",
      color: "hover:text-blue-600",
      bgColor: "hover:bg-blue-50 dark:hover:bg-blue-900/20",
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
      id="contact"
      className="py-12 sm:py-16 lg:py-20 bg-slate-900 dark:bg-slate-950 relative overflow-hidden transition-colors duration-500"
    >
      {/* Animated Background - Simplified for mobile */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div
            className="absolute top-1/3 right-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-1/4 left-1/3 w-48 sm:w-96 h-48 sm:h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12 sm:mb-16">
          <div
            className={`flex items-center justify-center mb-4 sm:mb-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 mr-2 sm:mr-3" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Let's Work Together
            </h2>
          </div>
          <div
            className={`w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-400 to-teal-400 mx-auto mb-6 sm:mb-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
          ></div>
          <p
            className={`text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }`}
          >
            Ready to contribute to your team's success. Let's discuss how I can
            help bring your projects to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div
            className={`space-y-6 sm:space-y-8 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
                Get In Touch
              </h3>
              <p className="text-slate-300 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                I'm always excited to discuss new opportunities and projects.
                Whether you're looking for a full-time developer or need help
                with a specific project, I'd love to hear from you.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4 sm:space-y-6">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-slate-800/50 backdrop-blur-sm rounded-lg hover:bg-slate-700/50 transition-all duration-300 border border-slate-700/50 hover:border-blue-500/50"
                  style={{
                    animationDelay: `${index * 200 + 500}ms`,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible
                      ? "translateX(0)"
                      : "translateX(-20px)",
                    transition: `all 0.5s ease-out ${index * 200 + 500}ms`,
                  }}
                >
                  <div
                    className={`flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${item.color} rounded-lg group-hover:scale-110 transition-all duration-300 shadow-lg`}
                  >
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white group-hover:text-blue-400 transition-colors duration-200 text-sm sm:text-base">
                      {item.title}
                    </h4>
                    <p className="text-slate-300 group-hover:text-white transition-colors duration-200 text-xs sm:text-sm">
                      {item.value}
                    </p>
                  </div>
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full"></div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div
              className={`pt-6 sm:pt-8 border-t border-slate-700 transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: "1100ms" }}
            >
              <h4 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">
                Connect With Me
              </h4>
              <div className="flex gap-3 sm:gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-slate-800/50 backdrop-blur-sm rounded-lg text-slate-400 ${social.color} ${social.bgColor} transition-all duration-300 hover:scale-110 border border-slate-700/50 hover:border-blue-500/50`}
                  >
                    <social.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form - Simplified for mobile */}
          <div
            className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-slate-700/50 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
              Send a Message
            </h3>

            {/* Airtable Form Embed */}
            <div className="text-center">
              <iframe
                className="airtable-embed"
                src="https://airtable.com/embed/appoqp5tI4474DwbS/pagEPU8UOXD1nGTo0/form"
                frameBorder="0"
                width="100%"
                height="733"
                style={{
                  background: "transparent",
                  border: "1px solid #ccc",
                  borderRadius: 22,
                }}
              ></iframe>
            </div>
          </div>
        </div>

        {/* Call to Action - Simplified for mobile */}
        <div
          className={`mt-12 sm:mt-16 text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-teal-600/20 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-blue-500/20">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
              Ready to Start Your Next Project?
            </h3>
            <p className="text-blue-100 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base">
              I'm available for full-time positions, contract work, and
              consulting opportunities. Let's build something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button
                onClick={scrollToContact}
                className="group px-6 sm:px-8 py-2.5 sm:py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-slate-100 transition-all duration-300 hover:scale-105 shadow-lg text-sm sm:text-base"
              >
                <span className="group-hover:scale-110 transition-transform duration-200 inline-block">
                  Schedule a Call
                </span>
              </button>
              <button
                onClick={scrollToContact}
                className="group px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold rounded-lg transition-all duration-300 hover:scale-105 text-sm sm:text-base"
              >
                <span className="group-hover:scale-110 transition-transform duration-200 inline-block">
                  Download Resume
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
