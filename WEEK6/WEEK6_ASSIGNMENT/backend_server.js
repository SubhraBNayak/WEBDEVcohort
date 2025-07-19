/*
    ####################### SERVER OF THE LOGIN PAGE #######################

     OVERVIEW:
    This is the backend server handling user authentication (signup & signin)
    using an in-memory `users` array. It provides basic login functionality,
    prevents duplicate users, and handles authentication with appropriate status codes.

    ----------------------------------------------------------------------

     FEATURES IMPLEMENTED:

    1.   Signup:
       - Allows a new user to register with a unique username and password.
       - Middleware checks:
          If a user already exists with the same username → return 409 Conflict.
          If a user with same username & password exists → return 400 Bad Request with 
            message: "User already exists! Try signing in."

    2.  Signin:
       - Allows existing users to log in by validating username and password.
       - If user is not found → return 401 Unauthorized with message: "Invalid credentials."

    3.  Auth Middleware:
       - Middleware runs before protected routes to check if user details (username + password) match.
       - Ensures only authenticated users can access specific pages or actions.

    ----------------------------------------------------------------------

     NOTE:
    - This server uses an in-memory `users` array → All data will be lost on restart.
    - In real-world applications, use hashed passwords and a database like MongoDB or PostgreSQL.

    ----------------------------------------------------------------------

    🔧 STATUS CODES USED:
    - 200 OK → Successful login
    - 201 Created → Successful signup
    - 400 Bad Request → User already exists with same credentials
    - 401 Unauthorized → Wrong username or password
    - 409 Conflict → Username already taken
*/

const express = require("express")
const app = express()

const jwt = require("jsonwebtoken")
const JWT_SECRET = "nayaksoftwarepvtltd"

const cors = require("cors")

let users = []

function authorize_user(req, res, next){
    const username = req.body.username
    const password = req.body.password

    for (let index = 0; index < users.length; index++) {
        if (username === users[index].username && password === users[index].password) {
            req.username = username
            return next()
        }
    }
    return res.status(401).send({
        message: "User authentication failed! Check the username/password again"
    })
}

function check_username(req, res, next){
    const username = req.body.username

    for (let index = 0; index < users.length; index++) {
        if (username === users[index].username) {
            return res.status(409).send({
                message : "username already exists! try different username"
            })
        }
    }
    next()
}

function check_user(req, res, next){
    const username = req.body.username
    const password = req.body.password
    
    for (let index = 0; index < users.length; index++) {
        if (username === users[index].username && password === users[index].password) {
            return res.status(409).send({
                message: "user already exists! try signing in"
            })
        }
    }
    next()
}

app.use(express.json())
app.use(cors())
app.use(express.static("public"))

app.get("/", function(req, res){
    console.log("backend is running!")
})

app.post("/signup", check_user, check_username, function(req, res){
    const username = req.body.username
    const password = req.body.password
    
    users.push({
        username : username,
        password : password
    })

    res.status(200).send({
        message : "sign-up successful"
    })
})

app.post("/signin", authorize_user, function(req, res){
    const username = req.username
    const token = jwt.sign({username}, JWT_SECRET)

    res.status(200).json({
        token : token
    })
})

app.get("/auth", function (req, res){
    const token = req.headers.token
    const username = jwt.verify(token, JWT_SECRET).username

    if (username) {
        res.send(200)
    }else{
        res.send(401)
    }
})

app.post("/pushTodoItem", function(req, res){
    const token = req.headers.token
    const todoItem = req.body.todoItem 
    const username = jwt.verify(token, JWT_SECRET).username

    if (username) {
        for (let index = 0; index < users.length; index++) {
            if (username === users[index].username) {
                if (!users[index].todo) {
                    users[index].todo = []
                    users[index].todo.push(todoItem)
                    return res.status(200).send({
                        message : "todo updated!"
                    })
                }
                else if(users[index].todo){
                    users[index].todo.push(todoItem)
                    return res.status(200).send({
                        message : "todo updated!"
                    })
                }
                else{
                    return res.status(403).send({
                        message : "maybe user doesn't exist"
                    })
                }
            }
        }
    }else{
        return res.status(401).send({
            message : "user authentication failed! check credentials"
        })
    }
})

app.get("/fetchTodoItems", function(req, res){
    const token = req.headers.token
    const username = jwt.verify(token, JWT_SECRET).username

    if (username) {
        for (let index = 0; index < users.length; index++) {
            if (username === users[index].username) {
                let todoItems = users[index].todo
                return res.status(200).send({
                    todoItems
                })
            }
        }
    }else{
        return res.status(401).send({
            message : "user authentication failed check user credentials!!"
        })
    }
})

app.delete("/deleteTodoItems", function(req, res){
    const token = req.headers.token
    const deleteIndex = req.headers.deleteIndex
    const username = jwt.verify(token, JWT_SECRET).username

    if (username) {
        for (let index = 0; index < users.length; index++) {
            if (users[index].username === username) {
                users[index].todo.splice(deleteIndex, 1)
                return res.status(200).send({
                    message : "deleted!"
                })
            }
        }
    }else{
        return res.status(401).send({
            message : "user authentication failed! check credentials"
        })
    }
})

app.post("/updateTodoItems", function(req, res){
    const updateValue = req.body.updateValue
    const token = req.headers.token
    const updateIndex = req.body.updateIndex
    const username = jwt.verify(token, JWT_SECRET).username
    if (username) {
        for (let index = 0; index < users.length; index++) {
            if (users[index].username === username) {
                users[index].todo[updateIndex] = updateValue
                return res.status(200).send({
                    message : "updated!"
                })
            }
        }
    }else{
        return res.status(401).send({
            message : "user authentication failed! check credentials"
        })
    }
})

app.listen(3000)
