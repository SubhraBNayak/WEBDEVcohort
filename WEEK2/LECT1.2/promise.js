// //normal callback approach syntax
// setTimeout(callback, 3000);

// //promisified approach syntax
// setTimeoutPromisified(3000).then(callback);

function random(){
    
}

let p = new Promise(random);
console.log(p);