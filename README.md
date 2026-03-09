# Sweet Bites - Bakery Web App

Sweet Bites is now a full-stack app using **Angular** for frontend and **Spring Boot** for backend.

## Stack

- Frontend: `SweetBitesFE` (Angular, runs on `http://localhost:4200`)
- Backend: `SweetBitesBE/springboot-backend` (Spring Boot, runs on `http://localhost:8080`)
- Database: H2 in-memory (for development)

## Prerequisites

- Java 17+
- Maven
- Node.js 18+
- npm

## Backend Setup (Spring Boot)

1. Go to backend folder:

```bash
cd SweetBitesBE/springboot-backend
```

2. Optional environment variables:

```env
JWT_SECRET=YourLongSecretKeyAtLeast32Chars
ADMIN_EMAIL=admin@sweetbites.com
ADMIN_PASSWORD=Admin@1234

MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USERNAME=your_email@gmail.com
MAIL_PASSWORD=your_app_password
CONTACT_TO_EMAIL=your_email@gmail.com
```

3. Run backend:

```bash
mvn spring-boot:run
```

Default endpoints:

- Auth: `POST /api/auth/register`, `POST /api/auth/login`
- Admin products: `POST /api/admin/products`, `PUT /api/admin/products/{id}`
- Admin deliveries: `GET /api/admin/deliveries`, `PATCH /api/admin/deliveries/{id}/status`
- Contact: `POST /api/contact`

## Frontend Setup (Angular)

1. Go to frontend folder:

```bash
cd SweetBitesFE
```

2. Install dependencies:

```bash
npm install
```

3. Run frontend:

```bash
npm start
```

## Notes

- Admin user is auto-seeded on startup from `ADMIN_EMAIL` and `ADMIN_PASSWORD`.
- Frontend is configured to call backend on `http://localhost:8080`.
- Old Node backends were removed from this workspace.
