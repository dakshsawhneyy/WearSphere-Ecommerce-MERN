# 🛒 WearSphere - Full-Stack E-commerce Website (MERN)

**WearSphere** is a modern, full-featured e-commerce web app built using the **MERN stack**. It includes a customer-facing frontend, a powerful admin dashboard, secure JWT authentication, **dual payment gateway support** via **Stripe and Razorpay**, and RESTful APIs — all ready for production and CI/CD deployment.

---

## 🚀 Features

### 👤 User Panel (`frontend/`)
- Browse products by category
- Add/remove items from cart
- Register/Login with JWT
- Checkout and pay using Stripe or Razorpay
- Order history and details

### 🛠️ Admin Panel (`admin/`)
- Login as admin
- Add, update, and delete products
- Manage users and orders
- View revenue and order analytics

### 🔐 Backend (`backend/`)
- REST APIs using Express
- MongoDB with Mongoose
- JWT-based authentication
- Product image uploads via Multer + Cloudinary
- Integrated **Stripe and Razorpay payment gateways**
- Order and user management routes

---

## 🧰 Tech Stack

| Layer        | Technologies                               |
|--------------|------------------------------------------- |
| Frontend     | React.js, Redux, Axios, Tailwind/Bootstrap |
| Backend      | Node.js, Express.js, MongoDB, Mongoose     |
| Auth         | JWT (JSON Web Tokens)                      |
| Payments     | **Stripe** and **Razorpay** (user selects) |
| File Uploads | Multer, Cloudinary                         |
| Deployment   | Vercel (for now, soon full-stack pipeline) |

---

## ⚙️ Local Setup

### 1. Clone the repo
```bash
git clone https://github.com/dakshsawhneyy/WearSphere-Ecommerce-MERN.git
cd WearSphere-Ecommerce-MERN

