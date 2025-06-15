/*
################ WRITING A FUNCTION TO ADD AN ELEMENT IN A DOCUMENT ##################

    first we make a new_element by using createElement (input is similar to querySelector).
    then we write the content of the new_element by assigning the value of input tag to innerHTML of new_element.

    NOTE : we need to access the parentNode, because we are going to add the new_element in the parentNode of all existing Nodes
    we use 'appendChild' on the parentNode(or whichever node we want to add the new_element), and the new element goes as the
    input argument of appendChild.

*/
let i = 3
function addTodo(){
    let new_element = document.createElement("div")
    new_element.innerHTML = (i++) + ". " +document.querySelector("input").value

    const parent_element = document.getElementById("todos")
    parent_element.appendChild(new_element)
}