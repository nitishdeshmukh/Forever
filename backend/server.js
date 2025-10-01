import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mangodb.js";
import { connectCloudinary } from "./config/cloudinary.js";
import userRouter from "./routes/userRoutes.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

// App Config
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

const allowedOrigins = process.env.ALLOWED_ORIGINS.split(",").map((o) =>
  o.trim()
);

const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests without an Origin header (like mobile apps or curl)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    // Deny everything else
    return callback(new Error("Not allowed by CORS"));
  },
  credentials: true,
};

// Middleware configuration
app.use(express.json());
app.use(cors(corsOptions));

// Api Endpoints
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);
app.get("/", (request, response) => {
  response.send("API Working");
});

app.listen(port, () => console.log("Server Started on PORT :" + port));
