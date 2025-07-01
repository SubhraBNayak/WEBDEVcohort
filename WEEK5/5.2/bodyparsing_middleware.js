/*
    ##################### WE ARE IMPLEMENTING A BODY PARSING MIDDLEWARE #####################
    This middleware parses the various types of body sent to the server during post/put requests(usually)
    into json, the one understood by express
*/

const express = require("express")
const app = express()

app.use(express.json())

app.post("/", (req, res) => {
    const data = req.body
    console.log(data)
    res.send("data received")
})

app.listen(3000)
