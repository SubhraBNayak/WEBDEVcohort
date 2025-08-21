const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const _JWTSECRET = "ihateyou";
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://subhrabikiran:5EFFf23f3MN4rKaI@cluster0.je3gfax.mongodb.net/");
const {UserModel, TodoModel} = require("./mongodb");

app.use(express.json());

app.post("/signup", async function(req, res){
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    await UserModel.create({
        email : email,
        name : name
    })
})

app.post("/signin", async function(req, res){
    const email = req.body.email;
    const password = req.body.password

    const user = await UserModel.findOne({
        email : email,
        password : password
    })

    if (user) {
        const token = jwt.sign({
            id : user._id.toString()
        }, _JWTSECRET);
        localStorage.setItem("token", token);
        res.status(200).send({
            message : "User LoggedIn"
        })
    }else{
        res.status(401).send({
            message : "User not verified! Invalid Credentials"
        })
    }
})

app.post("/pushtodoitems", function(req, res){
    const token = localStorage.getItem("token");
    const userId = jwt.verify(token, _JWTSECRET).id;
    const todoItem = req.body.todoItem; 
    if (decoded) {
        TodoModel.create({
            userId : userId,
            title : todoItem
        })
    }
})

app.listen(3000);
