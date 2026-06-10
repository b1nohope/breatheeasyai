import type { Metadata } from 'next';
import fs from 'fs';
import path from 'path';

export const metadata: Metadata = {
  title: 'Privacy Policy | BreatheEzAi',
  description: 'Privacy policy for TheBreatheEZ DBA BreatheEzAi',
};

export default function PrivacyPage() {
  const privacyContent = fs.readFileSync(
    path.join(process.cwd(), 'public', 'privacy-policy.html'),
    'utf-8'
  );

  return (
    <div className="wrap legal-page">
      <article
        className="legal-paper"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: privacyContent }}
      />
    </div>
  );
}
