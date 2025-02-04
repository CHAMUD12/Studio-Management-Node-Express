import {PrismaClient} from '@prisma/client';
import EventPackage from "../model/EventPackage";

const prisma = new PrismaClient();

export async function addEventPackage(eventPackage: EventPackage) {
    try {
        return await prisma.eventPackage.create({
            data: {
                Name: eventPackage.Name,
                Description: eventPackage.Description,
                Price: eventPackage.Price,
                ImageBase64: eventPackage.ImageBase64
            }
        });
    } catch (err) {
        console.error("Error adding event package", err);
        throw err;
    }
}

export async function deleteEventPackage(id: number) {
    try {
        return await prisma.eventPackage.delete({
            where: {PackageId: id}
        });
    } catch (err) {
        console.error("Error deleting event package", err);
        throw err;
    }
}

export async function getAllEventPackages() {
    try {
        return await prisma.eventPackage.findMany();
    } catch (err) {
        console.error("Error fetching event packages", err);
        throw err;
    }
}

export async function updateEventPackage(id: number, eventPackage: EventPackage) {
    try {
        return await prisma.eventPackage.update({
            where: {PackageId: id},
            data: {
                Name: eventPackage.Name,
                Description: eventPackage.Description,
                Price: eventPackage.Price,
                ImageBase64: eventPackage.ImageBase64
            }
        });
    } catch (err) {
        console.error("Error updating event package", err);
        throw err;
    }
}
