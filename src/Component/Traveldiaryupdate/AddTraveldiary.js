import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


export const AddTraveldiary = () => {
    const [username, setusername] = useState('')
    const [email, setemail] = useState('')
    const [feedback, setfeedback] = useState('')
    // const [role, setrole] = useState('')

    var data ={
        username:username,
        email:email,
        feedback:feedback
        // role:role
    }

    const submit = (e)=>{
        e.preventDefault()
        axios.post("http://localhost:4000/traveldiaries",data).then((res)=>{
            console.log(res.status)
            console.log(res.data)
            alert("traveldiary added")
        })
    }

  return (
    <div>
        <form onSubmit={submit}>
         


            
            <div className="form-group">
                <label>Username</label>
                <input type="text" className="form-control" defaultValue={data.username}onChange={(e)=>setusername(e.target.value)}></input>
            </div>
            <div className="form-group">
                <label>Email</label>
                <input type="text" className="form-control" defaultValue={data.email}onChange={(e)=>setemail(e.target.value)}></input>
            </div>
            <div className="form-group">
                <label>Feedback</label>
                <input type="text" className="form-control" defaultValue={data.feedback}onChange={(e)=>setfeedback(e.target.value)}></input>
            </div>
            {/* <div className="form-group">
                <label>Role</label>
                <input type="text" className="form-control" defaultValue={data.role}onChange={(e)=>setrole(e.target.value)}></input>
            </div> */}
            <div>
                 <button type="submit" class="btn btn-primary btn-lg">Submit</button>
                 <Link to ="/Home/TraveldiaryUpdate">
                 <button type="button" class="btn btn-primary btn-lg">Go Back</button>
                 </Link>
            </div>
            

        </form>
    </div>
  )
}
