const DISPLAY_ON_OPTIONS = ["Product", "Page", "Collections"];

/**
 * Validate and normalize the accordion form submission.
 * Returns either { data } ready for persistence, or { errors } to render.
 */
export function parseAccordionForm(formData) {
  const title = String(formData.get("title") ?? "").trim();
  const displayOn = String(formData.get("displayOn") ?? "");
  const rawItems = String(formData.get("items") ?? "[]");

  const errors = {};
  if (!title) errors.title = "Title is required";

  const validDisplayOn = DISPLAY_ON_OPTIONS.includes(displayOn)
    ? displayOn
    : DISPLAY_ON_OPTIONS[0];

  let items = [];
  try {
    const parsed = JSON.parse(rawItems);
    if (Array.isArray(parsed)) {
      items = parsed
        .map((item) => ({
          heading: String(item?.heading ?? "").trim(),
          content: String(item?.content ?? "").trim(),
        }))
        .filter((item) => item.heading || item.content);
    }
  } catch {
    items = [];
  }

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  return {
    data: {
      title,
      displayOn: validDisplayOn,
      items: JSON.stringify(items),
    },
  };
}
