/*
    ####################### SERVER OF THE LOGIN PAGE #######################
    1. feat => signup, pushing the user details into a users array
            => introduce a middleware that checks if someone exists with the same username
            two different users can't have the same username. (error 409 conflict)
            => introduce a middleware that should check if a user with same username, password exists.
            if so, thorw an error, "user already exists! try signing in".
    2. feat => signin, user can enter details to avail the features, after authentication
    3. feat => auth, authorizes the user details
*/
const express = require("express")
const app = express()

const jwt = require("jsonwebtoken")
const JWT_SECRET = "nayaksoftwarepvtltd"

const cors = require("cors")

let users = []

function authorize_user(req, res, next){
    const username = req.body.username
    const password = req.body.password

    for (let index = 0; index < users.length; index++) {
        if (username === users[index].username && password === users[index].password) {
            req.username = username
            return next()
        }
    }
    return res.status(401).send({
        message: "User authentication failed! Check the username/password again"
    })
}

function check_username(req, res, next){
    const username = req.body.username

    for (let index = 0; index < users.length; index++) {
        if (username === users[index].username) {
            return res.status(409).send({
                message : "username already exists! try different username"
            })
        }
    }
    next()
}

function check_user(req, res, next){
    const username = req.body.username
    const password = req.body.password
    
    for (let index = 0; index < users.length; index++) {
        if (username === users[index].username && password === users[index].password) {
            return res.status(409).send({
                message: "user already exists! try signing in"
            })
        }
    }
    next()
}

app.use(express.json())
app.use(cors())
app.use(express.static("public"))

app.get("/", function(req, res){
    console.log("backend is running!")
})

app.post("/signup", check_user, check_username, function(req, res){
    const username = req.body.username
    const password = req.body.password
    
    users.push({
        username : username,
        password : password
    })

    res.status(200).send({
        message : "sign-up successful"
    })
})

app.post("/signin", authorize_user, function(req, res){
    const username = req.username
    const token = jwt.sign({username}, JWT_SECRET)

    res.status(200).json({
        token : token
    })
})

app.get("/auth", function (req, res){
    const token = req.headers.token
    const username = jwt.verify(token, JWT_SECRET)

    if (username) {
        res.send(200)
    }else{
        res.send(401)
    }
})

app.listen(3000)
