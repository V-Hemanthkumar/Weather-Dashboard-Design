import { motion } from 'motion/react';

export function Logo() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-6 right-6 z-50"
    >
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-4 py-3 shadow-xl">
        <div className="flex items-center gap-2">
          <div className="relative">
            <div className="text-2xl text-white tracking-tighter">
              HK
            </div>
            <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
