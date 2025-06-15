/*
    ##################### WRITING A FUNCTION THAT DELETES A CHILD NODE IN DOM ####################
    
    we can access the parent node by 'parentNode' and 'parentElement'
    user_delete stores the Node you want to delete
    we get it's parent node using 'parentNode' and then delete user_delete

*/
function deleteTodo(pos){
    let user_delete = document.getElementById("todo-"+pos)
    user_delete.parentNode.removeChild(user_delete)
}