import { redirect, Form, useLoaderData } from "react-router";
import { login } from "../../shopify.server";
import SiteLayout from "../../components/SiteLayout";
import Accordion from "../../components/Accordion";

export const loader = async ({ request }) => {
  const url = new URL(request.url);

  // Coming from the Shopify install flow → hand off to the embedded app.
  if (url.searchParams.get("shop")) {
    throw redirect(`/app?${url.searchParams.toString()}`);
  }

  return { showForm: Boolean(login) };
};

export const meta = () => [
  { title: "Rubel Accordion — FAQ & Product Accordions for Shopify" },
  {
    name: "description",
    content:
      "Add beautiful, customizable FAQ and product-information accordions to your Shopify store. No code, fully responsive, theme-native styling.",
  },
];

const DEMO_ITEMS = [
  {
    title: "Description",
    content:
      "Hand-shaped poplar core with a sintered base for fast, durable rides. Built to keep your product page tidy and scannable.",
  },
  {
    title: "Shipping & delivery",
    content:
      "Free 2–5 day shipping on orders over $50. Tracked worldwide. Show exactly the info shoppers ask for, right where they need it.",
  },
  {
    title: "Returns & warranty",
    content:
      "30-day no-questions returns and a 2-year warranty. Reduce support tickets by answering the common questions up front.",
  },
  {
    title: "Size guide",
    content:
      "Measure from heel to toe and match to our chart. Embed rich content — images, links and lists — inside any accordion panel.",
  },
];

const FEATURES = [
  {
    icon: "🎛️",
    title: "No-code theme block",
    body: "Add accordions to any page from the theme editor. Drag, drop, done — no Liquid or CSS knowledge needed.",
  },
  {
    icon: "🎨",
    title: "Matches your theme",
    body: "Colors, fonts, borders and spacing inherit from your store or override per block to match your brand exactly.",
  },
  {
    icon: "📦",
    title: "Product info tabs",
    body: "Turn long descriptions, shipping, returns and size guides into clean collapsible sections on product pages.",
  },
  {
    icon: "❓",
    title: "FAQ sections anywhere",
    body: "Build searchable FAQ blocks for product, collection, home or any page to cut repetitive support questions.",
  },
  {
    icon: "📱",
    title: "Fast & responsive",
    body: "Lightweight, accessible markup that loads instantly and works on every device and screen reader.",
  },
  {
    icon: "🔍",
    title: "SEO friendly",
    body: "Optional FAQ schema markup helps your questions show up as rich results in Google search.",
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

const FAQ_ITEMS = [
  {
    title: "Do I need to edit code to use Rubel Accordion?",
    content:
      "No. Rubel Accordion installs as a theme app block. You add and configure accordions entirely from the Shopify theme editor — no Liquid, HTML or CSS required.",
  },
  {
    title: "Will it slow down my store?",
    content:
      "No. The storefront block ships minimal, accessible HTML and CSS with no heavy dependencies, so it has a negligible impact on page speed.",
  },
  {
    title: "Does it work with my theme?",
    content:
      "Yes. Rubel Accordion supports any Online Store 2.0 theme and inherits your theme's typography and colors by default, with per-block overrides available.",
  },
  {
    title: "Can I use it for product tabs and FAQs?",
    content:
      "Both. Use it to collapse product descriptions, shipping, returns and size guides on product pages, or to build standalone FAQ sections on any page.",
  },
  {
    title: "Is there a free plan?",
    content:
      "Yes. The Free plan includes one accordion block with unlimited items. Upgrade any time for unlimited blocks, custom styling and SEO schema.",
  },
];

export default function Landing() {
  const { showForm } = useLoaderData();

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="hero">
        <div className="site-wrap hero-grid">
          <div>
            <span className="eyebrow">⚡ Built for Shopify</span>
            <h1>Beautiful FAQ &amp; product accordions for your store</h1>
            <p className="lede">
              Add collapsible, theme-native accordion sections to any page in
              minutes. Cut support questions, tidy up long product pages and
              boost conversions — no code required.
            </p>

            <div id="get-started">
              {showForm ? (
                <Form className="shop-form" method="post" action="/auth/login">
                  <div className="field">
                    <label htmlFor="shop">Your Shopify store</label>
                    <input
                      id="shop"
                      type="text"
                      name="shop"
                      placeholder="my-store.myshopify.com"
                    />
                  </div>
                  <button className="btn btn-primary btn-lg" type="submit">
                    Install free
                  </button>
                </Form>
              ) : (
                <div className="hero-actions">
                  <a className="btn btn-primary btn-lg" href="/pricing">
                    Get started
                  </a>
                  <a className="btn btn-ghost btn-lg" href="/docs">
                    View docs
                  </a>
                </div>
              )}
            </div>

            <div className="trust-row">
              <span className="pill">
                <span className="check">✓</span> Free plan available
              </span>
              <span className="pill">
                <span className="check">✓</span> No code
              </span>
              <span className="pill">
                <span className="check">✓</span> 14-day Pro trial
              </span>
            </div>
          </div>

          {/* Live preview */}
          <div className="preview-card">
            <div className="browser">
              <span className="dot" />
              <span className="dot" />
              <span className="dot" />
            </div>
            <div className="body">
              <div className="product-title">Alpine Snowboard</div>
              <div className="product-price">$329.00</div>
              <Accordion items={DEMO_ITEMS} defaultOpen={0} />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section" id="features">
        <div className="site-wrap">
          <div className="section-head">
            <span className="eyebrow">Features</span>
            <h2>Everything you need to organize your content</h2>
            <p>
              From product tabs to full FAQ pages, Rubel Accordion gives you
              flexible, on-brand collapsible sections without touching code.
            </p>
          </div>
          <div className="features">
            {FEATURES.map((f) => (
              <div className="feature" key={f.title}>
                <div className="ico" aria-hidden="true">
                  {f.icon}
                </div>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section alt">
        <div className="site-wrap">
          <div className="section-head">
            <span className="eyebrow">How it works</span>
            <h2>Live in three simple steps</h2>
          </div>
          <div className="steps">
            <div className="step">
              <div className="num">1</div>
              <h3>Install the app</h3>
              <p>
                Add Rubel Accordion from the Shopify App Store. It enables the
                theme app block automatically — no setup scripts.
              </p>
            </div>
            <div className="step">
              <div className="num">2</div>
              <h3>Add a block</h3>
              <p>
                Open the theme editor, pick a page and drop in an Accordion
                block exactly where you want it.
              </p>
            </div>
            <div className="step">
              <div className="num">3</div>
              <h3>Add your content</h3>
              <p>
                Type your titles and content, tweak the styling to match your
                brand and hit save. That&apos;s it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo split */}
      <section className="section">
        <div className="site-wrap split">
          <div className="copy">
            <h2>Try it — click to expand</h2>
            <p>
              This is the exact accordion your shoppers will see. Smooth
              animations, keyboard accessible, and styled to feel native to your
              theme.
            </p>
            <ul className="checklist">
              <li>
                <span className="check">✓</span> Single or multi-open behaviour
              </li>
              <li>
                <span className="check">✓</span> Rich content: text, links,
                images and lists
              </li>
              <li>
                <span className="check">✓</span> Fully accessible (ARIA +
                keyboard)
              </li>
            </ul>
          </div>
          <Accordion items={FAQ_ITEMS} single defaultOpen={0} />
        </div>
      </section>

      {/* Pricing preview */}
      <section className="section alt" id="pricing">
        <div className="site-wrap">
          <div className="section-head">
            <span className="eyebrow">Pricing</span>
            <h2>Simple, fair pricing</h2>
            <p>Start free. Upgrade when you need more. Cancel anytime.</p>
          </div>
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
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="site-wrap" style={{ maxWidth: 760 }}>
          <div className="section-head">
            <span className="eyebrow">FAQ</span>
            <h2>Frequently asked questions</h2>
          </div>
          <Accordion items={FAQ_ITEMS} defaultOpen={null} />
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="site-wrap">
          <div className="cta-band">
            <h2>Ready to tidy up your store?</h2>
            <p>
              Install Rubel Accordion free and add your first accordion in under
              five minutes.
            </p>
            <a className="btn btn-primary btn-lg" href="/#get-started">
              Add to Shopify — it&apos;s free
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
