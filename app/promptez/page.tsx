import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'PromptEz — The Prompt Challenge Game | BreatheEzAI',
  description:
    'PromptEz is a live multiplayer prompt-challenge game. Join a room, get a mission, write your best prompt against the clock, and get scored on how well you think.',
};

export default function PromptEzPage() {
  return (
    <main className="page" id="page-promptez">
      <header className="hero solo wrap">
        <div>
          <div className="eyebrow">The PromptEz platform</div>
          <h1 data-final='AI literacy, but it feels like <span class="machine-word">game night.</span>'>
            &nbsp;
          </h1>
          <p className="lede">
            PromptEz is our live multiplayer prompt-challenge game. Players join a room, get a
            mission, write their best prompt against the clock, and get scored by AI on how well
            they think — not just what they type. It&apos;s the engine behind our camps, and
            it&apos;s playable right now.
          </p>
          <div className="hero-ctas">
            <a
              className="btn btn-primary magnetic"
              href="https://promptez.vercel.app/"
              target="_blank"
              rel="noopener"
            >
              Play PromptEz
            </a>
            <a className="btn btn-ghost magnetic" href="#how">
              How a round works
            </a>
          </div>
        </div>
      </header>

      <section id="how" className="wrap" style={{ paddingTop: 30 }}>
        <div className="reveal">
          <div className="sec-eyebrow">How a round works</div>
          <h2>Mission. Clock. Prompt. Score.</h2>
          <p className="sec-lede">
            Every round is a small, complete loop — designed so each one teaches something about
            directing AI with intent.
          </p>
        </div>
        <div className="pipeline reveal">
          <span className="flowdot" aria-hidden="true"></span>
          <div className="stage">
            <span className="num">01 / JOIN</span>
            <h4>Open a room, friends jump in</h4>
            <p>One player hosts, everyone else joins live. No installs — it runs in the browser.</p>
          </div>
          <div className="stage">
            <span className="num">02 / MISSION</span>
            <h4>Everyone gets the same challenge</h4>
            <p>
              Missions are built to exercise real thinking — like &quot;how would you use AI to
              teach yourself how gravity affects different animals?&quot;
            </p>
          </div>
          <div className="stage">
            <span className="num">03 / PROMPT</span>
            <h4>Beat the clock</h4>
            <p>
              A server-synced timer keeps every player honest. Write the prompt, submit before
              zero.
            </p>
          </div>
          <div className="stage">
            <span className="num">04 / SCORE</span>
            <h4>Feedback, not just points</h4>
            <p>
              After each round: your score, what worked, one tip to improve, and the AI&apos;s
              actual response — then the leaderboard.
            </p>
          </div>
        </div>
      </section>

      <section className="proof">
        <div className="wrap">
          <div className="reveal">
            <div className="sec-eyebrow">Why it works</div>
            <h2>Scoring rewards thinking, not tricks.</h2>
            <p className="sec-lede">
              Most &quot;AI games&quot; reward whoever gets the funniest output. PromptEz missions
              are built around using AI as a critical and creative thinking tool — every mission
              has a goal and a scoring rubric, and the rubric rewards intent, clarity, and
              judgment.
            </p>
          </div>
          <div className="proof-grid">
            <div className="stat reveal">
              <div className="big">LIVE</div>
              <div className="label">Real-time multiplayer</div>
              <p>
                Rooms, synced rounds, live leaderboards. Built to feel like a party game,
                engineered like a real platform.
              </p>
            </div>
            <div className="stat reveal">
              <div className="big">1 TIP</div>
              <div className="label">Per round, per player</div>
              <p>
                Every score card includes one specific improvement tip — so players get measurably
                better round over round.
              </p>
            </div>
            <div className="stat warm reveal">
              <div className="big">K-12</div>
              <div className="label">Classroom &amp; camp ready</div>
              <p>
                PromptEz powers our summer camps and school sessions. Teachers run it; students
                compete and learn.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="wrap">
        <div className="reveal">
          <div className="sec-eyebrow">Where it&apos;s headed</div>
          <h2>A game today. A curriculum engine tomorrow.</h2>
        </div>
        <div className="rows reveal">
          <div className="row">
            <b>For families</b>
            <p>
              Open a room and play tonight — it&apos;s a genuinely fun way to learn what good
              prompting looks like, for kids and adults alike.
            </p>
          </div>
          <div className="row">
            <b>For teachers &amp; camps</b>
            <p>
              PromptEz is the live-play layer of our youth programs: missions map to learning
              goals, score cards give every student personal feedback, and leaderboards keep the
              energy up.
            </p>
          </div>
          <div className="row">
            <b>For partner organizations</b>
            <p>
              If you&apos;re running a program with us, PromptEz comes included — a platform your
              community can&apos;t get anywhere else.
            </p>
          </div>
        </div>
      </section>

      <section className="cta wrap">
        <div className="reveal">
          <div className="sec-eyebrow">Try it</div>
          <h2>Open a room. See who thinks best.</h2>
          <div className="cta-row">
            <a
              className="btn btn-primary magnetic"
              href="https://promptez.vercel.app/"
              target="_blank"
              rel="noopener"
            >
              Play PromptEz
            </a>
            <Link className="btn btn-ghost magnetic" href="/camp">
              See it in our camps
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
