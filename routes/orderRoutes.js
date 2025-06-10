const express = require("express");
const multer = require("multer");
const Order = require("../models/Order");

const router = express.Router();
const allowedLocations = ["Victoria Island", "Lekki", "Ajah"];

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
});
const upload = multer({ storage });

router.post("/create", upload.single("receipt"), async (req, res) => {
  try {
    const {
      name,
      phone,
      address,
      clothings,
      totalPrice,
      pickupDay,
      deliveryDay,
    } = req.body;
    const paymentReceipt = req.file ? req.file.path : null;

    if (!allowedLocations.some((loc) => address.includes(loc))) {
      return res
        .status(400)
        .json({ message: "Service is only available in VI, Lekki, and Ajah." });
    }

    const allowedDays = ["Thursday", "Saturday"];
    if (
      !allowedDays.includes(pickupDay) ||
      !allowedDays.includes(deliveryDay)
    ) {
      return res.status(400).json({
        message:
          "Invalid pickup or delivery day. Only Thursdays and Saturdays are allowed.",
      });
    }

    const newOrder = new Order({
      name,
      phone,
      address,
      clothings: JSON.parse(clothings),
      totalPrice,
      pickupDay,
      deliveryDay,
      paymentReceipt,
    });

    await newOrder.save();
    res
      .status(201)
      .json({ message: "Order placed successfully", orderId: newOrder._id });
  } catch (error) {
    res.status(500).json({ message: "Error creating order", error });
  }
});

module.exports = router;
