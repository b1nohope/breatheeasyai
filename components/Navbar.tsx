'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-tight">
          Breathe<span className="gradient-text">EZ</span>Ai
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Home
          </Link>
          <Link href="/camp" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Summer Camp
          </Link>
          <Link href="/play" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            PromptEz Game
          </Link>
          <a
            href="#contact"
            className="bg-brand-cyan text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-brand-cyan-dark transition-colors"
          >
            Book a Call
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden bg-white border-b border-border px-6 pb-6 pt-2 flex flex-col gap-4">
          <Link href="/" className="text-sm font-medium py-2" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link href="/camp" className="text-sm font-medium py-2" onClick={() => setOpen(false)}>
            Summer Camp
          </Link>
          <Link href="/play" className="text-sm font-medium py-2" onClick={() => setOpen(false)}>
            PromptEz Game
          </Link>
          <a
            href="#contact"
            className="bg-brand-cyan text-white px-5 py-2 rounded-lg text-sm font-semibold text-center hover:bg-brand-cyan-dark transition-colors"
            onClick={() => setOpen(false)}
          >
            Book a Call
          </a>
        </div>
      )}
    </header>
  );
}
