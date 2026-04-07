import Link from 'next/link';
import {
  ArrowRight,
  BookOpen,
  Users,
  Gamepad2,
  Building2,
  Shield,
  GraduationCap,
  Sparkles,
} from 'lucide-react';

const whyCards = [
  {
    icon: BookOpen,
    title: 'Human-Led, Not Screen-Based',
    body: 'Every session is taught by a real instructor. Kids create — AI amplifies. We never hand kids a screen and walk away.',
  },
  {
    icon: Sparkles,
    title: 'Project-Based Learning',
    body: 'Students take home tangible projects every week — art books, storybooks, idea plans. Not just screen time, real creative output.',
  },
  {
    icon: Shield,
    title: 'Turnkey for Partners',
    body: 'We bring the curriculum, instructors, materials, and technology. You provide the space and the families. Zero setup on your end.',
  },
];

const outcomes = [
  'Explain what a prompt is and why it matters',
  'Write detailed prompts that produce specific results',
  'Use AI as a creative tool while owning their ideas',
  'Critically evaluate AI output instead of blindly accepting it',
  'A portfolio of projects they directed themselves',
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

        <div className="relative max-w-6xl mx-auto px-6 py-28 md:py-40 text-center">
          <p className="text-brand-cyan text-sm font-semibold tracking-widest uppercase mb-6">
            AI Literacy Education
          </p>

          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Making AI accessible
            <br />
            <span className="gradient-text">for everyone.</span>
          </h1>

          <p className="text-lg md:text-xl text-brand-silver max-w-2xl mx-auto mb-10 leading-relaxed">
            From summer camps that teach kids to think with AI, to workshops that upskill your
            workforce — we bring AI literacy to your community.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#programs"
              className="inline-flex items-center justify-center gap-2 bg-brand-cyan text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-brand-cyan-dark hover:-translate-y-0.5 transition-all duration-200"
            >
              Explore Programs <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-white/10 transition-all duration-200"
            >
              Book a Call
            </a>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: TRUST BAR ────────────────────────────────────── */}
      <section className="border-b border-border py-6 bg-muted">
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
      </section>

      {/* ── SECTION 3: WHY IT MATTERS ───────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-brand-cyan text-sm font-semibold tracking-widest uppercase mb-4">
              Why This Matters
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              AI is here. The question is who teaches your kids to use it.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              51% of teens are already using AI without guidance. 65% of today&apos;s kids will work
              in jobs that don&apos;t exist yet. There&apos;s nothing between a $1,000/week coding
              camp and a YouTube rabbit hole. We fill that gap.
            </p>
          </div>

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
        </div>
      </section>

      {/* ── SECTION 4: PROGRAMS ─────────────────────────────────────── */}
      <section id="programs" className="py-20 md:py-28 bg-muted">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-brand-cyan text-sm font-semibold tracking-widest uppercase mb-4">
              Our Programs
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              AI literacy at every level.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 — Summer Camp */}
            <Link
              href="/camp"
              className="group bg-white rounded-2xl overflow-hidden border border-border hover:border-brand-cyan/40 hover:shadow-xl transition-all duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-brand-cyan/10 to-brand-green/10 flex items-center justify-center">
                <Users size={48} className="text-brand-cyan group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="p-8">
                <p className="text-xs font-semibold text-brand-green uppercase tracking-wider mb-2">
                  Now Enrolling
                </p>
                <h3 className="text-xl font-semibold mb-3">PromptEz Summer Camp</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  A hands-on, 4-week camp where kids ages 6–17 learn to create with AI — storybooks,
                  art, inventions — guided by real instructors.
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-cyan group-hover:gap-3 transition-all duration-200">
                  Learn More <ArrowRight size={16} />
                </span>
              </div>
            </Link>

            {/* Card 2 — PromptEz Game */}
            <Link
              href="/play"
              className="group bg-white rounded-2xl overflow-hidden border border-border hover:border-brand-cyan/40 hover:shadow-xl transition-all duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-brand-dark/5 to-brand-cyan/10 flex items-center justify-center">
                <Gamepad2 size={48} className="text-brand-cyan group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="p-8">
                <p className="text-xs font-semibold text-brand-cyan uppercase tracking-wider mb-2">
                  Play Free
                </p>
                <h3 className="text-xl font-semibold mb-3">PromptEz Game</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  Competitive AI prompting challenges that make learning feel like play. Battle friends,
                  earn badges, and level up your prompt-writing skills.
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-cyan group-hover:gap-3 transition-all duration-200">
                  Play Now <ArrowRight size={16} />
                </span>
              </div>
            </Link>

            {/* Card 3 — Coming Soon */}
            <div className="opacity-75 bg-white rounded-2xl overflow-hidden border border-border">
              <div className="h-48 bg-gradient-to-br from-brand-silver/10 to-brand-silver/5 flex items-center justify-center">
                <Building2 size={48} className="text-brand-silver" />
              </div>
              <div className="p-8">
                <p className="text-xs font-semibold text-brand-silver uppercase tracking-wider mb-2">
                  Coming Fall 2026
                </p>
                <h3 className="text-xl font-semibold mb-3">Academy &amp; Corporate</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  Continuing education for adults and turnkey corporate AI training. Upskill your
                  workforce without the six-figure consulting fee.
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-silver">
                  Coming Soon
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: PHILOSOPHY ───────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <p className="text-brand-cyan text-sm font-semibold tracking-widest uppercase mb-4">
                Our Philosophy
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold mb-6"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Kids create.
                <br />
                AI amplifies.
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We believe AI is a tool — not a teacher, not a babysitter, and definitely not a
                replacement for a curious mind. Every BreatheEzAi session starts with a human idea
                and ends with a student-directed project.
              </p>
              <blockquote className="border-l-4 border-brand-cyan pl-6 py-2 mb-8">
                <p className="text-xl font-medium italic">
                  &ldquo;That&apos;s AI&apos;s idea. What&apos;s yours?&rdquo;
                </p>
              </blockquote>
              <p className="text-muted-foreground leading-relaxed">
                We teach students to interrogate AI output, challenge its assumptions, and apply
                their own creativity. Critical thinking isn&apos;t a bonus — it&apos;s the whole
                point.
              </p>
            </div>

            {/* Right */}
            <div className="bg-muted rounded-2xl p-10">
              <h3 className="text-lg font-semibold mb-6">What students walk away with:</h3>
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
          </div>
        </div>
      </section>

      {/* ── SECTION 6: CONTACT CTA ──────────────────────────────────── */}
      <section id="contact" className="py-20 md:py-28 bg-brand-dark text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-brand-cyan text-sm font-semibold tracking-widest uppercase mb-4">
            Get Started
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Bring AI literacy to your community.
          </h2>
          <p className="text-brand-silver text-lg leading-relaxed mb-10">
            Whether you&apos;re a parent looking for summer camp, a community partner building
            programming, or a company investing in your team — we&apos;d love to talk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:breatheez@thebreatheez.com"
              className="inline-flex items-center justify-center gap-2 bg-brand-cyan text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-brand-cyan-dark hover:-translate-y-0.5 transition-all duration-200"
            >
              Book a Call <ArrowRight size={18} />
            </a>
            <Link
              href="/camp"
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-white/10 transition-all duration-200"
            >
              Explore Summer Camp
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
