const mongoose = require("mongoose")

const travelSchema = mongoose.Schema({
    name:{type:String},
    email:{type:String},
    destination:{type:String},
    travelers:{type:Number},
    budget:{type:Number},
},{
    versionKey:false
})

const TravelModel = mongoose.model("traveler",travelSchema)

module.exports = {
    TravelModel
}