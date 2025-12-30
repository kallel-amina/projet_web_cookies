# projet_web_cookies

# Sweet Bites - Bakery Web App

Sweet Bites is a full-stack bakery web application using **Angular** for the frontend, **Node.js/Express** for the backend, and **MongoDB** for the database. It allows users to sign up, log in, and manage their account.

---

## Prerequisites

* **Node.js** (v18+ recommended)
* **npm** (comes with Node.js)
* **MongoDB** (local installation or MongoDB Atlas)

---

## Backend Setup

1. Open terminal and go to the backend folder:

```bash
cd login-backend
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the backend folder with:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/login_db
JWT_SECRET=sweetiestobite
```

4. Start MongoDB (if local):

```bash
mongod
```

5. Run the backend server:

```bash
npm run dev
```

The backend will run at: [http://localhost:5000](http://localhost:5000)

---

## Frontend Setup

1. Open a new terminal and go to the frontend folder:

```bash
cd SweetBitesFE
```

2. Install dependencies:

```bash
npm install
```

3. Run the Angular frontend:

```bash
ng serve
```

The frontend will run at: [http://localhost:4200](http://localhost:4200)

---

## Connecting Frontend & Backend

* The frontend uses `AuthService` to call backend API:

  * Signup: `POST http://localhost:5000/api/auth/signup`
  * Login: `POST http://localhost:5000/api/auth/login`
* Ensure backend is running before using the frontend.

### Architecture Diagram

```
+----------------+         HTTP/API          +-----------------+
| Angular Front  | -----------------------> | Node.js/Express |
|   (SweetBitesFE)|                          |   Backend       |
+----------------+ <----------------------- +-----------------+
       |                                      |
       | NgService (AuthService)              |
       |                                      |
       v                                      v
   User Input                             MongoDB
 (Signup/Login)                        (login_db Collection)
```

---

## Viewing Users in MongoDB

Open Mongo shell or MongoDB Compass:

```bash
mongo
use login_db
db.users.find().pretty()
```

This will show all registered users.

---

## Notes

* Make sure MongoDB is running before starting the backend.
* JWT tokens are used for authentication.
* Frontend routes:

  * `/login` → login page
  * `/signup` → signup page
