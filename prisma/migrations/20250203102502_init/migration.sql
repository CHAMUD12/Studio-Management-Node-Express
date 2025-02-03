/*
  Warnings:

  - Added the required column `CustomerId` to the `Instructor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `instructor` ADD COLUMN `CustomerId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `Customer` (
    `CustomerId` INTEGER NOT NULL AUTO_INCREMENT,
    `Name` VARCHAR(191) NOT NULL,
    `Address` VARCHAR(191) NOT NULL,
    `Email` VARCHAR(100) NOT NULL,
    `Mobile` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Email`(`Email`),
    PRIMARY KEY (`CustomerId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `EventPackage` (
    `PackageId` INTEGER NOT NULL AUTO_INCREMENT,
    `Name` VARCHAR(191) NOT NULL,
    `Description` VARCHAR(191) NOT NULL,
    `Price` DECIMAL(10, 2) NOT NULL,

    PRIMARY KEY (`PackageId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Booking` (
    `BookingId` INTEGER NOT NULL AUTO_INCREMENT,
    `BookedAt` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `EventDate` DATETIME(3) NOT NULL,
    `CustomerId` INTEGER NOT NULL,

    INDEX `CustomerID`(`CustomerId`),
    PRIMARY KEY (`BookingId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `BookingDetails` (
    `BookingDetailsId` INTEGER NOT NULL AUTO_INCREMENT,
    `BookingId` INTEGER NOT NULL,
    `PackageId` INTEGER NOT NULL,
    `Price` DECIMAL(10, 2) NOT NULL,
    `Advance` DECIMAL(10, 2) NOT NULL,
    `TotalPrice` DECIMAL(10, 2) NOT NULL,

    INDEX `PackageID`(`PackageId`),
    INDEX `BookingID`(`BookingId`),
    PRIMARY KEY (`BookingDetailsId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Rental` (
    `RentalId` INTEGER NOT NULL AUTO_INCREMENT,
    `CustomerId` INTEGER NOT NULL,
    `RentedAt` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `ReturnBy` DATETIME(3) NOT NULL,

    INDEX `CustomerID`(`CustomerId`),
    PRIMARY KEY (`RentalId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RentalItem` (
    `RentalItemId` INTEGER NOT NULL AUTO_INCREMENT,
    `Name` VARCHAR(100) NOT NULL,
    `Quantity` INTEGER NOT NULL,
    `Price` DECIMAL(10, 2) NOT NULL,

    PRIMARY KEY (`RentalItemId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RentingDetails` (
    `RentingDetailsId` INTEGER NOT NULL AUTO_INCREMENT,
    `RentalId` INTEGER NOT NULL,
    `RentalItemId` INTEGER NOT NULL,
    `Price` DECIMAL(10, 2) NOT NULL,

    INDEX `RentalItemID`(`RentalItemId`),
    PRIMARY KEY (`RentingDetailsId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `CustomerID` ON `Instructor`(`CustomerId`);

-- AddForeignKey
ALTER TABLE `Instructor` ADD CONSTRAINT `Instructor_CustomerId_fkey` FOREIGN KEY (`CustomerId`) REFERENCES `Customer`(`CustomerId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Booking` ADD CONSTRAINT `Booking_CustomerId_fkey` FOREIGN KEY (`CustomerId`) REFERENCES `Customer`(`CustomerId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BookingDetails` ADD CONSTRAINT `BookingDetails_ibfk_1` FOREIGN KEY (`BookingId`) REFERENCES `Booking`(`BookingId`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `BookingDetails` ADD CONSTRAINT `BookingDetails_ibfk_2` FOREIGN KEY (`PackageId`) REFERENCES `EventPackage`(`PackageId`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Rental` ADD CONSTRAINT `Rental_CustomerId_fkey` FOREIGN KEY (`CustomerId`) REFERENCES `Customer`(`CustomerId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RentingDetails` ADD CONSTRAINT `RentingDetails_ibfk_1` FOREIGN KEY (`RentalId`) REFERENCES `Rental`(`RentalId`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `RentingDetails` ADD CONSTRAINT `RentingDetails_ibfk_2` FOREIGN KEY (`RentalItemId`) REFERENCES `RentalItem`(`RentalItemId`) ON DELETE CASCADE ON UPDATE NO ACTION;
