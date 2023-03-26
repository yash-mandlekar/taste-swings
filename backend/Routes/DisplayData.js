const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
router.get('/fooddata',async (req,res)=>{
    try{
        const fetch_data = mongoose.connection.db.collection("food_items");
        const data = await fetch_data.find({}).toArray()
        const fetch_data1 = mongoose.connection.db.collection("food_category");
        const data1 = await fetch_data1.find({}).toArray()
        res.json([data,data1]);
    }
    catch(error){
        console.log(error);
        res.send("server error");
    }
})
module.exports=router;