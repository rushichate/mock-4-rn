import React,{useState,useEffect} from 'react'
import axios from "axios"

const RetriveData = () => {

    const [data, setData] = useState([]);
    const [filterData, setFilterData] = useState('')
    const [sortBy, setSortBy] = useState("")

    useEffect(()=>{
        const fetchData = async ()=>{
         try{
            const allData = await axios.get("http://localhost:8000/travel/")
            setData(allData.data)
         }catch(error){
            console.log(error)
         }
        }
        fetchData()
    },[])

    const handleDelete = async (id)=>{
        try{
             await axios.delete(`http://localhost:8000/travel/delete/${id}`)
             setData((prveData)=> prveData.filter((item) => item._id !== id))
        }catch(error){
            console.log(error)
        }
    }

    console.log(data)

  return (
    <>
      
        { data.length === 0 ? (<p>...Loading</p>):
           ( data.map((item)=>(
            <div key={item._id}>
                    <p>Name:{item.name}</p>
                    <p>Email:{item.email}</p>
                    <p>Destination:{item.destination}</p>
                    <p>No of Travelres:{item.travelers}</p>
                    <p>Budget:{item.budget}</p>
                    <button onClick={()=>handleDelete(item._id)}>Delete</button>
                </div>
           ))
           )
        }
      
    
    </>
  )
}

export default RetriveData