import Link from 'next/link';
import {
  ArrowRight,
  Calendar,
  Clock,
  MapPin,
  Users,
  Star,
  BookOpen,
  Brain,
  Trophy,
  Palette,
} from 'lucide-react';

const tiers = [
  {
    name: 'Explorers',
    age: 'Ages 6–9',
    duration: '45 min / session',
    price: '$160',
    period: '/month',
    features: [
      'Introduction to prompts',
      'AI art creation with Kidgeni',
      'Create a 4-page AI art book',
      'Character creation & storybooks',
      'Family showcase presentation',
    ],
    popular: false,
  },
  {
    name: 'Builders',
    age: 'Ages 10–13',
    duration: '60 min / session',
    price: '$220',
    period: '/month',
    features: [
      'Advanced prompt engineering',
      'Real-world problem solving with AI',
      'Creative writing partnerships',
      'Critical evaluation of AI output',
      'Portfolio & family showcase',
    ],
    popular: true,
  },
  {
    name: 'Innovators',
    age: 'Ages 14+',
    duration: '90 min / session',
    price: '$320',
    period: '/month',
    features: [
      'Hybrid in-person + Zoom option',
      'Advanced AI applications',
      'AI ethics & responsible use',
      'Capstone project development',
      'Portfolio & family showcase',
    ],
    popular: false,
  },
];

const weeks = [
  {
    week: 'Week 1',
    title: 'What is a Prompt?',
    icon: Brain,
    body: 'Kids learn that prompts produce better results with more detail. They experiment with AI art tools and discover how specificity shapes output.',
    takeHome: '4-Page AI Art Book',
  },
  {
    week: 'Week 2',
    title: 'Tell a Better Story',
    icon: BookOpen,
    body: 'Kids invent original characters and use AI as a creative writing partner. They build an illustrated storybook from a single idea.',
    takeHome: 'Illustrated AI Storybook',
  },
  {
    week: 'Week 3',
    title: 'Ask Smarter Questions',
    icon: Palette,
    body: 'Kids learn role prompting and apply AI to real problems — planning a party, designing a treehouse, solving a school challenge. Every decision is theirs.',
    takeHome: 'Real-World Idea Plan',
  },
  {
    week: 'Week 4',
    title: 'Family Showcase',
    icon: Trophy,
    body: 'Kids present their complete portfolio to families. Every child receives a personalized completion certificate and leaves with a full body of work.',
    takeHome: 'Full Portfolio + Certificate',
  },
];

export default function CampPage() {
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
            {/* Enrollment badge */}
            <div className="inline-flex items-center gap-2 bg-brand-green/10 border border-brand-green/20 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 bg-brand-green rounded-full animate-pulse" />
              <span className="text-brand-green text-xs font-semibold">
                Now Enrolling — Summer 2026
              </span>
            </div>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              AI literacy for kids —
              <br />
              <span className="gradient-text">taught by humans.</span>
            </h1>

            <p className="text-lg text-brand-silver leading-relaxed mb-10 max-w-2xl">
              A 4-week, instructor-led AI camp where kids learn to think with AI, create real
              projects, and take home something they&apos;re proud of every week.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#enroll"
                className="inline-flex items-center justify-center gap-2 bg-brand-green text-brand-dark px-8 py-3.5 rounded-lg font-semibold hover:bg-brand-green-dark hover:text-white hover:-translate-y-0.5 transition-all duration-200"
              >
                Enroll Your Child <ArrowRight size={18} />
              </a>
              <a
                href="#tiers"
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-white/10 transition-all duration-200"
              >
                View Programs
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: QUICK FACTS BAR ──────────────────────────────── */}
      <section className="border-b border-border py-8 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: Calendar, label: '4 Weeks', sub: '8 Sessions Total' },
              { icon: Users, label: 'Ages 6–17', sub: '3 Age Tiers' },
              { icon: MapPin, label: 'Clarksville, TN', sub: 'YMCA Fun Co' },
              { icon: Clock, label: '45–90 min', sub: 'Per Session' },
            ].map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex flex-col items-center gap-2">
                <Icon size={18} className="text-brand-cyan" />
                <p className="font-semibold text-sm">{label}</p>
                <p className="text-xs text-muted-foreground">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: PRICING TIERS ────────────────────────────────── */}
      <section id="tiers" className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-brand-cyan text-sm font-semibold tracking-widest uppercase mb-4">
              Programs
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Three tiers. One mission.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative rounded-2xl border p-8 flex flex-col ${
                  tier.popular
                    ? 'border-brand-cyan shadow-lg shadow-brand-cyan/10'
                    : 'border-border'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-brand-cyan text-white text-xs font-semibold px-4 py-1 rounded-full whitespace-nowrap">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-1">{tier.name}</h3>
                  <p className="text-muted-foreground text-sm">
                    {tier.age} · {tier.duration}
                  </p>
                </div>

                <div className="mb-8">
                  <span className="text-3xl font-bold">{tier.price}</span>
                  <span className="text-muted-foreground text-sm">{tier.period}</span>
                </div>

                <ul className="flex flex-col gap-3 mb-8 flex-1">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-brand-green/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 12 12"
                          fill="none"
                          className="text-brand-green"
                        >
                          <path
                            d="M2 6l3 3 5-5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#enroll"
                  className={`inline-flex items-center justify-center gap-2 w-full py-3 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    tier.popular
                      ? 'bg-brand-cyan text-white hover:bg-brand-cyan-dark'
                      : 'bg-muted text-foreground hover:bg-border'
                  }`}
                >
                  Enroll Now
                </a>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground mt-10">
            Sibling discount: $30 off &nbsp;·&nbsp; Early bird: 10% off &nbsp;·&nbsp; Referral
            credit: $20 per enrolled referral
          </p>
        </div>
      </section>

      {/* ── SECTION 4: WEEKLY CURRICULUM ────────────────────────────── */}
      <section className="py-20 md:py-28 bg-muted">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-brand-cyan text-sm font-semibold tracking-widest uppercase mb-4">
              The Journey
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              4 weeks. 4 projects. 1 portfolio.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {weeks.map(({ week, title, icon: Icon, body, takeHome }) => (
              <div key={week} className="bg-white rounded-2xl p-8 border border-border">
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 bg-brand-cyan/10 rounded-xl flex items-center justify-center text-brand-cyan flex-shrink-0">
                    <Icon size={22} />
                  </div>
                  <div>
                    <p className="text-brand-cyan text-xs font-semibold uppercase tracking-wider mb-1">
                      {week}
                    </p>
                    <h3 className="text-lg font-bold">{title}</h3>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{body}</p>

                <div className="bg-brand-green/5 border border-brand-green/10 rounded-lg px-4 py-2.5 flex items-center gap-2">
                  <Star size={14} className="text-brand-green flex-shrink-0" />
                  <span className="text-brand-green text-sm font-medium">
                    Take-Home: {takeHome}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: PARTNER CTA ──────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-brand-dark rounded-3xl p-10 md:p-16 text-center text-white">
            <p className="text-brand-cyan text-sm font-semibold tracking-widest uppercase mb-4">
              For YMCA &amp; Community Partners
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Bring this to your community.
            </h2>
            <p className="text-brand-silver text-lg leading-relaxed max-w-2xl mx-auto mb-10">
              We handle everything — curriculum, instructors, materials, and technology. You provide
              the space and the families. It&apos;s a complete, turnkey program ready to run the
              moment you say yes.
            </p>
            <a
              href="mailto:breatheez@thebreatheez.com"
              className="inline-flex items-center justify-center gap-2 bg-brand-cyan text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-brand-cyan-dark hover:-translate-y-0.5 transition-all duration-200"
            >
              Request a Partnership Call <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: ENROLLMENT CTA ───────────────────────────────── */}
      <section id="enroll" className="py-20 md:py-28 bg-brand-dark text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-brand-green text-sm font-semibold tracking-widest uppercase mb-4">
            Summer 2026
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Spots are limited. Enroll today.
          </h2>
          <p className="text-brand-silver text-lg leading-relaxed mb-10">
            Open enrollment is now live at YMCA Fun Co in Clarksville, TN. Sessions fill fast —
            secure your child&apos;s spot before the summer rush.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:breatheez@thebreatheez.com"
              className="inline-flex items-center justify-center gap-2 bg-brand-green text-brand-dark px-8 py-3.5 rounded-lg font-semibold hover:bg-brand-green-dark hover:text-white hover:-translate-y-0.5 transition-all duration-200"
            >
              Enroll Your Child <ArrowRight size={18} />
            </a>
            <a
              href="mailto:breatheez@thebreatheez.com"
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-white/10 transition-all duration-200"
            >
              Join the Waitlist
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
