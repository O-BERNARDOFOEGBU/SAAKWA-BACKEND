const express = require("express");
const router = express.Router();

router.get("/whatsapp", (req, res) => {
  const phoneNumber = "YOUR_WHATSAPP_NUMBER";
  const message = encodeURIComponent(
    "Hello, I'm interested in Saakwa laundry services."
  );
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  res.json({ whatsappLink });
});

module.exports = router;
