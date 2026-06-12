import { boundary } from "@shopify/shopify-app-react-router/server";
import { authenticate } from "../shopify.server";
import { createAccordion } from "../models/accordion.server";
import { parseAccordionForm } from "../models/accordion-form.server";
import AccordionForm from "../components/AccordionForm";

export const loader = async ({ request }) => {
  await authenticate.admin(request);
  return null;
};

export const action = async ({ request }) => {
  const { session, redirect } = await authenticate.admin(request);
  const { data, errors } = parseAccordionForm(await request.formData());
  if (errors) return { errors };

  await createAccordion(session.shop, data);
  return redirect("/app");
};

export default function NewAccordion() {
  return <AccordionForm accordion={null} heading="Add New Accordion" />;
}

export const headers = (headersArgs) => {
  return boundary.headers(headersArgs);
};
