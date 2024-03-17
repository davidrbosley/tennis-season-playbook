-- CreateTable
CREATE TABLE "Team" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "abbreviation" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Season" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "teamId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "seasonStart" DATETIME NOT NULL,
    "seasonEnd" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Season_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
