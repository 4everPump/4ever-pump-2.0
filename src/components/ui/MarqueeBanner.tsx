import { motion } from 'motion/react';

export function MarqueeBanner() {
  return (
    <div className="w-full bg-4ever-blue text-white py-3 overflow-hidden flex whitespace-nowrap border-y border-white/10 relative z-20 shadow-[0_0_30px_rgba(0,102,255,0.3)]">
      <motion.div
        className="flex gap-8 items-center font-orbitron font-bold tracking-widest text-sm md:text-base"
        animate={{ x: [0, -1035] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
      >
        {[...Array(12)].map((_, i) => (
          <span key={i} className="flex items-center gap-8">
            <span>AUTHENTIC ONLY</span>
            <span className="w-2 h-2 bg-white rounded-full shadow-[0_0_10px_#fff]" />
            <span>GOD FIRST</span>
            <span className="w-2 h-2 bg-white rounded-full shadow-[0_0_10px_#fff]" />
            <span>WORLDWIDE SHIPPING</span>
            <span className="w-2 h-2 bg-white rounded-full shadow-[0_0_10px_#fff]" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
