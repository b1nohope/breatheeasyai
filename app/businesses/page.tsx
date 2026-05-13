'use client';

import FadeIn from '@/components/FadeIn';
import { BOOKING_URL } from '@/lib/constants';
import {
  ArrowRight,
  Compass,
  GraduationCap,
  Layers,
  Shield,
  Sparkles,
  Workflow,
  Wrench,
} from 'lucide-react';

const pillars = [
  {
    icon: Compass,
    title: 'Strategy',
    tagline: 'Know where AI fits before you spend a dollar building.',
    services: ['Workflow audits', 'Implementation roadmaps', 'Strategic advisory'],
  },
  {
    icon: Workflow,
    title: 'Automate',
    tagline: 'Workflows that run while you focus on the work that matters.',
    services: [
      'Email triage & drafted replies',
      'Lead response automation',
      'Operations & document workflows',
      'Reporting & dashboards',
    ],
  },
  {
    icon: GraduationCap,
    title: 'Empower',
    tagline: 'Your team learns to direct AI — not depend on it.',
    services: [
      'Staff training & workshops',
      'Custom AI curriculum',
      'Internal AI assistants',
      'Ongoing team education',
    ],
  },
  {
    icon: Wrench,
    title: 'Build',
    tagline: 'The digital foundation that supports it all.',
    services: [
      'Custom websites & landing pages',
      'Booking & scheduling systems',
      'CRM integrations',
      'Custom AI tools',
    ],
  },
];

const steps = [
  {
    num: '01',
    title: 'Discover',
    body: 'We learn your business, find where AI moves the needle.',
  },
  {
    num: '02',
    title: 'Design',
    body: 'We architect the system — strategy, training, tools, the whole stack.',
  },
  {
    num: '03',
    title: 'Build',
    body: 'We implement on your existing tools. Train your team. Document everything.',
  },
  {
    num: '04',
    title: 'Evolve',
    body: 'We monitor, improve, and adapt as your business changes.',
  },
];

const whyUs = [
  {
    icon: GraduationCap,
    title: 'Education-First Delivery',
    body: "We don't just install systems. We teach your team to understand, use, and adapt them. Capability stays after we leave.",
  },
  {
    icon: Shield,
    title: 'Responsible by Design',
    body: 'Every workflow includes human-in-the-loop checkpoints, privacy guardrails, and clear failure modes. AI you can trust to run.',
  },
  {
    icon: Layers,
    title: 'Built on Your Stack',
    body: 'No new SaaS subscriptions. We work with the tools you already use — Google Workspace, your CRM, n8n, Zapier — and make them work together.',
  },
];

export default function BusinessesPage() {
  return (
    <>
      {/* ── SECTION 1: HERO ─────────────────────────────────────────── */}
      <section className="bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-cyan/30 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-green/20 rounded-full blur-[120px]" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-28 md:py-40">
          <div className="max-w-3xl">
            <p className="text-brand-cyan text-sm font-semibold tracking-widest uppercase mb-6">
              Businesses &amp; Teams
            </p>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              AI capability,
              <br />
              <span className="text-brand-cyan">installed.</span>
            </h1>

            <p className="text-lg text-brand-silver leading-relaxed mb-10 max-w-2xl">
              Strategy, automation, training, and the digital infrastructure to run it all —
              built around your business, priced around your needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-brand-cyan text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-brand-cyan-dark hover:-translate-y-0.5 transition-all duration-200"
              >
                Book a discovery call <ArrowRight size={18} />
              </a>
              <a
                href="#pillars"
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-white/10 transition-all duration-200"
              >
                See what we do
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: TRUST STRIP ──────────────────────────────────── */}
      <section className="border-b border-border py-6 bg-muted">
        <FadeIn>
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center items-center gap-8 md:gap-16">
          <div className="flex items-center gap-2">
            <Shield size={16} className="text-brand-cyan" />
            <span className="text-sm text-muted-foreground">Background-Checked Instructors</span>
          </div>
          <div className="flex items-center gap-2">
            <GraduationCap size={16} className="text-brand-cyan" />
            <span className="text-sm text-muted-foreground">Research-Backed Curriculum</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles size={16} className="text-brand-cyan" />
            <span className="text-sm text-muted-foreground">White House AI Education Aligned</span>
          </div>
        </div>
        </FadeIn>
      </section>

      {/* ── SECTION 3: PILLARS ──────────────────────────────────────── */}
      <section id="pillars" className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-brand-cyan text-sm font-semibold tracking-widest uppercase mb-4">
              What We Do
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Four capabilities. One operating system.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Every engagement is custom-scoped. No tier sheet, no canned packages — we build
              what your business actually needs.
            </p>
          </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map(({ icon: Icon, title, tagline, services }, i) => (
              <FadeIn key={title} delay={i * 0.1} className="h-full">
              <div className="bg-white rounded-2xl border border-border p-8 h-full">
                <div className="mb-5">
                  <Icon size={32} className="text-brand-cyan" />
                </div>
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {title}
                </h3>
                <p className="text-sm italic text-muted-foreground mb-5 leading-relaxed">
                  {tagline}
                </p>
                <ul className="flex flex-col gap-2">
                  {services.map((service) => (
                    <li key={service} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan flex-shrink-0 mt-1.5" />
                      <span className="text-sm leading-relaxed">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: PROCESS ──────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-brand-dark text-white">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-brand-cyan text-sm font-semibold tracking-widest uppercase mb-4">
              How We Work
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Custom-scoped, surgically delivered.
            </h2>
          </div>
          </FadeIn>

          <FadeIn delay={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map(({ num, title, body }) => (
              <div key={num}>
                <p
                  className="text-6xl font-bold text-brand-cyan/40 mb-4 leading-none"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {num}
                </p>
                <h3 className="text-lg font-semibold mb-3">{title}</h3>
                <p className="text-brand-silver text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
          </FadeIn>
        </div>
      </section>

      {/* ── SECTION 5: WHY US ───────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-muted">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-brand-cyan text-sm font-semibold tracking-widest uppercase mb-4">
              Why Us
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              The only AI partner that also teaches your team to use what we build.
            </h2>
          </div>
          </FadeIn>

          <FadeIn delay={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {whyUs.map(({ icon: Icon, title, body }) => (
              <div key={title} className="flex flex-col gap-4">
                <Icon size={28} className="text-brand-cyan" />
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
          </FadeIn>
        </div>
      </section>

    </>
  );
}
