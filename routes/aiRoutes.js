const express = require("express");
const axios = require("axios");
const router = express.Router();

router.post("/ask", async (req, res) => {
  const userQuestion = req.body.question;
  if (!userQuestion)
    return res.status(400).json({ message: "Question is required" });

  try {
    const apiKey = process.env.OPENAI_API_KEY;
    const response = await axios.post(
      "https://api.openai.com/v1/completions",
      {
        model: "text-davinci-003",
        prompt: `Saakwa laundry service info:\nUser: ${userQuestion}\nAI:`,
        max_tokens: 100,
      },
      { headers: { Authorization: `Bearer ${apiKey}` } }
    );

    res.json({ reply: response.data.choices[0].text.trim() });
  } catch (error) {
    res.status(500).json({ message: "Error generating response" });
  }
});

module.exports = router;
