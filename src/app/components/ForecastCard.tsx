import { CloudRain, Cloud, Sun, CloudSnow, CloudDrizzle } from 'lucide-react';
import { motion } from 'motion/react';

interface ForecastCardProps {
  day: string;
  date: string;
  high: number;
  low: number;
  condition: string;
  precipitation: number;
  index: number;
}

const weatherIcons: Record<string, React.ReactNode> = {
  'Sunny': <Sun className="size-8" />,
  'Partly Cloudy': <Cloud className="size-8" />,
  'Cloudy': <Cloud className="size-8" />,
  'Rainy': <CloudRain className="size-8" />,
  'Light Rain': <CloudDrizzle className="size-8" />,
  'Snow': <CloudSnow className="size-8" />,
};

export function ForecastCard({ day, date, high, low, condition, precipitation, index }: ForecastCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all cursor-pointer"
    >
      <div className="text-center">
        <div className="text-white/90 mb-1">{day}</div>
        <div className="text-white/50 text-sm mb-4">{date}</div>
        
        <div className="flex justify-center text-white/80 mb-4">
          {weatherIcons[condition] || <Cloud className="size-8" />}
        </div>
        
        <div className="text-sm text-white/60 mb-3">{condition}</div>
        
        <div className="flex items-center justify-center gap-3 mb-3">
          <span className="text-2xl text-white">{high}°</span>
          <span className="text-xl text-white/50">{low}°</span>
        </div>
        
        <div className="text-xs text-white/40">
          {precipitation}% precipitation
        </div>
      </div>
    </motion.div>
  );
}
