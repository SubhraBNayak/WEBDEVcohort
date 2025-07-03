/*
    ###################### MAP FUNCTION ######################
    Write your own map function that takes an input array and there is a transformation function
    that updates the content of the array accordingly
*/

function MAP(input, transform){
    for (let index = 0; index < input.length; index++) {
        input[index] = transform(input[index])
    }
    return input
}

function transform_factor_2(input_element){
    return input_element*2
}

let input_array = [1,2,3,4,5]
input_array = MAP(input_array, transform_factor_2)
console.log(input_array)
