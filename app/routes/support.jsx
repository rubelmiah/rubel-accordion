import SiteLayout from "../components/SiteLayout";
import Accordion from "../components/Accordion";

export const meta = () => [
  { title: "Support — Rubel Accordion" },
  {
    name: "description",
    content:
      "Get help with Rubel Accordion. Contact support, browse docs and find answers to common questions.",
  },
];

const HELP_ITEMS = [
  {
    title: "The accordion block isn't showing in my theme editor",
    content:
      "Make sure you're on an Online Store 2.0 theme and that the app embed is enabled under Theme editor → App embeds. Then add the Accordion block to a section via 'Add block'.",
  },
  {
    title: "My styling doesn't match the rest of my page",
    content:
      "By default the block inherits your theme fonts and colors. Open the block settings to override colors, borders and spacing, or add custom CSS on the Pro plan.",
  },
  {
    title: "How do I change my plan?",
    content:
      "Open the app in your Shopify admin and go to the Plans page. Changes are billed through Shopify and take effect immediately.",
  },
  {
    title: "How do I remove the app?",
    content:
      "Uninstall it from Settings → Apps and sales channels in your Shopify admin. Your configuration and data are deleted within 30 days of uninstall.",
  },
];

export default function Support() {
  return (
    <SiteLayout>
      <section className="page-hero">
        <div className="site-wrap">
          <h1>Support</h1>
          <p>We&rsquo;re here to help you get the most out of Rubel Accordion.</p>
        </div>
      </section>

      <section className="section">
        <div className="site-wrap">
          <div className="support-grid">
            <div className="support-card">
              <div className="ico" aria-hidden="true">
                📧
              </div>
              <h3>Email support</h3>
              <p>
                Reach our team directly. We typically reply within one business
                day.
              </p>
              <a
                className="btn btn-primary"
                href="mailto:support@rubel-accordion.app"
              >
                support@rubel-accordion.app
              </a>
            </div>
            <div className="support-card">
              <div className="ico" aria-hidden="true">
                📚
              </div>
              <h3>Documentation</h3>
              <p>
                Step-by-step setup guides, configuration tips and troubleshooting.
              </p>
              <a className="btn btn-ghost" href="/docs">
                Read the docs
              </a>
            </div>
            <div className="support-card">
              <div className="ico" aria-hidden="true">
                💬
              </div>
              <h3>Live chat</h3>
              <p>
                Pro plan customers get live chat support directly inside the app
                dashboard.
              </p>
              <a className="btn btn-ghost" href="/pricing">
                See plans
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="site-wrap" style={{ maxWidth: 760 }}>
          <div className="section-head">
            <span className="eyebrow">Help center</span>
            <h2>Common questions</h2>
          </div>
          <Accordion items={HELP_ITEMS} defaultOpen={null} />
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="site-wrap">
          <div className="cta-band">
            <h2>Still need a hand?</h2>
            <p>
              Send us a message with your store URL and a description of the
              issue — we&rsquo;ll get you sorted.
            </p>
            <a
              className="btn btn-primary btn-lg"
              href="mailto:support@rubel-accordion.app"
            >
              Contact support
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
