const mongoose = require('mongoose');
const { Schema } = mongoose;

const TodoSchema = new Schema({
    title: {
        type: String,
        require: true
    },

    date: {
        type: String,
        require: true
    },
    email: {
        type: String,
        default: "mattikhokhar01@gmail.com"
    },
    isCompleted: {
        type: Boolean,
        default: false
    },
    isImportant: {
        type: Boolean,
        default: false
    }

})

const Todos = mongoose.model('Todo', TodoSchema);
module.exports = Todos;