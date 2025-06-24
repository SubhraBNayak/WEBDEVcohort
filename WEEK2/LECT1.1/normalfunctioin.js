//adding two numbers
function sum(a,b){
    return a+b;
}

let ans = sum(2,340324)
console.log(ans);

//adding n numbers
function addingn(n){
    let ans = 0;
    for (let i = 0; i < n; i++) {
        ans = ans + i;
    }
    return ans;
}

console.log(addingn(33));

//both of these is an example of synchronus code. Means it is running in a single thread for execution.