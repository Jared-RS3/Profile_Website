import { Copy, Play, Terminal } from "lucide-react";
import { useState } from "react";

const CodeEditor = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [output, setOutput] = useState("");

  const codeExamples = [
    {
      filename: "DataProcessor.cs",
      language: "csharp",
      code: `using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

public class DataProcessor
{
    private readonly ILogger<DataProcessor> _logger;
    private readonly IConfiguration _config;
    
    public DataProcessor(ILogger<DataProcessor> logger, IConfiguration config)
    {
        _logger = logger;
        _config = config;
    }
    
    public async Task<ProcessResult> ProcessDataAsync(IEnumerable<DataModel> data)
    {
        try
        {
            _logger.LogInformation("Starting data processing...");
            
            var processedData = await data
                .Where(x => x.IsValid)
                .Select(async x => await TransformDataAsync(x))
                .ToAsyncEnumerable()
                .Where(x => x.Success)
                .ToListAsync();
            
            _logger.LogInformation($"Processed {processedData.Count} records");
            
            return new ProcessResult 
            { 
                Success = true, 
                ProcessedCount = processedData.Count,
                Data = processedData
            };
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error processing data");
            return new ProcessResult { Success = false, Error = ex.Message };
        }
    }
    
    private async Task<TransformedData> TransformDataAsync(DataModel input)
    {
        // Complex transformation logic
        await Task.Delay(10); // Simulate async operation
        
        return new TransformedData
        {
            Id = input.Id,
            ProcessedValue = input.Value * 1.5m,
            Timestamp = DateTime.UtcNow,
            Success = true
        };
    }
}`,
      output: `✅ Compilation successful
📊 Processing 1,000 records...
⚡ Transformation complete: 847 records processed
🎯 Success rate: 84.7%
⏱️  Processing time: 2.3 seconds
💾 Data saved to cache`,
    },
    {
      filename: "ApiController.cs",
      language: "csharp",
      code: `[ApiController]
[Route("api/[controller]")]
public class DataController : ControllerBase
{
    private readonly IDataService _dataService;
    private readonly IMemoryCache _cache;
    
    public DataController(IDataService dataService, IMemoryCache cache)
    {
        _dataService = dataService;
        _cache = cache;
    }
    
    [HttpGet]
    [ProducesResponseType(typeof(ApiResponse<IEnumerable<DataDto>>), 200)]
    public async Task<IActionResult> GetData([FromQuery] DataQuery query)
    {
        var cacheKey = $"data_{query.GetHashCode()}";
        
        if (_cache.TryGetValue(cacheKey, out var cachedData))
        {
            return Ok(new ApiResponse<IEnumerable<DataDto>>
            {
                Success = true,
                Data = (IEnumerable<DataDto>)cachedData,
                Message = "Data retrieved from cache"
            });
        }
        
        var result = await _dataService.GetDataAsync(query);
        
        if (result.Success)
        {
            _cache.Set(cacheKey, result.Data, TimeSpan.FromMinutes(15));
            
            return Ok(new ApiResponse<IEnumerable<DataDto>>
            {
                Success = true,
                Data = result.Data,
                Message = "Data retrieved successfully"
            });
        }
        
        return BadRequest(new ApiResponse<IEnumerable<DataDto>>
        {
            Success = false,
            Message = result.ErrorMessage
        });
    }
    
    [HttpPost]
    [ProducesResponseType(typeof(ApiResponse<DataDto>), 201)]
    public async Task<IActionResult> CreateData([FromBody] CreateDataRequest request)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }
        
        var result = await _dataService.CreateDataAsync(request);
        
        if (result.Success)
        {
            return CreatedAtAction(nameof(GetData), 
                new { id = result.Data.Id }, 
                new ApiResponse<DataDto>
                {
                    Success = true,
                    Data = result.Data,
                    Message = "Data created successfully"
                });
        }
        
        return BadRequest(new ApiResponse<DataDto>
        {
            Success = false,
            Message = result.ErrorMessage
        });
    }
}`,
      output: `🚀 API Server starting...
📡 Endpoints registered:
   GET  /api/data
   POST /api/data
🔧 Middleware configured:
   - Authentication
   - Rate limiting
   - CORS
   - Compression
✅ Server ready on https://localhost:5001
📈 Performance: 2000+ req/sec capability`,
    },
    {
      filename: "ReactComponent.tsx",
      language: "typescript",
      code: `import React, { useState, useEffect, useCallback } from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-hot-toast';

interface DataItem {
  id: string;
  name: string;
  value: number;
  createdAt: Date;
}

const DataDashboard: React.FC = () => {
  const [filter, setFilter] = useState('');
  const [sortBy, setSortBy] = useState<keyof DataItem>('createdAt');
  const queryClient = useQueryClient();
  
  const { data: items, isLoading, error } = useQuery(
    ['data', filter, sortBy],
    () => fetchData({ filter, sortBy }),
    {
      staleTime: 5 * 60 * 1000, // 5 minutes
      cacheTime: 10 * 60 * 1000, // 10 minutes
    }
  );
  
  const createMutation = useMutation(createDataItem, {
    onSuccess: () => {
      queryClient.invalidateQueries(['data']);
      toast.success('Item created successfully!');
    },
    onError: (error: Error) => {
      toast.error(\`Failed to create item: \${error.message}\`);
    },
  });
  
  const handleCreate = useCallback(async (formData: Partial<DataItem>) => {
    try {
      await createMutation.mutateAsync(formData);
    } catch (error) {
      console.error('Creation failed:', error);
    }
  }, [createMutation]);
  
  const filteredItems = useMemo(() => {
    if (!items) return [];
    
    return items
      .filter(item => 
        item.name.toLowerCase().includes(filter.toLowerCase())
      )
      .sort((a, b) => {
        const aValue = a[sortBy];
        const bValue = b[sortBy];
        
        if (typeof aValue === 'string') {
          return aValue.localeCompare(bValue as string);
        }
        
        return (aValue as number) - (bValue as number);
      });
  }, [items, filter, sortBy]);
  
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
        <h3 className="text-red-800 font-semibold">Error loading data</h3>
        <p className="text-red-600">{(error as Error).message}</p>
      </div>
    );
  }
  
  return (
    <div className="space-y-6">
      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Filter items..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as keyof DataItem)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
        >
          <option value="name">Sort by Name</option>
          <option value="value">Sort by Value</option>
          <option value="createdAt">Sort by Date</option>
        </select>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
            <p className="text-gray-600 mb-4">Value: {item.value}</p>
            <p className="text-sm text-gray-500">
              Created: {new Date(item.createdAt).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataDashboard;`,
      output: `🎨 React component compiled successfully
⚡ Hot reload enabled
🔄 State management optimized
📱 Responsive design applied
🚀 Performance score: 98/100
✅ TypeScript validation passed
🎯 Zero accessibility issues found`,
    },
  ];

  const runCode = async () => {
    setIsRunning(true);
    setOutput("");

    // Simulate code execution
    const lines = codeExamples[activeTab].output.split("\n");

    for (let i = 0; i < lines.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setOutput((prev) => prev + lines[i] + "\n");
    }

    setIsRunning(false);
  };

  const copyCode = () => {
    navigator.clipboard.writeText(codeExamples[activeTab].code);
    // You could add a toast notification here
  };

  return (
    <div className="bg-slate-900 rounded-xl shadow-2xl border border-slate-700 overflow-hidden">
      {/* Header */}
      <div className="bg-slate-800 px-4 py-3 border-b border-slate-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            {/* <div className="flex items-center gap-2">
              <FileCode className="w-4 h-4 text-blue-400" />
              <span className="text-white font-medium">Live Code Editor</span>
            </div> */}
          </div>
          <div className="flex gap-2">
            <button
              onClick={copyCode}
              className="flex items-center gap-2 px-3 py-1 bg-slate-700 hover:bg-slate-600 text-white rounded text-sm transition-colors"
            >
              <Copy className="w-4 h-4" />
              Copy
            </button>
            <button
              onClick={runCode}
              disabled={isRunning}
              className="flex items-center gap-2 px-3 py-1 bg-green-600 hover:bg-green-700 disabled:bg-green-800 text-white rounded text-sm transition-colors"
            >
              <Play className="w-4 h-4" />
              {isRunning ? "Running..." : "Run"}
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-slate-800 px-4 border-b border-slate-700">
        <div className="flex gap-1">
          {codeExamples.map((example, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-colors ${
                activeTab === index
                  ? "bg-slate-900 text-white border-t-2 border-blue-500"
                  : "text-slate-400 hover:text-white hover:bg-slate-700"
              }`}
            >
              {example.filename}
            </button>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-0">
        {/* Code Area */}
        <div className="bg-slate-900">
          <div className="p-4 h-96 overflow-auto">
            <pre className="text-sm">
              <code className="text-green-400 font-mono whitespace-pre-wrap">
                {codeExamples[activeTab].code}
              </code>
            </pre>
          </div>
        </div>

        {/* Output Area */}
        <div className="bg-slate-800 border-l border-slate-700">
          <div className="flex items-center gap-2 px-4 py-2 bg-slate-700 border-b border-slate-600">
            <Terminal className="w-4 h-4 text-green-400" />
            <span className="text-white font-medium text-sm">Output</span>
          </div>
          <div className="p-4 h-96 overflow-auto">
            <pre className="text-sm">
              <code className="text-green-400 font-mono whitespace-pre-wrap">
                {output}
                {isRunning && <span className="animate-pulse">█</span>}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
