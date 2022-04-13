import axios from 'axios'; 
import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom'

export const DeleteData = () => {
    
    var id = useParams().id;
    console.log(id)

    const delete1 =()=>{
        axios.delete(`http://localhost:4000/hotels/${id}`).then(res=>{
            alert("Data Deleted....")
        })
    }
    useEffect(() => {
      delete1()
    
      return () => {
        
      }
    },)
    
  return (
    <div>
    
    </div>
  )
}