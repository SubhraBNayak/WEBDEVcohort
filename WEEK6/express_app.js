/*
    ###################### CREATING AN EXPRESS APPLICATION ######################
    -> ADD express as a dependency
    -> create two post route, one for sign up other one for signing in
    -> use express.json as a middleware to parse the post   request of the body
    -> create an in memory variable called users to where you store the username, password and a random token 
*/

const express = require("express")
const app = express()

app.use(express.json())//parses the incoming requests

const users = []

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

})

app.listen(3000)
