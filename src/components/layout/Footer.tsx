import { Crown } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-white/10 relative z-10 bg-pure-black/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Crown className="text-4ever-blue" size={24} />
          <span className="font-orbitron font-bold text-xl text-white">
            4<span className="text-4ever-blue">ever</span> pump
          </span>
        </div>
        <p className="text-white/50 font-rajdhani tracking-wide">
          © {new Date().getFullYear()} 4ever pump. All rights reserved. God First, Always.
        </p>
      </div>
    </footer>
  );
}
