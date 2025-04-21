import { useState, useEffect } from 'react';

interface HeartbeatResponse {
  heartbeatList: {
    [key: string]: Array<{
      status: number;  
      time: string;
      msg: string;
      ping: number;
    }>;
  };
  uptimeList: {
    [key: string]: number;
  };
}

export const StatusIndicator = () => {
  const [status, setStatus] = useState<'ok' | 'error'>('ok');
  const [lastUpdated, setLastUpdated] = useState<string>('');

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const response = await fetch('/api/status');
        const data: HeartbeatResponse = await response.json();
        
        const hasIssues = Object.values(data.heartbeatList).some(heartbeats => {
          if (heartbeats.length === 0) return true;
          const latestHeartbeat = heartbeats[heartbeats.length - 1];
          return latestHeartbeat.status !== 1;
        });

        setStatus(hasIssues ? 'error' : 'ok');
        setLastUpdated(new Date().toLocaleTimeString());
      } catch (error) {
        console.error('Failed to fetch status:', error);
        setStatus('error');
      }
    };

    fetchStatus();
    const interval = setInterval(fetchStatus, 60000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-2 bg-[#1f2937]/30 backdrop-blur-sm rounded-lg px-3 py-2">
      <div className={`w-2 h-2 rounded-full ${
        status === 'ok' ? 'bg-green-500' : 'bg-red-500'
      } animate-pulse`} />
      <span className="text-sm text-gray-400">
        {status === 'ok' ? 'All Systems Operational' : 'System Issues Detected'}
      </span>
      <span className="text-xs text-gray-500">
        Updated {lastUpdated}
      </span>
    </div>
  );
}; 