//writing async await
/*write a  async-await function to log 
    1. hi after 1 sec
    2. hello aftere 3 sec
    3. hello there after 5 sec
*/

function delayPromisified(duration){
    return new Promise((resolve) => {
        setTimeout(resolve, duration);
    })
}

//syntactic sugar
async function solve(){
    await delayPromisified(1000);
    console.log("hi");
    await delayPromisified(3000);
    console.log("hello");
    await delayPromisified(5000);
    console.log("hello there");
}

solve();