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
    <section className="min-h-screen bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="privacy-content">
          <div suppressHydrationWarning dangerouslySetInnerHTML={{ __html: privacyContent }} />
        </div>
      </div>
    </section>
  );
}
