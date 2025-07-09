import { Moon, Sparkles, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "../contexts/ThemeContext";

const DarkModePopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    // Only show on desktop and if not in dark mode
    const checkShowPopup = () => {
      const isDesktop = window.innerWidth >= 1024;

      if (isDesktop && !isDark) {
        // Show popup after 3 seconds on every reload
        setTimeout(() => {
          setIsVisible(true);
          setIsAnimating(true);
        }, 3000);
      }
    };

    checkShowPopup();
    window.addEventListener("resize", checkShowPopup);

    return () => window.removeEventListener("resize", checkShowPopup);
  }, [isDark]);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsVisible(false);
    }, 300);
  };

  const handleTryDarkMode = () => {
    toggleTheme();
    handleClose();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      {/* Popup Container */}
      <div className="absolute bottom-8 right-8 pointer-events-auto">
        <div
          className={`relative bg-white rounded-2xl shadow-2xl border-2 border-blue-200 p-6 max-w-sm transform transition-all duration-500 ${
            isAnimating
              ? "translate-y-0 opacity-100 scale-100"
              : "translate-y-8 opacity-0 scale-95"
          }`}
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 w-6 h-6 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-700 transition-colors duration-200"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Character */}
          <div className="flex items-start gap-4 mb-4">
            <div className="relative">
              {/* Character Body */}
              <div className="w-16 h-20 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full relative overflow-hidden">
                {/* Face */}
                <div className="absolute top-3 left-1/2 transform -translate-x-1/2">
                  {/* Eyes */}
                  <div className="flex gap-1.5 mb-1">
                    <div className="w-2 h-2 bg-white rounded-full relative">
                      <div className="absolute top-0.5 left-0.5 w-1 h-1 bg-slate-800 rounded-full animate-pulse"></div>
                    </div>
                    <div className="w-2 h-2 bg-white rounded-full relative">
                      <div
                        className="absolute top-0.5 left-0.5 w-1 h-1 bg-slate-800 rounded-full animate-pulse"
                        style={{ animationDelay: "0.5s" }}
                      ></div>
                    </div>
                  </div>
                  {/* Mouth */}
                  <div className="w-3 h-1.5 bg-white rounded-full"></div>
                </div>

                {/* Arms */}
                <div className="absolute top-6 -left-2 w-4 h-2 bg-blue-500 rounded-full transform -rotate-12"></div>
                <div
                  className="absolute top-6 -right-2 w-4 h-2 bg-blue-500 rounded-full transform rotate-12 animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></div>
              </div>

              {/* Floating Sparkles */}
              <Sparkles className="absolute -top-2 -right-1 w-4 h-4 text-yellow-400 animate-pulse" />
              <div
                className="absolute -top-1 -left-2 w-2 h-2 bg-yellow-300 rounded-full animate-ping"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>

            {/* Speech Bubble */}
            <div className="flex-1">
              <div className="relative bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-3 border border-blue-100">
                {/* Bubble Tail */}
                <div className="absolute left-0 top-4 transform -translate-x-1 w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-r-4 border-r-blue-50"></div>

                <div className="space-y-2">
                  <p className="text-sm font-medium text-slate-800 leading-relaxed">
                    Hey there! 👋 I'm your friendly guide!
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Want to see something cool? Try switching to{" "}
                    <span className="font-semibold text-blue-600">
                      dark mode
                    </span>{" "}
                    for a completely different experience! ✨
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            <button
              onClick={handleTryDarkMode}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-slate-800 to-slate-900 text-white rounded-lg hover:from-slate-900 hover:to-black transition-all duration-300 hover:scale-105 shadow-lg group"
            >
              <Moon className="w-4 h-4 group-hover:rotate-12 transition-transform duration-200" />
              <span className="text-sm font-medium">Try Dark Mode!</span>
            </button>
            <button
              onClick={handleClose}
              className="px-4 py-2 text-slate-500 hover:text-slate-700 text-sm font-medium rounded-lg hover:bg-slate-100 transition-colors duration-200"
            >
              No Dark Mode For Me
            </button>
          </div>

          {/* Floating Animation Elements */}
          <div
            className="absolute -top-2 left-8 w-1 h-1 bg-blue-400 rounded-full animate-ping"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-2 right-12 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse"
            style={{ animationDelay: "1.5s" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default DarkModePopup;
