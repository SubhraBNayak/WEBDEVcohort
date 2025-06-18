let ctr = 0 

function addTodo(){
    let value = document.querySelector("input").value

    if(value){
        ctr = ctr + 1
        let newdivEL1 = document.createElement("div")
        let newbtnEl = document.createElement("button")
        let newdivEl2 = document.createElement("div")
        
        newdivEL1.appendChild(newdivEl2)
        newdivEL1.appendChild(newbtnEl)
        newdivEL1.id = "todo-"+ctr

        newdivEl2.innerHTML = ctr + "." + value
        newbtnEl.innerHTML = "Delete"
        newbtnEl.onclick = () => DeleteTodo(ctr)

        document.getElementById("todo_container").appendChild(newdivEL1)
    }
    
    else{
        alert("Input box is empty! Nothing to Add")
    }
}

function DeleteTodo(pos){
    let delete_element = document.getElementById("todo-"+pos)
    delete_element.parentNode.removeChild(delete_element)

    // let update_element_id
    // while(pos<=ctr){
    //     update_element_id = document.getElementById("todo-"+(pos+1))
    //     update_element_id.id = "todo-"+ (pos)
    //     pos++
    // }
}