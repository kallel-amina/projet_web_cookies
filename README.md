🍰 Sweet Bites – Web Application

A simple pastry e-commerce website built with Angular, Node.js, and MongoDB.

📌 Overview

Sweet Bites is a web application allowing users to browse pastries (Brownies, Cookies, Tiramisu), create an account, and log in.
The design is modern, responsive, and aesthetically inspired by bakery themes.
This project was developed as part of SUP'COM – Web Technologies INDP2 (2025–2026).

🎯 Features
Frontend (Angular)

Modern homepage

Login page

Signup page

Three product pages: Brownies, Cookies, Tiramisu

Navigation bar and footer

Responsive UI (Bootstrap 5)

API communication with backend

Backend (Node.js)

User authentication (Signup + Login)

Password hashing with bcrypt

JWT authentication system

REST API endpoints for products

MongoDB Atlas database

🛠️ Technologies Used
Frontend

Angular 17

TypeScript

HTML5 / SCSS

Bootstrap 5

Angular Router

Font Awesome

Backend

Node.js

Express.js

MongoDB Atlas

Mongoose

bcrypt

JSON Web Token (JWT)

dotenv

🧩 Project Structure
Frontend (Angular)



⚙️ Installation & Setup
1. Clone the Repository


cd sweet-bites

2. Backend Setup

cd backend
npm install

Create .env file:
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/sweetbites
JWT_SECRET=

Run backend:
node server.js

Backend runs on: http://localhost:5000

3. Frontend Setup

cd frontend
npm install
ng serve

Frontend runs on: http://localhost:4200

🔌 API Routes
Auth Routes

POST /auth/signup → Create new account
POST /auth/login → Login user & return JWT

Product Routes

GET /products → Get all products
GET /products/:id → Get product by ID

👥 Team Members & Responsibilities



All members contributed to testing, documentation, Git collaboration, and integration.

🧪 Testing

API testing with Postman

UI testing on Chrome and mobile view

JWT authentication validation

MongoDB Atlas query validation

📄 Deliverables

Angular frontend

Node.js backend

MongoDB Atlas database

README.md

Screenshots

Demo video

📦 Deployment (Optional)

Frontend → Vercel / Netlify
Backend → Render / Railway
Database → MongoDB Atlas

❤️ Acknowledgements

Developed for SUP’COM INDP2 Web Technologies module (2025–2026).
Thanks to instructors and team members for support and collaboration