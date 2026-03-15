import { Link, useNavigate, useLocation } from "react-router-dom";
import { Crown, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { GodHasYouModal } from "../ui/GodHasYouModal";

export function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);
  
  const showBack = location.pathname !== "/";

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-40 glass border-b-0">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {showBack && (
              <button 
                onClick={() => navigate('/')} 
                className="text-white/70 hover:text-4ever-blue transition-colors"
              >
                <ArrowLeft size={24} />
              </button>
            )}
            <Link to="/" className="flex items-center gap-2 group glitch-hover">
              <div className="w-10 h-10 bg-4ever-blue rounded-lg flex items-center justify-center pulse-glow group-hover:bg-white transition-colors duration-300">
                <Crown className="text-white group-hover:text-4ever-blue transition-colors duration-300" size={24} />
              </div>
              <span className="font-orbitron font-bold text-xl text-white">
                4<span className="text-4ever-blue">ever</span> pump
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <Link to="/products" className="text-white/70 hover:text-4ever-blue transition-colors font-rajdhani uppercase tracking-wider font-semibold">
              Products
            </Link>
            <a href="/#quotes" className="text-white/70 hover:text-4ever-blue transition-colors font-rajdhani uppercase tracking-wider font-semibold">
              Daily Word
            </a>
            <a href="/#about" className="text-white/70 hover:text-4ever-blue transition-colors font-rajdhani uppercase tracking-wider font-semibold">
              About
            </a>
          </div>
          
          <button className="neon-button text-sm" onClick={() => setShowModal(true)}>
            Blessed
          </button>
        </div>
      </nav>
      
      <GodHasYouModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}
