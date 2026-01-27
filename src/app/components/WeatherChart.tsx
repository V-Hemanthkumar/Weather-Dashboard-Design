import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { motion } from 'motion/react';

interface WeatherChartProps {
  data: Array<{
    time: string;
    temperature: number;
    humidity: number;
  }>;
  title: string;
}

export function WeatherChart({ data, title }: WeatherChartProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-xl"
    >
      <h2 className="text-white text-xl mb-6">{title}</h2>
      
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorTemp" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#fbbf24" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#fbbf24" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorHumidity" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#60a5fa" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#60a5fa" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
          <XAxis 
            dataKey="time" 
            stroke="rgba(255,255,255,0.5)"
            style={{ fontSize: '12px' }}
          />
          <YAxis 
            stroke="rgba(255,255,255,0.5)"
            style={{ fontSize: '12px' }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(0,0,0,0.8)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '8px',
              color: 'white'
            }}
          />
          <Legend 
            wrapperStyle={{ color: 'white' }}
          />
          <Area
            type="monotone"
            dataKey="temperature"
            stroke="#fbbf24"
            fillOpacity={1}
            fill="url(#colorTemp)"
            strokeWidth={2}
            name="Temperature (°C)"
          />
          <Area
            type="monotone"
            dataKey="humidity"
            stroke="#60a5fa"
            fillOpacity={1}
            fill="url(#colorHumidity)"
            strokeWidth={2}
            name="Humidity (%)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </motion.div>
  );
}
