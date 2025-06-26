/*
    ###################### WE WILL CREATE OUR OWN HTTP SERVER #######################
    That will be able to get, post, put and delete data from the server database and return data to the browser
 */

const express = require('express');

function calculatesum(n){
    let ans = 0;
    for (let index = 0; index < n; index++) {
        ans = ans + index
    }
    return ans;
}

const app = express();

app.get("/", function(req, res){
    const n = req.query.n
    const ans = calculatesum(n)
    res.send(ans.toString())//make sure you send the result as a string, otherwise it would think it's a status code
})

app.listen(3000)