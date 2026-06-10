import Link from 'next/link';

export default function SiteFooter() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <Link className="brand" href="/" style={{ marginBottom: 16 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo-transparent.png" alt="" />
              BREATHE<span className="ez">EZ</span>AI
            </Link>
            <p style={{ maxWidth: 320 }}>
              AI literacy education and automation for everyone — taught by
              humans, run by machines, powered by curiosity. I.T. made Ez.
            </p>
          </div>
          <div>
            <h5>Explore</h5>
            <Link href="/businesses">Automation for Businesses</Link>
            <Link href="/camp">Summer Camp</Link>
            <Link href="/partners">Schools &amp; Organizations</Link>
            <Link href="/promptez">PromptEz Game</Link>
          </div>
          <div>
            <h5>Connect</h5>
            <a href="https://calendar.app.google/eRnmxtuRXKx6xkQx9">Book a call</a>
            <a href="mailto:breatheezai@thebreatheez.com">
              breatheezai@thebreatheez.com
            </a>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 BreatheEzAI · Clarksville, TN</span>
          <span>A BreatheEz Family Trust Company</span>
        </div>
      </div>
    </footer>
  );
}
