import LegalLayout, { LegalSection } from '@/components/LegalLayout'

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms of Service"
      subtitle="Effective January 1, 2025 | Last Updated March 1, 2026"
    >
      <LegalSection title="1. Acceptance of Terms">
        <p>
          By accessing or using 121212.events (the &ldquo;Platform&rdquo;), operated by MCM
          Enterprises, a DBA of SlateRiver LLC, a New Mexico limited liability company,
          you agree to be bound by these Terms of Service (&ldquo;Terms&rdquo;). If you do not
          agree with any part of these Terms, you must not use the Platform.
        </p>
        <p>
          These Terms constitute a legally binding agreement between you and SlateRiver LLC
          governing your use of the Platform. Your continued use of the Platform following
          any changes to these Terms constitutes acceptance of those changes. We encourage
          you to review these Terms periodically.
        </p>
      </LegalSection>

      <LegalSection title="2. Use of Platform">
        <p>
          The Platform is provided for informational purposes to help users discover
          curated Black cultural events across the United States. You may browse events,
          filter by city and category, and access external links to ticket providers and
          event organizers.
        </p>
        <p>
          You agree to use the Platform only for lawful purposes and in accordance with
          these Terms. You agree not to use the Platform in any way that could damage,
          disable, overburden, or impair the Platform, or interfere with any other
          party&apos;s use of the Platform. You may not attempt to gain unauthorized access
          to any portion of the Platform or any systems or networks connected to the
          Platform.
        </p>
        <p>
          We reserve the right to modify, suspend, or discontinue the Platform (or any
          part thereof) at any time without notice or liability to you.
        </p>
      </LegalSection>

      <LegalSection title="3. Event Submissions">
        <p>
          Event organizers and community members may submit events for listing on the
          Platform through our submission form. By submitting an event, you represent and
          warrant that: (a) the event information is accurate and complete; (b) you have
          the authority to submit the event on behalf of the organizing entity; (c) the
          event does not violate any applicable laws or regulations; and (d) the event is
          appropriate for the 121212 community.
        </p>
        <p>
          All submissions are subject to editorial review. We reserve the sole right to
          accept, reject, modify, or remove any submitted event at our discretion without
          notice or explanation. Submission of an event does not guarantee listing on the
          Platform. We do not charge fees for event submissions or listings.
        </p>
        <p>
          By submitting event information, you grant SlateRiver LLC a non-exclusive,
          royalty-free, worldwide license to display, reproduce, and distribute the
          submitted information on the Platform and across the 121212 ecosystem for the
          purpose of promoting the event.
        </p>
      </LegalSection>

      <LegalSection title="4. No Warranty">
        <p>
          The Platform and all information, content, and materials available through it are
          provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without
          any warranties of any kind, either express or implied. SlateRiver LLC makes no
          representations or warranties regarding the accuracy, completeness, reliability,
          or timeliness of any event information displayed on the Platform.
        </p>
        <p>
          Event details including dates, times, venues, prices, and availability are
          provided by event organizers and third parties. We do not independently verify
          all event information and cannot guarantee that listed events will take place as
          described. You are encouraged to verify event details directly with the organizer
          before attending.
        </p>
      </LegalSection>

      <LegalSection title="5. Third-Party Links">
        <p>
          The Platform contains links to third-party websites, including event organizer
          sites, ticketing platforms, and venue pages. These links are provided for your
          convenience and do not signify our endorsement of the linked website or its
          contents. We have no control over the content, privacy practices, or availability
          of third-party websites.
        </p>
        <p>
          Your interactions with third-party websites, including ticket purchases, RSVPs,
          and any transactions, are solely between you and the third party. SlateRiver LLC
          is not responsible for any loss or damage arising from your use of or reliance on
          any third-party website or service accessed through the Platform.
        </p>
      </LegalSection>

      <LegalSection title="6. Intellectual Property">
        <p>
          The Platform, including its design, layout, graphics, logos, icons, text, and
          software, is the property of MCM Enterprises (a DBA of SlateRiver LLC) and is
          protected by United States and international copyright, trademark, and other
          intellectual property laws. The &ldquo;121212&rdquo; name, logo, and associated
          branding are trademarks of SlateRiver LLC.
        </p>
        <p>
          Event organizers retain ownership of their event details, descriptions, and
          associated media. By listing an event on the Platform, organizers grant us a
          license to display their event information as described in Section 3.
        </p>
        <p>
          You may not reproduce, distribute, modify, create derivative works of, publicly
          display, publicly perform, republish, download, store, or transmit any material
          from the Platform without our prior written consent, except for your personal,
          non-commercial use.
        </p>
      </LegalSection>

      <LegalSection title="7. Limitation of Liability">
        <p>
          To the fullest extent permitted by applicable law, SlateRiver LLC, MCM
          Enterprises, and their officers, directors, employees, agents, and affiliates
          shall not be liable for any indirect, incidental, special, consequential, or
          punitive damages, including but not limited to loss of profits, data, use, or
          goodwill, arising out of or in connection with your use of or inability to use
          the Platform.
        </p>
        <p>
          In no event shall our total liability to you for all claims arising from or
          related to the Platform exceed one hundred dollars ($100.00). This limitation
          applies regardless of the legal theory on which the claim is based, including
          negligence, breach of contract, or any other theory.
        </p>
        <p>
          We are not liable for any harm, injury, loss, or damage that may occur at any
          event listed on the Platform. Attendance at any event is at your own risk.
        </p>
      </LegalSection>

      <LegalSection title="8. Changes to Terms">
        <p>
          We reserve the right to update or modify these Terms at any time at our sole
          discretion. When we make changes, we will update the &ldquo;Last Updated&rdquo;
          date at the top of this page. Your continued use of the Platform after any such
          changes constitutes your acceptance of the revised Terms.
        </p>
        <p>
          We may, but are not obligated to, notify users of significant changes through
          the Platform or via email. It is your responsibility to review these Terms
          periodically for changes.
        </p>
      </LegalSection>

      <LegalSection title="9. Contact">
        <p>
          If you have any questions about these Terms of Service, please contact us at:
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
