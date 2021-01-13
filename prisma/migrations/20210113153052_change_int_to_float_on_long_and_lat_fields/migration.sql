/*
  Warnings:

  - You are about to alter the column `long` on the `pin` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Float`.
  - You are about to alter the column `lat` on the `pin` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Float`.

*/
-- AlterTable
ALTER TABLE `pin` MODIFY `long` DECIMAL(65,30) NOT NULL,
    MODIFY `lat` DECIMAL(65,30) NOT NULL;
