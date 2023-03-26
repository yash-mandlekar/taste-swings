const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
router.get("/fooddata", async (req, res) => {
  try {
    const data = await mongoose.connection.db.collection("food_items").find().toArray();
    const data1 = await mongoose.connection.db.collection("food_category").find().toArray();
    res.json({ items: [], category: data1 });
  } catch (error) {
    console.log(error);
    res.send("server error");
  }
});
module.exports = router;
