# Studio Management System - Backend

## 🧠 Overview
This is the backend API for the **Studio Management System**, designed to handle event bookings, customer details, rental item management, and instructor scheduling. Built using **Node.js**, **Express.js**, and **Prisma ORM** with a **MySQL** database.

## ⚙ Technologies
- 🔧 Node.js + Express.js
- 🔤 TypeScript
- 📊 MySQL
- 🔍 Prisma ORM
- 🔐 CORS Middleware
- 📁 MVC Structure

## 📁 Folder Structure

<pre>
studio-management-backend/ 
   ┣ 📂 database # Temporary in-memory storage (optional) 
   ┣ 📂 prisma # Prisma schema & migrations 
   ┣ 📂 routes # Express route handlers 
   ┣ 📜 server.ts # Main server entry point
</pre>

## 🔗 Frontend Repository
The frontend of this project is available separately and built with React, Redux, TypeScript, Tailwind CSS.

👉 [Studio-Management-React-Ts](https://github.com/CHAMUD12/Studio-Management-React-Ts.git)

## 🚀 Getting Started

### Prerequisites
- Node.js
- npm
- MySQL
- Prisma CLI

### Setup Steps
```bash
# Clone the repository
git clone https://github.com/CHAMUD12/Studio-Management-Node-Express.git
cd studio-management-backend

# Install dependencies
npm install

# Setup Prisma
npx prisma generate
npx prisma migrate dev

# Start the server
npm run dev
```

## 📡 API Endpoints
| ⚡ Method | 🔗 Endpoint   | 📌 Description          |
|----------|---------------|-------------------------|
| GET      | /customer     | Get all customers       |
| POST     | /booking      | Create a booking        |
| GET      | /rentalItem   | Get rental items        |
| POST     | /eventPackage | Create an event package |
| GET      | /instructor   | Get instructor list     |

## 📜 License
This project is licensed under the MIT License.
[MIT](https://github.com/CHAMUD12/Studio-Management-Node-Express/blob/master/LICENSE.txt) License

---
*👤 Author:* [Chamud Shakeen](https://github.com/CHAMUD12)
