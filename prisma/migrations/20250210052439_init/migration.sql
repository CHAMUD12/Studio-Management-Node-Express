/*
  Warnings:

  - You are about to drop the column `CustomerId` on the `booking` table. All the data in the column will be lost.
  - The primary key for the `customer` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `CustomerId` on the `customer` table. All the data in the column will be lost.
  - You are about to drop the column `CustomerId` on the `instructor` table. All the data in the column will be lost.
  - You are about to drop the column `CustomerId` on the `rental` table. All the data in the column will be lost.
  - Added the required column `CustomerID` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `CustomerID` to the `Customer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `CustomerID` to the `Instructor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `CustomerID` to the `Rental` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `booking` DROP FOREIGN KEY `Booking_CustomerId_fkey`;

-- DropForeignKey
ALTER TABLE `instructor` DROP FOREIGN KEY `Instructor_CustomerId_fkey`;

-- DropForeignKey
ALTER TABLE `rental` DROP FOREIGN KEY `Rental_CustomerId_fkey`;

-- DropIndex
DROP INDEX `CustomerID` ON `booking`;

-- DropIndex
DROP INDEX `CustomerID` ON `instructor`;

-- DropIndex
DROP INDEX `CustomerID` ON `rental`;

-- AlterTable
ALTER TABLE `booking` DROP COLUMN `CustomerId`,
    ADD COLUMN `CustomerID` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `customer` DROP PRIMARY KEY,
    DROP COLUMN `CustomerId`,
    ADD COLUMN `CustomerID` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`CustomerID`);

-- AlterTable
ALTER TABLE `instructor` DROP COLUMN `CustomerId`,
    ADD COLUMN `CustomerID` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `rental` DROP COLUMN `CustomerId`,
    ADD COLUMN `CustomerID` INTEGER NOT NULL;

-- CreateIndex
CREATE INDEX `CustomerID` ON `Booking`(`CustomerID`);

-- CreateIndex
CREATE INDEX `CustomerID` ON `Instructor`(`CustomerID`);

-- CreateIndex
CREATE INDEX `CustomerID` ON `Rental`(`CustomerID`);

-- AddForeignKey
ALTER TABLE `Instructor` ADD CONSTRAINT `Instructor_CustomerID_fkey` FOREIGN KEY (`CustomerID`) REFERENCES `Customer`(`CustomerID`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Booking` ADD CONSTRAINT `Booking_CustomerID_fkey` FOREIGN KEY (`CustomerID`) REFERENCES `Customer`(`CustomerID`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Rental` ADD CONSTRAINT `Rental_CustomerID_fkey` FOREIGN KEY (`CustomerID`) REFERENCES `Customer`(`CustomerID`) ON DELETE CASCADE ON UPDATE CASCADE;
