/*
  Warnings:

  - You are about to drop the `texte` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `title` to the `pin` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `texte` DROP FOREIGN KEY `texte_ibfk_1`;

-- AlterTable
ALTER TABLE `pin` ADD COLUMN     `title` VARCHAR(191) NOT NULL,
    ADD COLUMN     `description` VARCHAR(191);

-- DropTable
DROP TABLE `texte`;
