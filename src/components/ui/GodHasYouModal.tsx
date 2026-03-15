import { X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface GodHasYouModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function GodHasYouModal({ isOpen, onClose }: GodHasYouModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/90 backdrop-blur-sm" 
            onClick={onClose} 
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative glass rounded-2xl p-8 md:p-12 max-w-lg w-full text-center z-10"
          >
            <button onClick={onClose} className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors">
              <X size={24} />
            </button>
            <div className="space-y-6">
              <h2 className="text-5xl md:text-7xl font-bebas tracking-wider text-black glow-text-white" style={{ WebkitTextStroke: '2px white' }}>
                God Has You
              </h2>
              <h3 className="text-4xl md:text-5xl font-orbitron font-bold text-4ever-blue glow-text">
                4ever pump
              </h3>
              <div className="flex justify-center gap-2 mt-4">
                <motion.div animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-20 h-1 bg-white rounded" />
                <motion.div animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }} className="w-20 h-1 bg-4ever-blue rounded" />
                <motion.div animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }} className="w-20 h-1 bg-white rounded" />
              </div>
              <p className="text-white/70 text-lg font-rajdhani mt-6">Trust the process. Stay blessed. Keep grinding.</p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
