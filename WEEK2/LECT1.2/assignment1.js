//create a promisified version of fs.readFile, fs.writeFile, cleanFile(removes all the unwanted spaces in a text file)
const fs = require('fs');

let data;

let p1 = new Promise(
    (resolve, reject) => {
        data = fs.readFile('E:/VS_JS/WEEK2/a.txt', 'utf-8',
            (err, data) => //call back function
            {
                if (err) reject(err);
                else resolve(data); //resolve only when the file is read, as fs.readfile is an asynchronus function
            }
        );//used a callback function to return the data. 
    }
);

/*
    p1.then(console.log(data)); => 
        1. don't use this to log the result of promise as console.log(data) called even before the file is read. 
        2. thus undefined gets passed to then()
        3. use (result) => {function} to proceed with the resolved information
    p1.catch(console.log(err)); =>
        1. it posses the same problem as before, it logs err before the resolve or reject decision is made
        2. use (err) => {function} to correctly use the reject information
*/

//if p2 promise is resolved then the new data gets written using writeFile

/*
1. moved p2 inside of p1, as p1 is an async operation, and it might totally be possible that p1 will be not finished
and p2 is called before that.
2. in this case 'data' becomes undefined as p1 is not resolved yet and p2 will log undefined if it's written separately.
3. if p2 is written inside of then() in p1, it will only start operation after the completion of p1 promise.
*/

p1.then(
    (result) => {
        data = result; //storing the result in 'data' as it could be furthur used in other functions
        console.log(data);
        
        let p2 = new Promise(
            (resolve, reject) => {
                resolve((data).replace(/\s+/g, ' ').trim());//don't use "a.txt" instead use 'data', we're using regex to cleanup the file.
            }
        );
        
        p2
        .then(
            (result) => {
                fs.writeFile('E:/VS_JS/WEEK2/a.txt', result, 'utf-8',
                    (err) =>{
                        if(err){
                            console.log("an error occured", err);
                        }else{
                            console.log("file cleaned and saved successfully");
                        }
                    }
                )
            }
        )
            .catch(
            (err) => {
                console.log("an error occured", err);
            }
        )
    }
);