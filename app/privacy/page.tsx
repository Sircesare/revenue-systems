import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | JobflowsOS",
  description: "JobflowsOS Privacy Policy covering data collection, SMS communications, and consumer rights.",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-black text-white">
      <header className="border-b border-white/10">
        <div className="max-w-3xl mx-auto px-6 py-5 flex items-center justify-between">
          <a href="/" className="font-display font-medium text-[20px] text-white tracking-tight hover:opacity-80 transition">
            JobflowsOS
          </a>
          <nav className="flex items-center gap-6">
            <a href="/" className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--text-3)] hover:text-white transition">Home</a>
            <a href="tel:+16265900148" className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--blue-soft)] hover:text-white transition">(626) 590-0148</a>
          </nav>
        </div>
      </header>
      <div className="max-w-3xl mx-auto px-6 py-16 lg:py-24">
        <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--text-4)] mb-3">
          Effective Date: May 22, 2026
        </div>
        <h1 className="font-display font-medium text-[36px] lg:text-[48px] tracking-tight mb-8">
          Privacy Policy
        </h1>

        <p className="font-body text-[16px] text-[var(--text-3)] leading-relaxed mb-8">
          EquityBridge Holdings LLC, doing business as JobflowsOS (&quot;JobflowsOS,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), respects your privacy. This Privacy Policy explains how we collect, use, and protect personal information through our website (jobflowsos.com) and our SMS messaging services.
        </p>

        <Section title="1. Information We Collect">
          <p>When you interact with JobflowsOS through our website forms, chat widget, or SMS messaging, we may collect:</p>
          <ul className="list-disc pl-6 mt-3 space-y-1">
            <li><strong>Contact Information:</strong> Name, mobile phone number, email address.</li>
            <li><strong>Business Information:</strong> Company name, business type, service area.</li>
            <li><strong>Consent Records:</strong> Documentation of when and how you opted in to communications.</li>
            <li><strong>Message Interaction Data:</strong> Records of messages sent and received, including opt-out requests (STOP) and help inquiries (HELP).</li>
            <li><strong>Technical Data:</strong> IP address, browser type, and device information collected via standard web analytics.</li>
          </ul>
        </Section>

        <Section title="2. How We Use Your Information">
          <p>We use the information we collect strictly for the following purposes:</p>
          <ul className="list-disc pl-6 mt-3 space-y-1">
            <li>Responding to inquiries and service requests you submit.</li>
            <li>Delivering transactional SMS communications, including appointment confirmations, missed-call follow-ups, and service notifications.</li>
            <li>Managing your opt-in preferences and processing opt-out requests.</li>
            <li>Improving our website and service quality.</li>
            <li>Complying with legal obligations.</li>
          </ul>
        </Section>

        <Section title="3. SMS Communications">
          <p>By providing your mobile phone number through our website or chat widget, you consent to receive text messages from EquityBridge Holdings LLC for transactional and service-related purposes. Message frequency varies. Message and data rates may apply.</p>
          <p className="mt-3">You may opt out at any time by replying <strong>STOP</strong> to any message. For help, reply <strong>HELP</strong> or contact us at cesar@jobflowsos.com.</p>
        </Section>

        <Section title="4. Information Sharing">
          <p><strong>We do not sell, rent, share, or transfer your personal information &mdash; including mobile phone numbers, consent records, or message content &mdash; to third parties or affiliates for their marketing or promotional purposes.</strong></p>
          <p className="mt-3">We share information only with the following service providers, strictly to operate our services:</p>
          <ul className="list-disc pl-6 mt-3 space-y-1">
            <li><strong>Telecommunications carriers</strong> (Twilio, HighLevel/LeadConnector) to deliver SMS messages.</li>
            <li><strong>Customer relationship management platform</strong> (HighLevel) to store and process consent records.</li>
            <li><strong>Legal authorities</strong> when required by law, subpoena, or court order.</li>
          </ul>
        </Section>

        <Section title="5. Data Retention">
          <p>We retain your information for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements. Opt-out records are retained for a minimum of ten (10) years to comply with applicable state-level requirements.</p>
        </Section>

        <Section title="6. Data Security">
          <p>We implement reasonable technical and organizational safeguards to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.</p>
        </Section>

        <Section title="7. Children&apos;s Privacy">
          <p>Our services are not directed to individuals under 18. We do not knowingly collect personal information from anyone under 18. If we learn that we have collected such information, we will delete it promptly.</p>
        </Section>

        <Section title="8. California Privacy Rights">
          <p>California residents have rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information we collect, the right to request deletion, and the right to opt out of any sale of personal information. We do not sell personal information. To exercise these rights, contact us at cesar@jobflowsos.com.</p>
        </Section>

        <Section title="9. Changes to This Policy">
          <p>We may update this Privacy Policy from time to time. We will post any changes on this page with an updated effective date. Material changes will be communicated to active users via email or SMS where appropriate.</p>
        </Section>

        <Section title="10. Contact Us">
          <p>For questions about this Privacy Policy or to exercise your privacy rights, contact:</p>
          <div className="mt-3 font-mono text-[13px]">
            <div>EquityBridge Holdings LLC</div>
            <div>9229 Key West St</div>
            <div>Temple City, CA 91780</div>
            <div className="mt-2">Email: cesar@jobflowsos.com</div>
            <div>Phone: (626) 590-0148</div>
          </div>
        </Section>

        <div className="mt-16 pt-8 border-t border-white/10 flex gap-6">
          <a href="/" className="font-mono text-[12px] uppercase tracking-[0.22em] text-[var(--blue-soft)] hover:text-white transition">&larr; Back to JobflowsOS</a>
          <a href="/terms" className="font-mono text-[12px] uppercase tracking-[0.22em] text-[var(--blue-soft)] hover:text-white transition">Terms of Service</a>
        </div>
      </div>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="font-display font-medium text-[22px] lg:text-[26px] tracking-tight text-white mb-3">{title}</h2>
      <div className="font-body text-[15px] lg:text-[16px] text-[var(--text-3)] leading-relaxed">{children}</div>
    </section>
  );
}