'use client';

import Link from 'next/link';
import Image from 'next/image';
import FadeIn from '@/components/FadeIn';
import {
  ArrowRight,
  BookOpen,
  Users,
  Briefcase,
  Shield,
  GraduationCap,
  Sparkles,
} from 'lucide-react';

const heroSegments = [
  {
    num: '01',
    icon: Users,
    iconClass: 'bg-brand-cyan/20 text-brand-cyan',
    name: 'Youth Programs',
    desc: 'Summer camps & community partnerships',
    margin: 'ml-0 mr-12',
  },
  {
    num: '02',
    icon: GraduationCap,
    iconClass: 'bg-brand-green/20 text-brand-green',
    name: 'Schools & Educators',
    desc: 'Student sessions & teacher PD',
    margin: 'ml-12 mr-0',
  },
  {
    num: '03',
    icon: Briefcase,
    iconClass: 'bg-white/10 text-white',
    name: 'Businesses & Teams',
    desc: 'Workshops & workflow training',
    margin: 'ml-0 mr-8',
  },
];

const whyCards = [
  {
    icon: BookOpen,
    title: 'Zero Setup, Zero Risk',
    body: "We provide everything — curriculum, instructors, insurance, materials, technology. You provide the space. If it doesn't work, you walk away with no investment lost.",
  },
  {
    icon: Sparkles,
    title: 'Proven Demand',
    body: "Organizations everywhere are under pressure to deliver AI programming. We give you a ready-to-run offering with market-validated pricing — so you meet demand without building from scratch.",
  },
  {
    icon: Shield,
    title: 'Credibility Built In',
    body: 'Background-checked instructors, research-backed curriculum, and alignment with the White House Executive Order on AI Education. Your members get programming you can stand behind.',
  },
];

const outcomes = [
  'A turnkey program running at your site within 30 days',
  'Revenue share or flat fee — whichever fits your budget model',
  'Full media kit: photos, testimonials, parent quotes, completion data',
  'Case-study material for grants, board reports, and marketing',
  'A recurring program your community asks for every season',
];

export default function Home() {
  return (
    <>
      {/* ── SECTION 1: HERO ─────────────────────────────────────────── */}
      <section className="bg-brand-dark text-white relative overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-cyan/30 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-green/20 rounded-full blur-[120px]" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-28 md:py-40">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* LEFT — copy */}
            <div>
              <Image
                src="/logo-transparent.png"
                width={320}
                height={144}
                alt="BreatheEzAi"
                className="mb-8 h-auto w-56 md:w-64"
              />

              <p className="text-brand-cyan text-sm font-semibold tracking-widest uppercase mb-6">
                For Organizations
              </p>

              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Bring AI literacy
                <br />
                <span className="gradient-text">to your community.</span>
              </h1>

              <p className="text-lg text-brand-silver leading-relaxed max-w-lg mb-10">
                Turnkey AI education programs for community centers, schools, and organizations.
                We bring the curriculum, instructors, and technology — you bring the families.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:breatheez@thebreatheez.com"
                  className="inline-flex items-center justify-center gap-2 bg-brand-cyan text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-brand-cyan-dark hover:-translate-y-0.5 transition-all duration-200"
                >
                  Schedule a Partnership Call <ArrowRight size={18} />
                </a>
                <a
                  href="#programs"
                  className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-white/10 transition-all duration-200"
                >
                  Explore Programs
                </a>
              </div>
            </div>

            {/* RIGHT — business model preview */}
            <div className="relative aspect-square max-h-[520px] rounded-2xl overflow-hidden bg-gradient-to-br from-brand-cyan/20 via-brand-dark/50 to-brand-green/20 border border-white/10 p-8">
              {/* Dot grid */}
              <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[size:24px_24px]" />

              <div className="relative h-full flex flex-col justify-center gap-4">
                {heroSegments.map(({ num, icon: Icon, iconClass, name, desc, margin }) => (
                  <div
                    key={num}
                    className={`${margin} bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 flex items-start gap-4 hover:bg-white/10 hover:border-white/20 transition-all`}
                  >
                    <div className={`w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 ${iconClass}`}>
                      <Icon size={20} />
                    </div>
                    <div className="flex-1">
                      <p className="text-[10px] text-white/40 tracking-widest font-mono mb-1">{num}</p>
                      <p className="text-white font-semibold text-sm mb-1">{name}</p>
                      <p className="text-xs text-brand-silver/80 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: TRUST BAR ────────────────────────────────────── */}
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

      {/* ── SECTION 3: WHY PARTNER ──────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-brand-cyan text-sm font-semibold tracking-widest uppercase mb-4">
              Why Partner With Us
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Access is not capability.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Your families have AI tools. What they don&apos;t have is the skill to use them well.
              We turn access into practical, responsible capability — with a complete, research-backed
              program your community can trust.
            </p>
          </div>
          </FadeIn>

          <FadeIn delay={0.15}>
          <div className="grid md:grid-cols-3 gap-8">
            {whyCards.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="p-8 rounded-2xl border border-border hover:border-brand-cyan/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-brand-cyan/10 rounded-xl flex items-center justify-center text-brand-cyan mb-5">
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-semibold mb-3">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
          </FadeIn>
        </div>
      </section>

      {/* ── SECTION 4: PROGRAMS ─────────────────────────────────────── */}
      <section id="programs" className="py-20 md:py-28 bg-muted">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-brand-cyan text-sm font-semibold tracking-widest uppercase mb-4">
              Our Programs
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              One capability. Three segments.
            </h2>
          </div>
          </FadeIn>

          <FadeIn delay={0.15}>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 — Youth Programs */}
            <Link
              href="/camp"
              className="group bg-white rounded-2xl overflow-hidden border border-border hover:border-brand-cyan/40 hover:shadow-xl transition-all duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-brand-cyan/15 to-brand-green/10 flex items-center justify-center">
                <Users size={48} className="text-brand-cyan group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="p-8">
                <p className="text-xs font-semibold text-brand-green uppercase tracking-wider mb-2">
                  Now Enrolling — Summer 2026
                </p>
                <h3 className="text-xl font-semibold mb-3">Youth Programs</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  Summer camps and community partnerships that introduce kids to AI through hands-on
                  projects, instructor-led sessions, and take-home portfolios.
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-cyan group-hover:gap-3 transition-all duration-200">
                  Explore Camp <ArrowRight size={16} />
                </span>
              </div>
            </Link>

            {/* Card 2 — Schools & Educators */}
            <a
              href="mailto:breatheez@thebreatheez.com"
              className="group bg-white rounded-2xl overflow-hidden border border-border hover:border-brand-cyan/40 hover:shadow-xl transition-all duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-brand-green/15 to-brand-cyan/10 flex items-center justify-center">
                <GraduationCap size={48} className="text-brand-green group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="p-8">
                <p className="text-xs font-semibold text-brand-cyan uppercase tracking-wider mb-2">
                  Pilot Cohorts Open
                </p>
                <h3 className="text-xl font-semibold mb-3">Schools &amp; Educators</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  Student sessions, teacher professional development, and classroom-ready curriculum
                  that brings AI literacy into the school day.
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-cyan group-hover:gap-3 transition-all duration-200">
                  Request Info <ArrowRight size={16} />
                </span>
              </div>
            </a>

            {/* Card 3 — Businesses & Teams */}
            <a
              href="mailto:breatheez@thebreatheez.com"
              className="group bg-white rounded-2xl overflow-hidden border border-border hover:border-brand-cyan/40 hover:shadow-xl transition-all duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-brand-dark/10 to-brand-cyan/10 flex items-center justify-center">
                <Briefcase size={48} className="text-brand-dark group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="p-8">
                <p className="text-xs font-semibold text-brand-silver uppercase tracking-wider mb-2">
                  By Inquiry
                </p>
                <h3 className="text-xl font-semibold mb-3">Businesses &amp; Teams</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  Workshops, workflow training, and implementation sprints that turn team-wide AI
                  access into real productivity and responsible adoption.
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-cyan group-hover:gap-3 transition-all duration-200">
                  Start a Conversation <ArrowRight size={16} />
                </span>
              </div>
            </a>
          </div>
          </FadeIn>
        </div>
      </section>

      {/* ── SECTION 5: PHILOSOPHY ───────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <FadeIn>
            <div>
              <p className="text-brand-cyan text-sm font-semibold tracking-widest uppercase mb-4">
                What Partnership Looks Like
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold mb-6"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                We handle everything.
                <br />
                You own the win.
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Partnering with BreatheEasyAI means zero curriculum development, zero instructor
                recruitment, zero technology headaches. We bring a complete program. Your
                organization gets credit for the outcomes.
              </p>
              <blockquote className="border-l-4 border-brand-cyan pl-6 py-2 mb-8">
                <p className="text-xl font-medium italic">
                  &ldquo;Your families asked for AI education. Now you can say yes.&rdquo;
                </p>
              </blockquote>
              <p className="text-muted-foreground leading-relaxed">
                Every engagement is designed to produce case-study material — photos, testimonials,
                completion data — that strengthens your organization&apos;s story for the next
                funding cycle, grant application, or board meeting.
              </p>
            </div>
            </FadeIn>

            {/* Right */}
            <FadeIn delay={0.15}>
            <div className="bg-muted rounded-2xl p-10">
              <h3 className="text-lg font-semibold mb-6">What your organization walks away with:</h3>
              <ul className="flex flex-col gap-4">
                {outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-brand-green/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        width="12"
                        height="12"
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
                    <span className="text-sm leading-relaxed">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: CONTACT CTA ──────────────────────────────────── */}
      <section id="contact" className="py-20 md:py-28 bg-brand-dark text-white text-center">
        <FadeIn>
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-brand-cyan text-sm font-semibold tracking-widest uppercase mb-4">
            Next Step
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Let&apos;s talk about your program.
          </h2>
          <p className="text-brand-silver text-lg leading-relaxed mb-10">
            A 20-minute discovery call is all it takes to scope fit, format, and timeline for your
            organization. No deck. No pitch. Just a conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:breatheez@thebreatheez.com"
              className="inline-flex items-center justify-center gap-2 bg-brand-cyan text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-brand-cyan-dark hover:-translate-y-0.5 transition-all duration-200"
            >
              Book a 20-Minute Call <ArrowRight size={18} />
            </a>
            <Link
              href="/camp"
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-white/10 transition-all duration-200"
            >
              Explore Summer Camp
            </Link>
          </div>
        </div>
        </FadeIn>
      </section>
    </>
  );
}
