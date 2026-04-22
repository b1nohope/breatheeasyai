'use client';

import { Zap, Trophy, Users, Target } from 'lucide-react';
import FadeIn from '@/components/FadeIn';

export default function PlayPage() {
  return (
    <>
      {/* ── SECTION 1: HERO ─────────────────────────────────────────── */}
      <section className="bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full blur-[120px]" style={{ backgroundColor: '#00E5FF4D' }} />
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-[120px]" style={{ backgroundColor: '#FFD70033' }} />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-28 md:py-40 text-center">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8 border"
            style={{
              backgroundColor: 'rgb(0 229 255 / 0.10)',
              borderColor: 'rgb(0 229 255 / 0.20)',
            }}
          >
            <Zap size={14} style={{ color: '#00E5FF' }} />
            <span className="text-xs font-semibold" style={{ color: '#00E5FF' }}>
              Live Prompt Challenges
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Outprompt{' '}
            <span style={{ color: '#00E5FF' }}>Everyone.</span>
          </h1>

          <p className="text-lg text-brand-silver max-w-2xl mx-auto mb-10 leading-relaxed">
            Real-time AI prompting challenges that sharpen your thinking. Write better prompts,
            score higher, and prove you can outprompt the room — or the world.
          </p>

          <a
            href="https://promptez.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-lg font-bold text-lg hover:-translate-y-1 hover:shadow-2xl transition-all duration-200"
            style={{
              backgroundColor: '#00E5FF',
              color: '#0F172A',
              boxShadow: '0 0 0 transparent',
            }}
            onMouseEnter={undefined}
          >
            Play Now
          </a>
        </div>
      </section>

      {/* ── SECTION 2: HOW IT WORKS ─────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-brand-cyan text-sm font-semibold tracking-widest uppercase mb-4">
              How It Works
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Think fast. Prompt better.
            </h2>
          </div>
          </FadeIn>

          <FadeIn delay={0.15}>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                step: 'Step 01',
                title: 'Get Your Challenge',
                body: 'Each round presents a unique AI challenge. You have 180 seconds to craft the perfect prompt.',
              },
              {
                icon: Zap,
                step: 'Step 02',
                title: 'Write Your Prompt',
                body: 'Think critically about clarity, context, constraints, and creativity. Your prompt is scored on all four.',
              },
              {
                icon: Trophy,
                step: 'Step 03',
                title: 'See Your Score',
                body: 'AI evaluates your prompt on Clarity, Constraints, Context, and Creativity. Up to 5,000 points per round.',
              },
            ].map(({ icon: Icon, step, title, body }) => (
              <div key={step} className="text-center p-8">
                <div className="w-16 h-16 bg-brand-cyan/10 rounded-2xl flex items-center justify-center text-brand-cyan mx-auto mb-5">
                  <Icon size={26} />
                </div>
                <p className="text-brand-cyan text-xs font-bold tracking-wider mb-2">{step}</p>
                <h3 className="text-lg font-semibold mb-3">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
          </FadeIn>
        </div>
      </section>

      {/* ── SECTION 3: MODES ────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-muted">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Classroom Mode */}
            <div className="bg-white rounded-2xl p-10 border border-border">
              <div className="w-14 h-14 bg-brand-green/10 rounded-xl flex items-center justify-center text-brand-green mb-6">
                <Users size={26} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Classroom Mode</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Teachers host live sessions where every student competes in real time. No logins,
                no setup — join with a room code and start prompting in under a minute.
              </p>
              <ul className="flex flex-col gap-3">
                {[
                  'No student accounts needed',
                  'Teacher controls rounds',
                  'Live leaderboard',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-brand-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none" className="text-brand-green">
                        <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Ranked Mode — coming soon */}
            <div className="opacity-75 bg-white rounded-2xl p-10 border border-border">
              <div className="w-14 h-14 bg-brand-silver/10 rounded-xl flex items-center justify-center text-brand-silver mb-6">
                <Trophy size={26} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Ranked Mode</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Compete against players worldwide and climb the leaderboard from Bronze to Master.
                Every prompt you write earns rank points — prove you&apos;re the best prompter on
                the planet.
              </p>
              <span className="inline-flex items-center bg-brand-silver/10 text-brand-silver text-sm font-semibold rounded-full px-4 py-1.5">
                Coming Soon — Phase 2
              </span>
            </div>
          </div>
          </FadeIn>
        </div>
      </section>

      {/* ── SECTION 4: CTA ──────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-brand-dark text-white text-center">
        <FadeIn>
        <div className="max-w-3xl mx-auto px-6">
          <h2
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Ready to outprompt everyone?
          </h2>
          <p className="text-brand-silver text-lg leading-relaxed mb-10">
            No account needed. Jump straight into a challenge and see how your prompts stack up.
          </p>
          <a
            href="https://promptez.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-lg font-bold text-lg hover:-translate-y-1 transition-all duration-200"
            style={{ backgroundColor: '#00E5FF', color: '#0F172A' }}
          >
            Play PromptEz
          </a>
        </div>
        </FadeIn>
      </section>
    </>
  );
}
