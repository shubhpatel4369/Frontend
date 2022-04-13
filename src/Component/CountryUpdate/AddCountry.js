import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const AddCountry = () => {
    
    const [CountryName, setCountryName] = useState('')
    const [longitude, setlongitude] = useState('')
    const [latitude, setlatitude] = useState('')
    // const [role, setrole] = useState('')

    var data ={
        CountryName:CountryName,
        longitude:longitude,
        latitude:latitude,
        // role:role
    }

    const submit = (e)=>{
        e.preventDefault()
        axios.post("http://localhost:4000/countries",data).then((res)=>{
            console.log(res.status)
            console.log(res.data)
            alert("country added")
        })
    }

  return (
    <div class="d mg">
        <form onSubmit={submit}>
         


            
            <div className="form-group">
                <label>CountryName</label>
                <input type="text" className="form-control" defaultValue={data.CountryName}onChange={(e)=>setCountryName(e.target.value)}></input>
            </div>
            <div className="form-group">
                <label>Longitude</label>
                <input type="text" className="form-control" defaultValue={data.longitude}onChange={(e)=>setlongitude(e.target.value)}></input>
            </div>
            <div className="form-group">
                <label>latitude</label>
                <input type="text" className="form-control" defaultValue={data.latitude}onChange={(e)=>setlatitude(e.target.value)}></input>
            </div>
            {/* <div className="form-group">
                <label>Role</label>
                <input type="text" className="form-control" defaultValue={data.role}onChange={(e)=>setrole(e.target.value)}></input>
            </div> */}
            <div>
                 <button type="submit" class="btn btn-primary btn-lg">Submit</button>
                 <Link to ="/AdminDashboard/CountryUpdate">
                 <button type="button" class="btn btn-primary btn-lg">Go Back</button>
                 </Link>
            </div>
            

        </form>
    </div>
  )
}