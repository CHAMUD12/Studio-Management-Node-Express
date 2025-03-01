import express from "express";
import { addRental, getRentals } from "../database/prisma-rental-store";
import {getAllCustomers} from "../database/prisma-customer-store";
import {getAllRentalItems} from "../database/prisma-rentalItem-store";

const router = express.Router();

router.post('/rent-item', async (req, res) => {
    const rental = req.body;
    try {
        const savedRental = await addRental(rental);
        res.status(201).json({
            success: true,
            message: "Rental created successfully",
            data: savedRental
        });
    } catch (err: any) {
        console.error('Error:', err);
        res.status(400).json({
            success: false,
            message: err.message || 'Failed to save rental.'
        });
    }
});

router.get('/rentals', async (req, res) => {
    try {
        const rentals = await getRentals();
        res.json({
            success: true,
            data: rentals
        });
    } catch (err: any) {
        console.error('Error:', err);
        res.status(400).json({
            success: false,
            message: err.message || 'Failed to fetch rentals.'
        });
    }
});

router.get('/customers', async (req, res) => {
    try {
        // Using the existing customer store function
        const customers = await getAllCustomers();
        res.json(customers);
    } catch (err) {
        res.status(500).send("Error fetching customers");
    }
});

router.get('/rental-items', async (req, res) => {
    try {
        // Using the existing rental item store function
        const rentalItems = await getAllRentalItems();
        res.json(rentalItems);
    } catch (err) {
        res.status(500).send("Error fetching rental items");
    }
});

export default router;