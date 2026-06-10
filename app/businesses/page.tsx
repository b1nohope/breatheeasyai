import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Automation for Businesses | BreatheEzAI',
  description:
    'Email triage, lead capture, document extraction, and deadline monitoring — automation built on your existing tools and engineered to production standards.',
};

export default function BusinessesPage() {
  return (
    <main className="page" id="page-businesses">
      <header className="hero wrap">
        <div>
          <div className="eyebrow">Automation for businesses</div>
          <h1 data-final='Your week has hours hiding in it. <span class="machine-word">We go get them.</span>'>
            &nbsp;
          </h1>
          <p className="lede">
            Email that triages itself. Leads that never slip. PDFs that turn into spreadsheets
            while you sleep. We automate the repetitive work on the tools you already pay for —
            and we engineer it like it&apos;s going to run for years, because it is.
          </p>
          <div className="hero-ctas">
            <a
              className="btn btn-primary magnetic"
              href="https://calendar.app.google/eRnmxtuRXKx6xkQx9"
            >
              Book a discovery call
            </a>
            <a className="btn btn-ghost magnetic" href="#what">
              What we automate
            </a>
          </div>
        </div>
        <div className="term-tilt">
          <div
            className="terminal"
            role="img"
            aria-label="Animated replay of an AI email triage workflow"
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

      <section id="what" className="wrap">
        <div className="reveal">
          <div className="sec-eyebrow">What we automate</div>
          <h2>The work nobody started a business to do.</h2>
          <p className="sec-lede">
            Every engagement starts by mapping where your team&apos;s hours actually go. These are
            the patterns we find — and fix — most often.
          </p>
        </div>
        <div className="cards">
          <div className="card reveal">
            <span className="tag">Inbox</span>
            <h3>Email triage &amp; drafting</h3>
            <p>
              Every inbound email classified, labeled, routed to the right person, and answered
              with a draft written in your voice — waiting for one click of review.
            </p>
            <ul>
              <li>Priority and category detection</li>
              <li>Tasks created and assigned automatically</li>
              <li>Drafts only — a human always hits send</li>
            </ul>
          </div>
          <div className="card reveal">
            <span className="tag">Leads</span>
            <h3>Lead capture &amp; follow-up</h3>
            <p>
              Inquiries from email, calls, and web forms land in your CRM or job-management system
              instantly — with the follow-up queued so no lead goes cold over a weekend.
            </p>
            <ul>
              <li>Form, email, and call intake</li>
              <li>Pushed into the system you already use</li>
              <li>Automatic first-touch and reminders</li>
            </ul>
          </div>
          <div className="card reveal">
            <span className="tag">Documents</span>
            <h3>PDF &amp; document extraction</h3>
            <p>
              Bank statements, vendor invoices, receipts, 1099s — extracted into clean,
              review-ready spreadsheets instead of being re-typed by hand, line by line.
            </p>
            <ul>
              <li>Statements, invoices, receipts, tax docs</li>
              <li>Structured output you review and import</li>
              <li>Hours of data entry, gone</li>
            </ul>
          </div>
          <div className="card reveal">
            <span className="tag">Deadlines</span>
            <h3>Deadline &amp; opportunity monitoring</h3>
            <p>
              Tax dates, filings, renewals, and bid postings tracked automatically — including
              government contract opportunities you&apos;re certified for but never have time to
              watch.
            </p>
            <ul>
              <li>Nothing slips through a busy season</li>
              <li>Government bid feeds monitored daily</li>
              <li>Alerts with context, not noise</li>
            </ul>
          </div>
          <div className="card reveal">
            <span className="tag">Reputation</span>
            <h3>Digital footprint audits</h3>
            <p>
              An AI-generated review of a business&apos;s real web presence — site health, search
              basics, business profile, social, reviews — grounded in actual data, not generic
              fluff.
            </p>
            <ul>
              <li>Runs automatically on every new lead</li>
              <li>Specific findings with evidence</li>
              <li>A sales tool, not just a report</li>
            </ul>
          </div>
          <div className="card reveal">
            <span className="tag">Teams</span>
            <h3>AI workshops for your staff</h3>
            <p>
              Your team already has AI access. We turn that access into capability — practical,
              hands-on training in how to use these tools well and responsibly.
            </p>
            <ul>
              <li>Hands-on, role-specific exercises</li>
              <li>Responsible-use guardrails included</li>
              <li>Often where the best automation ideas surface</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="wrap">
        <div className="reveal">
          <div className="sec-eyebrow">How an engagement works</div>
          <h2>From &quot;we should use AI&quot; to a system that runs every day.</h2>
          <p className="sec-lede">
            No moonshots. We find the most repetitive thing in your week, automate it, and prove it
            with real numbers before we expand.
          </p>
        </div>
        <div className="pipeline reveal">
          <span className="flowdot" aria-hidden="true"></span>
          <div className="stage">
            <span className="num">01 / WORKSHOP</span>
            <h4>Your team learns the landscape</h4>
            <p>
              A hands-on session that turns &quot;AI access&quot; into actual capability — and
              surfaces where the time really goes.
            </p>
          </div>
          <div className="stage">
            <span className="num">02 / AUDIT</span>
            <h4>We map the repetitive work</h4>
            <p>
              We walk your week, find the hours hiding in email, data entry, and chasing people,
              and rank what&apos;s worth automating.
            </p>
          </div>
          <div className="stage">
            <span className="num">03 / SPRINT</span>
            <h4>We build the first system</h4>
            <p>
              One focused build, on your stack, tested branch by branch before it ever touches real
              work.
            </p>
          </div>
          <div className="stage">
            <span className="num">04 / RETAINER</span>
            <h4>It runs. We watch it. It grows.</h4>
            <p>
              Monitoring, tuning, and the next automation in line. Your machine compounds while you
              do the work only you can do.
            </p>
          </div>
        </div>
      </section>

      <section className="proof">
        <div className="wrap">
          <div className="reveal">
            <div className="sec-eyebrow">Engineering standards</div>
            <h2>Built like infrastructure, not like a demo.</h2>
            <p className="sec-lede">
              Anyone can wire up an AI demo. We build systems that businesses — including firms
              with real compliance obligations — can trust in production.
            </p>
          </div>
          <div className="standards">
            <div className="std reveal">
              <span className="glyph">⏻</span>
              <div>
                <b>Humans approve everything that leaves</b>
                <span>Drafts only, never auto-send. Judgment calls stay with people.</span>
              </div>
            </div>
            <div className="std reveal">
              <span className="glyph">⟲</span>
              <div>
                <b>Idempotent by design</b>
                <span>
                  The same email, processed twice, never becomes two tasks, two drafts, or two
                  charges.
                </span>
              </div>
            </div>
            <div className="std reveal">
              <span className="glyph">⚠</span>
              <div>
                <b>Error handling before launch</b>
                <span>
                  Every workflow ships with failure alerts. If something breaks at 2am, we know
                  before you do.
                </span>
              </div>
            </div>
            <div className="std reveal">
              <span className="glyph">🔒</span>
              <div>
                <b>Privacy-first logging</b>
                <span>
                  Raw personal information never lands in logs. Compliance-conscious builds for
                  compliance-bound industries.
                </span>
              </div>
            </div>
            <div className="std reveal">
              <span className="glyph">⊘</span>
              <div>
                <b>No black boxes</b>
                <span>
                  Every system is documented. You always know what it does, what it costs to run,
                  and how to turn it off.
                </span>
              </div>
            </div>
            <div className="std reveal">
              <span className="glyph">$</span>
              <div>
                <b>Measured in hours given back</b>
                <span>
                  Every system reports the time it saves against the time it costs to run. If the
                  math doesn&apos;t work, we don&apos;t build it.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="wrap">
        <div className="reveal">
          <div className="sec-eyebrow">In production</div>
          <h2>Case study: an accounting firm&apos;s inbox, on autopilot.</h2>
        </div>
        <div className="case reveal">
          <div>
            <p className="quote">
              A Clarksville accounting firm was drowning in client email — invoices requests,
              payroll questions, document chasing — all landing in one inbox, all triaged by hand.
              Now every email is classified, labeled, routed to the right bookkeeper with a task
              and a deadline, and answered with a ready-to-review draft within seconds of arriving.
              The team reviews and sends. Nothing slips.
            </p>
            <p className="meta">EMAIL TRIAGE &amp; DRAFTING · ACCOUNTING · LIVE SINCE 2026</p>
          </div>
          <div className="nums">
            <div>
              <b>24/7</b>
              <span>coverage — emails triaged nights, weekends, tax season</span>
            </div>
            <div>
              <b>SECONDS</b>
              <span>from arrival to a ready-to-review draft</span>
            </div>
            <div>
              <b>0</b>
              <span>emails sent without human review</span>
            </div>
          </div>
        </div>
      </section>

      <section className="wrap" style={{ paddingTop: 0 }}>
        <div className="rows reveal">
          <div className="row">
            <b>What does it cost?</b>
            <p>
              Every build is scoped to your business after a discovery call — setup plus a monthly
              retainer that covers monitoring, tuning, and what we build next. You&apos;ll get
              exact numbers in writing before anything starts, and we track the system&apos;s
              running cost against the hours it saves so the ROI is never a guess.
            </p>
          </div>
          <div className="row">
            <b>Do we need new software?</b>
            <p>
              Almost never. We build on the tools you already pay for — your email, your CRM, your
              job-management or accounting platform. If an existing tool already does something
              natively, we&apos;ll tell you to use it instead of billing you to rebuild it.
            </p>
          </div>
          <div className="row">
            <b>What if it breaks?</b>
            <p>
              Every workflow ships with error alerting before it goes live, and the retainer covers
              monitoring. Most issues are caught and fixed before you&apos;d ever notice them.
            </p>
          </div>
          <div className="row">
            <b>Is our data safe?</b>
            <p>
              Systems are designed so raw personal information stays out of logs, credentials are
              isolated, and access follows least-privilege defaults. For regulated industries, we
              build with your compliance obligations in mind — and can help you document the
              vendor oversight your auditors expect.
            </p>
          </div>
        </div>
      </section>

      <section className="cta wrap">
        <div className="reveal">
          <div className="sec-eyebrow">Next step</div>
          <h2>Tell us the most repetitive thing in your week.</h2>
          <p className="sec-lede">
            That&apos;s usually the first build. A 20-minute call is enough to find it.
          </p>
          <div className="cta-row">
            <a
              className="btn btn-primary magnetic"
              href="https://calendar.app.google/eRnmxtuRXKx6xkQx9"
            >
              Book a discovery call
            </a>
            <a className="btn btn-ghost magnetic" href="mailto:breatheezai@thebreatheez.com">
              Email us instead
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
