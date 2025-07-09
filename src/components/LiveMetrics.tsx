import { Activity, Clock, Code, TrendingUp, Users, Zap } from "lucide-react";
import { useEffect, useState } from "react";

const LiveMetrics = () => {
  const [metrics, setMetrics] = useState({
    linesOfCode: 0,
    projectsCompleted: 0,
    clientsSatisfied: 0,
    hoursOfExperience: 0,
    bugsFixed: 0,
    coffeeConsumed: 0,
  });

  const targetMetrics = {
    linesOfCode: 50000,
    projectsCompleted: 15,
    clientsSatisfied: 100,
    hoursOfExperience: 4380, // 2+ years
    bugsFixed: 130,
    coffeeConsumed: 3,
  };

  const metricConfigs = [
    {
      key: "linesOfCode",
      label: "Lines of Code",
      icon: Code,
      color: "from-blue-500 to-blue-600",
      suffix: "+",
      description: "Written across all projects",
    },
    {
      key: "projectsCompleted",
      label: "Projects Completed",
      icon: Zap,
      color: "from-green-500 to-green-600",
      suffix: "+",
      description: "Successfully delivered",
    },
    {
      key: "clientsSatisfied",
      label: "Client Satisfaction",
      icon: Users,
      color: "from-purple-500 to-purple-600",
      suffix: "%",
      description: "Happy clients rate",
    },
    {
      key: "hoursOfExperience",
      label: "Hours of Experience",
      icon: Clock,
      color: "from-orange-500 to-orange-600",
      suffix: "+",
      description: "Hands-on development",
    },
    {
      key: "bugsFixed",
      label: "Bugs Squashed",
      icon: Activity,
      color: "from-red-500 to-red-600",
      suffix: "+",
      description: "Issues resolved",
    },
    {
      key: "coffeeConsumed",
      label: "Tabs vs Spaces Debates Won",
      icon: TrendingUp,
      color: "from-amber-500 to-amber-600",
      suffix: "+",
      description: "– but it's a war, not a battle",
    },
  ];

  useEffect(() => {
    const animateMetrics = () => {
      const duration = 3000; // 3 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);

        setMetrics({
          linesOfCode: Math.floor(targetMetrics.linesOfCode * easeOutQuart),
          projectsCompleted: Math.floor(
            targetMetrics.projectsCompleted * easeOutQuart
          ),
          clientsSatisfied: Math.floor(
            targetMetrics.clientsSatisfied * easeOutQuart
          ),
          hoursOfExperience: Math.floor(
            targetMetrics.hoursOfExperience * easeOutQuart
          ),
          bugsFixed: Math.floor(targetMetrics.bugsFixed * easeOutQuart),
          coffeeConsumed: Math.floor(
            targetMetrics.coffeeConsumed * easeOutQuart
          ),
        });

        if (currentStep >= steps) {
          clearInterval(interval);
        }
      }, stepDuration);

      return () => clearInterval(interval);
    };

    const timer = setTimeout(animateMetrics, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {metricConfigs.map((config, index) => {
        const IconComponent = config.icon;
        const value = metrics[config.key as keyof typeof metrics];

        return (
          <div
            key={config.key}
            className="group bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 dark:border-slate-700 hover:border-transparent relative overflow-hidden"
            style={{
              animationDelay: `${index * 100}ms`,
            }}
          >
            {/* Background gradient on hover */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${config.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
            ></div>

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`flex items-center justify-center w-12 h-12 bg-gradient-to-br ${config.color} rounded-lg group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {value.toLocaleString()}
                    {config.suffix}
                  </div>
                </div>
              </div>

              <h3 className="font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {config.label}
              </h3>

              <p className="text-slate-600 dark:text-slate-300 text-sm">
                {config.description}
              </p>

              {/* Progress bar */}
              <div className="mt-4 w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${config.color} transition-all duration-1000 ease-out`}
                  style={{
                    width: `${
                      (value /
                        targetMetrics[
                          config.key as keyof typeof targetMetrics
                        ]) *
                      100
                    }%`,
                    transitionDelay: `${index * 200}ms`,
                  }}
                ></div>
              </div>

              {/* Pulse effect */}
              {/* <div
                className={`absolute top-4 right-4 w-3 h-3 bg-gradient-to-r ${config.color} rounded-full animate-pulse opacity-60`}
              ></div> */}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LiveMetrics;
