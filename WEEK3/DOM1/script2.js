function update(){
    const user_input = document.querySelector("input").value
    console.log(user_input)
    document.querySelectorAll("h4")[2].innerHTML = user_input 
}