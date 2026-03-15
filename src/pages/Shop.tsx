import { useState } from "react";
import { motion } from "motion/react";
import { ParticlesBackground } from "../components/ui/ParticlesBackground";
import { ProductCard } from "../components/ui/ProductCard";
import { products } from "../lib/data";

export function Shop() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Sneakers', 'Streetwear', 'Watches', 'Accessories'];
  
  const filteredProducts = filter === 'All' 
    ? products 
    : products.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-pure-black grid-bg relative">
      <ParticlesBackground />
      
      <section className="pt-32 pb-16 px-4 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-bebas text-6xl md:text-8xl lg:text-9xl tracking-wider mb-4"
          >
            <span className="text-white">4</span>
            <span className="text-4ever-blue glow-text">EVER</span>
            <span className="text-white"> PUMP</span>
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-orbitron text-2xl md:text-4xl text-white mb-8"
          >
            <span className="text-white glow-text-white">God Has You</span>
          </motion.h2>
          
          <div className="flex justify-center gap-2 mb-12">
            <div className="w-24 h-1 bg-white rounded" />
            <div className="w-24 h-1 bg-4ever-blue rounded" />
            <div className="w-24 h-1 bg-white rounded" />
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map(cat => (
              <button 
                key={cat} 
                onClick={() => setFilter(cat)} 
                className={`px-6 py-2 rounded-full font-rajdhani font-semibold transition-all duration-300 uppercase tracking-wider ${
                  filter === cat 
                    ? 'bg-4ever-blue text-white pulse-glow' 
                    : 'bg-white/10 text-white/70 hover:bg-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      <section className="px-4 pb-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {filteredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </motion.div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center text-white/50 font-rajdhani py-20 text-xl">
              No products found in this category.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
