/*
  Warnings:

  - You are about to drop the column `updatedAt_sr` on the `UserRegistration` table. All the data in the column will be lost.
  - Changed the type of `id_anexo` on the `CustomerContract` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `updatedAt_usr` to the `UserRegistration` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CustomerContract" DROP COLUMN "id_anexo",
ADD COLUMN     "id_anexo" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "UserRegistration" DROP COLUMN "updatedAt_sr",
ADD COLUMN     "updatedAt_usr" TIMESTAMP(3) NOT NULL;
