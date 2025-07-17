//we'll use this 'todos' array to store the states under 'title'
let todos = [];

/*
    addTodo function is going to add a new state ('title') into the todos array
    then it calls the render function to display the changes made in the browser
*/
function addTodo(){
    const value = document.querySelector("input").value;
    if(value){
        todos.push({
            title:document.querySelector("input").value
        })
        render ();
    }
    else{
        alert("Blank input! Task can't be added!");
    }
}

/*
    function createComponent creates a basic layout that is supposed to be rendered after the render () function is called
*/
function createComponent(){
    let newEl = document.createElement("div");
    let newSpan = document.createElement("span");
    let deleteBtn = document.createElement("button");
    let editBtn = document.createElement("button");
    newEl.appendChild(newSpan);
    newEl.appendChild(deleteBtn);
    newEl.appendChild(editBtn);
    return newEl;
}

/*
    render function uses todos array as the ultimate source of truth
    it fetches the states from todos and updates the components created for each state
    then displays it in the web
 */
function render(){
    document.getElementById("todo-container").innerHTML = '';
    let newEl;
    for (let index = 0; index < todos.length; index++) {
        newEl = createComponent()
        newEl.id = `todo-${index}`;
        newEl.className = `divEl`
        newEl.querySelector("span").innerText = (index+1) + '.' + todos[index].title;
        newEl.querySelector("span").className = `spanEl`
        newEl.querySelectorAll("button")[0].innerText = "Delete";
        newEl.querySelectorAll("button")[0].onclick = () => deleteTask(index);
        newEl.querySelectorAll("button")[0].className = `deleteEl`
        newEl.querySelectorAll("button")[1].innerText = "Edit";
        newEl.querySelectorAll("button")[1].id = `edit-${index}`;
        newEl.querySelectorAll("button")[1].className = `editEl`;
        newEl.querySelectorAll("button")[1].onclick = () => editTask(index);
        document.getElementById("todo-container").appendChild(newEl);
    }
}

/*
    deleteTask function only updates the todos array, only deletes the task that was clicked by the user to be deleted
    render () function is called again inorder to render the changes
*/
function deleteTask(index){
    todos.splice(index,1);
    render (); //now when render is called the entire list needs to rendered again
}

function editTask(index){
    let prev_value = todos[index].title
    let prev_span = document.getElementById(`todo-${index}`).querySelector("span");
    prev_span.parentNode.removeChild(prev_span);
    let new_input = document.createElement("input");
    new_input.className = `input2`
    new_input.value = prev_value;
    document.getElementById(`todo-${index}`).appendChild(new_input);
    new_input.id = `input-${index}`
    document.getElementById(`edit-${index}`).innerText = "Save";
    document.getElementById(`edit-${index}`).classList.add("saveMode");
    document.getElementById(`edit-${index}`).onclick = () => updateTask(index);
}

function updateTask(index){
    const value = document.getElementById(`input-${index}`).value;
    if(value){
        todos[index].title = value;
        render ();
        document.getElementById(`edit-${index}`).classList.remove("saveMode");
    }
    else{
        alert("Blank input! Task can't be added!")
    }
}

function logout(){
    const token = localStorage.getItem("token")
    if (token) {
        localStorage.removeItem("token")
        alert("logged out!")
        window.location.href = "login_frontend.html"
    }else{
        alert("user-not logged in!")
    }
}
