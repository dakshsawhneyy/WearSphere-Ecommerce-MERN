#  WearSphere - Full-Stack E-commerce Website (MERN)

**WearSphere** is a modern, full-featured e-commerce web app built using the **MERN stack**. It includes a customer-facing frontend, a powerful admin dashboard, secure JWT authentication, **dual payment gateway support** via **Stripe and Razorpay**, and RESTful APIs — all ready for production and CI/CD deployment.

---

##  Features

### User Panel (`frontend/`)
- Browse products by category
- Add/remove items from cart
- Register/Login with JWT
- Checkout and pay using Stripe or Razorpay
- Order history and details

### Admin Panel (`admin/`)
- Login as admin
- Add, update, and delete products
- Manage users and orders
- View revenue and order analytics

### Backend (`backend/`)
- REST APIs using Express
- MongoDB with Mongoose
- JWT-based authentication
- Product image uploads via Multer + Cloudinary
- Integrated **Stripe and Razorpay payment gateways**
- Order and user management routes

---

## Tech Stack

| Layer        | Technologies                               |
|--------------|------------------------------------------- |
| Frontend     | React.js, Redux, Axios, Tailwind/Bootstrap |
| Backend      | Node.js, Express.js, MongoDB, Mongoose     |
| Auth         | JWT (JSON Web Tokens)                      |
| Payments     | **Stripe** and **Razorpay** (user selects) |
| File Uploads | Multer, Cloudinary                         |
| Deployment   | Vercel (for now, soon full-stack pipeline) |

---

## Local Setup

### 1. Clone the repo
```bash
git clone https://github.com/dakshsawhneyy/WearSphere-Ecommerce-MERN.git
cd WearSphere-Ecommerce-MERN
```

### 2. Install dependencies
```bash
cd frontend && npm install
cd ../admin && npm install
cd ../backend && npm install
```
### Environment Variables Setup
To run the project locally, you need to set up environment variables for both frontend and backend.

## 1. Frontend (frontend/.env):
VITE_BACKEND_URL: URL of your backend API (e.g., http://localhost:4000 for local development).

VITE_RAZORPAY_KEY_ID: Razorpay Key ID for payment integration.

Example .env file for the frontend:
```bash
VITE_BACKEND_URL=http://localhost:4000
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
```
## 2. Backend (backend/.env):

MONGODB_URI: MongoDB connection string.
JWT_SECRET: Secret for JWT authentication.
CLOUDINARY_API_KEY, CLOUDINARY_SECRET_KEY, CLOUDINARY_NAME: For Cloudinary image uploads.
STRIPE_SECRET_KEY: For Stripe payments.
RAZORPAY_KEY_SECRET: Razorpay secret key.
RAZORPAY_KEY_ID: Razorpay Key ID.
ADMIN_EMAIL, ADMIN_PASSWORD: Admin login credentials for the admin panel.

Example .env file for the backend:
```bash
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret_key
CLOUDINARY_NAME=your_cloudinary_name
STRIPE_SECRET_KEY=your_stripe_secret_key
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
RAZORPAY_KEY_ID=your_razorpay_key_id
ADMIN_EMAIL=your_admin_email
ADMIN_PASSWORD=your_admin_password
```

### Running the Application Locally
After setting up the .env files, you can run the application locally:

# 1. Start Backend:
In the backend/ directory, run the following command to start the backend:
```bash
npm start
```
By default, it will run on http://localhost:4000. Make sure the backend is running before starting the frontend.

# 2. Start Frontend:
In the frontend/ directory, run:
```bash
npm run dev
```
This will start the frontend on http://localhost:3000.

# 3. Start Admin Panel:
In the admin/ directory, run:
```bash
npm run dev
```
This will start the admin panel on http://localhost:5000.

# Now, you can access:
The user panel at http://localhost:3000
The admin panel at http://localhost:5000
The backend at http://localhost:4000
