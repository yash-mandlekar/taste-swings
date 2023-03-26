const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const food_items = require("../models/food_items");
router.get("/fooddata", async (req, res) => {
  try {
    const data = await food_items.find();
    const data1 = await mongoose.connection.db.collection("food_category").find().toArray();
    res.json({ items: data, category: data1 });
  } catch (error) {
    console.log(error);
    res.json({message:"server error"});
  }
});
module.exports = router;
