/*
    ##################### A HTTP SERVER FOR A HOSPITAL THAT HAS USER DATA AND PERFORMS REQUESTS #####################
        Feature 1 : GET (200) => Returns the number of kidneys and status of kidneys a user has
        Feature 2 : POST => Any time user makes a post request the server adds an unhealthy kidney
        Feature 3 : PUT => Any time user makes a put request the server updates the value of users.kidneys.Healthy : true/false
        Feature 4 :
*/
const express = require('express');
const app = express()

let users = [{
    name : "John",
    Kidneys : [
        {
            Healthy : true
        }
    ]
}]

app.use(express.json())

app.get("/", function(req, res){
    const total_users = users.length
    const user_kidneys = users[0].Kidneys.length
    const user_kidneys_status = users[0].Kidneys[0].Healthy
    res.json({  
        users,
        total_users,
        user_kidneys,
        user_kidneys_status
    })
})

app.post("/", function(req,res){
    const isHealthy = req.body.isHealthy
    users[0].Kidneys.push({
        Healthy : isHealthy
    })
    res.json({
        msg : "done!"
    })
})

app.put("/", function(req,res){
    for (let index = 0; index < users[0].Kidneys.length; index++) {
        users[0].Kidneys[index].Healthy = false
    }
    res.json({})
})

app.listen(3000)