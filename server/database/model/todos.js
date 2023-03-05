const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    desc:{
        type: String,
        required: true
    },
    duedate:{
        type: Date,
        required: true
    }
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;