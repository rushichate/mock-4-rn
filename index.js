const express = require("express")
const cors = require("cors")
const { connection } = require("./db")
const { travelRouter } = require("./routes/travel.route")
const app = express()

app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    try{
       res.send("Welcome to Plan My Trip")
    }catch(error){
     res.send(error)
    }
})

app.use("/travel",travelRouter)

app.listen(8000 || `0.0.0.0`,async()=>{
    try{
     await connection
     console.log("connected to db and running on port 8000")
    }catch(error){
        console.log(error)
    }
})