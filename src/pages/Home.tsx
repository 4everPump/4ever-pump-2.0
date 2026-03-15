import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown, ShoppingBag, Heart, Quote, Instagram, Twitter, MessageCircle } from "lucide-react";
import { motion } from "motion/react";
import { ParticlesBackground } from "../components/ui/ParticlesBackground";
import { GodHasYouModal } from "../components/ui/GodHasYouModal";
import { DailyQuote } from "../components/ui/DailyQuote";
import { ProductCard } from "../components/ui/ProductCard";
import { MagneticButton } from "../components/ui/MagneticButton";
import { MarqueeBanner } from "../components/ui/MarqueeBanner";
import { products } from "../lib/data";

export function Home() {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-pure-black grid-bg relative">
      <ParticlesBackground />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-[spin_10s_linear_infinite]" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-bebas text-6xl md:text-8xl lg:text-9xl tracking-wider mb-4"
          >
            <span className="text-white">4</span>
            <span className="shine-text">EVER</span>
            <span className="text-white"> PUMP</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-orbitron text-lg md:text-xl text-white/80 mb-8 tracking-widest"
          >
            PREMIUM RESELLING • AUTHENTIC ONLY • GOD FIRST
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="glass rounded-xl p-6 md:p-8 mb-10 relative overflow-hidden group"
          >
            {/* Subtle hover gradient inside the quote box */}
            <div className="absolute inset-0 bg-gradient-to-r from-4ever-blue/0 via-4ever-blue/5 to-4ever-blue/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            
            <Quote className="text-4ever-blue/50 w-8 h-8 mx-auto mb-4" />
            <p className="text-lg md:text-xl lg:text-2xl font-rajdhani text-white/90 leading-relaxed relative z-10">
              "99% of people never succeed because they don't know it's a game like chess and if you know the game of chess you know the game of life"
            </p>
            <p className="mt-4 text-4ever-blue font-orbitron font-bold glow-text relative z-10">- 4ever pump</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <MagneticButton 
              onClick={() => setShowModal(true)} 
              className="group relative inline-flex items-center justify-center px-12 py-6 text-xl font-orbitron font-bold text-white bg-transparent border-2 border-4ever-blue rounded-lg overflow-hidden transition-all duration-500 hover:bg-4ever-blue pulse-glow"
            >
              <span className="relative z-10 flex items-center gap-3">
                <Heart className="group-hover:scale-125 transition-transform" />
                God Has You
              </span>
            </MagneticButton>
            
            <MagneticButton 
              onClick={() => navigate('/products')} 
              className="group relative inline-flex items-center justify-center px-12 py-6 text-xl font-orbitron font-bold text-black bg-white rounded-lg overflow-hidden transition-all duration-500 hover:bg-4ever-blue hover:text-white"
            >
              <span className="relative z-10 flex items-center gap-3">
                <ShoppingBag className="group-hover:scale-125 transition-transform" />
                Shop Now
              </span>
            </MagneticButton>
          </motion.div>
          
          <motion.div 
            animate={{ y: [0, 10, 0] }} 
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer"
            onClick={() => document.getElementById('quotes')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <ChevronDown className="text-4ever-blue hover:text-white transition-colors" size={32} />
          </motion.div>
        </div>
      </section>

      <MarqueeBanner />

      {/* Daily Word Section */}
      <section id="quotes" className="py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-bebas text-4xl md:text-6xl text-white mb-2">
              DAILY <span className="text-4ever-blue">WORD</span>
            </h2>
            <div className="w-24 h-1 bg-4ever-blue mx-auto rounded" />
          </div>
          <DailyQuote />
        </div>
      </section>

      {/* Featured Drops Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-bebas text-4xl md:text-6xl text-white mb-2">
              FEATURED <span className="text-4ever-blue">DROPS</span>
            </h2>
            <p className="font-rajdhani text-white/60 text-lg uppercase tracking-widest">Authenticated • Verified • Blessed</p>
            <div className="w-24 h-1 bg-4ever-blue mx-auto mt-4 rounded" />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(0, 4).map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <MagneticButton onClick={() => navigate('/products')} className="neon-button px-8 py-4 text-lg">
              <span className="flex items-center gap-2">
                <ShoppingBag size={18} />
                View All Products
              </span>
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-2xl p-8 md:p-12 text-center">
            <h2 className="font-bebas text-4xl md:text-5xl text-white mb-6">
              ABOUT <span className="text-4ever-blue">4EVER PUMP</span>
            </h2>
            <p className="font-rajdhani text-lg text-white/80 leading-relaxed mb-8">
              We're not just resellers - we're curators of culture. Every piece we sell is authenticated, verified, and blessed. Our mission is simple: provide premium products while staying true to our faith and values. Life is a game of chess, and we're here to help you make the winning moves.
            </p>
            
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <div className="text-center group">
                <div className="text-3xl font-bebas text-4ever-blue group-hover:scale-110 transition-transform">1000+</div>
                <div className="text-white/60 font-rajdhani uppercase tracking-wider text-sm">Happy Customers</div>
              </div>
              <div className="hidden sm:block w-px bg-white/20" />
              <div className="text-center group">
                <div className="text-3xl font-bebas text-4ever-blue group-hover:scale-110 transition-transform">100%</div>
                <div className="text-white/60 font-rajdhani uppercase tracking-wider text-sm">Authentic</div>
              </div>
              <div className="hidden sm:block w-px bg-white/20" />
              <div className="text-center group">
                <div className="text-3xl font-bebas text-4ever-blue group-hover:scale-110 transition-transform">24/7</div>
                <div className="text-white/60 font-rajdhani uppercase tracking-wider text-sm">Support</div>
              </div>
            </div>
            
            <div className="flex justify-center gap-4">
              <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-4ever-blue hover:border-4ever-blue transition-all hover:scale-110">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-4ever-blue hover:border-4ever-blue transition-all hover:scale-110">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-4ever-blue hover:border-4ever-blue transition-all hover:scale-110">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <GodHasYouModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}
