-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Team" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Team" ("createdAt", "description", "id", "name", "slug", "updatedAt") SELECT "createdAt", "description", "id", "name", "slug", "updatedAt" FROM "Team";
DROP TABLE "Team";
ALTER TABLE "new_Team" RENAME TO "Team";
CREATE UNIQUE INDEX "Team_slug_key" ON "Team"("slug");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
