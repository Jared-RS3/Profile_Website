import {
  ChevronDown,
  Code,
  Download,
  Mail,
  MapPin,
  Sparkles,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";
import AITypingEffect from "./AITypingEffect";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden flex items-center justify-center pt-16 sm:pt-20"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 dark:from-slate-900 dark:via-blue-900 dark:to-slate-900 transition-colors duration-500">
        {/* Animated Gradient Orbs */}
        <div
          className="absolute w-64 sm:w-96 h-64 sm:h-96 rounded-full opacity-20 dark:opacity-20 blur-3xl transition-all duration-1000 ease-out"
          style={{
            background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)",
            left: `${mousePosition.x * 0.02}%`,
            top: `${mousePosition.y * 0.02}%`,
            transform: `translate(-50%, -50%) scale(${
              1 + mousePosition.x * 0.001
            })`,
          }}
        />
        <div
          className="absolute w-64 sm:w-96 h-64 sm:h-96 rounded-full opacity-15 dark:opacity-15 blur-3xl transition-all duration-1500 ease-out"
          style={{
            background: "radial-gradient(circle, #06b6d4 0%, transparent 70%)",
            right: `${mousePosition.x * 0.015}%`,
            bottom: `${mousePosition.y * 0.015}%`,
            transform: `translate(50%, 50%) scale(${
              1 + mousePosition.y * 0.001
            })`,
          }}
        />

        {/* Floating Code Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute text-blue-400/10 dark:text-blue-400/10 font-mono text-xs sm:text-sm animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            >
              {["</>", "{}", "[]", "()", "fn"][Math.floor(Math.random() * 5)]}
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Floating Icons */}
            <div className="flex gap-4 justify-center lg:justify-start mb-4 sm:mb-6">
              <Code
                className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500 animate-bounce"
                style={{ animationDelay: "0s" }}
              />
              <Zap
                className="w-6 h-6 sm:w-8 sm:h-8 text-teal-500 animate-bounce"
                style={{ animationDelay: "1s" }}
              />
              <Sparkles
                className="w-6 h-6 sm:w-8 sm:h-8 text-purple-500 animate-bounce"
                style={{ animationDelay: "2s" }}
              />
            </div>

            {/* Main Heading */}
            <div
              className={`space-y-3 sm:space-y-4 transition-all duration-1000 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <h1 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 dark:text-white leading-tight">
                <span
                  className="inline-block animate-fade-in-up"
                  style={{ animationDelay: "0.4s" }}
                >
                  Hi I'm Jared
                </span>{" "}
                <span
                  className="block text-4xl sm:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-teal-400 animate-fade-in-up"
                  style={{ animationDelay: "0.8s" }}
                >
                  Full-Stack Developer
                </span>
              </h1>

              <p
                className={`text-base sm:text-lg lg:text-xl xl:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto lg:mx-0 leading-relaxed transition-all duration-1000 ${
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ animationDelay: "1s" }}
              >
                {/* Crafting next-generation applications with{" "}
                <span className="text-blue-500 font-semibold">C#</span>,{" "}
                <span className="text-teal-500 font-semibold">React.js</span>,
                and{" "}
                <span className="text-purple-500 font-semibold">
                  AI automation
                </span>
                .{" "}
                <span className="hidden sm:inline">
                  Transforming complex problems into elegant solutions.
                </span> */}
              </p>
            </div>

            {/* AI Typing Effect */}
            <div
              className={`transition-all duration-1000 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ animationDelay: "1.2s" }}
            >
              <AITypingEffect />
            </div>

            {/* Contact Info */}
            <div
              className={`flex flex-col sm:flex-row gap-4 sm:gap-6 text-slate-600 dark:text-slate-300 transition-all duration-1000 justify-center lg:justify-start ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ animationDelay: "1.4s" }}
            >
              <div className="flex items-center gap-2 group cursor-pointer justify-center lg:justify-start">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 group-hover:scale-110 transition-transform duration-300" />
                <span className="group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300 text-sm sm:text-base">
                  Cape Town, SA
                </span>
              </div>
              <div className="flex items-center gap-2 group cursor-pointer justify-center lg:justify-start">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 group-hover:scale-110 transition-transform duration-300" />
                <span className="group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300 text-sm sm:text-base">
                  Available for hire
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-3 sm:gap-4 pt-6 sm:pt-8 transition-all duration-1000 justify-center lg:justify-start ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ animationDelay: "1.6s" }}
            >
              <button
                onClick={scrollToContact}
                className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-blue-800 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                <span className="relative flex items-center gap-2 justify-center">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform duration-300" />
                  Let's Build Something Amazing
                </span>
              </button>
              <button
                onClick={scrollToContact}
                className="group relative px-6 sm:px-8 py-3 sm:py-4 border-2 border-blue-500 text-blue-500 font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105"
              >
                <span className="absolute inset-0 bg-blue-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                <span className="relative flex items-center gap-2 group-hover:text-white transition-colors duration-300 justify-center">
                  <Download className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-y-1 transition-transform duration-300" />
                  Download Portfolio
                </span>
              </button>
            </div>
          </div>

          {/* Right Column - Professional Photo Space */}
          <div
            className={`hidden lg:flex justify-center lg:justify-end transition-all duration-1000 ${
              isLoaded
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
            style={{ animationDelay: "0.4s" }}
          >
            <div className="relative group">
              {/* Photo Container */}
              <div className="relative w-72 xl:w-80 h-80 xl:h-96 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-slate-700 dark:to-slate-800 border-4 border-white dark:border-slate-600 group-hover:scale-105 transition-all duration-500">
                {/* Placeholder for your photo */}
                <div className="absolute inset-0 flex items-center justify-center text-slate-400 dark:text-slate-500">
                  <div className="text-center">
                    <img
                      src="https://dl.dropboxusercontent.com/scl/fi/5dqzspx8i5xyxvrz5q8su/pro_img.jpeg?rlkey=7pf6lpivuit2jmz8h7qcl2coq&st=bq9l96eu"
                      className="w-50 xl:w-54 h-50 xl:h-54 mx-auto mb-4 rounded-full object-cover shadow-lg"
                    />

                    <p className="text-sm font-medium">Jared-Tyler Moodley</p>
                    <p className="text-xs opacity-75">Software Developer</p>
                  </div>
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Floating Elements Around Photo */}
              <div className="absolute -top-4 -right-4 w-6 xl:w-8 h-6 xl:h-8 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full animate-pulse shadow-lg"></div>
              <div
                className="absolute -bottom-4 -left-4 w-5 xl:w-6 h-5 xl:h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full animate-pulse shadow-lg"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute top-1/2 -left-6 w-3 xl:w-4 h-3 xl:h-4 bg-gradient-to-br from-teal-500 to-green-500 rounded-full animate-pulse shadow-lg"
                style={{ animationDelay: "2s" }}
              ></div>

              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-teal-400/20 rounded-2xl blur-xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            </div>
          </div>
        </div>

        {/* Animated Scroll Indicator */}
        <button
          onClick={scrollToAbout}
          className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-white transition-all duration-300 group"
        >
          <div className="flex flex-col items-center space-y-1 sm:space-y-2">
            <span className="text-xs sm:text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Discover my work
            </span>
            <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 animate-bounce group-hover:scale-110 transition-transform duration-300" />
          </div>
        </button>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default Hero;
