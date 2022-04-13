import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const TraveldiaryUpdatedata = () => {
    var id = useParams().id;
    const [data, setdata] = useState('')
    const [username, setusername] = useState(data.username)
    const [email, setemail] = useState(data.email)
    const [feedback, setfeedback] = useState(data.feedback)
    // const [role, setrole] = useState(data.role)

    const TraveldiaryUpdateData = async()=>{
        await axios.get(`http://localhost:4000/traveldiaries/${id}`).then(res=>{
            console.log(res.data.data)
            setdata(res.data.data)
        })
    }

    useEffect(() => {
      TraveldiaryUpdateData()
    
      return () => {
        
      }
    }, [])

    const submitform =(e)=>{
        e.preventDefault()
        console.log("submit called")
    
        var UpdatedTraveldiary = {
            username: username,
            email:email,
            feedback:feedback

        }

        axios.put(`http://localhost:4000/traveldiaries/${id}`, UpdatedTraveldiary).then(res => {
            alert("traveldiary Updated")
        })
    }
    

  return (
    <div>
        <form onSubmit={submitform}>
            
            
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
                 <button type="submit" class="btn-lg">Submit</button>
                 <Link to ="/Home/TraveldiaryUpdate">
                 <button type="button" class="btn-lg1">Go Back</button>
                 </Link>
            </div>
        </form>
    </div>
  )
}