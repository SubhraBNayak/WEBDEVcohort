const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const _JWTSECRET = "ihateyou";
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://subhrabikiran:LeZshcaShnL3DEnU@cluster0.je3gfax.mongodb.net/todo-app-database");
const {UserModel, TodoModel} = require("./mongodb");

function authorization(req, res, next){
    const token = req.headers.token;
    const userId = jwt.verify(token, _JWTSECRET);
    if (userId) {
        req.id = userId.id;
        res.status(200);
        next()
    }else{
        res.status(401);
    }
}

app.use(express.json());

app.post("/signup", async function(req, res){
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    await UserModel.create({
        email : email,
        name : name,
        password : password
    })

    res.json(200).send({
        message : "you are signed up!"
    })
})

app.post("/signin", async function(req, res){
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({
        email : email,
        password : password
    })

    if (user) {
        const token = jwt.sign({
            id : user._id.toString()
        }, _JWTSECRET);
        res.status(200).send({
            token : token
        })
    }else{
        res.status(401).send({
            message : "User not verified! Invalid Credentials"
        })
    }
})

app.post("/pushTodoItems", authorization, async function(req, res){
    const userId = req.id;
    const todoItem = req.body.todoItem;

    await TodoModel.create({
        userId : userId,
        title : todoItem
    })
    
    res.status(200).send({
        message : "todos updated!"
    })
})

app.get("/getTodoItems", authorization, async function(req, res){
    const userId = req.id;
    if (userId) {
        const todos = await TodoModel.find({
            userId : userId
        })
        res.status(200).send({
            todos
        })
    }else{
        res.status(401).send({
            message : "jsonwebtoken not verified"
        })
    }
})

app.listen(3000);
