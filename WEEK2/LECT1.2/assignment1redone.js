//redoing assignment1
/*create a promisified version of readfile, cleanfile(clean the text in the file, trim any spaces left and right, and delete any unecessary spaces) */

const { rejects } = require("assert");
const { resolve } = require("path");
const fs = require('fs');

/*writing the promisified readfile, cleanfile and writefile function */
function readfile() {
    return new Promise((resolve, reject) => {
        console.log("reading file...")
        fs.readFile('a.txt', 'utf-8', (err, data) => {
            if (data) {
                console.log("passing data to the next promisified function!");
                resolve(data);
            } else {
                reject(err);
            }
        })
    })
}

function cleanfile(data) {
    return new Promise((resolve, reject) => {
        console.log("cleaning the file...");
        if (data) {
            console.log("passing data to the next promisified function!");
            resolve((data).replace(/\s+/g, ' ').trim());
        } else {
            reject("data not found!!");
        }
    })
}

function writefile(data) {
    return new Promise((resolve, reject) => {
        console.log("writing and saving the file...");
        fs.writeFile('a.txt' ,data, 'utf-8', () => {
            if (data) {
                console.log("the cleaned up data is => " + data);
                resolve();
            } else {
                reject("data not found!!");
            }
        })
    })
}

/*creating the promise chain */
readfile().then((result) => {
    return cleanfile(result);
}).then((result) => {
    return writefile(result);
})