import React,{useState} from 'react'
import axios from "axios"



const PostData = () => {

    const [formData, setformData] = useState({
    name:"",
    email:"",
    destination:"",
    travelers:0,
    budget:0
    })

    const handleChange = (e) =>{
        setformData({...formData,[e.target.name]:e.target.value})
    }

    const handleSubmit = async (e) =>{
        e.preventDefault()
      console.log(formData)
        try{
            await axios.post("http://localhost:8000/travel/add",formData)

            setformData({
                name:"",
                email:"",
                destination:"",
                travelers:0,
                budget:0
            })

        }catch(error){
            console.log(error)
        }
    }

  return (
  <>
    <form onSubmit={handleSubmit}>

     <label>Name:<input type = "text" name='name' value={formData.name} onChange={handleChange}></input></label><br />
     <label>Email:<input type = "text" name='email' value={formData.email} onChange={handleChange}></input></label><br />
     <label>Destination:<select name='destination' value={formData.destination} onChange={handleChange}>
        <option value="India">India</option>
        <option value="Africa">Africa</option>
        <option value="Europe">Europe</option>
        <option value="America">America</option>
        </select></label><br />
     <label>NO. of Travelers:<input type = "number" name='travelers' value={formData.travelers} onChange={handleChange}></input></label><br />
     <label>Budget:<input type = "number" name='budget' value={formData.budget} onChange={handleChange}></input></label><br />
      <button type='submit'>Submit</button>
    </form>

  </>
  )
}

export default PostData