import { Cloud, Droplets, Wind, Eye, Gauge, Sunrise, Sunset } from 'lucide-react';
import { motion } from 'motion/react';

interface CurrentWeatherProps {
  data: {
    temp: number;
    condition: string;
    humidity: number;
    windSpeed: number;
    visibility: number;
    pressure: number;
    sunrise: string;
    sunset: string;
    feelsLike: number;
  };
}

export function CurrentWeather({ data }: CurrentWeatherProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl"
    >
      <div className="grid md:grid-cols-2 gap-8">
        {/* Main Temperature Display */}
        <div className="flex flex-col justify-center">
          <div className="flex items-start gap-4">
            <Cloud className="size-20 text-white/80" strokeWidth={1.5} />
            <div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-7xl text-white tracking-tight"
              >
                {data.temp}°
              </motion.div>
              <div className="text-xl text-white/70 mt-2">{data.condition}</div>
              <div className="text-sm text-white/50 mt-1">
                Feels like {data.feelsLike}°
              </div>
            </div>
          </div>
        </div>

        {/* Weather Details Grid */}
        <div className="grid grid-cols-2 gap-4">
          <WeatherDetail
            icon={<Droplets className="size-5" />}
            label="Humidity"
            value={`${data.humidity}%`}
            delay={0.5}
          />
          <WeatherDetail
            icon={<Wind className="size-5" />}
            label="Wind Speed"
            value={`${data.windSpeed} km/h`}
            delay={0.6}
          />
          <WeatherDetail
            icon={<Eye className="size-5" />}
            label="Visibility"
            value={`${data.visibility} km`}
            delay={0.7}
          />
          <WeatherDetail
            icon={<Gauge className="size-5" />}
            label="Pressure"
            value={`${data.pressure} hPa`}
            delay={0.8}
          />
          <WeatherDetail
            icon={<Sunrise className="size-5" />}
            label="Sunrise"
            value={data.sunrise}
            delay={0.9}
          />
          <WeatherDetail
            icon={<Sunset className="size-5" />}
            label="Sunset"
            value={data.sunset}
            delay={1.0}
          />
        </div>
      </div>
    </motion.div>
  );
}

function WeatherDetail({ icon, label, value, delay }: { icon: React.ReactNode; label: string; value: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10"
    >
      <div className="flex items-center gap-2 text-white/60 mb-2">
        {icon}
        <span className="text-xs uppercase tracking-wider">{label}</span>
      </div>
      <div className="text-white text-lg">{value}</div>
    </motion.div>
  );
}
