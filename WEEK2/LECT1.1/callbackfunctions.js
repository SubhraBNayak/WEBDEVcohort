const fs = require('fs');

function print(err, data){
    if(err){
        console.log("the file doesn't exist")
    }else{
        console.log(data)   
    }
}

fs.readFile('LECT1.1/a.txt', 'utf-8', print)