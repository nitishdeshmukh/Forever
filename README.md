# Forever

A modern MERN-stack (MongoDB, Express, React, Node.js) e-commerce platform featuring real-time shopping experiences, secure payments, and comprehensive admin management for a complete online retail solution.

---

## Highlights

- **Tech Stack**: MERN (MongoDB, Express, React, Node.js) + Tailwind CSS
- **Authentication**: Secure JWT-based user and admin authentication
- **Product Management**: Dynamic product catalog with advanced filtering and search
- **Shopping Experience**: Real-time cart updates and seamless checkout process
- **Payment Integration**: Multiple payment options including Stripe, Razorpay, and Cash on Delivery
- **Admin Dashboard**: Complete product, order, and user management system
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Production Ready**: Optimized for deployment with comprehensive error handling

---

## ⚙️ Features

### User Features

- **Authentication & Authorization**
  - Secure user registration and login with JWT
  - Protected routes and session management
  - Profile management and order history

- **Product Browsing**
  - Browse latest collections and best-selling products
  - Advanced filtering by category, price, and specifications
  - Product search functionality
  - Detailed product pages with image galleries

- **Shopping Cart**
  - Add/remove products with size and quantity selection
  - Real-time cart updates and persistent storage
  - Cart management and checkout process

- **Order Management**
  - Multiple payment methods (COD, Stripe, Razorpay)
  - Order tracking and history
  - Delivery address management

### Admin Features

- **Product Management**
  - Add, edit, and delete products
  - Multiple product image uploads
  - Inventory tracking and management

- **Order Administration**
  - View and manage all customer orders
  - Update order status and tracking
  - Revenue and sales analytics

- **User Management**
  - Customer account oversight
  - Order history and user analytics

---

## 🧩 Setup & Installation

1. **Clone the repository**

```bash
git clone https://github.com/nitishdeshmukh/Forever.git
cd Forever
```

2. **Environment Configuration**

Create `.env` files in both **frontend/** and **backend/** directories with the following variables:

**Backend Environment Variables**
```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
STRIPE_SECRET_KEY=your_stripe_secret_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_SECRET_KEY=your_razorpay_secret_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
PORT=4000
```

**Frontend Environment Variables**
```
REACT_APP_BACKEND_URL=http://localhost:4000
REACT_APP_STRIPE_PUBLIC_KEY=your_stripe_public_key
```

3. **Install Dependencies**

**Install backend dependencies**
```bash
cd backend
npm install
```

**Install frontend dependencies**
```bash
cd ../frontend
npm install
```

**Install admin dependencies**
```bash
cd ../admin
npm install
```

4. **Development Mode**

**Start backend server**
```bash
cd backend
npm run server
```

**Start frontend application**
```bash
cd ../frontend
npm run dev
```

**Start admin panel**
```bash
cd ../admin
npm run dev
```

5. **Production Build**

**Build frontend for production**
```bash
cd frontend
npm run build
```

**Build admin panel for production**
```bash
cd ../admin
npm run build
```

**Start production server**
```bash
cd ../backend
npm start
```

6. **Access the Application**

- **Frontend**: [http://localhost:3000](http://localhost:3000)
- **Backend API**: [http://localhost:4000](http://localhost:4000)
- **Admin Panel**: [http://localhost:5173](http://localhost:5173)

---

## 🛠️ Tech Stack

- **Frontend**: React.js, Tailwind CSS, React Router
- **Backend**: Node.js, Express.js, MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **Payments**: Stripe, Razorpay
- **Image Storage**: Cloudinary
- **Database**: MongoDB with Mongoose ODM
- **Deployment**: Vercel (Frontend), Railway/Heroku (Backend)

---

## 📁 Project Structure

```
Forever/
├── frontend/          # React frontend application
├── backend/           # Node.js backend API
├── admin/             # Admin dashboard
└── README.md          # Project documentation
```

---
