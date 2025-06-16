/* HERE WE ARE GOING TO CODE THE FEATURES FOR TODO LIST USING JAVASCRIPT 

    while writing newdiv.innerHTML, writing doublequotes inside doublequotes can confuse js
    because it can't figureout where the string ends
    
    WRONG : 
        newdiv.innerHTML = 
        "<h4>(i++) +'.'+user_input </h4>" + //what if there was a div here? how can we then access the parent div in the removeTodo funciton
        "<button onClick = 'removeTodo(i);' >remove</button>"; +
        "<button onClick = 'tickoff(i);'>done</button>";

    RIGHT :
        newdiv.innerHTML = 
        `
        <h4>${i++}.${user_input}</h4>
        <button onclick = "removeTodo(${i})">remove</button>
        <button onclick = "tickoff(${i})">done</button>
        `

    Backticks let you write multi-line strings.

    You can inject variables directly with ${...} for example : {i} and ${user_input}
    (These are real values. They’re inserted right into the HTML.)

    Quotes Are Balanced
    onclick="removeTodo(${i})" is valid HTML.
    The string as a whole is inside backticks, so no inner-quote issues.

*/
let i = 1
function addTodo() {
    let current = i++
    let user_input = document.querySelector("input").value

    if(user_input){
        let newdiv = document.createElement("div")
        newdiv.id = `todo-${current}`
        newdiv.innerHTML =
            //what if there was a div instead of h4? how can we then access the parent div in the removeTodo funciton
        `
            <h4>${current}.${user_input}</h4>
            <button onclick = "removeTodo(${current})">remove</button>
            <button onclick = "tickoff(${current})">done</button>
        `;

        let parent_node = document.getElementById("todoContainer")
        parent_node.appendChild(newdiv)
    }
    
    else{
        showError(`it can't be empty`)
    }
    
    //I am commenting this for now but what if I want to go with the approach coded below
    // let button_feature_1 = createElement("button") //to remove the elements for delete feature
    // let button_feature_2 = createElement("button") //to update for Tickoff feature 
    
    // button_feature_1.innerHTML = remove 
    // button_feature_2.innerHTML = done
    
    // newdiv.appendChild(button_feature_1)
    // newdiv.appendChild(button_feature_2)
    
}

function removeTodo(pos) {
    let user_delete = document.getElementById("todo-" + pos)
    user_delete.parentNode.removeChild(user_delete)
}

function tickoff(pos) {
    let user_tick = document.getElementById("todo-" + pos)
    let h4 = user_tick.querySelector("h4")
    if (!h4.innerHTML.includes("✅")) {
        h4.innerHTML += " { Done ✅ }";
    }
}

function showError(message) {
    const banner = document.getElementById("errorBanner");
    banner.textContent = message;
    banner.classList.remove("hidden");

    // Hide after 3 seconds
    setTimeout(() => {
        banner.classList.add("hidden");
    }, 3000);
}