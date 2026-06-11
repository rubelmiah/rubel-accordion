import SiteLayout from "../components/SiteLayout";
import Accordion from "../components/Accordion";

export const meta = () => [
  { title: "Pricing — Rubel Accordion" },
  {
    name: "description",
    content:
      "Simple, transparent pricing for Rubel Accordion. Start free and upgrade as you grow.",
  },
];

const PLANS = [
  {
    name: "Free",
    price: "$0",
    cadence: "/mo",
    desc: "Everything you need to launch your first accordion.",
    features: [
      "1 accordion block",
      "Unlimited items per block",
      "Theme-native styling",
      "Mobile responsive",
      "Community support",
    ],
    cta: "Start free",
    featured: false,
  },
  {
    name: "Growth",
    price: "$7",
    cadence: "/mo",
    desc: "For growing stores that need accordions everywhere.",
    features: [
      "Unlimited accordion blocks",
      "Custom colors & fonts",
      "FAQ schema for SEO",
      "Open/close animations",
      "Priority email support",
    ],
    cta: "Start 14-day trial",
    featured: true,
  },
  {
    name: "Pro",
    price: "$19",
    cadence: "/mo",
    desc: "Advanced control for high-volume merchants.",
    features: [
      "Everything in Growth",
      "Per-page templates",
      "Icon & layout presets",
      "Custom CSS overrides",
      "Live chat support",
    ],
    cta: "Start 14-day trial",
    featured: false,
  },
];

const FAQ = [
  {
    title: "How does billing work?",
    content:
      "All paid plans are billed securely through Shopify and appear on your regular Shopify invoice. There's nothing extra to set up.",
  },
  {
    title: "Is there a free trial on paid plans?",
    content:
      "Yes. Growth and Pro include a 14-day free trial. You won't be charged until the trial ends, and you can cancel anytime.",
  },
  {
    title: "Can I change or cancel my plan?",
    content:
      "Absolutely. Upgrade, downgrade or cancel from inside the app at any time. Changes take effect immediately.",
  },
  {
    title: "Do you offer refunds?",
    content:
      "Fees already billed for the current period are non-refundable except where required by law, but you can cancel before your next billing date to avoid further charges.",
  },
];

export default function Pricing() {
  return (
    <SiteLayout>
      <section className="page-hero">
        <div className="site-wrap">
          <h1>Pricing that scales with you</h1>
          <p>Start free. Upgrade when you need more. Cancel anytime.</p>
        </div>
      </section>

      <section className="section">
        <div className="site-wrap">
          <div className="plans">
            {PLANS.map((p) => (
              <div
                className={`plan${p.featured ? " featured" : ""}`}
                key={p.name}
              >
                {p.featured && <span className="badge">Most popular</span>}
                <div className="plan-name">{p.name}</div>
                <div className="price">
                  {p.price}
                  <span>{p.cadence}</span>
                </div>
                <div className="plan-desc">{p.desc}</div>
                <ul>
                  {p.features.map((feat) => (
                    <li key={feat}>
                      <span className="check">✓</span> {feat}
                    </li>
                  ))}
                </ul>
                <a
                  className={`btn ${p.featured ? "btn-primary" : "btn-ghost"}`}
                  href="/#get-started"
                >
                  {p.cta}
                </a>
              </div>
            ))}
          </div>
          <p
            style={{
              textAlign: "center",
              color: "var(--c-ink-muted)",
              marginTop: 28,
              fontSize: 14,
            }}
          >
            All prices in USD, billed monthly through Shopify. Taxes may apply.
          </p>
        </div>
      </section>

      <section className="section alt">
        <div className="site-wrap" style={{ maxWidth: 760 }}>
          <div className="section-head">
            <span className="eyebrow">Billing FAQ</span>
            <h2>Questions about pricing</h2>
          </div>
          <Accordion items={FAQ} defaultOpen={null} />
        </div>
      </section>
    </SiteLayout>
  );
}
