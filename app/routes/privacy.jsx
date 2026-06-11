import SiteLayout from "../components/SiteLayout";

const UPDATED = "June 11, 2026";

export const meta = () => [
  { title: "Privacy Policy — Rubel Accordion" },
  { name: "description", content: "How Rubel Accordion collects, uses and protects data." },
];

export default function Privacy() {
  return (
    <SiteLayout>
      <section className="page-hero">
        <div className="site-wrap">
          <h1>Privacy Policy</h1>
          <p>Last updated: {UPDATED}</p>
        </div>
      </section>

      <article className="prose">
        <p>
          This Privacy Policy explains how Rubel Accordion (&ldquo;we&rdquo;,
          &ldquo;us&rdquo;, the &ldquo;App&rdquo;) collects, uses and protects
          information when you install and use the App on your Shopify store.
        </p>

        <div className="note">
          This document is a template provided for development. Have it reviewed
          by qualified legal counsel and tailor it to your business before
          publishing or submitting your app for review.
        </div>

        <h2>1. Information we collect</h2>
        <p>When you install the App, we may collect:</p>
        <ul>
          <li>
            <strong>Store information</strong> — your <code>myshopify.com</code>{" "}
            domain, store name, plan, owner contact email and locale, as
            provided by Shopify during installation.
          </li>
          <li>
            <strong>Configuration data</strong> — the accordion content, titles,
            ordering and styling settings you create within the App.
          </li>
          <li>
            <strong>Authentication data</strong> — the OAuth access token issued
            by Shopify, used to make authorized API requests on your behalf.
          </li>
        </ul>
        <p>
          We do <strong>not</strong> collect or store your customers&rsquo;
          personal data, payment details or order contents.
        </p>

        <h2>2. How we use information</h2>
        <ul>
          <li>To provide, operate and maintain the App&rsquo;s features.</li>
          <li>To render your accordions on your storefront.</li>
          <li>To respond to support requests and communicate service updates.</li>
          <li>To detect, prevent and address technical issues and abuse.</li>
        </ul>

        <h2>3. Data sharing</h2>
        <p>
          We do not sell your data. We share information only with
          infrastructure providers that help us run the App (for example,
          hosting and database providers), and only as needed to deliver the
          service. These providers are bound by confidentiality obligations.
        </p>

        <h2>4. Data retention</h2>
        <p>
          We retain your configuration and store data for as long as the App is
          installed. When you uninstall the App, we receive an{" "}
          <code>app/uninstalled</code> webhook from Shopify and delete or
          anonymize the associated session and configuration data within 30
          days.
        </p>

        <h2>5. Shopify mandatory webhooks (GDPR)</h2>
        <p>
          We honor Shopify&rsquo;s mandatory compliance webhooks. Upon request
          relayed through these webhooks we will:
        </p>
        <ul>
          <li>
            <code>customers/data_request</code> — provide any stored data we
            hold relating to the requesting customer (typically none).
          </li>
          <li>
            <code>customers/redact</code> — delete customer-related data we hold
            (typically none).
          </li>
          <li>
            <code>shop/redact</code> — delete all data associated with your
            store, sent 48 hours after uninstall.
          </li>
        </ul>

        <h2>6. Data security</h2>
        <p>
          We use industry-standard measures including encrypted transport
          (HTTPS), access controls and encrypted credential storage. No method
          of transmission or storage is 100% secure, but we work to protect your
          data using commercially reasonable safeguards.
        </p>

        <h2>7. Your rights</h2>
        <p>
          Depending on your jurisdiction, you may have the right to access,
          correct, export or delete your data. To exercise these rights, contact
          us at the address below or uninstall the App.
        </p>

        <h2>8. Changes to this policy</h2>
        <p>
          We may update this policy from time to time. Material changes will be
          reflected by the &ldquo;Last updated&rdquo; date above.
        </p>

        <h2>9. Contact</h2>
        <p>
          Questions about this policy? Email{" "}
          <a href="mailto:support@rubel-accordion.app">
            support@rubel-accordion.app
          </a>
          .
        </p>
      </article>
    </SiteLayout>
  );
}
