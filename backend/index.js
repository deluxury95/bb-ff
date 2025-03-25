// const express = require("express");
// const app = express();
// const cors = require("cors");

// const mongoose = require("mongoose");
// const port = process.env.PORT || 5000;
// require('dotenv').config()

// // middleware
// app.use(express.json());
// app.use(cors({
//     origin: ['http://localhost:5173' https://frontend-book-store-sigma.vercel.app],
//     credentials: true
// }))

// // routes
// const bookRoutes = require('./src/books/book.route');
// const orderRoutes = require("./src/orders/order.route")
// const userRoutes =  require("./src/users/user.route")
// const adminRoutes = require("./src/stats/admin.stats")

// app.use("/api/books", bookRoutes)
// app.use("/api/orders", orderRoutes)
// app.use("/api/auth", userRoutes)
// app.use("/api/admin", adminRoutes)

// async function main() {
//   await mongoose.connect(process.env.DB_URL);
//   app.use("/", (req, res) => {
//     res.send("Book Store Server is running!");
//   });
// }

// main().then(() => console.log("Mongodb connect successfully!")).catch(err => console.log(err));

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });


const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// CORS configuration
const allowedOrigins = [
  "http://localhost:5173", 
  "https://frontend-book-store-sigma.vercel.app"
];
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true); // Allow the request
    } else {
      callback(new Error("CORS not allowed"), false); // Reject the request
    }
  },
  credentials: true,
}));

// Routes
const bookRoutes = require("./src/books/book.route");
const orderRoutes = require("./src/orders/order.route");
const userRoutes = require("./src/users/user.route");
const adminRoutes = require("./src/stats/admin.stats");

app.use("/api/books", bookRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/auth", userRoutes);
app.use("/api/admin", adminRoutes);

// Root route
app.get("/", (req, res) => {
  res.send("Book Store Server is running!");
});

// MongoDB connection and server start
async function main() {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully!");
    
    // Start server after DB connection
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1); // Exit process if MongoDB connection fails
  }
}

main();
