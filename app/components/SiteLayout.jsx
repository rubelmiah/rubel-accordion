/* eslint-disable react/prop-types */
import { Link } from "react-router";
import "../styles/site.css";

const YEAR = 2026;

function Logo() {
  return (
    <Link to="/" className="brand">
      <span className="mark" aria-hidden="true">
        ▾
      </span>
      <span>Rubel Accordion</span>
    </Link>
  );
}

/**
 * Shared chrome (header + footer) for every public marketing/legal/docs page.
 * Only public routes import this, so site.css never reaches the embedded admin.
 */
export default function SiteLayout({ children, activeCta = true }) {
  return (
    <div className="site-root">
      <header className="site-header">
        <div className="site-wrap bar">
          <Logo />
          <nav className="nav">
            <Link to="/#features">Features</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/docs">Docs</Link>
            <Link to="/support">Support</Link>
          </nav>
          <div className="header-cta">
            {activeCta && (
              <a className="btn btn-primary" href="/#get-started">
                Add to Shopify
              </a>
            )}
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className="site-footer">
        <div className="site-wrap">
          <div className="footer-grid">
            <div>
              <Logo />
              <p className="footer-about">
                Beautiful, no-code FAQ and product accordions for your Shopify
                store. Add collapsible sections in minutes — no theme editing
                required.
              </p>
            </div>
            <div className="footer-col">
              <h4>Product</h4>
              <Link to="/#features">Features</Link>
              <Link to="/pricing">Pricing</Link>
              <Link to="/docs">Documentation</Link>
              <Link to="/#get-started">Get started</Link>
            </div>
            <div className="footer-col">
              <h4>Support</h4>
              <Link to="/support">Help center</Link>
              <Link to="/docs">Setup guide</Link>
              <a href="mailto:support@rubel-accordion.app">Email support</a>
            </div>
            <div className="footer-col">
              <h4>Legal</h4>
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Service</Link>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© {YEAR} Rubel Accordion. All rights reserved.</span>
            <span>Built for Shopify merchants.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
