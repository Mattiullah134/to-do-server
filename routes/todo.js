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
router.put('/edit/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const changeTask = await Todos.findByIdAndUpdate({ _id: id }, req.body, { change: true });
        res.status(200).json({ success: true, message: "Task completed successfully", changeTask })
    } catch (error) {
        res.status(401).json({ success: false, message: "Something went wrong" })

    }
})
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const changeTask = await Todos.deleteOne({ _id: id });
        res.status(200).json({ success: true, message: "Deleted Successfully", changeTask })
    } catch (error) {
        res.status(401).json({ success: false, message: "Something went wrong" })

    }
})
module.exports = router