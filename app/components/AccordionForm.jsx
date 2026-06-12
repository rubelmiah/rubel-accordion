/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useFetcher } from "react-router";
import { useAppBridge } from "@shopify/app-bridge-react";
import RichTextEditor from "./RichTextEditor";

const DISPLAY_ON_OPTIONS = ["Product", "Page", "Collections"];

const emptyItem = () => ({ heading: "", content: "" });

/**
 * Create/edit form for an accordion. `accordion` is null when creating.
 * On submit it posts { title, displayOn, items } as a JSON-encoded `items`
 * field to the route's own action, which persists and redirects to /app.
 */
export default function AccordionForm({ accordion, heading }) {
  const fetcher = useFetcher();
  const shopify = useAppBridge();

  const [title, setTitle] = useState(accordion?.title ?? "Accordion Title");
  const [displayOn, setDisplayOn] = useState(accordion?.displayOn ?? "Product");
  const [items, setItems] = useState(
    accordion?.items?.length ? accordion.items : [emptyItem()],
  );

  const isSaving =
    ["submitting", "loading"].includes(fetcher.state) &&
    fetcher.formMethod === "POST";

  useEffect(() => {
    if (fetcher.data?.errors) {
      shopify.toast.show("Please fix the errors before saving", {
        isError: true,
      });
    }
  }, [fetcher.data, shopify]);

  const updateItem = (index, key, value) => {
    setItems((prev) =>
      prev.map((item, i) => (i === index ? { ...item, [key]: value } : item)),
    );
  };

  const addItem = () => setItems((prev) => [...prev, emptyItem()]);
  const removeItem = (index) =>
    setItems((prev) => prev.filter((_, i) => i !== index));

  const save = () => {
    const cleaned = items.filter(
      (item) => item.heading.trim() || item.content.trim(),
    );
    fetcher.submit(
      { title, displayOn, items: JSON.stringify(cleaned) },
      { method: "POST" },
    );
  };

  const titleError = fetcher.data?.errors?.title;

  return (
    <s-page heading={heading}>
      <s-link slot="breadcrumb-actions" href="/app">
        All Accordion
      </s-link>
      <s-button
        slot="primary-action"
        variant="primary"
        onClick={save}
        {...(isSaving ? { loading: true } : {})}
      >
        Save
      </s-button>
      <s-button slot="secondary-actions" href="/app">
        Cancel
      </s-button>

      <s-section heading="Accordion settings">
        <s-stack direction="block" gap="base">
          <s-text-field
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onInput={(e) => setTitle(e.target.value)}
            {...(titleError ? { error: titleError } : {})}
          ></s-text-field>

          
        </s-stack>
      </s-section>

      <s-section heading="Accordion items">
        <s-stack direction="block" gap="large">
          {items.map((item, index) => (
            <s-box
              key={index}
              padding="base"
              borderWidth="base"
              borderRadius="base"
            >
              <s-stack direction="block" gap="base">
                <s-stack
                  direction="inline"
                  gap="base"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <s-text type="strong">Item {index + 1}</s-text>
                  <s-button
                    variant="tertiary"
                    tone="critical"
                    icon="delete"
                    accessibilityLabel={`Remove item ${index + 1}`}
                    onClick={() => removeItem(index)}
                  ></s-button>
                </s-stack>
                <s-text-field
                  label="Heading"
                  value={item.heading}
                  onChange={(e) => updateItem(index, "heading", e.target.value)}
                  onInput={(e) => updateItem(index, "heading", e.target.value)}
                ></s-text-field>
                <RichTextEditor
                  label="Content"
                  value={item.content}
                  onChange={(html) => updateItem(index, "content", html)}
                />
              </s-stack>
            </s-box>
          ))}
          <s-stack direction="inline">
            <s-button icon="plus" onClick={addItem}>
              Add item
            </s-button>
          </s-stack>
        </s-stack>
      </s-section>

      <s-section slot="aside" heading="About">
        <s-select
            label="Display on"
            value={displayOn}
            onChange={(e) => setDisplayOn(e.target.value)}
          >
            {DISPLAY_ON_OPTIONS.map((option) => (
              <s-option key={option} value={option}>
                {option}
              </s-option>
            ))}
          </s-select>
        <s-paragraph>
          Give your accordion a title, choose where it appears, then add the
          collapsible items shoppers will see on your storefront.
        </s-paragraph>
      </s-section>
    </s-page>
  );
}
