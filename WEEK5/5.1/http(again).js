/*
    ######################### WRITING AN HTTP SERVER WITH FOUR GET ENDPOINTS FOR A CALCULATOR #########################
    This HTTP server consists of four end-points (all GET).
    These four endpoints represent four features.
    Feature 1 : add
    Feature 2 : subtract
    Feature 3 : multiply
    Feature 4 : divide
    Feature 5 : check if inputted query is an integer or not (use middlewares)
                so every route-handler will have to go through a middleware 
                known as checkNum
*/

const express = require("express")
const app = express()

function checkNum(req, res, next){
    p = parseFloat(req.query.p)
    q = parseFloat(req.query.q)
    if (isNaN(p) && isNaN(q)) {
        res.status(400).send("Entered query is not a number")
    }else{
        next()
    }
}

app.get("/sum", checkNum , function(req, res){
    p = parseFloat(req.query.p)
    q = parseFloat(req.query.q)

    let sum = p+q

    res.json({
        sum
    })
})

app.get("/subtract", checkNum, function(req, res){
    p = parseFloat(req.query.p)
    q = parseFloat(req.query.q)

    let diff = p-q
    res.json({
        diff
    })
})

app.get("/multiply",checkNum, function(req, res){
    p = parseFloat(req.query.p)
    q = parseFloat(req.query.q)

    let prod = p*q
    res.json({
        prod
    })
})

app.get("/division",checkNum, function(req, res){
    p = parseFloat(req.query.p)
    q = parseFloat(req.query.q)

    if (q==0) {
       res.status(400).send("can't divide by 0") 
    }else{
        let div  = p/q
        res.json({
            div
        })
    }
})

app.listen(3000)
