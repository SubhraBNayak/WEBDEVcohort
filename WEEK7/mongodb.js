/*
    ####################### THIS IS A DATA MODEL LAYER #######################
    -> this contains the definition of the schemas
    -> this defines the structures of the data in database
*/

const mongoose = require("mongoose")
const Schema = mongoose.Schema
const ObjectId = mongoose.ObjectId

const User = new Schema({
    email : {type : String, unique : false},
    password : String,
    name : String    
})

const Todo = new Schema({
    userId : ObjectId,
    title : String,
    done : {type : Boolean, default : false}
})

const UserModel = mongoose.model("users", User)
const TodoModel = mongoose.model("todos", Todo)

module.exports = {
    UserModel,
    TodoModel
}
