//axios is able to understand and parse the response by itself, we don't have to write it by ourselves
const axios = require("axios")

async function main(){ 
    const response = await axios.get("https://sum-server.100xdevs.com/todos")
    console.log(response.data.todos.length)
}


//in axios, the second argument is headers for a get request.
async function main2(){
    const response = await axios.get(" https://httpdump.app/dumps/52391db8-c0e4-426b-9e00-a1b3e75b191c",
        {
            "request_time" : "10:57 pm",
            "request_date" : "07-07-25",
            "purpose" : "testing"
        }
    )
    console.log(response.data)
}

//in axios, all request except get and those capable of sending a body from the frontend has the second argument as body
//and then third argument as headers
async function main3(){
    const response = await axios.post(" https://httpdump.app/dumps/52391db8-c0e4-426b-9e00-a1b3e75b191c",
        {
            "username" : "subhra_bikiran_nayak",
            "password" : "teb1sel_nayak"
        },
        {
            "request_time" : "10:57 pm",
            "request_date" : "07-07-25",
            "purpose" : "testing"   
        }
    )
}

async function main4(){
    const response = await axios.put(" https://httpdump.app/dumps/52391db8-c0e4-426b-9e00-a1b3e75b191c",
        {
            "username" : "subhra_bikiran_nayak",
            "password" : "teb1sel_nayak"
        },
        {
            "request_time" : "10:57 pm",
            "request_date" : "07-07-25",
            "purpose" : "testing"   
        }
    )
}

async function main5(){
    const response = await axios.delete(" https://httpdump.app/dumps/52391db8-c0e4-426b-9e00-a1b3e75b191c",
        {
            "username" : "subhra_bikiran_nayak",
            "password" : "teb1sel_nayak"
        },
        //error: delete requests don't contain body.
        {
            "request_time" : "10:57 pm",
            "request_date" : "07-07-25",
            "purpose" : "testing"   
        }
    )
}

main5()
