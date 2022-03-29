const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        minlength:5
    },
    password:{
        type:String,
        required:true,
        minlength:5
    },
    email:{
        type:String,
        required:true,
        minlength:4
    },
    tasks:{
        type:[String]
    },
    isLogged:{
        type:Boolean
    }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;