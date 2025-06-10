require("dotenv").config();
const express = require("express");
// const mongoose = require("mongoose");
const cors = require("cors");
const connectDB = require("./config/db"); // Import database config

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
connectDB();

// Connect to MongoDB
// mongoose
//   .connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("MongoDB Connected"))
//   .catch((err) => console.error("Database Error:", err));

app.get("/", (req, res) => {
  res.send("Saakwa API is running!");
});

// Import routes
const clothingRoutes = require("./routes/clothingRoutes");
const orderRoutes = require("./routes/orderRoutes");
const chatRoutes = require("./routes/chatRoutes");
const aiRoutes = require("./routes/aiRoutes");

app.use("/api/clothing", clothingRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/ai", aiRoutes);
app.use("/uploads", express.static("uploads"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");
// const connectDB = require("./config/db"); // Import database config

// const app = express();
// app.use(express.json());
// app.use(cors());

// // Connect to MongoDB
// connectDB();

// // Import routes
// const clothingRoutes = require("./routes/clothingRoutes");
// const orderRoutes = require("./routes/orderRoutes");
// const chatRoutes = require("./routes/chatRoutes");
// const aiRoutes = require("./routes/aiRoutes");

// app.use("/api/clothing", clothingRoutes);
// app.use("/api/orders", orderRoutes);
// app.use("/api/chat", chatRoutes);
// app.use("/api/ai", aiRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
