import express from "express";
import EventPackage from "../model/EventPackage";
import {
    addEventPackage,
    deleteEventPackage,
    getAllEventPackages,
    updateEventPackage
} from "../database/prisma-eventPackage-store";

const router = express.Router();

// router.post("/add", async (req, res) => {
//     try {
//         const { Name, Description, Price, ImageBase64 } = req.body;
//
//         const eventPackage = new EventPackage();
//         eventPackage.Name = Name;
//         eventPackage.Description = Description;
//         eventPackage.Price = parseFloat(Price);
//         eventPackage.ImageBase64 = ImageBase64;
//
//         const result = await addEventPackage(eventPackage);
//         res.status(201).json(result);
//     } catch (err) {
//         res.status(500).send("Error adding event package");
//     }
// });
router.post("/add", async (req, res) => {
    try {
        // const eventPackage: EventPackage = req.body;
        // eventPackage.Price = parseFloat(String(eventPackage.Price)); // Ensure Price is a number
        const eventPackage: EventPackage = {
            ...req.body,
            Price: parseFloat(req.body.Price) // Convert string to number
        };
        const result = await addEventPackage(eventPackage);
        res.status(201).json(result);
    } catch (err) {
        res.status(500).send("Error adding event package");
    }
});


router.get("/view", async (req, res) => {
    try {
        const eventPackages = await getAllEventPackages();
        res.json(eventPackages);
    } catch (err) {
        res.status(500).send("Error fetching event packages");
    }
});

router.delete("/delete/:id", async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        await deleteEventPackage(id);
        res.status(204).send();
    } catch (err) {
        res.status(500).send("Error deleting event package");
    }
});

// router.patch("/update/:id", async (req, res) => {
//     try {
//         const id = parseInt(req.params.id);
//         const { Name, Description, Price, ImageBase64 } = req.body;
//
//         const eventPackage = new EventPackage();
//         eventPackage.Name = Name;
//         eventPackage.Description = Description;
//         eventPackage.Price = parseFloat(Price);
//         eventPackage.ImageBase64 = ImageBase64; // Update Base64 image
//
//         const updated = await updateEventPackage(id, eventPackage);
//         res.json(updated);
//     } catch (err) {
//         res.status(500).send("Error updating event package");
//     }
// });

router.patch("/update/:id", async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const eventPackageUpdates = req.body;

        const updated = await updateEventPackage(id, eventPackageUpdates);
        res.json(updated);
    } catch (err) {
        res.status(500).send("Error updating event package");
    }
});

export default router;
