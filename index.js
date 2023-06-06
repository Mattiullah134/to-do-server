const express = require('express');
const compression = require('compression')
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();
const handleUserTodos = require('./routes/todo');
dotenv.config('./.env')
app.use(compression())
const connectionToMongoose = require('./connection/mongooseconnec');
app.use(cors());
app.use(express.json());
app.use('/user/todo', handleUserTodos)
app.get("/", (req, res) => {
    res.json({ name: "Matti ullah khokhar" })
})

app.listen(8000, () => {
    connectionToMongoose();
    console.log(`App listenig on the port 8000`);
})