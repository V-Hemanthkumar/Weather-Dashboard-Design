import { motion } from 'motion/react';
import { Cloud, Sun, CloudRain } from 'lucide-react';

interface HourlyData {
  time: string;
  temp: number;
  condition: string;
}

interface HourlyForecastProps {
  data: HourlyData[];
}

const getWeatherIcon = (condition: string) => {
  if (condition.includes('Rain')) return <CloudRain className="size-5" />;
  if (condition.includes('Cloud')) return <Cloud className="size-5" />;
  return <Sun className="size-5" />;
};

export function HourlyForecast({ data }: HourlyForecastProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-xl"
    >
      <h2 className="text-white text-xl mb-6">Hourly Forecast</h2>
      
      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
        {data.map((hour, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            className="flex-shrink-0 bg-white/10 backdrop-blur-sm rounded-xl p-4 min-w-[100px] text-center border border-white/10"
          >
            <div className="text-white/70 text-sm mb-3">{hour.time}</div>
            <div className="flex justify-center text-white/80 mb-3">
              {getWeatherIcon(hour.condition)}
            </div>
            <div className="text-white text-xl">{hour.temp}°</div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
