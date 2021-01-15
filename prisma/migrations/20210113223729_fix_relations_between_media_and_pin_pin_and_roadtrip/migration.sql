-- DropForeignKey
ALTER TABLE `media` DROP FOREIGN KEY `media_ibfk_1`;

-- AddForeignKey
ALTER TABLE `media` ADD FOREIGN KEY (`pinId`) REFERENCES `pin`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
