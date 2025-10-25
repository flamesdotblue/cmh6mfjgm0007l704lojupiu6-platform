import React from 'react';

function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 bg-neutral-950/80 border-b border-white/10"> 
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="inline-flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-cyan-400 via-sky-500 to-indigo-600" />
          <span className="font-semibold tracking-tight">GoAurex</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#solutions" className="hover:text-white transition">Solutions</a>
          <a href="#marketing" className="hover:text-white transition">Marketing</a>
          <a href="#visualization" className="hover:text-white transition">Data Viz</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </nav>
        <a href="#contact" className="rounded-md bg-white text-neutral-900 px-3.5 py-2 text-sm font-medium hover:bg-white/90 active:bg-white transition">Get Started</a>
      </div>
    </header>
  );
}

export default Navbar;
