# FOREVER E-commerce Application 🛒

A full-featured, modern E-commerce platform built with the MERN stack (MongoDB, Express, React, Node.js). This application features a sleek frontend for users, a robust backend API, and a dedicated admin panel for product and order management.

## 🚀 Live Demo

- **Frontend:** [Click Here](https://e-commerce-app-frontend-puce.vercel.app/)
- **Backend API:** [View API](https://e-commerce-app-backend-eta.vercel.app/)
- **Admin Panel:** [View Admin](https://e-commerce-app-admin-ten.vercel.app/)

---

## ✨ Features

- **🔐 Secure Authentication:** User registration and login powered by JWT.
- **💳 Payment Integration:** Seamless payments via **Stripe**.
- **📦 Order Management:** Real-time order tracking and status updates.
- **🖼️ Image Management:** Fast and secure image hosting with **Cloudinary**.
- **📱 Responsive Design:** A mobile-first, user-friendly interface.
- **🛠️ Admin Panel:** Dedicated dashboard for managing products, categories, and orders.
- **🛒 Shopping Cart:** Persistent cart functionality for logged-in users.

---

## 🛠️ Tech Stack

### Frontend
- **React.js** (Vite)
- **React Router** (Navigation)
- **Axios** (API Calls)
- **React Toastify** (Notifications)
- **Tailwind CSS** (Styling)

### Backend
- **Node.js** & **Express**
- **MongoDB** (Mongoose ODM)
- **JWT** (JSON Web Tokens)
- **Cors** (Security)

---

## 🔧 Recent Improvements & Fixes

- **Payment Fix:** Optimized the Stripe verification logic to ensures orders are marked as "Placed" immediately after successful payment.
- **Razorpay Cleanup:** Completely removed all Razorpay dependencies and assets for a cleaner codebase.
- **CORS Resolution:** Fixed "CORS Policy" errors, allowing seamless communication between the Vercel-hosted frontend and backend.
- **Build Optimization:** Resolved case-sensitivity issues that were causing Vercel build failures on Linux environments.
- **Infrastructure:** Modernized `vercel.json` configurations to use "Zero Config" deployments.
- **Database Stability:** Enhanced MongoDB connection logic with robust URI handling and timeout prevention.

---

## 🛠️ Getting Started

### Prerequisites
- Node.js installed
- MongoDB Atlas account
- Stripe & Cloudinary API keys

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Sweta1703/E-Commerce-App.git
   ```

2. Install dependencies for all parts:
   ```bash
   # Root
   cd backend && npm install
   cd ../frontend && npm install
   cd ../admin && npm install
   ```

3. Set up environment variables (.env):
   Create a `.env` file in `backend`, `frontend`, and `admin` with your respective credentials.

4. Run the application:
   ```bash
   # Backend
   npm run server
   # Frontend / Admin
   npm run dev
   ```

---

## 📄 License
This project is for educational purposes. Feel free to use and modify it!

---
*Created with ❤️ by Sweta1703*
