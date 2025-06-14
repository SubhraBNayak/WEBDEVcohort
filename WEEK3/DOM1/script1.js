/*======We are coding a stopwatch using javascript======
    We can do it using setTimeout or setInterval function
    We need to have a call-back function that is called 
    after each second and prints incrementing values of natural numbers
*/

let i = 0

function callback(){
    console.log(i++);
}

// //using setInterval
// setInterval(callback, 1000)//calls the callback function after a delay of 1000ms or 1s

//using setTimeout
function callbackstopwatch(){
    console.log(i++)
    setTimeout(callbackstopwatch, 1000);//calls the callbackstopwatch function which itself containts the setTimeout.
    /* This code enables us to free up the call stack by logging i every one second, after which setTimeout if fed to the callback queue
    after async task (i.e. waiting for 1sec) is done. Event loop checks the call stack, and again calls the callbackstopwatch function
    that logs i. This is on repeat recursively. */
}
callbackstopwatch();