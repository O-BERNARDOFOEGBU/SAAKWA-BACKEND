const express = require("express");
const ClothingItem = require("../models/clothingItem");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const clothingItems = await ClothingItem.find();
    res.json(clothingItems);
  } catch (error) {
    res.status(500).json({ message: "Error fetching clothing items" });
  }
});

module.exports = router;
