-- CreateTable
CREATE TABLE "Accordion" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "shop" TEXT NOT NULL,
    "title" TEXT NOT NULL DEFAULT 'Accordion Title',
    "displayOn" TEXT NOT NULL DEFAULT 'Product',
    "items" TEXT NOT NULL DEFAULT '[]',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE INDEX "Accordion_shop_idx" ON "Accordion"("shop");
