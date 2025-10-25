import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center" id="home">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/Nhk4dWoYLj83rV44/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-950/40 via-neutral-950/20 to-neutral-950" />
        <div className="pointer-events-none absolute inset-x-0 -top-1/3 h-[60vh] bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.25),rgba(0,0,0,0))]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 flex flex-col items-start">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
          Technology • Data Visualization • Cloud • Marketing
        </span>
        <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight">
          Empowering growth with data, cloud,
          <br className="hidden sm:block" /> and intelligent marketing.
        </h1>
        <p className="mt-5 max-w-2xl text-white/80 text-base sm:text-lg">
          GoAurex helps you operate smarter and scale faster with modern data platforms, secure cloud infrastructure, automated email marketing, and interactive analytics.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a href="#solutions" className="inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-cyan-500/20 hover:brightness-110 transition">
            Explore Solutions
            <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#contact" className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white hover:bg-white/10 transition">
            Talk to an expert
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
