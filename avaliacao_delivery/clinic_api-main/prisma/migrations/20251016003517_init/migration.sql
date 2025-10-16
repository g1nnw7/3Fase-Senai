/*
  Warnings:

  - The primary key for the `delivery` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `delivery` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."delivery" DROP CONSTRAINT "delivery_pkey",
DROP COLUMN "id",
ADD COLUMN     "id_delivery" SERIAL NOT NULL,
ADD CONSTRAINT "delivery_pkey" PRIMARY KEY ("id_delivery");
