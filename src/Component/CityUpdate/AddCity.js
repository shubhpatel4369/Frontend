import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const AddCity = () => {
    
    const [CityName, setCityName] = useState('')
    const [State, setState] = useState('')
    // const [latitude, setlatitude] = useState('')
    // const [role, setrole] = useState('')

    var data ={
        CityName:CityName,
        State:State,
        // latitude:latitude,
        // role:role
    }

    const submit = (e)=>{
        e.preventDefault()
        axios.post("http://localhost:4000/cities",data).then((res)=>{
            console.log(res.status)
            console.log(res.data)
            alert("city added")
        })
    }

  return (
    <div class="d mg">
        <form onSubmit={submit}>
         


            
            <div className="form-group">
                <label>CityName</label>
                <input type="text" className="form-control" defaultValue={data.CityName}onChange={(e)=>setCityName(e.target.value)}></input>
            </div>
            <div className="form-group">
                <label>State</label>
                <input type="text" className="form-control" defaultValue={data.State}onChange={(e)=>setState(e.target.value)}></input>
            </div>
            {/* <div className="form-group">
                <label>latitude</label>
                <input type="text" className="form-control" defaultValue={data.latitude}onChange={(e)=>setlatitude(e.target.value)}></input>
            </div> */}
            {/* <div className="form-group">
                <label>Role</label>
                <input type="text" className="form-control" defaultValue={data.role}onChange={(e)=>setrole(e.target.value)}></input>
            </div> */}
            <div>
                 <button type="submit" class="btn btn-primary btn-lg">Submit</button>
                 <Link to ="/Home/CityUpdate">
                 <button type="button" class="btn btn-primary btn-lg">Go Back</button>
                 </Link>
            </div>
            

        </form>
    </div>
  )
}