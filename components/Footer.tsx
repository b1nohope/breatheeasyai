import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Column 1 — Brand */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-3">
              Breathe<span className="text-brand-cyan">EZ</span>Ai
            </h3>
            <p className="text-brand-silver text-sm leading-relaxed max-w-sm">
              AI literacy education for everyone — taught by humans, powered by curiosity. From summer camps to corporate training, we make AI accessible.
            </p>
            <p className="text-brand-silver/60 text-xs mt-4 italic">I.T. made Ez...</p>
          </div>

          {/* Column 2 — Programs */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-brand-silver">Programs</h4>
            <div className="flex flex-col gap-3">
              <Link href="/camp" className="text-sm text-brand-silver hover:text-white transition-colors">
                Summer Camp
              </Link>
              <Link href="/play" className="text-sm text-brand-silver hover:text-white transition-colors">
                PromptEz Game
              </Link>
              <span className="text-sm text-brand-silver/50">Academy (Coming Soon)</span>
              <span className="text-sm text-brand-silver/50">Corporate Training (Coming Soon)</span>
            </div>
          </div>

          {/* Column 3 — Connect */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-brand-silver">Connect</h4>
            <div className="flex flex-col gap-3">
              <a href="#contact" className="text-sm text-brand-silver hover:text-white transition-colors">
                Book a Call
              </a>
              <a href="mailto:breatheez@thebreatheez.com" className="text-sm text-brand-silver hover:text-white transition-colors">
                breatheez@thebreatheez.com
              </a>
              <p className="text-sm text-brand-silver">Clarksville, TN</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-xs text-brand-silver/60">© 2026 BreatheEzAi. All rights reserved.</span>
          <span className="text-xs text-brand-silver/60">A BreatheEz Family Trust Company</span>
        </div>
      </div>
    </footer>
  );
}
