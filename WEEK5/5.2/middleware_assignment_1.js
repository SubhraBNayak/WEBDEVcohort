/*
    ###################### LOG THE HEADERS THROUGH A MIDDLEWARE ######################
    Create a middle-ware that logs each incoming request's HTTP method, url and timestamp.
    approach :- 
        create a function that takes req, res and next a arguments, log the http method, url and timestamp
        use app.use(function) on top of all the route handlers
*/
const express = require("express")
const app = express()

function log_header(req, res, next){
    console.log("METHOD:"+req.method)
    console.log("URL:"+req.url)
    console.log("ORIGINAL URL:"+req.originalUrl)
    console.log("TIME OF REQUEST:"+ new Date().toISOString())
    next()
}

function checkNum(req, res, next){
    p = parseFloat(req.params.p)
    q = parseFloat(req.params.q)
    if (isNaN(p) || isNaN(q)) {
        res.status(400).send("Entered query is not a number")
    }else{
        next()
    }
}

app.use(log_header)

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
