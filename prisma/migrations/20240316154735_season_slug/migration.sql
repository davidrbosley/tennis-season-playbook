/*
  Warnings:

  - Added the required column `slug` to the `Season` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Season" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "teamId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "seasonStart" DATETIME NOT NULL,
    "seasonEnd" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Season_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Season" ("createdAt", "id", "name", "seasonEnd", "seasonStart", "teamId", "updatedAt") SELECT "createdAt", "id", "name", "seasonEnd", "seasonStart", "teamId", "updatedAt" FROM "Season";
DROP TABLE "Season";
ALTER TABLE "new_Season" RENAME TO "Season";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
