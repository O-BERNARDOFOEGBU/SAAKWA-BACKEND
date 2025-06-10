const mongoose = require("mongoose");

const ClothingItemSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ClothingItem", ClothingItemSchema);
