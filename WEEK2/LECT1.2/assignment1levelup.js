//leveling up
/*write a callback function to log 
    1. hi after 1 sec
    2. hello aftere 3 sec
    3. hello there after 5 sec
*/

function hi(){
    console.log("hi");
}
function hello(){
    console.log("hello");
}
function hellothere(){
    console.log("hello there");
}

function logdata(callback, duration){
    setTimeout(() => {
        if (callback) {
            callback();
        }
    }, duration);
}

//this is a callback hell...
logdata(() => {
    hi();
    logdata(() => {
        hello();
        logdata(() => {
            hellothere();
        }, 5000)
    }, 3000)
}, 1000)