import { PrismaClient } from "@prisma/client";
import Booking, { BookingDetails } from "../model/Booking";

const prisma = new PrismaClient();

export async function addBooking(booking: Booking) {
    try {
        // Save booking
        const savedBooking = await prisma.booking.create({
            data: {
                EventDate: booking.EventDate,
                CustomerId: booking.CustomerId,
            },
        });

        // Save booking details
        const savedBookingDetails = await Promise.all(
            booking.BookingDetails.map((detail: BookingDetails) =>
                prisma.bookingDetails.create({
                    data: {
                        BookingId: savedBooking.BookingId,
                        PackageId: detail.PackageId,
                        Price: detail.Price,
                        Advance: detail.Advance,
                        TotalPrice: detail.TotalPrice,
                    },
                })
            )
        );

        return {
            ...savedBooking,
            BookingDetails: savedBookingDetails,
        };
    } catch (err) {
        console.error("Error adding booking:", err);
        throw err;
    }
}

export async function getBookings() {
    try {
        return await prisma.booking.findMany({
            include: {
                BookingDetails: true,
                Customer: true,
            },
        });
    } catch (err) {
        console.error("Error fetching bookings:", err);
        throw err;
    }
}