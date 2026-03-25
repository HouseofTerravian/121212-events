import LegalLayout, { LegalSection } from '@/components/LegalLayout'

export default function DisclaimerPage() {
  return (
    <LegalLayout
      title="Disclaimer"
      subtitle="Effective January 1, 2025 | Last Updated March 1, 2026"
    >
      <LegalSection title="1. Event Information Accuracy">
        <p>
          121212.events (the &ldquo;Platform&rdquo;) aggregates and curates event
          information submitted by event organizers and community members. While we make
          reasonable efforts to verify the accuracy of listed event information, we cannot
          and do not guarantee that all details &mdash; including but not limited to event
          dates, times, locations, prices, performers, speakers, and availability &mdash;
          are accurate, complete, or current at the time of viewing.
        </p>
        <p>
          Event details are subject to change without notice by the event organizers. We
          strongly recommend that you verify all event information directly with the event
          organizer or venue before making travel arrangements, purchasing tickets, or
          otherwise relying on the information provided on the Platform.
        </p>
      </LegalSection>

      <LegalSection title="2. No Endorsement">
        <p>
          The listing of an event on the Platform does not constitute an endorsement,
          recommendation, or guarantee of quality by MCM Enterprises, SlateRiver LLC, or
          the 121212 ecosystem. We curate events based on cultural relevance and community
          interest, but we do not personally attend, inspect, or evaluate every event that
          appears on the Platform.
        </p>
        <p>
          The views, opinions, and content expressed by event organizers, performers,
          speakers, and attendees at listed events are their own and do not represent the
          views or opinions of SlateRiver LLC, MCM Enterprises, or the 121212 ecosystem.
          Inclusion on the Platform should not be interpreted as an alignment with or
          approval of any particular individual, organization, or message associated with a
          listed event.
        </p>
      </LegalSection>

      <LegalSection title="3. Ticket Purchases &amp; Third-Party Platforms">
        <p>
          The Platform does not sell tickets, process payments, or handle RSVPs directly.
          When you click on a ticket link or RSVP button on the Platform, you are
          redirected to a third-party website operated by the event organizer, a ticketing
          platform, or another external service provider.
        </p>
        <p>
          All ticket purchases, refunds, cancellations, and related disputes are governed
          by the terms and policies of the third-party platform or event organizer through
          which the transaction was made. SlateRiver LLC and MCM Enterprises bear no
          responsibility for any financial transactions, disputes, refund requests, or
          issues arising from your interactions with third-party ticketing services or event
          organizers.
        </p>
        <p>
          We encourage you to review the refund and cancellation policies of the relevant
          ticketing platform or organizer before completing any purchase.
        </p>
      </LegalSection>

      <LegalSection title="4. Safety &amp; Attendance">
        <p>
          Attendance at any event listed on the Platform is at your own risk. SlateRiver
          LLC and MCM Enterprises are not responsible for the safety, security, or
          conditions at any event venue. We do not organize, host, manage, or have control
          over any of the events listed on the Platform.
        </p>
        <p>
          You are solely responsible for your personal safety and well-being while
          attending any event. We recommend exercising standard safety precautions,
          including being aware of your surroundings, following venue rules and local laws,
          and making informed decisions about attendance based on your personal
          circumstances and comfort level.
        </p>
        <p>
          In the event of a health or safety emergency, contact local emergency services
          immediately.
        </p>
      </LegalSection>

      <LegalSection title="5. No Professional Advice">
        <p>
          The information provided on the Platform is for general informational purposes
          only and should not be construed as professional advice of any kind, including
          but not limited to legal, financial, medical, or safety advice. The Platform is
          an events directory, not a professional advisory service.
        </p>
        <p>
          If you require professional advice in connection with any event or decision
          related to your use of the Platform, you should consult a qualified professional
          in the relevant field.
        </p>
      </LegalSection>

      <LegalSection title="6. Limitation of Liability">
        <p>
          To the maximum extent permitted by applicable law, SlateRiver LLC, MCM
          Enterprises, and their respective officers, directors, employees, agents, and
          affiliates shall not be liable for any direct, indirect, incidental, special,
          consequential, or punitive damages arising out of or in connection with: (a) your
          use of or reliance on the Platform or any information provided on it; (b) your
          attendance at any event listed on the Platform; (c) any transaction with a
          third-party ticketing service or event organizer; or (d) any other matter related
          to the Platform.
        </p>
        <p>
          This limitation applies regardless of the legal theory on which the claim is
          based, whether in contract, tort, negligence, strict liability, or otherwise,
          even if we have been advised of the possibility of such damages.
        </p>
      </LegalSection>

      <LegalSection title="7. Contact">
        <p>
          If you have any questions or concerns about this Disclaimer, please contact us
          at:
        </p>
        <p>
          <strong className="text-cream">Email:</strong>{' '}
          <a
            href="mailto:legal@121212.events"
            className="text-secondary hover:text-secondary-light transition-colors duration-300"
          >
            legal@121212.events
          </a>
        </p>
        <p>
          <strong className="text-cream">Platform:</strong> 121212.events, operated by MCM
          Enterprises, a DBA of SlateRiver LLC, a New Mexico LLC.
        </p>
      </LegalSection>
    </LegalLayout>
  )
}
