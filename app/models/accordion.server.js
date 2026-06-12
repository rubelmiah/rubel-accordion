import db from "../db.server";

// All queries are scoped by `shop` so one store can never read or mutate
// another store's accordions.

export async function getAccordions(shop) {
  return db.accordion.findMany({
    where: { shop },
    orderBy: { createdAt: "asc" },
  });
}

export async function getAccordion(id, shop) {
  return db.accordion.findFirst({ where: { id, shop } });
}

export async function createAccordion(shop, { title, displayOn, items }) {
  return db.accordion.create({
    data: { shop, title, displayOn, items },
  });
}

export async function updateAccordion(id, shop, { title, displayOn, items }) {
  return db.accordion.updateMany({
    where: { id, shop },
    data: { title, displayOn, items },
  });
}

export async function deleteAccordion(id, shop) {
  return db.accordion.deleteMany({ where: { id, shop } });
}

export async function duplicateAccordion(id, shop) {
  const source = await getAccordion(id, shop);
  if (!source) return null;
  return db.accordion.create({
    data: {
      shop,
      title: `${source.title} (copy)`,
      displayOn: source.displayOn,
      items: source.items,
    },
  });
}
