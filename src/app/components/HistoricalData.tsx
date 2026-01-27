 import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { motion } from 'motion/react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface HistoricalDataProps {
  data: Array<{
    month: string;
    avgHigh: number;
    avgLow: number;
    rainfall: number;
  }>;
}

export function HistoricalData({ data }: HistoricalDataProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-xl"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-white text-xl">Historical Climate Data</h2>
        <div className="flex gap-4">
          <div className="flex items-center gap-2 text-white/70 text-sm">
            <TrendingUp className="size-4 text-amber-400" />
            <span>Avg High</span>
          </div>
          <div className="flex items-center gap-2 text-white/70 text-sm">
            <TrendingDown className="size-4 text-blue-400" />
            <span>Avg Low</span>
          </div>
        </div>
      </div>
      
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
          <XAxis 
            dataKey="month" 
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
          <Legend wrapperStyle={{ color: 'white' }} />
          <Bar dataKey="avgHigh" fill="#fbbf24" name="Avg High (°C)" radius={[8, 8, 0, 0]} />
          <Bar dataKey="avgLow" fill="#60a5fa" name="Avg Low (°C)" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>

      <div className="grid grid-cols-3 gap-4 mt-6">
        <StatCard
          label="Hottest Month"
          value="July"
          temp="32°C"
          icon={<TrendingUp className="size-5 text-amber-400" />}
        />
        <StatCard
          label="Coldest Month"
          value="January"
          temp="8°C"
          icon={<TrendingDown className="size-5 text-blue-400" />}
        />
        <StatCard
          label="Wettest Month"
          value="December"
          temp="85mm"
          icon={<TrendingUp className="size-5 text-cyan-400" />}
        />
      </div>
    </motion.div>
  );
}

function StatCard({ label, value, temp, icon }: { label: string; value: string; temp: string; icon: React.ReactNode }) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
      <div className="flex items-center gap-2 mb-2">
        {icon}
        <span className="text-white/60 text-xs uppercase tracking-wider">{label}</span>
      </div>
      <div className="text-white">{value}</div>
      <div className="text-white/80 text-sm mt-1">{temp}</div>
    </div>
  );
}
