import { Calendar, Code, TrendingUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const SkillsHeatmap = () => {
  const [hoveredCell, setHoveredCell] = useState<{
    week: number;
    day: number;
  } | null>(null);
  const [animationProgress, setAnimationProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Generate realistic commit-like data
  const generateHeatmapData = () => {
    const weeks = 52;
    const days = 7;
    const data = [];

    for (let week = 0; week < weeks; week++) {
      const weekData = [];
      for (let day = 0; day < days; day++) {
        // Simulate realistic coding patterns
        let intensity = 0;

        // Weekdays have higher activity
        if (day >= 1 && day <= 5) {
          intensity = Math.random() * 4 + 1;
        } else {
          // Weekends have lower but still some activity
          intensity = Math.random() * 2;
        }

        // Add some vacation periods (lower activity)
        if (week >= 20 && week <= 22) intensity *= 0.3;
        if (week >= 45 && week <= 47) intensity *= 0.3;

        // Add some intense periods (higher activity)
        if (week >= 10 && week <= 15) intensity *= 1.5;
        if (week >= 35 && week <= 40) intensity *= 1.3;

        weekData.push({
          intensity: Math.min(Math.floor(intensity), 4),
          commits: Math.floor(intensity * 3),
          projects: Math.floor(intensity * 0.5),
          date: new Date(2024, 0, week * 7 + day),
        });
      }
      data.push(weekData);
    }
    return data;
  };

  const [heatmapData] = useState(generateHeatmapData());

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const interval = setInterval(() => {
            setAnimationProgress((prev) => {
              if (prev >= 100) {
                clearInterval(interval);
                return 100;
              }
              return prev + 2;
            });
          }, 20);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getIntensityColor = (intensity: number) => {
    const colors = [
      "bg-slate-700", // 0
      "bg-green-900", // 1
      "bg-green-700", // 2
      "bg-green-500", // 3
      "bg-green-300", // 4
    ];
    return colors[intensity] || colors[0];
  };

  const getIntensityLabel = (intensity: number) => {
    const labels = ["No activity", "Low", "Medium", "High", "Very High"];
    return labels[intensity] || labels[0];
  };

  const dayLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthLabels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <div
      ref={containerRef}
      className="bg-slate-900 rounded-xl p-6 shadow-2xl border border-slate-700"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg">
          <TrendingUp className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="text-white font-semibold">Development Activity</h3>
          <p className="text-slate-400 text-sm">
            365 days of consistent coding
          </p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-[800px]">
          {/* Month labels */}
          <div className="flex mb-2 ml-8">
            {monthLabels.map((month, index) => (
              <div
                key={index}
                className="flex-1 text-slate-400 text-xs text-center"
              >
                {month}
              </div>
            ))}
          </div>

          <div className="flex">
            {/* Day labels */}
            <div className="flex flex-col justify-between mr-2 py-1">
              {dayLabels.map((day, index) => (
                <div
                  key={index}
                  className="text-slate-400 text-xs h-3 flex items-center"
                >
                  {index % 2 === 1 ? day : ""}
                </div>
              ))}
            </div>

            {/* Heatmap grid */}
            <div className="flex gap-1">
              {heatmapData.map((week, weekIndex) => (
                <div key={weekIndex} className="flex flex-col gap-1">
                  {week.map((day, dayIndex) => {
                    const shouldShow =
                      weekIndex * 7 + dayIndex <
                      (animationProgress * heatmapData.length * 7) / 100;
                    return (
                      <div
                        key={dayIndex}
                        className={`w-3 h-3 rounded-sm transition-all duration-200 cursor-pointer ${
                          shouldShow
                            ? getIntensityColor(day.intensity)
                            : "bg-slate-800"
                        } hover:ring-2 hover:ring-blue-400 hover:scale-125`}
                        onMouseEnter={() =>
                          setHoveredCell({ week: weekIndex, day: dayIndex })
                        }
                        onMouseLeave={() => setHoveredCell(null)}
                        style={{
                          transitionDelay: `${
                            (weekIndex * 7 + dayIndex) * 2
                          }ms`,
                        }}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-2 text-slate-400 text-xs">
              <Calendar className="w-4 h-4" />
              <span>Less</span>
              <div className="flex gap-1">
                {[0, 1, 2, 3, 4].map((intensity) => (
                  <div
                    key={intensity}
                    className={`w-3 h-3 rounded-sm ${getIntensityColor(
                      intensity
                    )}`}
                  />
                ))}
              </div>
              <span>More</span>
            </div>

            <div className="flex items-center gap-2 text-slate-400 text-xs">
              <Code className="w-4 h-4" />
              <span>3+ years of consistent development</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tooltip */}
      {hoveredCell && (
        <div className="absolute z-50 bg-slate-800 border border-slate-600 rounded-lg p-3 shadow-xl pointer-events-none transform -translate-x-1/2 -translate-y-full">
          <div className="text-white font-semibold text-sm">
            {heatmapData[hoveredCell.week][hoveredCell.day].commits}{" "}
            contributions
          </div>
          <div className="text-slate-400 text-xs">
            {getIntensityLabel(
              heatmapData[hoveredCell.week][hoveredCell.day].intensity
            )}{" "}
            activity
          </div>
          <div className="text-slate-400 text-xs">
            {heatmapData[hoveredCell.week][
              hoveredCell.day
            ].date.toLocaleDateString()}
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillsHeatmap;
