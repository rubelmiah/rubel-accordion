import { useEffect } from "react";
import { useFetcher, useLoaderData } from "react-router";
import { useAppBridge } from "@shopify/app-bridge-react";
import { boundary } from "@shopify/shopify-app-react-router/server";
import { authenticate } from "../shopify.server";
import {
  getAccordions,
  deleteAccordion,
  duplicateAccordion,
} from "../models/accordion.server";

export const loader = async ({ request }) => {
  const { session } = await authenticate.admin(request);
  const accordions = await getAccordions(session.shop);
  return { accordions };
};

export const action = async ({ request }) => {
  const { session } = await authenticate.admin(request);
  const formData = await request.formData();
  const intent = formData.get("intent");
  const id = formData.get("id");

  if (intent === "delete") {
    await deleteAccordion(id, session.shop);
    return { ok: true, intent };
  }
  if (intent === "duplicate") {
    await duplicateAccordion(id, session.shop);
    return { ok: true, intent };
  }
  return { ok: false };
};

export default function Index() {
  const { accordions } = useLoaderData();
  const fetcher = useFetcher();
  const shopify = useAppBridge();

  useEffect(() => {
    if (fetcher.data?.ok && fetcher.data.intent === "duplicate") {
      shopify.toast.show("Accordion duplicated");
    }
    if (fetcher.data?.ok && fetcher.data.intent === "delete") {
      shopify.toast.show("Accordion deleted");
    }
  }, [fetcher.data, shopify]);

  const rowAction = (intent, id) =>
    fetcher.submit({ intent, id }, { method: "POST" });

  return (
    <s-page heading="All Accordion">
      <s-button slot="primary-action" variant="primary" href="/app/accordions/new">
        Add New
      </s-button>

      <s-section padding="none">
        {accordions.length === 0 ? (
          <s-box padding="large">
            <s-stack direction="block" gap="base" alignItems="center">
              <s-heading>No accordions yet</s-heading>
              <s-paragraph>
                Create your first accordion to display FAQs and collapsible
                content on your storefront.
              </s-paragraph>
              <s-button variant="primary" href="/app/accordions/new">
                Add New
              </s-button>
            </s-stack>
          </s-box>
        ) : (
          <s-table>
            <s-table-header-row>
              <s-table-header listSlot="primary">Accordions</s-table-header>
              <s-table-header listSlot="labeled">Display on</s-table-header>
              <s-table-header listSlot="inline">Action</s-table-header>
            </s-table-header-row>
            <s-table-body>
              {accordions.map((accordion) => (
                <s-table-row key={accordion.id}>
                  <s-table-cell>
                    <s-text type="strong">{accordion.title}</s-text>
                  </s-table-cell>
                  <s-table-cell>
                    <s-text color="subdued">{accordion.displayOn}</s-text>
                  </s-table-cell>
                  <s-table-cell>
                    <s-stack direction="inline" gap="small-300">
                      <s-button
                        variant="tertiary"
                        icon="edit"
                        accessibilityLabel="Edit accordion"
                        href={`/app/accordions/${accordion.id}`}
                      ></s-button>
                      <s-button
                        variant="tertiary"
                        icon="duplicate"
                        accessibilityLabel="Duplicate accordion"
                        onClick={() => rowAction("duplicate", accordion.id)}
                      ></s-button>
                      <s-button
                        variant="tertiary"
                        tone="critical"
                        icon="delete"
                        accessibilityLabel="Delete accordion"
                        onClick={() => rowAction("delete", accordion.id)}
                      ></s-button>
                    </s-stack>
                  </s-table-cell>
                </s-table-row>
              ))}
            </s-table-body>
          </s-table>
        )}
      </s-section>
    </s-page>
  );
}

export const headers = (headersArgs) => {
  return boundary.headers(headersArgs);
};
