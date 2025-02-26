import express from "express";
import RentalItem from "../model/RentalItem";
import {
    addRentalItem,
    deleteRentalItem,
    getAllRentalItems,
    updateRentalItem,
} from "../database/prisma-rentalItem-store";

const router = express.Router();

router.post("/add", async (req, res) => {
    try {
        const rentalItem: RentalItem = req.body;
        const result = await addRentalItem(rentalItem);
        res.status(201).json(result);
    } catch (err) {
        res.status(500).send("Error adding rental item");
    }
});

router.get("/view", async (req, res) => {
    try {
        const rentalItems = await getAllRentalItems();
        res.json(rentalItems);
    } catch (err) {
        res.status(500).send("Error fetching rental items");
    }
});

router.delete("/delete/:id", async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        await deleteRentalItem(id);
        res.status(204).send();
    } catch (err) {
        res.status(500).send("Error deleting rental item");
    }
});

router.put("/update/:id", async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const rentalItem: RentalItem = req.body;
        const updated = await updateRentalItem(id, rentalItem);
        res.json(updated);
    } catch (err) {
        res.status(500).send("Error updating rental item");
    }
});

export default router;
