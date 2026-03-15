import { useState, useEffect } from "react";
import { Quote, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { quotes } from "../../lib/data";

export function DailyQuote() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => { 
    const dayOfYear = Math.floor((new Date().getTime() - new Date(new Date().getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24)); 
    setCurrentIndex(dayOfYear % quotes.length); 
  }, []);
  
  const nextQuote = () => { 
    setCurrentIndex((prev) => (prev + 1) % quotes.length); 
  };
  
  const currentQuote = quotes[currentIndex];

  return (
    <div className="relative glass rounded-2xl p-8 md:p-12 max-w-4xl mx-auto overflow-hidden">
      <Quote className="absolute top-6 left-6 text-4ever-blue/20 w-16 h-16" />
      
      <AnimatePresence mode="wait">
        <motion.div 
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="relative z-10"
        >
          <blockquote className="text-xl md:text-2xl lg:text-3xl font-rajdhani text-white leading-relaxed text-center mb-6">
            "{currentQuote.text}"
          </blockquote>
          <p className={`text-center text-lg font-orbitron ${currentQuote.isFounder ? 'text-4ever-blue glow-text' : 'text-white/70'}`}>
            - {currentQuote.author}
          </p>
        </motion.div>
      </AnimatePresence>

      <button 
        onClick={nextQuote} 
        className="mt-8 mx-auto flex items-center gap-2 text-4ever-blue hover:text-white transition-colors group relative z-10"
      >
        <span className="font-rajdhani text-lg font-semibold tracking-wider uppercase">Next Word</span>
        <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
      </button>
    </div>
  );
}
