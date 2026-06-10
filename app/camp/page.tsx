import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PromptEz Summer Camp | BreatheEzAI',
  description:
    'A hands-on summer program in Clarksville, TN where kids learn to direct AI, question it, and build with it — taught live by background-checked instructors.',
};

const STRIPE_EXPLORERS = 'https://book.stripe.com/aFa14o1lNbmwb4hgz85os02';
const STRIPE_BUILDERS = 'https://book.stripe.com/8x214od4v0HS0pDfv45os01';
const STRIPE_INNOVATORS = 'https://book.stripe.com/3cI5kE9Sj76g3BPer05os00';

export default function CampPage() {
  return (
    <main className="page" id="page-camp">
      <header className="hero solo wrap">
        <div>
          <div className="eyebrow warm">Summer 2026 · Now enrolling · Clarksville, TN</div>
          <h1 data-final='Your kids already have AI. Give them the <span class="human-word">skill to use it well.</span>'>
            &nbsp;
          </h1>
          <p className="lede">
            PromptEz Camp is a hands-on summer program where kids learn to direct AI, question it,
            and build with it — taught live by background-checked instructors. Not screens
            babysitting kids. People teaching them.
          </p>
          <div className="hero-ctas">
            <a className="btn btn-human magnetic" href="#tracks">
              Enroll now
            </a>
            <a
              className="btn btn-ghost magnetic"
              href="https://promptez.vercel.app/"
              target="_blank"
              rel="noopener"
            >
              Try the PromptEz game
            </a>
          </div>
        </div>
      </header>

      <section id="tracks" className="wrap" style={{ paddingTop: 30 }}>
        <div className="reveal">
          <div className="sec-eyebrow warm">Three tracks</div>
          <h2>Pick the level. We&apos;ll handle the curiosity.</h2>
          <p className="sec-lede">
            Each track is a four-week session of instructor-led, project-based learning. Every
            camper leaves with a take-home portfolio of what they made.
          </p>
        </div>
        <div className="tiers">
          <div className="tier reveal">
            <div className="tname">Explorers</div>
            <div className="tages">First steps</div>
            <div className="tprice">$160</div>
            <div className="tper">per camper · 4-week session</div>
            <ul>
              <li>What AI is — and what it isn&apos;t</li>
              <li>First guided prompts and projects</li>
              <li>Asking better questions, spotting wrong answers</li>
              <li>Take-home portfolio of creations</li>
            </ul>
            <a
              className="btn btn-ghost magnetic"
              href={STRIPE_EXPLORERS}
              target="_blank"
              rel="noopener noreferrer"
            >
              Enroll Explorers
            </a>
          </div>
          <div className="tier featured reveal">
            <div className="tname">Builders</div>
            <div className="tages">Most popular</div>
            <div className="tprice">$220</div>
            <div className="tper">per camper · 4-week session</div>
            <ul>
              <li>Mission-based prompt challenges with scoring</li>
              <li>Using AI for research, writing, and creative work</li>
              <li>Live multiplayer rounds on our PromptEz platform</li>
              <li>Critical thinking: when to trust, when to verify</li>
            </ul>
            <a
              className="btn btn-human magnetic"
              href={STRIPE_BUILDERS}
              target="_blank"
              rel="noopener noreferrer"
            >
              Enroll Builders
            </a>
          </div>
          <div className="tier reveal">
            <div className="tname">Innovators</div>
            <div className="tages">Advanced</div>
            <div className="tprice">$320</div>
            <div className="tper">per camper · 4-week session</div>
            <ul>
              <li>Multi-step projects directed start to finish</li>
              <li>AI as a thinking partner for real problems</li>
              <li>Presenting and defending their work</li>
              <li>A capstone project worth showing off</li>
            </ul>
            <a
              className="btn btn-ghost magnetic"
              href={STRIPE_INNOVATORS}
              target="_blank"
              rel="noopener noreferrer"
            >
              Enroll Innovators
            </a>
          </div>
        </div>
      </section>

      <section className="proof">
        <div className="wrap">
          <div className="reveal">
            <div className="sec-eyebrow warm">What they actually learn</div>
            <h2>Thinking with AI — not letting AI think for them.</h2>
            <p className="sec-lede">
              Our challenges aren&apos;t &quot;make the AI say something funny.&quot; They&apos;re
              built to exercise real reasoning: How would you use AI to teach yourself how gravity
              works for different animals? Every mission has a goal and a score, and the score
              rewards thinking.
            </p>
          </div>
          <div className="proof-grid">
            <div className="stat warm reveal">
              <div className="big">100%</div>
              <div className="label">Instructor-led, in person</div>
              <p>
                Every session is taught live by background-checked instructors. The technology is
                the material — humans are the teachers.
              </p>
            </div>
            <div className="stat warm reveal">
              <div className="big">1:1</div>
              <div className="label">Portfolio per camper</div>
              <p>
                Every kid leaves with a portfolio of what they built — something to show parents,
                teachers, and themselves.
              </p>
            </div>
            <div className="stat reveal">
              <div className="big">LIVE</div>
              <div className="label">Real platform, real rounds</div>
              <p>
                Campers play timed, scored prompt challenges on PromptEz — our own multiplayer
                learning platform — with feedback after every round.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="wrap">
        <div className="reveal">
          <div className="sec-eyebrow warm">For parents</div>
          <h2>The questions we&apos;d ask too.</h2>
        </div>
        <div className="rows reveal">
          <div className="row">
            <b>Who&apos;s teaching?</b>
            <p>
              Background-checked instructors, in person, every session. Kids are never left alone
              with a screen and called &quot;taught.&quot;
            </p>
          </div>
          <div className="row">
            <b>Is this safe for kids online?</b>
            <p>
              Yes. Campers work in a controlled environment on our own platform, built with
              children&apos;s privacy in mind. Accounts, data, and AI access are all managed by us
              — our privacy policy spells out exactly what&apos;s collected and why.
            </p>
          </div>
          <div className="row">
            <b>Will this just teach my kid to cheat with AI?</b>
            <p>
              The opposite. Our whole curriculum is built around using AI as a thinking tool —
              questioning its answers, directing it with intent, and knowing when not to trust it.
              Those are the skills schools wish kids arrived with.
            </p>
          </div>
          <div className="row">
            <b>What does my kid take home?</b>
            <p>
              A portfolio of everything they made during the session — projects, challenge
              results, and a capstone in the upper tracks.
            </p>
          </div>
          <div className="row">
            <b>How do I enroll?</b>
            <p>
              Enrollment is online with secure checkout. Pick a track, tell us your camper&apos;s
              name and age, and you&apos;re set. Spots are limited per session.
            </p>
          </div>
        </div>
      </section>

      <section className="cta wrap">
        <div className="reveal">
          <div className="sec-eyebrow warm">Summer 2026</div>
          <h2>Sessions fill up. Curiosity doesn&apos;t wait.</h2>
          <p className="sec-lede">
            Secure a spot now, or book a quick call if you have questions first.
          </p>
          <div className="cta-row">
            <a className="btn btn-human magnetic" href="#tracks">
              Enroll now
            </a>
            <a
              className="btn btn-ghost magnetic"
              href="https://calendar.app.google/eRnmxtuRXKx6xkQx9"
            >
              Talk to us first
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
