import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Code, Zap } from 'lucide-react';

const InteractiveCodeDemo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [code, setCode] = useState('');

  const codeSteps = [
    { 
      code: `// Building a real-time data processor
const processor = new DataProcessor();`,
      description: "Initialize data processing engine"
    },
    {
      code: `// Building a real-time data processor
const processor = new DataProcessor();

processor.configure({
  batchSize: 1000,
  realTime: true
});`,
      description: "Configure for high-performance processing"
    },
    {
      code: `// Building a real-time data processor
const processor = new DataProcessor();

processor.configure({
  batchSize: 1000,
  realTime: true
});

const pipeline = processor
  .filter(data => data.isValid)
  .transform(data => ({
    ...data,
    processed: true,
    timestamp: Date.now()
  }))
  .aggregate('sum', 'value');`,
      description: "Create processing pipeline with filters and transforms"
    },
    {
      code: `// Building a real-time data processor
const processor = new DataProcessor();

processor.configure({
  batchSize: 1000,
  realTime: true
});

const pipeline = processor
  .filter(data => data.isValid)
  .transform(data => ({
    ...data,
    processed: true,
    timestamp: Date.now()
  }))
  .aggregate('sum', 'value');

// Deploy to production
pipeline.deploy({
  environment: 'production',
  scaling: 'auto',
  monitoring: true
});

console.log('✅ System deployed successfully!');`,
      description: "Deploy with auto-scaling and monitoring"
    }
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying && currentStep < codeSteps.length - 1) {
      interval = setInterval(() => {
        setCurrentStep(prev => prev + 1);
      }, 2000);
    } else if (currentStep >= codeSteps.length - 1) {
      setIsPlaying(false);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentStep]);

  useEffect(() => {
    setCode(codeSteps[currentStep]?.code || '');
  }, [currentStep]);

  const handlePlay = () => {
    if (currentStep >= codeSteps.length - 1) {
      setCurrentStep(0);
    }
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setCurrentStep(0);
  };

  return (
    <div className="bg-slate-900 rounded-xl p-6 shadow-2xl border border-slate-700">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg">
            <Code className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-white font-semibold">Live Code Demo</h3>
            <p className="text-slate-400 text-sm">Watch me code in real-time</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={handlePlay}
            className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all duration-200 hover:scale-105"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            {isPlaying ? 'Pause' : 'Play'}
          </button>
          <button
            onClick={handleReset}
            className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-all duration-200 hover:scale-105"
          >
            <RotateCcw className="w-4 h-4" />
            Reset
          </button>
        </div>
      </div>

      <div className="bg-slate-800 rounded-lg p-4 font-mono text-sm overflow-hidden">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-slate-400 ml-2">terminal.js</span>
        </div>
        <pre className="text-green-400 whitespace-pre-wrap min-h-[200px]">
          {code}
          <span className="animate-pulse">|</span>
        </pre>
      </div>

      <div className="mt-4 p-3 bg-blue-900/30 rounded-lg border border-blue-500/30">
        <div className="flex items-center gap-2 mb-2">
          <Zap className="w-4 h-4 text-blue-400" />
          <span className="text-blue-400 font-medium">Current Step:</span>
        </div>
        <p className="text-slate-300 text-sm">{codeSteps[currentStep]?.description}</p>
      </div>

      <div className="mt-4 flex justify-between items-center">
        <div className="flex gap-1">
          {codeSteps.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index <= currentStep ? 'bg-green-500' : 'bg-slate-600'
              }`}
            />
          ))}
        </div>
        <span className="text-slate-400 text-sm">
          {currentStep + 1} / {codeSteps.length}
        </span>
      </div>
    </div>
  );
};

export default InteractiveCodeDemo;