import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | JobflowsOS",
  description: "JobflowsOS Terms of Service covering website use, SMS messaging program, and user obligations.",
};

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-3xl mx-auto px-6 py-16 lg:py-24">
        <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--text-4)] mb-3">
          Effective Date: May 22, 2026
        </div>
        <h1 className="font-display font-medium text-[36px] lg:text-[48px] tracking-tight mb-8">
          Terms of Service
        </h1>

        <p className="font-body text-[16px] text-[var(--text-3)] leading-relaxed mb-8">
          These Terms of Service (&quot;Terms&quot;) govern your use of the jobflowsos.com website and any services provided by EquityBridge Holdings LLC, doing business as JobflowsOS (&quot;JobflowsOS,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By accessing our website, submitting a contact form, or opting in to our SMS messaging program, you agree to these Terms.
        </p>

        <Section title="1. Services">
          <p>JobflowsOS provides missed-call automation, SMS messaging, and customer relationship management tools for service-based businesses, primarily in the HVAC, plumbing, and home services industries.</p>
        </Section>

        <Section title="2. SMS Messaging Program">
          <p className="font-semibold text-white">Opt-In:</p>
          <p>By providing your mobile phone number through our website forms or chat widget and submitting it, you expressly authorize EquityBridge Holdings LLC to send you text messages, including messages sent using automated technology, for informational and transactional purposes. Consent is not a condition of purchasing any products or services.</p>

          <p className="font-semibold text-white mt-5">Message Frequency:</p>
          <p>Message frequency varies based on your activity and the nature of your inquiry. You may receive messages such as missed-call follow-ups, appointment confirmations, reminders, and service notifications.</p>

          <p className="font-semibold text-white mt-5">Message and Data Rates:</p>
          <p>Message and data rates may apply. You are responsible for any charges from your mobile carrier for sending or receiving messages.</p>

          <p className="font-semibold text-white mt-5">Opt-Out:</p>
          <p>You may opt out of receiving SMS messages at any time by replying <strong>STOP</strong> to any message you receive from us. After replying STOP, you will receive a final confirmation message and no further messages thereafter, unless you opt back in.</p>

          <p className="font-semibold text-white mt-5">Help:</p>
          <p>For help or more information about our SMS program, reply <strong>HELP</strong> to any message or contact us at cesar@jobflowsos.com or (626) 590-0148.</p>

          <p className="font-semibold text-white mt-5">Supported Carriers:</p>
          <p>Supported carriers include AT&amp;T, Verizon Wireless, T-Mobile, Sprint, Boost, U.S. Cellular, MetroPCS, and others. Carriers are not liable for delayed or undelivered messages.</p>
        </Section>

        <Section title="3. Privacy">
          <p>Your use of the website and our SMS program is also governed by our{" "}<a href="/privacy" className="text-[var(--blue-soft)] underline hover:text-white transition">Privacy Policy</a>, which is incorporated into these Terms by reference.</p>
        </Section>

        <Section title="4. User Obligations">
          <p>You agree that you will:</p>
          <ul className="list-disc pl-6 mt-3 space-y-1">
            <li>Provide accurate information when submitting forms or messages.</li>
            <li>Only submit phone numbers that belong to you or that you are authorized to provide.</li>
            <li>Not use our services for any unlawful, fraudulent, or abusive purpose.</li>
            <li>Not attempt to disrupt, reverse engineer, or interfere with our website or messaging systems.</li>
          </ul>
        </Section>

        <Section title="5. Intellectual Property">
          <p>All content on this website &mdash; including text, graphics, logos, and software &mdash; is the property of EquityBridge Holdings LLC or its licensors and is protected by U.S. and international copyright laws. You may not copy, reproduce, or redistribute any content without our prior written consent.</p>
        </Section>

        <Section title="6. Disclaimers">
          <p>Our services are provided &quot;as is&quot; and &quot;as available.&quot; We make no warranties, express or implied, regarding the accuracy, reliability, or availability of our website or messaging services. We do not guarantee delivery of any SMS message.</p>
        </Section>

        <Section title="7. Limitation of Liability">
          <p>To the maximum extent permitted by law, EquityBridge Holdings LLC, its officers, members, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of our website or services, including any failure or delay of message delivery.</p>
        </Section>

        <Section title="8. Governing Law">
          <p>These Terms are governed by the laws of the State of California, without regard to its conflict-of-law principles. Any dispute arising under these Terms shall be resolved in the state or federal courts located in Los Angeles County, California.</p>
        </Section>

        <Section title="9. Changes to These Terms">
          <p>We may update these Terms from time to time. Updates will be posted on this page with a new effective date. Continued use of our website or messaging services after changes are posted constitutes your acceptance of the revised Terms.</p>
        </Section>

        <Section title="10. Contact">
          <p>For questions about these Terms, contact:</p>
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
          <a href="/privacy" className="font-mono text-[12px] uppercase tracking-[0.22em] text-[var(--blue-soft)] hover:text-white transition">Privacy Policy</a>
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