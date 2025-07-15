/*
    ########################### CREATING A AUTHORIZATION MIDDLEWARE ###########################
*/

const express = require("express")
const app = express()

const cors = require("cors")
app.use(cors())

const jwt = require("jsonwebtoken")
const JWT_SECRET = "ihateyou"

let users = []

function authorize_user(req, res, next){
    const token = req.headers.token
    const decoded_information = jwt.verify(token, JWT_SECRET)

    // for (let index = 0; index < users.length; index++) {
    //     if (users[i].username == decoded_information) {
    //         next()
    //     }
    // }
    // res.status(403).send({
    //     message : "You are not logged in!"
    // })

    if (decoded_information.username) {
        req.username = decoded_information.username //modefying the request object as a middleware, for all the other enpoints to use
        next()
    }else{
        res.status(403).send({
            message: "you are not logged in!"
        })
    }
}

function check_user(req, res, next){
    const username = req.body.username
    const password = req.body.password

    let index = 0;
    for(index = 0 ; index<users.length ; index++){
        if(username == users[index].username && password == users[index].password){
            res.status(402).send("user already exists!")
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

app.get("/me", authorize_user, function(req, res){
    // const token = req.headers.token
    // const decoded_username = jwt.verify(token, JWT_SECRET)

    //req.username consists the username of the client. It has been created by the authorize_user middleware, it makes our lives eaiser
    //as we won't have to manually verify the jwt tokens inside the endpoints
    for (let index = 0; index < users.length; index++) {
        if(users[i].username == req.username){
            res.status(200).send({
                username : users[i].username,
                password : users[i].password
            })
            return
        }
    }
    return
})

app.listen(3000)
