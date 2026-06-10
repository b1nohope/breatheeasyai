import type { Metadata } from 'next';
import fs from 'fs';
import path from 'path';

export const metadata: Metadata = {
  title: 'Terms of Service | BreatheEzAi',
  description: 'Terms of Service for TheBreatheEZ DBA BreatheEzAi',
};

export default function TermsPage() {
  const termsContent = fs.readFileSync(
    path.join(process.cwd(), 'public', 'terms-of-service.html'),
    'utf-8'
  );

  return (
    <div className="wrap legal-page">
      <article
        className="legal-paper"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: termsContent }}
      />
    </div>
  );
}
