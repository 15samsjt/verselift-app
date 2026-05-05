const express = require("express");
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("VerseLift API is running 🚀");
});

app.get("/api/verses", (req, res) => {
  const query = req.query.q;

  const verses = [
    {
      reference: "Philippians 4:6-7",
      text: "Do not be anxious about anything..."
    },
    {
      reference: "1 Peter 5:7",
      text: "Cast all your anxiety on Him because He cares for you."
    }
  ];

  res.json({
    topic: query,
    results: verses
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});