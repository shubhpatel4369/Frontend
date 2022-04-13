import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const AddState = () => {
    
    const [StateName, setStateName] = useState('')
    const [country, setcountry] = useState('')
    // const [latitude, setlatitude] = useState('')
    // const [role, setrole] = useState('')

    var data ={
        StateName:StateName,
        country:country,
        // latitude:latitude,
        // role:role
    }

    const submit = (e)=>{
        e.preventDefault()
        axios.post("http://localhost:4000/states",data).then((res)=>{
            console.log(res.status)
            console.log(res.data)
            alert("state added")
        })
    }

  return (
    <div class="d mg">
        <form onSubmit={submit}>
         


            
            <div className="form-group">
                <label>StateName</label>
                <input type="text" className="form-control" defaultValue={data.StateName}onChange={(e)=>setStateName(e.target.value)}></input>
            </div>
            <div className="form-group">
                <label>Country</label>
                <input type="text" className="form-control" defaultValue={data.country}onChange={(e)=>setcountry(e.target.value)}></input>
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
                 <Link to ="/Home/StateUpdate">
                 <button type="button" class="btn btn-primary btn-lg">Go Back</button>
                 </Link>
            </div>
            

        </form>
    </div>
  )
}