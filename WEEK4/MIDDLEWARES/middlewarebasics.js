/*
    ########################### EXPLORING INTERNAL LOGIC OF MIDDLE WARES###########################
    Given the situation, An amusement park has a ticket counter, where it checks your age and the money you have.
    If your age meets the requirements and you have enough money you can avail the services.
    If you fail to meet the criteria you'll get an error message.
*/
const express = require("express");
const app = express();

//The ticket_counter here acts as a middleware checking if the user meets bare-minimum criteria to avail the resource
//This is the exact concept of middleware working in the express library
function ticket_counter(age, money){
    if (age>=18 && money>=100) {
        return true     
    }else{
        return false
    }
}

app.get("/ride1", (req,res)=>{
    const age = parseInt(req.query.age?.trim());
    const money = parseInt(req.query.money?.trim());
    if (ticket_counter(age,money)) {
        res.send("You can avail the ride1 services")
    }else{
        res.send("You don't meet the bare minimum criteria")
    }
})

app.get("/ride2", (req,res)=>{
    const age = parseInt(req.query.age?.trim());
    const money = parseInt(req.query.money?.trim());
    if (ticket_counter(age,money)) {
        res.send("You can avail the ride2 services")
    }else{
        res.send("You don't meet the bare minimum criteria")
    }
})

app.listen(3000)
