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

app.post("/signin", function(req, res){
    const email = req.body.email
    const password = req.body.password

    const user = UserModel.findOne({
        email : email,
        password : password
    })

    if (user) {
        const token = jwt.sign({
            id : user._id
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

app.post("", function(req, res){
    
})

app.get("", function(req, res){
    
})

app.listen(3000)
