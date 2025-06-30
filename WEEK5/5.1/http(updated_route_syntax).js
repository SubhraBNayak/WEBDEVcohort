/*
    ######################### WRITING AN HTTP SERVER WITH FOUR 'GET' ENDPOINTS FOR A CALCULATOR #########################
    NEW LEARNING :- We write "/asdasd" as the route 
                    we write "/asdasd?a=1&b=2", anything after the question mark is treated as query
                    instead of writing query after the question mark we can get a dynamic route 
                    which we can directly write "asdsd/a/b", inorder to do that we have to write "asdasd/:a/:b"
                    syntax in the route-handlers, whcich was previously written as "asdasd/"  
                    
                    You wrote	            You should use
                    /route?p=1&q=2	        req.query.p, req.query.q
                    /route/1/2 (params)	    req.params.p, req.params.q (THESE CHANGES SHOULD BE DONE WHILE ACCESSING THE)

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
    p = parseFloat(req.params.p)
    q = parseFloat(req.params.q)
    if (isNaN(p) || isNaN(q)) {
        res.status(400).send("Entered query is not a number")
    }else{
        next()
    }
}

app.get("/sum/:p/:q", checkNum , function(req, res){
    p = parseFloat(req.params.p)
    q = parseFloat(req.params.q)
    let sum = p+q

    res.json({
        sum
    })
})

app.get("/subtract/:p/:q", checkNum, function(req, res){
    p = parseFloat(req.params.p)
    q = parseFloat(req.params.q)

    let diff = p-q
    res.json({
        diff
    })
})

app.get("/multiply/:p/:q",checkNum, function(req, res){
    p = parseFloat(req.params.p)
    q = parseFloat(req.params.q)

    let prod = p*q
    res.json({
        prod
    })
})

app.get("/division/:p/:q",checkNum, function(req, res){
    p = parseFloat(req.params.p)
    q = parseFloat(req.params.q)

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
