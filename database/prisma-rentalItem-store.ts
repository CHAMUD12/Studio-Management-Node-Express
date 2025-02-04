import { PrismaClient } from "@prisma/client";
import RentalItem from "../model/RentalItem";

const prisma = new PrismaClient();

export async function addRentalItem(rentalItem: RentalItem) {
    try {
        return await prisma.rentalItem.create({
            data: {
                Name: rentalItem.Name,
                Quantity: rentalItem.Quantity,
                Price: rentalItem.Price,
            },
        });
    } catch (err) {
        console.log("Error adding rental item", err);
        throw err;
    }
}

export async function deleteRentalItem(id: number) {
    try {
        return await prisma.rentalItem.delete({
            where: { RentalItemId: id },
        });
    } catch (err) {
        console.log("Error deleting rental item", err);
        throw err;
    }
}

export async function getAllRentalItems() {
    try {
        return await prisma.rentalItem.findMany();
    } catch (err) {
        console.log("Error fetching rental items", err);
        throw err;
    }
}

export async function updateRentalItem(id: number, rentalItem: RentalItem) {
    try {
        return await prisma.rentalItem.update({
            where: { RentalItemId: id },
            data: {
                Name: rentalItem.Name,
                Quantity: rentalItem.Quantity,
                Price: rentalItem.Price,
            },
        });
    } catch (err) {
        console.log("Error updating rental item", err);
        throw err;
    }
}