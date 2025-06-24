const { rejects } = require("assert");
const { resolve } = require("path");

// //print data 1, after 2sec print data 2, after 2sec print data 3

function getdata(dataid, getnextdata){
    setTimeout(() => {
        console.log(dataid);
        if(getnextdata){
            getnextdata();
        }
    }, 2000);
}

//this is what call-back hell looks like
getdata(1, ()=>{
    console.log("getting data2...")
    getdata(2, () => {
        console.log("getting data3...")
        getdata(3);
    })
})

// /*create a promise to resolve the callback hell */

function getdatapromisified(data, nextdata){
    return new Promise((resolve, rejects) => {
        setTimeout(() => {
            console.log(data);
            resolve("waiting for nextdata...");//I can pass anything inside resolve, it can be a message or print any variable. 
            if (nextdata) {
                nextdata();
            }else{
                reject();
            }
        }, 2000);
    })
}