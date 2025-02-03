import express from "express";
import Instructor from "../model/Instructor";
import {
    addInstructor,
    deleteInstructor,
    getAllInstructors,
    updateInstructor
} from "../database/prisma-instructor-store";

const router = express.Router();

router.post("/add", async (req, res) => {
    try {
        const instructor: Instructor = req.body; 
        const result = await addInstructor(instructor);
        res.status(201).json(result);
    } catch (err) {
        res.status(500).send("Error adding instructor");
    }
});

router.get("/view", async (req, res) => {
    try {
        const instructors = await getAllInstructors();
        res.json(instructors);
    } catch (err) {
        res.status(500).send("Error fetching instructors");
    }
});

router.delete("/delete/:id", async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        await deleteInstructor(id);
        res.status(204).send();
    } catch (err) {
        res.status(500).send("Error deleting instructor");
    }
});

router.patch("/update/:id", async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const instructor: Instructor = req.body;
        const updated = await updateInstructor(id, instructor);
        res.json(updated);
    } catch (err) {
        res.status(500).send("Error updating instructor");
    }
});

export default router;