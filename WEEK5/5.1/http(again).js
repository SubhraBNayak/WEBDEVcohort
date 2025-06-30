/*
    ######################### WRITING AN HTTP SERVER WITH FOUR GET ENDPOINTS #########################
    This HTTP server consists of four end-points (all GET).
    These four endpoints represent four features.
    Feature 1 : add
    Feature 2 : subtract
    Feature 3 : multiply
    Feature 4 : divide
*/

const express = require("express")
const app = express()


app.get("/sum", function(req, res){
    p = parseFloat(req.query.p)
    q = parseFloat(req.query.q)

    let sum = p+q

    res.json({
        sum
    })
})

app.get("/subtract", function(req, res){
    p = parseFloat(req.query.p)
    q = parseFloat(req.query.q)

    let diff = p-q
    res.json({
        diff
    })
})

app.get("/multiply", function(req, res){
    p = parseFloat(req.query.p)
    q = parseFloat(req.query.q)

    let prod = p*q
    res.json({
        prod
    })
})

app.get("/division", function(req, res){
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
