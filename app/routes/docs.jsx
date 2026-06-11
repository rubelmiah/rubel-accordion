import SiteLayout from "../components/SiteLayout";

export const meta = () => [
  { title: "Documentation — Rubel Accordion" },
  {
    name: "description",
    content:
      "Setup guide and documentation for Rubel Accordion: install, add a block, configure and style your accordions.",
  },
];

const SECTIONS = [
  { id: "getting-started", label: "Getting started" },
  { id: "install", label: "Installation" },
  { id: "add-block", label: "Add an accordion" },
  { id: "configure", label: "Configure items" },
  { id: "styling", label: "Styling" },
  { id: "faq-schema", label: "FAQ & SEO" },
  { id: "troubleshooting", label: "Troubleshooting" },
];

export default function Docs() {
  return (
    <SiteLayout>
      <section className="page-hero">
        <div className="site-wrap">
          <h1>Documentation</h1>
          <p>Everything you need to set up and customize your accordions.</p>
        </div>
      </section>

      <div className="docs-layout">
        <aside className="docs-nav">
          <h4>On this page</h4>
          {SECTIONS.map((s) => (
            <a key={s.id} href={`#${s.id}`}>
              {s.label}
            </a>
          ))}
        </aside>

        <div className="docs-content">
          <h2 id="getting-started">Getting started</h2>
          <p>
            Rubel Accordion adds collapsible accordion and FAQ sections to your
            Shopify storefront through a theme app block — no code required. This
            guide walks you through installing the app and creating your first
            accordion in a few minutes.
          </p>
          <p>
            <strong>Requirements:</strong> an Online Store 2.0 theme (Dawn and
            most modern themes qualify) and permission to install apps on your
            store.
          </p>

          <h2 id="install">Installation</h2>
          <ol>
            <li>Install Rubel Accordion from the Shopify App Store.</li>
            <li>
              When prompted, approve the requested permissions to complete the
              OAuth installation.
            </li>
            <li>
              The theme app extension is enabled automatically. You&rsquo;re
              ready to add a block.
            </li>
          </ol>
          <div className="note">
            Tip: you can confirm the embed is active under{" "}
            <strong>Online Store → Themes → Customize → App embeds</strong>.
          </div>

          <h2 id="add-block">Add an accordion to a page</h2>
          <ol>
            <li>
              In your Shopify admin, go to{" "}
              <strong>Online Store → Themes → Customize</strong>.
            </li>
            <li>Navigate to the page where you want the accordion.</li>
            <li>
              Select a section and click <strong>Add block</strong>, then choose{" "}
              <strong>Accordion</strong> (under Apps).
            </li>
            <li>Drag the block to position it exactly where you want it.</li>
            <li>
              Click <strong>Save</strong>.
            </li>
          </ol>

          <h2 id="configure">Configure items</h2>
          <p>
            Each accordion is made of items, where each item has a{" "}
            <strong>title</strong> (the clickable header) and{" "}
            <strong>content</strong> (the collapsible body). In the block
            settings you can:
          </p>
          <ul>
            <li>Add, remove and reorder items.</li>
            <li>Use rich content — text, links, lists and images.</li>
            <li>
              Choose <code>single</code> mode (only one item open at a time) or
              allow multiple items open.
            </li>
            <li>Set which item, if any, is open by default.</li>
          </ul>

          <h2 id="styling">Styling</h2>
          <p>
            By default the accordion inherits your theme&rsquo;s fonts and
            colors. Override any of the following in the block settings:
          </p>
          <ul>
            <li>Header and content text color</li>
            <li>Border color, width and corner radius</li>
            <li>Background and hover colors</li>
            <li>Icon style (plus/minus, chevron) and animation speed</li>
          </ul>
          <p>On the Pro plan you can also inject custom CSS, for example:</p>
          <pre>
            <code>{`.rubel-accordion__item {
  border-radius: 16px;
}
.rubel-accordion__title {
  font-weight: 700;
  letter-spacing: 0.01em;
}`}</code>
          </pre>

          <h2 id="faq-schema">FAQ &amp; SEO</h2>
          <p>
            When you mark an accordion as an <strong>FAQ</strong> (Growth plan
            and up), Rubel Accordion outputs{" "}
            <code>FAQPage</code> structured data so your questions are eligible
            for rich results in Google search. No extra configuration is needed —
            just toggle the FAQ option on the block.
          </p>

          <h2 id="troubleshooting">Troubleshooting</h2>
          <h3>The block doesn&rsquo;t appear in the editor</h3>
          <p>
            Confirm you&rsquo;re on an Online Store 2.0 theme and that the app
            embed is enabled. Vintage themes don&rsquo;t support app blocks.
          </p>
          <h3>Styling looks off</h3>
          <p>
            Some themes set aggressive global styles. Use the block&rsquo;s color
            and spacing overrides, or custom CSS on Pro, to fine-tune the
            appearance.
          </p>
          <h3>Still stuck?</h3>
          <p>
            Reach out from our <a href="/support">support page</a> with your
            store URL and we&rsquo;ll help you out.
          </p>
        </div>
      </div>
    </SiteLayout>
  );
}
