//THE SERVER IS LIKE A HOSPITAL WHERE PATIENT COMES TO CHECK ON KIDNEYS
const express = require('express')

const app = express()

const users = [{
    name : 'john',
    kidney:[
        {
            healthy : false
        }
    ]
}]

app.get("/", function(req, res){
    const johnkidneys = users[0].kidney;
    console.log(johnkidneys)
})

app.listen(3000)