/*
    ###################### CROSS ORIGIN RESOURCE SHARING ######################
    Cors is a security feature implemeneted by web browsers that controls how resources in a web server
    can be requested to another domain. It's a crucial mechanism for managing cross origin requests and 
    ensuring secure interactions between different origins of the web.
*/
const express = require("express")
const app = express()

const cors = require("cors")
app.use(cors())

app.use(express.json())

app.post("/", (req, res) => {
    const data = req.body
    console.log(data)
    res.send("data received")
})

app.listen(3000)
