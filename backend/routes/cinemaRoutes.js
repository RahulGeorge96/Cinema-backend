// routes/cinemaRoutes.js
const express = require("express");
const Cinema = require("../models/Cinema");
const router = express.Router();

// Get all cinemas
router.get("/", async (req, res) => {
  try {
    const cinemas = await Cinema.find();
    res.json(cinemas);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new cinema
router.post("/", async (req, res) => {
  const cinema = new Cinema({
    name: req.body.name,
    location: req.body.location,
    seats: req.body.seats,
  });

  try {
    const newCinema = await cinema.save();
    res.status(201).json(newCinema);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
