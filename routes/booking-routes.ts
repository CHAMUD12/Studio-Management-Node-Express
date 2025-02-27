import express from "express";
import { addBooking, getBookings } from "../database/prisma-booking-store";

const router = express.Router();

router.post('/book-event', async (req, res) => {
    const booking = req.body;
    try {
        const savedBooking = await addBooking(booking);
        res.send(savedBooking);
    } catch (err) {
        console.error('Error:', err);
        res.status(400).send('Failed to save booking.');
    }
});

router.get('/bookings', async (req, res) => {
    try {
        const bookings = await getBookings();
        res.send(bookings);
    } catch (err) {
        console.error('Error:', err);
        res.status(400).send('Failed to fetch bookings.');
    }
});

export default router;