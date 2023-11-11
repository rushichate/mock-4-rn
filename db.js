const mongoose = require("mongoose")

const connection = mongoose.connect("mongodb+srv://rushichate8006:rushikesh@cluster0.zvech0i.mongodb.net/mock402?retryWrites=true&w=majority")

module.exports ={
    connection
}