import React, { useEffect, useRef, useState } from 'react';
import { TrendingUp } from 'lucide-react';

const SkillsRadar = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [animationProgress, setAnimationProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const skills = [
    { name: 'C# / .NET', level: 95, color: '#3b82f6' },
    { name: 'React.js', level: 90, color: '#06b6d4' },
    { name: 'Database Design', level: 88, color: '#8b5cf6' },
    { name: 'API Development', level: 92, color: '#10b981' },
    { name: 'Automation', level: 85, color: '#f59e0b' },
    { name: 'Problem Solving', level: 96, color: '#ef4444' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (canvasRef.current) {
      observer.observe(canvasRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setAnimationProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [isVisible]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const maxRadius = Math.min(centerX, centerY) - 40;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw grid circles
    for (let i = 1; i <= 5; i++) {
      const radius = (maxRadius / 5) * i;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
      ctx.strokeStyle = '#334155';
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    // Draw grid lines
    const angleStep = (2 * Math.PI) / skills.length;
    for (let i = 0; i < skills.length; i++) {
      const angle = i * angleStep - Math.PI / 2;
      const x = centerX + Math.cos(angle) * maxRadius;
      const y = centerY + Math.sin(angle) * maxRadius;
      
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(x, y);
      ctx.strokeStyle = '#334155';
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    // Draw skill areas
    ctx.beginPath();
    for (let i = 0; i < skills.length; i++) {
      const skill = skills[i];
      const angle = i * angleStep - Math.PI / 2;
      const progress = Math.min(animationProgress / 100, 1);
      const radius = (maxRadius * (skill.level / 100)) * progress;
      const x = centerX + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius;
      
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    ctx.closePath();
    
    // Fill with gradient
    const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, maxRadius);
    gradient.addColorStop(0, 'rgba(59, 130, 246, 0.3)');
    gradient.addColorStop(1, 'rgba(59, 130, 246, 0.1)');
    ctx.fillStyle = gradient;
    ctx.fill();
    
    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Draw skill points and labels
    for (let i = 0; i < skills.length; i++) {
      const skill = skills[i];
      const angle = i * angleStep - Math.PI / 2;
      const progress = Math.min(animationProgress / 100, 1);
      const radius = (maxRadius * (skill.level / 100)) * progress;
      const x = centerX + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius;
      
      // Draw skill point
      ctx.beginPath();
      ctx.arc(x, y, 4, 0, 2 * Math.PI);
      ctx.fillStyle = skill.color;
      ctx.fill();
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Draw skill label
      const labelX = centerX + Math.cos(angle) * (maxRadius + 25);
      const labelY = centerY + Math.sin(angle) * (maxRadius + 25);
      
      ctx.fillStyle = '#ffffff';
      ctx.font = '12px Inter, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(skill.name, labelX, labelY);
      
      // Draw percentage
      ctx.fillStyle = skill.color;
      ctx.font = 'bold 10px Inter, sans-serif';
      ctx.fillText(`${Math.round(skill.level * progress)}%`, labelX, labelY + 15);
    }

  }, [animationProgress, skills]);

  return (
    <div className="bg-slate-900 rounded-xl p-6 shadow-2xl border border-slate-700">
      <div className="flex items-center gap-3 mb-6">
        <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
          <TrendingUp className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="text-white font-semibold">Skills Radar</h3>
          <p className="text-slate-400 text-sm">Interactive skill visualization</p>
        </div>
      </div>
      
      <div className="flex justify-center">
        <canvas
          ref={canvasRef}
          width={400}
          height={400}
          className="max-w-full h-auto"
        />
      </div>
      
      <div className="mt-4 text-center">
        <p className="text-slate-400 text-sm">
          Hover over the chart to see detailed breakdowns
        </p>
      </div>
    </div>
  );
};

export default SkillsRadar;