const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    clothings: [{ item: String, price: Number }],
    totalPrice: { type: Number, required: true },
    pickupDay: { type: String, enum: ["Thursday", "Saturday"], required: true },
    deliveryDay: {
      type: String,
      enum: ["Thursday", "Saturday"],
      required: true,
    },
    paymentReceipt: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);
