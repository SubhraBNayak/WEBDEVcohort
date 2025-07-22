const express = require("express")
const app = express()
const jwt = require('jsonwebtoken')
const JWT_SECRET = "ihateyou"
const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://subhrabikiran:SwL2TrEg3vSBOv7Y@cluster0.je3gfax.mongodb.net/todo-app-database")
const {UserModel, TodoModel} = require("./mongodb")

app.use(express.json())

app.post("/signup", async function(req, res){
    const email = req.body.email
    const password = req.body.password
    const name = req.body.name

    await UserModel.create({
        email : email,
        password : password,
        name : name
    })

    res.json({
        message : "you are signed up!"
    })
})

app.post("/signin", async function(req, res){
    const email = req.body.email
    const password = req.body.password

    const user = await UserModel.findOne({
        email : email,
        password : password
    })

    if (user) {
        const token = jwt.sign({
            id : user._id.toString()
        }, JWT_SECRET)
        res.status(200).send({
            token : token
        })
    }else{
        res.status(403).send({
            message : "user credentials invalid"
        })
    }
})

app.post("/pushTodoItems", async function(req, res){
    const todoItem = req.body.todoItem
    const token = req.headers.token
    const userId = jwt.verify(token, JWT_SECRET).id

    if (userId) {
        await TodoModel.create({
            title : todoItem,
            done : false, 
            userId : userId 
        })
        res.status(200).send({
            message : "Todo updated Successfully!!"
        })
    }else{
        res.status(403).send({
            message : "user not logged in!!"
        })
    }
})

app.get("/fetchTodoItems", function(req, res){
    
})

app.listen(3000)
