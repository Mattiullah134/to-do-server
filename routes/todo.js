const express = require('express')
const Todos = require('../models/TodoUser')
const router = express.Router()

router.get("/", async (req, res) => {
    try {
        const data = await Todos.find();
        res.status(200).json({ success: true, data });

    } catch (error) {
        res.status(401).json({ success: false, message: "Something went wrong" })

    }
})
router.post("/add", async (req, res) => {
    try {
        const data = await Todos(req.body).save();
        res.status(200).json({ success: true, message: "New todo add successfully", data });
    } catch (error) {
        res.status(401).json({ success: false, message: "Something went wrong" })
    }
})
module.exports = router