const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    }
});

const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;