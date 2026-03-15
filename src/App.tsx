/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { CustomCursor } from "./components/ui/CustomCursor";
import { AnimatedRoutes } from "./components/layout/AnimatedRoutes";

export default function App() {
  return (
    <Router>
      <div className="flex min-h-screen flex-col bg-pure-black text-white font-rajdhani relative selection:bg-4ever-blue/30 selection:text-white">
        <div className="noise-overlay" />
        <CustomCursor />
        <Navbar />
        <main className="flex-1">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}
