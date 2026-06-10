import type { Metadata } from 'next';
import Link from 'next/link';
import Splash from '@/components/Splash';

export const metadata: Metadata = {
  title: 'BreatheEzAI — AI literacy & automation, proven live',
  description:
    'AI automation for businesses and AI literacy education for kids, schools, and organizations in Clarksville, TN.',
};

export default function HomePage() {
  return (
    <>
      <Splash />
      <main className="page" id="page-home">
        <header className="hero wrap">
          <div>
            <div className="eyebrow">Clarksville, TN · AI literacy + automation</div>
            <h1 data-final='Most people <span class="human-word">talk</span> about AI. We let you <span class="machine-word">watch it run.</span>'>
              {' '}
            </h1>
            <p className="lede">
              BreatheEzAI builds automation that works while you sleep and teaches the skills to use
              AI well — for businesses, schools, and kids. The terminal on the right is a live
              replay of a real workflow we run for a client every day.
            </p>
            <div className="hero-ctas">
              <a
                className="btn btn-primary magnetic"
                href="https://calendar.app.google/eRnmxtuRXKx6xkQx9"
              >
                Book a 20-minute call
              </a>
              <a className="btn btn-ghost magnetic" href="#audiences">
                Explore programs
              </a>
            </div>
            <p className="hero-note">
              No deck. No pitch. <b>Just a conversation.</b>
            </p>
          </div>

          <div className="term-tilt">
            <div
              className="terminal"
              role="img"
              aria-label="Animated replay of an AI email triage workflow classifying an email, applying labels, and drafting a reply for human review"
            >
              <div className="term-head">
                <span className="dot r"></span>
                <span className="dot y"></span>
                <span className="dot g"></span>
                <span className="term-title">email-triage — production</span>
                <span className="term-live">LIVE REPLAY</span>
              </div>
              <div className="term-body"></div>
            </div>
          </div>
        </header>

        <div className="ticker" aria-hidden="true">
          <div className="ticker-track" id="tickerTrack">
            <span>
              <b>2,400+</b> emails triaged automatically
            </span>
            <span>
              drafts only — <i>a human</i> always hits send
            </span>
            <span>
              <b>seconds</b> from inbox to triaged draft
            </span>
            <span>
              kids taught to <i>think with AI</i>, not just use it
            </span>
            <span>
              <b>30 days</b> from handshake to running program
            </span>
            <span>White House AI Education aligned</span>
            <span>
              built on <b>the tools you already pay for</b>
            </span>
          </div>
        </div>

        <section id="audiences" className="wrap">
          <div className="reveal">
            <div className="sec-eyebrow">One capability · three audiences</div>
            <h2>Cool teal is the machine. Warm amber is the human. You need both.</h2>
            <p className="sec-lede">
              Everything we build and teach lives on that line: automation handles the repetitive
              work, people handle the judgment. That&apos;s the whole philosophy — encoded right
              into this site.
            </p>
            <div className="legend">
              <div>
                <span className="swatch m"></span> MACHINE — automated, repeatable, always-on
              </div>
              <div>
                <span className="swatch h"></span> HUMAN — taught by people, decided by people
              </div>
            </div>
          </div>

          <div className="cards">
            <Link className="card reveal" href="/businesses">
              <span className="tag">For businesses</span>
              <h3>Automation that runs your busywork</h3>
              <p>
                Email triage, lead capture, document extraction, deadline monitoring — built on
                your existing tools, engineered to production standards, and watched after launch.
              </p>
              <span className="go">Explore automation services</span>
            </Link>
            <Link className="card warm reveal" href="/camp">
              <span className="tag">For kids &amp; families</span>
              <h3>Summer camps that teach thinking, not shortcuts</h3>
              <p>
                Hands-on, instructor-led sessions where kids learn to use AI as a creative and
                critical-thinking tool — with take-home portfolios to prove it.
              </p>
              <span className="go">Explore Summer Camp</span>
            </Link>
            <Link className="card warm reveal" href="/partners">
              <span className="tag">For schools &amp; orgs</span>
              <h3>Turnkey programs your community asks for</h3>
              <p>
                We bring curriculum, background-checked instructors, and the tech. You bring the
                families — and keep the credit, the photos, and the case study.
              </p>
              <span className="go">See how partnership works</span>
            </Link>
          </div>
        </section>

        <section className="proof">
          <div className="wrap">
            <div className="reveal">
              <div className="sec-eyebrow">Receipts, not promises</div>
              <h2>Real systems, in production, right now.</h2>
            </div>
            <div className="proof-grid">
              <div className="stat reveal">
                <div className="big">24/7</div>
                <div className="label">Email triage for an accounting firm</div>
                <p>
                  Every inbound client email classified, labeled, and drafted before the
                  team&apos;s coffee is poured. The owner reviews and sends.
                </p>
              </div>
              <div className="stat reveal">
                <div className="big">SECONDS</div>
                <div className="label">From arrival to ready draft</div>
                <p>
                  Emails are classified, labeled, routed, and drafted moments after they land —
                  before anyone has even opened the inbox.
                </p>
              </div>
              <div className="stat warm reveal">
                <div className="big">100%</div>
                <div className="label">Human-approved before send</div>
                <p>
                  Nothing leaves on autopilot. Every system we ship keeps a person in the loop
                  where judgment matters.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="cta wrap">
          <div className="reveal">
            <div className="sec-eyebrow">Next step</div>
            <h2>Twenty minutes. We&apos;ll find the right starting point.</h2>
            <p className="sec-lede">
              A short discovery call to scope fit, format, and timeline — for your business, your
              school, or your community.
            </p>
            <div className="cta-row">
              <a
                className="btn btn-primary magnetic"
                href="https://calendar.app.google/eRnmxtuRXKx6xkQx9"
              >
                Book a 20-minute call
              </a>
              <a className="btn btn-ghost magnetic" href="mailto:breatheezai@thebreatheez.com">
                Email us instead
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
