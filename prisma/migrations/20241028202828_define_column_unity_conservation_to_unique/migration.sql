/*
  Warnings:

  - A unique constraint covering the columns `[unity_conservation]` on the table `collaborators` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "collaborators_unity_conservation_key" ON "collaborators"("unity_conservation");
