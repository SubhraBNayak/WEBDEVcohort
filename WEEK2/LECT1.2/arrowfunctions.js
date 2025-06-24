//normal function
function sum(a, b) {
    return a + b;
}

/*in terms of arrow function -
    1. the function keyword is assumed
    2. since the function keyword is not used we need to declare a variable to store the function
    3. no return statement, everything after the arrow ( => ) is assumed to be returning.
*/
let sum2 = (a, b) => a + b;

//normal function
function ispositive(number) {
    return number >= 0;
}

/*in arrow functions 
    1. if there is only one argument we are passing we don't need to use the braces
*/

let ispositive2 = number => number >= 0;

//normal function
function randomnumber() {
    return Math.randomnumber;
}

/*in arrow functions
    1. if there is no functional argument ,i.e, the function doesn't take anything as input 
    we can just leave the braces empty.
*/

let randomnumber2 = () => Math.randomnumber;

//normal function, here the function is not returning anything.
function greet(name) {
    console.log("hello!" + name);
    console.log("how are you!");
}

/*in arrow functions 
1. if the function is not returning anything it's better to use curly braces after the arrow
2. there are other ways to write the function when it's not returning something, like we can ignore the
curly braces if there is only one expression inside the function, but it will still return 'undefined'.
*/

let greet2 = (name2) => {
    console.log("hello!" + name2);
    console.log("how are you!");
}

//normal function
setTimeout(function(){
    console.log("hello ! I hope you are having a great day!");
}, 1000);

/*in arrow functions
    1. writing anonymous functions becomes cleaner and more readable
    2. we don't even need to declare a variable name for the function
    3. all the previous rules about passing arguments and returning from the function remains same
*/ 
setTimeout(() => console.log("hello ! I hope you are having a great day!"), 1000);