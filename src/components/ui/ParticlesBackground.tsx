import { motion } from "motion/react";

export function ParticlesBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {[...Array(15)].map((_, i) => {
        const size = Math.random() * 10 + 5;
        const left = Math.random() * 100;
        const duration = Math.random() * 5 + 8;
        const delay = i * 0.5;
        
        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-500/20"
            style={{ width: size, height: size, left: `${left}%`, bottom: '-20px' }}
            animate={{
              y: ['0vh', '-120vh'],
              x: [0, Math.random() * 100 - 50],
              opacity: [0, 1, 1, 0]
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              delay: delay,
              ease: "easeInOut"
            }}
          />
        );
      })}
    </div>
  );
}
