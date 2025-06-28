/*
    ########################### WE WILL WRITE MIDDLEWARE USING EXPRESS ###########################
    Given the same situation as before, in the function ticket_counter which previously took arguments from the ride1/ride2 functions
    Now will take input arguments directly as req, res. The HTTP request requiring a middleware, will take the function name as 
    input argument, along with the path and callback function
    We can introduce middleware individually in the http request, or we can introduce a middleware universally like app.use()
    that checks for all the requests
*/

const express = require("express")
const app = express()

function ticket_counter_middleware(req, res, next){
    const age = parseInt(req.query.age?.trim())
    const money = parseInt(req.query.money?.trim())
    if (age >= 18 && money >= 100){
        next()
    }else{
        res.send("YOU DON'T MEET THE BARE MINIMUM CRITERIA")
    }
}

app.get("/ride1", ticket_counter_middleware, (req,res)=>{
    res.send("you can avail ride1 services")
})

app.get("/ride2", ticket_counter_middleware, (req,res)=>{
    res.send("you can avail ride2 services")
})

app.listen(3000)