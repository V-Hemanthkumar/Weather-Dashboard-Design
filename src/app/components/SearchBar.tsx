import { Search, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

interface SearchBarProps {
  onSearch: (location: string) => void;
  currentLocation: string;
}

export function SearchBar({ onSearch, currentLocation }: SearchBarProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const location = formData.get('location') as string;
    if (location.trim()) {
      onSearch(location);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-2xl mx-auto"
    >
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-muted-foreground" />
          <input
            type="text"
            name="location"
            placeholder="Search for a city or location..."
            defaultValue={currentLocation}
            className="w-full pl-12 pr-4 py-4 bg-white/80 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl focus:outline-none focus:ring-2 focus:ring-white/40 transition-all"
          />
        </div>
      </form>
      <div className="flex items-center gap-2 mt-3 text-white/70">
        <MapPin className="size-4" />
        <span className="text-sm">Current: {currentLocation}</span>
      </div>
    </motion.div>
  );
}
