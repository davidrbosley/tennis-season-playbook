/*
  Warnings:

  - You are about to drop the column `abbreviation` on the `Team` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Team" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL DEFAULT 'SJHS',
    "description" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Team" ("createdAt", "description", "id", "name", "updatedAt") SELECT "createdAt", "description", "id", "name", "updatedAt" FROM "Team";
DROP TABLE "Team";
ALTER TABLE "new_Team" RENAME TO "Team";
CREATE UNIQUE INDEX "Team_slug_key" ON "Team"("slug");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
