const express = require("express");
const Model = require("../models/model");
const router = express.Router();

//Post Method
router.post("/postData", async (req,res) => {
    const data = new Model({
        name: req.body.name,
        brand: req.body.brand,
        quantity: req.body.quantity,
    });

    try {
        const dataToSave = await data.save();
        res.json(dataToSave);
    }catch(error) {
        res.status(400).json({ message: error.message });
    }
});

//Get all Method
router.get("/getAll", async (req,res) => {
    try{
        const data = await Model.find();
        res.json(data);
    }catch (error) {
        res.status(500).json({message: error.message});
    }
});

//Get by Id method
router.get("/getOne/:id", async (req,res) => {
    try{
        const data = await Model.findById(req.params.id);
        res.json(data);
    }catch (error) {
        res.status(500).json({message: error.message});
    }
});

//Remove by ID method
router.delete("/deleteData/:id", async(req,res) => {
    try{
        const data = await Model.findByIdAndRemove(req.params.id);
        res.json(data);
    }catch (error) {
        res.status(500).json({message: error.message});
    }
});

//Update by Id method
router.put("/updateData/:id", async(req,res) => {
    try{
        const id = req.params.id;
        const updateData = req.body;
        const options = {new : true};

        const data = await Model.findByIdAndUpdate(id, updateData, options);
       
        res.send(data);
    }catch (error) {
        res.status(500).json({message: error.message});
    }
});

module.exports = router;