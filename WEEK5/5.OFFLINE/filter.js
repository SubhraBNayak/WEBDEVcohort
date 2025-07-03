/*
    ######################## WRITING THE FILTER FUNCTION ########################
    filter the even numbers
*/

const arr = [1,2,3,4,5,6,7]

function filter_logic(n){
    if(n%2){
        return false
    }else{
        return true
    }
}

const ans = arr.filter(filter_logic)
console.log(ans)