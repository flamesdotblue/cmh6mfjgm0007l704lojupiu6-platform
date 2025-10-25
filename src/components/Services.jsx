import React from 'react';
import { Database, Cloud, Mail, BarChart3, Shield, Zap } from 'lucide-react';

const solutions = [
  {
    id: 'datasolutions',
    title: 'Data Solutions',
    icon: Database,
    points: [
      'Data warehousing and ETL orchestration',
      'Seamless migrations and consolidation',
      'Database optimization for performance and cost',
      'Unlock insights with clean, reliable data'
    ],
    blurb:
      'Manage, integrate, and optimize your data estate to improve reliability, speed, and decision-making.'
  },
  {
    id: 'cloud',
    title: 'Cloud Solutions',
    icon: Cloud,
    points: [
      'AWS, Azure, and GCP architecture and migration',
      'Scalable, secure infrastructure with IaC & DevOps',
      'Cost governance and observability',
      'Robust cloud security and best practices'
    ],
    blurb:
      'Design, migrate, and operate in the cloud for enhanced performance, security, and flexibility.'
  },
  {
    id: 'email',
    title: 'Email Marketing',
    icon: Mail,
    points: [
      'Data-driven segmentation and personalization',
      'Lifecycle journeys and advanced automation',
      'High-converting templates and deliverability',
      'Loyalty building and retention strategies'
    ],
    blurb:
      'Build relationships that convert with strategic campaigns and intelligent automation.'
  },
  {
    id: 'viz',
    title: 'Data Visualization',
    icon: BarChart3,
    points: [
      'Interactive dashboards and KPIs',
      'Executive reporting and self-serve analytics',
      'Visual storytelling and adoption enablement',
      'Real-time monitoring and alerts'
    ],
    blurb:
      'Turn complex datasets into clear, actionable dashboards to power decisions.'
  }
];

function ServiceCard({ title, icon: Icon, blurb, points }) {
  return (
    <div className="group relative rounded-2xl border border-white/10 bg-neutral-900/60 p-6 transition hover:border-white/20 hover:bg-neutral-900/80">
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-cyan-400/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition pointer-events-none" />
      <div className="flex items-start gap-4">
        <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 via-sky-500 to-indigo-600 text-white shadow shadow-cyan-500/20">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
          <p className="mt-1 text-sm text-white/70">{blurb}</p>
        </div>
      </div>
      <ul className="mt-4 space-y-2 text-sm text-white/80">
        {points.map((p, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-cyan-400" />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Services() {
  return (
    <section id="solutions" className="relative py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start gap-4">
          <span className="inline-flex items-center gap-2 text-xs text-cyan-300">
            <Shield className="h-3.5 w-3.5" /> Enterprise-grade solutions
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight">Solutions built for growth and efficiency</h2>
          <p className="max-w-2xl text-white/70">
            From modern data stacks to multi-cloud infrastructure and lifecycle marketing, GoAurex combines technology and strategy to help you stay ahead in a data-driven world.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {solutions.map((s) => (
            <ServiceCard key={s.id} {...s} />
          ))}
        </div>

        <div id="marketing" className="sr-only" aria-hidden="true" />
        <div id="visualization" className="sr-only" aria-hidden="true" />

        <div className="mt-12 flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-6">
          <div className="max-w-2xl">
            <h3 className="text-lg font-semibold">Ready to accelerate your roadmap?</h3>
            <p className="mt-1 text-sm text-white/80">
              Our architects and strategists can help you design, migrate, and launch with confidence. Typical engagements begin with a 2-week discovery and quick wins sprint.
            </p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center rounded-md bg-white text-neutral-900 px-4 py-2 text-sm font-medium hover:bg-white/90 transition">
            Book a discovery call
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-[radial-gradient(ellipse_at_bottom,rgba(99,102,241,0.18),rgba(0,0,0,0))]" />
    </section>
  );
}

export default Services;
