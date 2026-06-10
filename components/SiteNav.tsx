'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/businesses', label: 'Automation' },
  { href: '/camp', label: 'Summer Camp' },
  { href: '/partners', label: 'Schools & Orgs' },
  { href: '/promptez', label: 'PromptEz' },
];

export default function SiteNav() {
  const pathname = usePathname();

  return (
    <nav>
      <div className="nav-inner">
        <Link className="brand" href="/">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-transparent.png" alt="" />
          BREATHE<span className="ez">EZ</span>AI
        </Link>
        <div className="nav-links">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={pathname === href ? 'active' : undefined}
            >
              {label}
            </Link>
          ))}
          <a
            className="btn btn-primary magnetic"
            href="https://calendar.app.google/eRnmxtuRXKx6xkQx9"
          >
            Book a call
          </a>
        </div>
      </div>
    </nav>
  );
}
