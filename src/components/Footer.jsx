import React from 'react';
import { Zap } from 'lucide-react';

function Footer() {
  return (
    <footer id="contact" className="relative border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 grid gap-8 md:grid-cols-2 items-center">
        <div>
          <h3 className="text-2xl font-semibold tracking-tight">Partner with GoAurex</h3>
          <p className="mt-2 text-white/70">
            Tell us about your goals in data, cloud, or marketing. We will recommend a clear path to measurable impact.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href="mailto:hello@goaurex.com"
              className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-cyan-500/20 hover:brightness-110 transition"
            >
              Contact: hello@goaurex.com
            </a>
            <a
              href="#home"
              className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white hover:bg-white/10 transition"
            >
              Back to top
            </a>
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 via-sky-500 to-indigo-600 text-white">
              <Zap className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-medium">Quick intro call</p>
              <p className="text-xs text-white/70">15 minutes to map your priorities and next best steps.</p>
            </div>
          </div>
          <form className="mt-5 grid gap-3" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              required
              placeholder="Work email"
              className="w-full rounded-md bg-neutral-900/80 border border-white/15 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-cyan-500/40"
            />
            <button type="submit" className="inline-flex justify-center rounded-md bg-white text-neutral-900 px-4 py-2 text-sm font-medium hover:bg-white/90 transition">
              Request invite
            </button>
            <p className="text-xs text-white/50">We respect your privacy. Unsubscribe anytime.</p>
          </form>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 text-xs text-white/50 flex items-center justify-between">
          <p>© {new Date().getFullYear()} GoAurex. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
