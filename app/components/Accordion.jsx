/* eslint-disable react/prop-types */
import { useState } from "react";

/**
 * Interactive accordion used in the marketing site (hero demo, FAQ, docs).
 * Mirrors the behaviour of the storefront app block: one item open by default,
 * single-open mode optional.
 *
 * @param {{ items: {title: string, content: React.ReactNode}[],
 *           single?: boolean, defaultOpen?: number }} props
 */
export default function Accordion({ items, single = false, defaultOpen = 0 }) {
  const [open, setOpen] = useState(() =>
    defaultOpen === null ? [] : [defaultOpen],
  );

  const toggle = (i) => {
    setOpen((prev) => {
      const isOpen = prev.includes(i);
      if (single) return isOpen ? [] : [i];
      return isOpen ? prev.filter((x) => x !== i) : [...prev, i];
    });
  };

  return (
    <div className="acc">
      {items.map((item, i) => {
        const isOpen = open.includes(i);
        const panelId = `acc-panel-${i}`;
        const btnId = `acc-trigger-${i}`;
        return (
          <div key={i} className={`acc-item${isOpen ? " open" : ""}`}>
            <button
              id={btnId}
              type="button"
              className="acc-trigger"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggle(i)}
            >
              <span>{item.title}</span>
              <span className="acc-icon" aria-hidden="true">
                +
              </span>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              className="acc-panel"
            >
              <div className="acc-panel-inner">
                <div>{item.content}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
