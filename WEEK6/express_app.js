/*
    ###################### CREATING AN EXPRESS APPLICATION ######################
    -> ADD express as a dependency
    -> create two post route, one for sign up other one for signing in
    -> use express.json as a middleware to parse the post request of the body
    -> create an in memory variable called users to where you store the username, password and a random token 
    -> create a function called generateRandomToken, that generated random tokens
*/

const express = require("express")
const app = express()

function generateRandomToken(){
    const options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 
                    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
                    'A', 'B' , 'C' , 'D' , 'E' , 'F' , 'G' , 'H' , 'I' , 'J' , 'K' , 'L' , 'M' , 
                    'N' , 'O' , 'P' , 'Q' , 'R' , 'S' , 'T' , 'U' , 'V' , 'W' , 'X' , 'Y' , 'Z' , 
                    '1' , '2' , '3' , '4' , '5' , '6' , '7' , '8' , '9']
    let token = ""
    for (let index = 0; index < options.length; index++){
        token += options[Math.floor(Math.random()*options.length)]
    }
    return token
}

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
    generateRandomToken();
})

app.listen(3000)

