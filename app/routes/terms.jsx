import SiteLayout from "../components/SiteLayout";

const UPDATED = "June 11, 2026";

export const meta = () => [
  { title: "Terms of Service — Rubel Accordion" },
  { name: "description", content: "The terms governing your use of Rubel Accordion." },
];

export default function Terms() {
  return (
    <SiteLayout>
      <section className="page-hero">
        <div className="site-wrap">
          <h1>Terms of Service</h1>
          <p>Last updated: {UPDATED}</p>
        </div>
      </section>

      <article className="prose">
        <p>
          These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and
          use of the Rubel Accordion application (the &ldquo;App&rdquo;). By
          installing or using the App, you agree to these Terms.
        </p>

        <div className="note">
          This document is a template provided for development. Have it reviewed
          by qualified legal counsel before publishing.
        </div>

        <h2>1. The service</h2>
        <p>
          Rubel Accordion provides tools to add collapsible accordion and FAQ
          sections to your Shopify storefront. We may add, change or remove
          features at any time to improve the service.
        </p>

        <h2>2. Eligibility &amp; accounts</h2>
        <p>
          You must have an active Shopify store and the authority to install
          apps on it. You are responsible for maintaining the security of your
          Shopify account and for all activity that occurs through the App on
          your store.
        </p>

        <h2>3. Acceptable use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Use the App for any unlawful or infringing purpose.</li>
          <li>
            Attempt to reverse engineer, disrupt or gain unauthorized access to
            the App or its infrastructure.
          </li>
          <li>Resell or sublicense the App without written permission.</li>
          <li>Publish content through the App that is illegal or harmful.</li>
        </ul>

        <h2>4. Fees &amp; billing</h2>
        <p>
          Paid plans are billed through Shopify&rsquo;s Billing API according to
          the pricing shown on our{" "}
          <a href="/pricing">pricing page</a>. Charges appear on your Shopify
          invoice. Paid plans renew automatically until cancelled. You may
          cancel at any time by uninstalling the App or downgrading your plan;
          fees already billed for the current period are non-refundable except
          where required by law.
        </p>

        <h2>5. Intellectual property</h2>
        <p>
          The App, including its code, design and trademarks, remains our
          property. You retain ownership of the content you create with the App.
          You grant us a limited license to store and process that content
          solely to provide the service.
        </p>

        <h2>6. Third-party services</h2>
        <p>
          The App operates within the Shopify platform and depends on
          Shopify&rsquo;s APIs and services. Your use of Shopify is governed by
          Shopify&rsquo;s own terms. We are not responsible for changes to or
          outages of third-party platforms.
        </p>

        <h2>7. Disclaimer of warranties</h2>
        <p>
          The App is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;
          without warranties of any kind, whether express or implied, including
          fitness for a particular purpose and non-infringement. We do not
          warrant that the App will be uninterrupted or error-free.
        </p>

        <h2>8. Limitation of liability</h2>
        <p>
          To the maximum extent permitted by law, we will not be liable for any
          indirect, incidental, special or consequential damages, or for any
          loss of profits, revenue or data, arising from your use of the App.
          Our total liability for any claim will not exceed the amount you paid
          us for the App in the 12 months preceding the claim.
        </p>

        <h2>9. Termination</h2>
        <p>
          You may stop using the App at any time by uninstalling it. We may
          suspend or terminate access if you breach these Terms. Upon
          termination, the rights granted to you under these Terms will end.
        </p>

        <h2>10. Changes to these Terms</h2>
        <p>
          We may update these Terms from time to time. Continued use of the App
          after changes take effect constitutes acceptance of the revised Terms.
        </p>

        <h2>11. Contact</h2>
        <p>
          Questions about these Terms? Email{" "}
          <a href="mailto:support@rubel-accordion.app">
            support@rubel-accordion.app
          </a>
          .
        </p>
      </article>
    </SiteLayout>
  );
}
