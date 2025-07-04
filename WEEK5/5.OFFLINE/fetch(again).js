function main(){
    fetch("https://sum-server.100xdevs.com/todos")
    .then(async (response) => {
        const json = await response.json()
        console.log(json.todos.length)
    })
}

main()

async function main2(){
    const fetch = await fetch("https://sum-server.100xdevs.com/todos")
    const json = await response.json()
    console.log(json.todos.length)
}

main2()
