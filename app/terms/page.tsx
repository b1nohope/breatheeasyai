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
    <section className="min-h-screen bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="terms-content">
          <div suppressHydrationWarning dangerouslySetInnerHTML={{ __html: termsContent }} />
        </div>
      </div>
    </section>
  );
}
