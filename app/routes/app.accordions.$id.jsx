import { useLoaderData } from "react-router";
import { boundary } from "@shopify/shopify-app-react-router/server";
import { authenticate } from "../shopify.server";
import { getAccordion, updateAccordion } from "../models/accordion.server";
import { parseAccordionForm } from "../models/accordion-form.server";
import AccordionForm from "../components/AccordionForm";

export const loader = async ({ request, params }) => {
  const { session, redirect } = await authenticate.admin(request);
  const accordion = await getAccordion(params.id, session.shop);
  if (!accordion) return redirect("/app");

  // Decode the stored JSON `items` string into an array for the form.
  let items = [];
  try {
    items = JSON.parse(accordion.items);
  } catch {
    items = [];
  }
  return { accordion: { ...accordion, items } };
};

export const action = async ({ request, params }) => {
  const { session, redirect } = await authenticate.admin(request);
  const { data, errors } = parseAccordionForm(await request.formData());
  if (errors) return { errors };

  await updateAccordion(params.id, session.shop, data);
  return redirect("/app");
};

export default function EditAccordion() {
  const { accordion } = useLoaderData();
  return <AccordionForm accordion={accordion} heading="Edit Accordion" />;
}

export const headers = (headersArgs) => {
  return boundary.headers(headersArgs);
};
