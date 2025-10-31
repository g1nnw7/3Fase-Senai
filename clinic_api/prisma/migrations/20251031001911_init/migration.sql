/*
  Warnings:

  - You are about to drop the `token` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `data` on table `prontuario` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "public"."token" DROP CONSTRAINT "token_usuarioId_fkey";

-- AlterTable
ALTER TABLE "public"."prontuario" ALTER COLUMN "data" SET NOT NULL;

-- DropTable
DROP TABLE "public"."token";
