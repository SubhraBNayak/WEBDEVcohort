/*
################# WRITING SCRIPT TO UPDATE THE INNERHTML OF A TAG ###################

    We used querySelector to fetch the value in input tag, stored it in user_input,
    logged it,
    and assigned the required tag's innerHTML with the user_input
    
 */
function update(){
    const user_input = document.querySelector("input").value
    console.log(user_input)
    document.querySelectorAll("h4")[2].innerHTML = user_input 
}