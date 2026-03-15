import React, { useState, MouseEvent } from "react";
import { Star, Zap } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

export interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  originalPrice: string;
  image: string;
  rating: number;
  hot: boolean;
}

interface ProductCardProps {
  product: Product;
  index: number;
  key?: React.Key;
}

export function ProductCard({ product, index }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  // 3D Tilt Effect Values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="relative group p-1 perspective-1000" 
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-4ever-blue/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ transform: "translateZ(-10px)" }} />
      <div 
        className="bg-deep-black rounded-xl overflow-hidden relative z-10 border border-white/5 group-hover:border-4ever-blue/30 transition-colors duration-500"
        style={{ transform: "translateZ(20px)", transformStyle: "preserve-3d" }}
      >
        <div className="relative h-64 overflow-hidden" style={{ transform: "translateZ(30px)" }}>
          <img 
            src={product.image} 
            alt={product.name} 
            className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`} 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          {product.hot && (
            <div className="absolute top-3 left-3 bg-4ever-blue px-3 py-1 rounded-full flex items-center gap-1 text-xs font-bold shadow-[0_0_10px_rgba(0,102,255,0.5)]">
              <Zap size={12} />HOT
            </div>
          )}
          <div className={`absolute inset-0 bg-blue-600/20 backdrop-blur-sm flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            <button className="neon-button text-sm translate-y-4 group-hover:translate-y-0 transition-all duration-300">View Details</button>
          </div>
        </div>
        <div className="p-4 space-y-2" style={{ transform: "translateZ(40px)" }}>
          <span className="text-4ever-blue text-xs font-semibold uppercase tracking-wider">{product.category}</span>
          <h3 className="text-white font-orbitron font-bold text-lg truncate">{product.name}</h3>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} className={i < product.rating ? 'text-4ever-blue fill-4ever-blue' : 'text-gray-600'} />
            ))}
          </div>
          <div className="flex items-center gap-3 pt-2">
            <span className="text-white font-bebas text-2xl tracking-wider">{product.price}</span>
            <span className="text-gray-500 line-through text-sm font-rajdhani">{product.originalPrice}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
