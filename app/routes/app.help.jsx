import { boundary } from "@shopify/shopify-app-react-router/server";
import { authenticate } from "../shopify.server";

export const loader = async ({ request }) => {
  await authenticate.admin(request);
  return null;
};

export default function Help() {
  return (
    <s-page heading="Help">
      <s-section heading="Getting started">
        <s-ordered-list>
          <s-list-item>
            Go to <s-link href="/app/accordions/new">Add New Accordion</s-link>{" "}
            to create an accordion.
          </s-list-item>
          <s-list-item>
            Give it a title, choose where it should display (Product, Page, or
            Collections), and add your collapsible items.
          </s-list-item>
          <s-list-item>
            Manage all of your accordions from the{" "}
            <s-link href="/app">All Accordion</s-link> page — edit, duplicate,
            or delete them at any time.
          </s-list-item>
        </s-ordered-list>
      </s-section>

      <s-section slot="aside" heading="Need more help?">
        <s-paragraph>
          Reach out to support and we&apos;ll get back to you as soon as we can.
        </s-paragraph>
        <s-link href="mailto:support@example.com">support@example.com</s-link>
      </s-section>
    </s-page>
  );
}

export const headers = (headersArgs) => {
  return boundary.headers(headersArgs);
};
