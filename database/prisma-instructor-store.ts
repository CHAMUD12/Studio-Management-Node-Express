// import {PrismaClient} from '@prisma/client';
// import Instructor from "../model/Instructor";
//
// const prisma = new PrismaClient();
//
// export async function addInstructor(instructor: Instructor) {
//     try {
//         return await prisma.instructor.create({
//             data: {
//                 Name: instructor.Name,
//                 Address: instructor.Address,
//                 Email: instructor.Email,
//                 Mobile: instructor.Mobile
//             }
//         });
//     } catch (err) {
//         console.log("Error adding instructor", err);
//         throw err;
//     }
// }
//
// export async function deleteInstructor(id: number) {
//     try {
//         return await prisma.instructor.delete({
//             where: {InstructorId: id}
//         });
//     } catch (err) {
//         console.log("Error deleting instructor", err);
//         throw err;
//     }
// }
//
// export async function getAllInstructors() {
//     try {
//         return await prisma.instructor.findMany();
//     } catch (err) {
//         console.log("Error getting instructors", err);
//         throw err;
//     }
// }
//
// export async function updateInstructor(id: number, instructor: Instructor) {
//     try {
//         return await prisma.instructor.update({
//             where: {InstructorId: id},
//             data: {
//                 Name: instructor.Name,
//                 Address: instructor.Address,
//                 Email: instructor.Email,
//                 Mobile: instructor.Mobile
//             }
//         });
//     } catch (err) {
//         console.log("Error updating instructor", err);
//         throw err;
//     }
// }
import { PrismaClient } from '@prisma/client';
import Instructor from "../model/Instructor";

const prisma = new PrismaClient();

export async function addInstructor(instructor: Instructor) {
    try {
        return await prisma.instructor.create({
            data: {
                Name: instructor.Name,
                Address: instructor.Address,
                Email: instructor.Email,
                Mobile: instructor.Mobile,
                CustomerId: instructor.CustomerId,
            }
        });
    } catch (err) {
        console.log("Error adding instructor", err);
        throw err;
    }
}

export async function deleteInstructor(id: number) {
    try {
        return await prisma.instructor.delete({
            where: { InstructorId: id }
        });
    } catch (err) {
        console.log("Error deleting instructor", err);
        throw err;
    }
}

export async function getAllInstructors() {
    try {
        return await prisma.instructor.findMany({
            include: {
                Customer: true, // To include customer details
            }
        });
    } catch (err) {
        console.log("Error getting instructors", err);
        throw err;
    }
}

export async function updateInstructor(id: number, instructor: Instructor) {
    try {
        return await prisma.instructor.update({
            where: { InstructorId: id },
            data: {
                Name: instructor.Name,
                Address: instructor.Address,
                Email: instructor.Email,
                Mobile: instructor.Mobile,
                CustomerId: instructor.CustomerId,
            }
        });
    } catch (err) {
        console.log("Error updating instructor", err);
        throw err;
    }
}
