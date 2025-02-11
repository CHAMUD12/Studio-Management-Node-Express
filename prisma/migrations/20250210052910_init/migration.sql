/*
  Warnings:

  - You are about to drop the column `CustomerID` on the `booking` table. All the data in the column will be lost.
  - The primary key for the `customer` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `CustomerID` on the `customer` table. All the data in the column will be lost.
  - You are about to drop the column `CustomerID` on the `instructor` table. All the data in the column will be lost.
  - You are about to drop the column `CustomerID` on the `rental` table. All the data in the column will be lost.
  - Added the required column `CustomerId` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `CustomerId` to the `Customer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `CustomerId` to the `Instructor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `CustomerId` to the `Rental` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `booking` DROP FOREIGN KEY `Booking_CustomerID_fkey`;

-- DropForeignKey
ALTER TABLE `instructor` DROP FOREIGN KEY `Instructor_CustomerID_fkey`;

-- DropForeignKey
ALTER TABLE `rental` DROP FOREIGN KEY `Rental_CustomerID_fkey`;

-- DropIndex
DROP INDEX `CustomerID` ON `booking`;

-- DropIndex
DROP INDEX `CustomerID` ON `instructor`;

-- DropIndex
DROP INDEX `CustomerID` ON `rental`;

-- AlterTable
ALTER TABLE `booking` DROP COLUMN `CustomerID`,
    ADD COLUMN `CustomerId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `customer` DROP PRIMARY KEY,
    DROP COLUMN `CustomerID`,
    ADD COLUMN `CustomerId` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`CustomerId`);

-- AlterTable
ALTER TABLE `instructor` DROP COLUMN `CustomerID`,
    ADD COLUMN `CustomerId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `rental` DROP COLUMN `CustomerID`,
    ADD COLUMN `CustomerId` INTEGER NOT NULL;

-- CreateIndex
CREATE INDEX `CustomerID` ON `Booking`(`CustomerId`);

-- CreateIndex
CREATE INDEX `CustomerID` ON `Instructor`(`CustomerId`);

-- CreateIndex
CREATE INDEX `CustomerID` ON `Rental`(`CustomerId`);

-- AddForeignKey
ALTER TABLE `Instructor` ADD CONSTRAINT `Instructor_CustomerId_fkey` FOREIGN KEY (`CustomerId`) REFERENCES `Customer`(`CustomerId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Booking` ADD CONSTRAINT `Booking_CustomerId_fkey` FOREIGN KEY (`CustomerId`) REFERENCES `Customer`(`CustomerId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Rental` ADD CONSTRAINT `Rental_CustomerId_fkey` FOREIGN KEY (`CustomerId`) REFERENCES `Customer`(`CustomerId`) ON DELETE CASCADE ON UPDATE CASCADE;
