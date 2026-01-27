import { useState } from 'react';
import { AnimatedBackground } from '@/app/components/AnimatedBackground';
import { SearchBar } from '@/app/components/SearchBar';
import { CurrentWeather } from '@/app/components/CurrentWeather';
import { ForecastCard } from '@/app/components/ForecastCard';
import { HourlyForecast } from '@/app/components/HourlyForecast';
import { WeatherChart } from '@/app/components/WeatherChart';
import { HistoricalData } from '@/app/components/HistoricalData';
import { Logo } from '@/app/components/Logo';

// Mock weather data - In production, replace with real API calls
// Example: OpenWeatherMap API (https://openweathermap.org/api)
// API Key placeholder: process.env.WEATHER_API_KEY
const mockWeatherData = {
  current: {
    temp: 24,
    condition: 'Partly Cloudy',
    humidity: 65,
    windSpeed: 12,
    visibility: 10,
    pressure: 1013,
    sunrise: '06:24 AM',
    sunset: '08:15 PM',
    feelsLike: 22,
  },
  hourly: [
    { time: '12 PM', temp: 24, condition: 'Sunny' },
    { time: '1 PM', temp: 25, condition: 'Sunny' },
    { time: '2 PM', temp: 26, condition: 'Partly Cloudy' },
    { time: '3 PM', temp: 26, condition: 'Partly Cloudy' },
    { time: '4 PM', temp: 25, condition: 'Cloudy' },
    { time: '5 PM', temp: 24, condition: 'Cloudy' },
    { time: '6 PM', temp: 23, condition: 'Partly Cloudy' },
    { time: '7 PM', temp: 22, condition: 'Partly Cloudy' },
  ],
  forecast: [
    { day: 'Monday', date: 'Jan 27', high: 26, low: 18, condition: 'Sunny', precipitation: 10 },
    { day: 'Tuesday', date: 'Jan 28', high: 25, low: 17, condition: 'Partly Cloudy', precipitation: 20 },
    { day: 'Wednesday', date: 'Jan 29', high: 23, low: 16, condition: 'Cloudy', precipitation: 40 },
    { day: 'Thursday', date: 'Jan 30', high: 22, low: 15, condition: 'Light Rain', precipitation: 60 },
    { day: 'Friday', date: 'Jan 31', high: 21, low: 14, condition: 'Rainy', precipitation: 80 },
    { day: 'Saturday', date: 'Feb 1', high: 23, low: 16, condition: 'Partly Cloudy', precipitation: 30 },
    { day: 'Sunday', date: 'Feb 2', high: 25, low: 18, condition: 'Sunny', precipitation: 10 },
  ],
  chartData: [
    { time: '6 AM', temperature: 18, humidity: 75 },
    { time: '9 AM', temperature: 20, humidity: 70 },
    { time: '12 PM', temperature: 24, humidity: 65 },
    { time: '3 PM', temperature: 26, humidity: 60 },
    { time: '6 PM', temperature: 23, humidity: 68 },
    { time: '9 PM', temperature: 20, humidity: 72 },
  ],
  historical: [
    { month: 'Jan', avgHigh: 24, avgLow: 14, rainfall: 45 },
    { month: 'Feb', avgHigh: 25, avgLow: 15, rainfall: 40 },
    { month: 'Mar', avgHigh: 27, avgLow: 17, rainfall: 35 },
    { month: 'Apr', avgHigh: 29, avgLow: 19, rainfall: 30 },
    { month: 'May', avgHigh: 31, avgLow: 21, rainfall: 25 },
    { month: 'Jun', avgHigh: 32, avgLow: 23, rainfall: 20 },
    { month: 'Jul', avgHigh: 32, avgLow: 24, rainfall: 15 },
    { month: 'Aug', avgHigh: 31, avgLow: 23, rainfall: 20 },
    { month: 'Sep', avgHigh: 30, avgLow: 22, rainfall: 30 },
    { month: 'Oct', avgHigh: 28, avgLow: 20, rainfall: 40 },
    { month: 'Nov', avgHigh: 26, avgLow: 17, rainfall: 50 },
    { month: 'Dec', avgHigh: 24, avgLow: 15, rainfall: 55 },
  ],
};

export default function App() {
  const [location, setLocation] = useState('San Francisco, CA');

  const handleSearch = (newLocation: string) => {
    setLocation(newLocation);
    // In production, fetch weather data for the new location:
    // const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${newLocation}&appid=YOUR_API_KEY`);
    // const data = await response.json();
    console.log('Searching weather for:', newLocation);
  };

  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <Logo />
      
      <div className="relative z-10 px-4 py-8 md:py-12">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-6xl text-white mb-4 tracking-tight">
              Weather Dashboard
            </h1>
            <p className="text-white/70 text-lg">
              Real-time weather updates and detailed forecasts worldwide
            </p>
          </div>

          {/* Search Bar */}
          <SearchBar onSearch={handleSearch} currentLocation={location} />

          {/* Current Weather */}
          <CurrentWeather data={mockWeatherData.current} />

          {/* Hourly Forecast */}
          <HourlyForecast data={mockWeatherData.hourly} />

          {/* 7-Day Forecast */}
          <div>
            <h2 className="text-white text-2xl mb-6">7-Day Forecast</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
              {mockWeatherData.forecast.map((day, index) => (
                <ForecastCard key={index} {...day} index={index} />
              ))}
            </div>
          </div>

          {/* Weather Trends Chart */}
          <WeatherChart 
            data={mockWeatherData.chartData} 
            title="Today's Temperature & Humidity Trends"
          />

          {/* Historical Climate Data */}
          <HistoricalData data={mockWeatherData.historical} />

          {/* API Information Footer */}
          
        </div>
      </div>
    </div>
  );
}