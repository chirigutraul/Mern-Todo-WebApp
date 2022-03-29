const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require ('./models/User');
const dotenv = require ('dotenv');
dotenv.config();

const app = express();

// changes made for deplyoment
const path = require('path');
app.use(express.static(path.join(__dirname, "client" , "build")));
//

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.DATABASE_URI);

app.get("/users/read/:username" , async(req,res) => {
    User.findOne({username:req.params.username},(err,result) => {
        if(err){
            res.send(err);
        } else{
            res.send(result);
        }
    })
});

app.get("/users/auth/:username" , async(req,res) => {
    User.findOne({username:req.params.username},(err,result) => {
        if(err){
            res.send(err);
        } else{
            res.send(result);
        }
    })
});

app.post("/users/login", async(req,res)=>{
    User.findOne({username:req.body.username}, (err,foundUser) => {
        if(err){
            res.send(err)
        } else{
            if(foundUser){
                if (foundUser.password === req.body.password){
                    foundUser.isLogged=true;
                    foundUser.save();
                    res.send(true);
                }
                if (foundUser.password != req.body.password){
                    res.send(false);
                }
            }
            if(!foundUser){
                res.send(false);
            }
        }
    });
})

app.post("/users/:username/logout", (req,res)=>{
    User.findOneAndUpdate({username:req.params.username},{isLogged:false}, (err,foundUser)=>{
        if(err) res.send(err);
        else{
            foundUser.save();
            res.send(foundUser);
            }
    })

});

app.post("/users/register", (req,res) => {
    try{
        const newUser = new User({
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            tasks: req.body.tasks,
            isLogged: req.body.isLogged4
        });

        User.findOne({username: newUser.username}, (err,foundUser) => {
            if(err) console.log(err);
            if(foundUser){
                res.send('Username not available')
            }
            else {
                if(!newUser.username || !newUser.password || !newUser.email){
                res.send('Please complete all fields')
                } else {
                    if(newUser.password !== req.body.confirmPassword){
                        res.send("Password don't match.")
                    }
                    else {
                        res.send("User successfully registered!")
                        newUser.save();
                    }
                }
            }
        })
    } catch(err){
        res.send(err);
    }
});

app.post("/users/update/:userId", (req,res) => {
    try{
        User.findById(req.params.userId, (err,foundUser)=>{
            foundUser.tasks.push(req.body.userTask);
            foundUser.save();
            res.send(foundUser);
        })
    } catch(err){
        console.log(err.response);
    }
});

app.post("/users/:linkUserId/delete", (req,res) => {
    User.findById({_id:req.params.linkUserId} , (err, foundUser)=>{
        foundUser.tasks.splice(req.body.deletedTaskIndex,1);
        foundUser.save();
        res.send(foundUser);
    })
})

//changes made for deployment

app.get("*", (req,res)=>{
    res.sendFile(path.join(__dirname,"client" ,"src" , "index.js"));
})
// eo changed made for deployment

app.listen(process.env.PORT || 3001, () => {
    console.log (`Backend server running on port ${process.env.PORT || 3001}`);
})