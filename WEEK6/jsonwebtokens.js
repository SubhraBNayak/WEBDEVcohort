/*
    ######################### JSON WEB TOKENS #########################
    -> add a dependency "jsonwebtoken" library 
    -> get rid of generateRandomToken function
    JWT or json-web-tokens are compact and self contained way to represent information between two parties. 
    They are commonly used for authentication and information exchange in webapps

    jwts are stateless, jwts contain all the information required to authenticate a request, so the server don't need
    to store the session data. All the data is stored in the token itself. (so we have to convert the username to a jwt)

    It reduces load on the server, we don't need to hit the server again and again to authenticate a user.
    If a user has a jwt secret token, it essentially means he has signedin(loggedin) before, and has already been authenticated.

    If the user wants to log himself out, an additional route can be created that deletes the jwt secret token and user has to login 
    again for a jwt to be created. 
*/

const express = require("express")
const app = express()

const jwt = require("jsonwebtoken")
const JWT_SECRET = "USER_APP"

const users = []

app.use(express.json())//parses the incoming requests

app.post("/signup", (req,res) => {
    const username = req.body.username
    const password = req.body.password

    users.push({
        "username" : username,
        "password" : password
    })

    res.json({
        message : "you are signed in"
    })
})

app.post("/signin", (req, res) => {
    const username = req.body.username
    const password = req.body.password
    let user = ""
    for (let index = 0; index < users.length; index++) {
        if (username === users[index].username && password === users[index].password) {
            user = users[index]
            break;
        }
    }
    if (user) {//jwt.sign({the thing to be signed}, jwt_secret), this creates a token, that the user can use for furthur requests.
        const token = jwt.sign({
            "username" : username
        }, JWT_SECRET)
        res.send({
            token
        })
    }else{
        res.status(403).send({
            message : "invalid username or password"
        })
    }
})

// this end-point is to get information of the user stored in the database
app.get("/me", (req, res) => {
    const token = req.headers['token'] // instead of req.header.token
    const decodedInfo = jwt.verify(token, JWT_SECRET)
    const username = decodedInfo.username
    let user = ""

    for (let index = 0; index < users.length; index++) {
        if (username == users[index].username) {
            user = users[index]
        }
    }
    if (user) {
        res.status(200).send({
            user
        })
    }else{
        res.status(403).send({
            message : "Invalid Token"
        })
    }
})

app.listen(3000)
