/*
  Warnings:

  - Added the required column `unity_conservation` to the `collaborators` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "collaborators" ADD COLUMN     "unity_conservation" TEXT NOT NULL;
