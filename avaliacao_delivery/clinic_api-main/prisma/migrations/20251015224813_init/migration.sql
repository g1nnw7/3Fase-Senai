/*
  Warnings:

  - You are about to drop the `consulta` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `exame` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `paciente` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `prontuario` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."consulta" DROP CONSTRAINT "consulta_paciente_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."exame" DROP CONSTRAINT "exame_paciente_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."prontuario" DROP CONSTRAINT "prontuario_medico_responsavel_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."prontuario" DROP CONSTRAINT "prontuario_paciente_id_fkey";

-- DropTable
DROP TABLE "public"."consulta";

-- DropTable
DROP TABLE "public"."exame";

-- DropTable
DROP TABLE "public"."paciente";

-- DropTable
DROP TABLE "public"."prontuario";

-- CreateTable
CREATE TABLE "public"."driver" (
    "id_driver" SERIAL NOT NULL,
    "cnh_number" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "status" TEXT NOT NULL,
    "usuario_id" INTEGER NOT NULL,

    CONSTRAINT "driver_pkey" PRIMARY KEY ("id_driver")
);

-- CreateTable
CREATE TABLE "public"."vehicle" (
    "id_vehicle" SERIAL NOT NULL,
    "plate" VARCHAR(8) NOT NULL,
    "model_name" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "capacity_kg" DECIMAL(65,30) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "driver_id" INTEGER NOT NULL,

    CONSTRAINT "vehicle_pkey" PRIMARY KEY ("id_vehicle")
);

-- CreateTable
CREATE TABLE "public"."delivery" (
    "id" SERIAL NOT NULL,
    "recipient_name" TEXT NOT NULL,
    "recipient_address" TEXT NOT NULL,
    "package_details" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "driver_id" INTEGER NOT NULL,

    CONSTRAINT "delivery_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "driver_cnh_number_key" ON "public"."driver"("cnh_number");

-- CreateIndex
CREATE UNIQUE INDEX "vehicle_plate_key" ON "public"."vehicle"("plate");

-- AddForeignKey
ALTER TABLE "public"."driver" ADD CONSTRAINT "driver_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "public"."usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."vehicle" ADD CONSTRAINT "vehicle_driver_id_fkey" FOREIGN KEY ("driver_id") REFERENCES "public"."driver"("id_driver") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."delivery" ADD CONSTRAINT "delivery_driver_id_fkey" FOREIGN KEY ("driver_id") REFERENCES "public"."driver"("id_driver") ON DELETE RESTRICT ON UPDATE CASCADE;
