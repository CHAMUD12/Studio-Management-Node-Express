import { PrismaClient } from "@prisma/client";
import Rental, { RentingDetails } from "../model/Rental";

const prisma = new PrismaClient();

export async function addRental(rental: Rental) {
    return prisma.$transaction(async (tx) => {
        if (!rental.CustomerId) {
            throw new Error("Customer must be selected before placing a rental order.");
        }

        const savedRental = await tx.rental.create({
            data: {
                CustomerId: rental.CustomerId,
                RentedAt: new Date(),
                ReturnBy: rental.ReturnBy,
            },
        });

        const savedRentingDetails = [];
        for (const detail of rental.RentingDetails) {
            if (!detail.Quantity || detail.Quantity <= 0) {
                throw new Error("Invalid quantity for rental item.");
            }

            const rentalItem = await tx.rentalItem.findUnique({
                where: { RentalItemId: detail.RentalItemId }
            });

            if (!rentalItem) {
                throw new Error(`Rental item with ID ${detail.RentalItemId} not found.`);
            }

            if (rentalItem.Quantity < detail.Quantity) {
                throw new Error(`Not enough items available. Requested: ${detail.Quantity}, Available: ${rentalItem.Quantity}`);
            }

            const rentingDetail = await tx.rentingDetails.create({
                data: {
                    RentalId: savedRental.RentalId,
                    RentalItemId: detail.RentalItemId,
                    Price: detail.Price,
                    Quantity: detail.Quantity,
                },
            });

            savedRentingDetails.push(rentingDetail);

            await tx.rentalItem.update({
                where: { RentalItemId: detail.RentalItemId },
                data: { Quantity: rentalItem.Quantity - detail.Quantity }
            });
        }

        return {
            ...savedRental,
            RentingDetails: savedRentingDetails,
        };
    });
}

export async function getRentals() {
    try {
        return await prisma.rental.findMany({
            include: {
                RentingDetails: true,
                Customer: true,
            },
        });
    } catch (err) {
        console.error("Error fetching rentals:", err);
        throw err;
    }
}