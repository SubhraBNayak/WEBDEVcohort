/*
    ########################### CREATING A AUTHORIZATION MIDDLEWARE ###########################
*/

const express = require("express")
const app = express()

const jwt = require("jsonwebtoken")
const JWT_SECRET = "ihateyou"

let users = []

function authorize(){}

function check_user(req, res, next){
    const username = req.body.username
    const password = req.body.password

    let index = 0;
    for(index = 0 ; index<users.length ; index++){
        if(username == users[index].username && password == users[index].password){
            res.status(403).send("user already exists!")
            return
        }
    }
    next()
}

function verify_user(req, res, next){
    const username = req.body.username
    const password = req.body.password

    let index = 0;
    for(index = 0 ; index<users.length ; index++){
        if(username == users[index].username && password == users[index].password){
            next()
        }
    }
    res.status(403).send("user credentials invalid!")
    return
}

function check_username(req, res, next){
    const username = req.body.username
    const password = req.body.password

    let index = 0
    for (index = 0; index < users.length; index++) {
        if(username == users[index].username){
            res.status(403).send({
                message : "username already taken!"
            })
            return
        }       
    }
    next()
}

app.use(express.json())

app.post("/signup", check_user , check_username ,function(req, res){
    const username = req.body.username
    const password = req.body.password

    users.push({
        "username" : username,
        "password" : password,
    })  
        res.status(200).send({
        message : "user signed up!"
    })
})

app.post("/signin", verify_user, function(req, res){
    const username = req.body.username
    const password = req.body.password

    const token = jwt.sign({
        username
    }, JWT_SECRET)

    res.status(200).json({
        token : token
    })
})

app.listen(3000)
