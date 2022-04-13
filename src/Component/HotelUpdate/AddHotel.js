import axios from 'axios'
import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const AddHotel = () => {
    
    const [HotelName, setHotelName] = useState('')
    const [HotelAddress, setHotelAddress] = useState('')
    const [ContactNo, setContactNo] = useState('')
    const [State, setState] = useState('')
    const [city, setcity] = useState('')
    
    // const [role, setrole] = useState('')

    var data ={
        HotelName:HotelName,
        HotelAddress:HotelAddress,
        ContactNo:ContactNo,
        city:city,
        State:State
        // role:role
    }

    const submit = (e)=>{
        e.preventDefault()
        axios.post("http://localhost:4000/hotels",data).then((res)=>{
            console.log(res.status)
            console.log(res.data)
            alert("hotel added")
        })
    }

  return (
    
    <div class="d mg">
        <form onSubmit={submit}>
                        
            <div className="form-group">
                <label>HotelName</label>
                <input type="text" className="form-control" defaultValue={data.HotelName}onChange={(e)=>setHotelName(e.target.value)}></input>
            </div>
            <div className="form-group">
                <label>HotelAddress</label>
                <input type="text" className="form-control" defaultValue={data.HotelAddress}onChange={(e)=>setHotelAddress(e.target.value)}></input>
            </div>
            <div className="form-group">
                <label>ContactNo</label>
                <input type="text" className="form-control" defaultValue={data.ContactNo}onChange={(e)=>setContactNo(e.target.value)}></input>
            </div>
            <div className="form-group">
                <label>City</label>
                <input type="text" className="form-control" defaultValue={data.city}onChange={(e)=>setcity(e.target.value)}></input>
            </div>
            <div className="form-group">
                <label>State</label>
                <input type="text" className="form-control" defaultValue={data.State}onChange={(e)=>setState(e.target.value)}></input>
            </div>
           
            <div>
                 <button type="submit" class="btn btn-primary btn-lg">Submit</button>
                 <Link to ="/Home/HotelUpdate">
                 <button type="button" class="btn btn-primary btn-lg">Go Back</button>
                 </Link>
            </div>
            

        </form>
    </div>
  )
}