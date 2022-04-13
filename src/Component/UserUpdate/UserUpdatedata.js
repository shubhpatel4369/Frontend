import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom';


export const UserUpdatedata = () => {
    var id = useParams().id;

    const [data, setdata] = useState([])
    const [username, setusername] = useState(data.username)
    const [email, setemail] = useState(data.email)
    const [password, setpassword] = useState(data.password)
    const [role, setrole] = useState(data.role)

    const UserUpdateData = async()=>{
        await axios.get(`http://localhost:4000/users/${id}`).then(res=>{
            console.log(res.data.data)
            setdata(res.data.data)
            console.log(res.data.data.role)
        })
    }

    useEffect(() => {
      UserUpdateData()
    }, [])

    const submitform =(e)=>{
        e.preventDefault()
        console.log("submit called")
    
        var UpdatedUser={
                username:username,
                email:email,
                passsword:password,
                role:role
        }

        axios.put(`http://localhost:4000/users/${id}`,UpdatedUser).then(res => {
            alert("Data Updated")
        })
    }

  return (
    <div>{
        data.role !== undefined ?
        <form onSubmit={submitform}>
            
            <div className="form-group">
                <label>Username</label>
                <input type="text" className="form-control" defaultValue={data.username} onChange={(e)=>setusername(e.target.value)}></input>
            </div>
            <div className="form-group">
                <label>Email</label>
                <input type="text" className="form-control" defaultValue={data.email} onChange={(e)=>setemail(e.target.value)}></input>
            </div>
            <div className="form-group">
                <label>password</label>
                <input type="text" className="form-control" defaultValue={data.password} onChange={(e)=>setpassword(e.target.value)}></input>
            </div>
            <div className="form-group">
                <label>Role</label>
                <input type="text" className="form-control" defaultValue={data.role.roleName} onChange={(e)=>setrole(e.target.value)}></input>
            </div>
            <div>
                 <button type="submit" class="btn-lg">Submit</button>
                 <Link to ="/Home/UserUpdate">
                 <button type="button" class="btn-lg1">Go Back</button>
                 </Link>
            </div>
            {/* <div>
                
            </div> */}

        </form>
        :"loading"
}
    </div>
  )
}
