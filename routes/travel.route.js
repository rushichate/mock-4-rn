const express = require("express")
const { TravelModel } = require("../modules/travel.module")

const travelRouter = express.Router()

travelRouter.post("/add",async(req,res)=>{

    try{
       const newTraveler = new TravelModel(req.body)
       await newTraveler.save()
       res.status(200).json({message:"New traveler added"})

    }catch(error){
        res.status(400).json(error.message)
    }
})

travelRouter.get("/",async(req,res)=>{
    try{
        const data = await TravelModel.find()
        res.status(200).json(data)

    }catch(error){
        res.status(400).json(error.message)
    }
})

travelRouter.delete("/delete/:id",async(req,res)=>{
    try{
        await TravelModel.findByIdAndDelete(req.params.id)
        res.status(200).json({message:"Traveler data deleted"})

    }catch(error){
        res.status(400).json(error.message)
    }
})


module.exports = {
    travelRouter
}