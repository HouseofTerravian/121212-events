import LegalLayout, { LegalSection } from '@/components/LegalLayout'

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      subtitle="Effective January 1, 2025 | Last Updated March 1, 2026"
    >
      <LegalSection title="1. Information We Collect">
        <p>
          When you use 121212.events (the &ldquo;Platform&rdquo;), operated by MCM
          Enterprises, a DBA of SlateRiver LLC, we may collect certain information
          depending on how you interact with the Platform:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-cream">Browsing Data:</strong> When you visit the
            Platform, we may automatically collect technical information such as your IP
            address, browser type, operating system, referring URL, pages visited, and
            timestamps. This data helps us understand how the Platform is used and improve
            the experience.
          </li>
          <li>
            <strong className="text-cream">Submission Data:</strong> When you submit an
            event through our submission form, we collect the information you provide,
            including event details, organizer name, email address, and any optional
            information such as Instagram handles or additional notes.
          </li>
          <li>
            <strong className="text-cream">Newsletter Data:</strong> If you subscribe to
            our newsletter or mailing list, we collect your email address and any
            preferences you indicate.
          </li>
        </ul>
        <p>
          We do not collect financial information. All ticket purchases are processed
          through third-party platforms, and we do not have access to your payment details.
        </p>
      </LegalSection>

      <LegalSection title="2. How We Use Information">
        <p>
          We use the information we collect for the following purposes:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>To operate, maintain, and improve the Platform</li>
          <li>To review and publish submitted events</li>
          <li>To communicate with event submitters about the status of their submissions</li>
          <li>To send newsletters and updates to subscribers who have opted in</li>
          <li>To analyze usage patterns and optimize the user experience</li>
          <li>To detect, prevent, and address technical issues or abuse</li>
          <li>To comply with legal obligations</li>
        </ul>
        <p>
          We do not sell, rent, or trade your personal information to third parties for
          their marketing purposes. We do not use your information for targeted advertising.
        </p>
      </LegalSection>

      <LegalSection title="3. Data Retention">
        <p>
          We retain personal information only for as long as necessary to fulfill the
          purposes outlined in this Privacy Policy. Browsing data is retained in aggregate
          form for analytics purposes and is not linked to individual identities beyond
          what is necessary for security monitoring.
        </p>
        <p>
          Event submission data is retained for as long as the event is listed on the
          Platform, plus a reasonable period thereafter for record-keeping purposes.
          Newsletter subscriber data is retained until you unsubscribe. You may request
          deletion of your personal information at any time by contacting us at the email
          address provided below.
        </p>
      </LegalSection>

      <LegalSection title="4. Cookies">
        <p>
          The Platform may use cookies and similar tracking technologies to enhance your
          browsing experience. Cookies are small text files stored on your device that help
          us remember your preferences and understand how you use the Platform.
        </p>
        <p>
          We may use essential cookies necessary for the Platform to function, as well as
          analytics cookies to understand usage patterns. We do not use advertising or
          tracking cookies. You can control cookie preferences through your browser
          settings, though disabling cookies may affect certain features of the Platform.
        </p>
      </LegalSection>

      <LegalSection title="5. Third-Party Services">
        <p>
          The Platform may use third-party services for analytics, hosting, and email
          delivery. These services may have access to certain information collected through
          the Platform as necessary to perform their functions. We require that all
          third-party service providers maintain the confidentiality of the information and
          use it only for the purposes for which it was provided.
        </p>
        <p>
          When you click on links to external websites, including event organizer pages and
          ticketing platforms, you leave the Platform and are subject to the privacy
          policies of those third-party sites. We encourage you to review the privacy
          policies of any external website you visit.
        </p>
      </LegalSection>

      <LegalSection title="6. Your Rights">
        <p>
          Depending on your location, you may have certain rights regarding your personal
          information, including:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>The right to access the personal information we hold about you</li>
          <li>The right to request correction of inaccurate information</li>
          <li>The right to request deletion of your personal information</li>
          <li>The right to opt out of email communications at any time</li>
          <li>The right to request a copy of your data in a portable format</li>
        </ul>
        <p>
          To exercise any of these rights, please contact us at the email address below.
          We will respond to your request within 30 days. We may need to verify your
          identity before processing certain requests.
        </p>
      </LegalSection>

      <LegalSection title="7. Children&apos;s Privacy">
        <p>
          The Platform is not intended for children under the age of 13. We do not
          knowingly collect personal information from children under 13. If we become aware
          that we have inadvertently collected personal information from a child under 13,
          we will take steps to delete that information as promptly as possible.
        </p>
        <p>
          If you are a parent or guardian and believe that your child has provided us with
          personal information without your consent, please contact us immediately at the
          email address below.
        </p>
      </LegalSection>

      <LegalSection title="8. Changes to Policy">
        <p>
          We may update this Privacy Policy from time to time to reflect changes in our
          practices, technology, legal requirements, or other factors. When we make
          changes, we will update the &ldquo;Last Updated&rdquo; date at the top of this
          page.
        </p>
        <p>
          We encourage you to review this Privacy Policy periodically. Your continued use
          of the Platform after any changes to this Privacy Policy constitutes your
          acceptance of the updated policy.
        </p>
      </LegalSection>

      <LegalSection title="9. Contact">
        <p>
          If you have any questions about this Privacy Policy or our data practices, please
          contact us at:
        </p>
        <p>
          <strong className="text-cream">Email:</strong>{' '}
          <a
            href="mailto:privacy@121212.events"
            className="text-secondary hover:text-secondary-light transition-colors duration-300"
          >
            privacy@121212.events
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
