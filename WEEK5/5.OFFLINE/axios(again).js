//axios is able to understand and parse the response by itself, we don't have to write it by ourselves
async function main(){ 
    const response = axios.get("https://sum-server.100xdevs.com/todos")
    console.log(response.data.todos.length)
}

main()
