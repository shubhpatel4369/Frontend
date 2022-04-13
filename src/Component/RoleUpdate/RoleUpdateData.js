import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'




export const RoleUpdateData = () => {

    var id = useParams().id;
    const [data, setdata] = useState([])
    const [roleName, setroleName] = useState(data.roleName)

    const RoleUpdateData = async()=>{
        await axios.get(`http://localhost:4000/roles/${id}`).then(res=>{
            console.log(res.data.data)
            setdata(res.data.data)
        })
    }

    useEffect(() => {
      RoleUpdateData()
    }, [])

    const submitform =(e)=>{
        e.preventDefault()
        console.log("submit called")
    
        var UpdatedRole={
                roleName:roleName,
                
        }

        axios.put(`http://localhost:4000/roles/${id}`,UpdatedRole).then(res => {
            alert("role Updated")
        })
    }

  return (
    <div class="d mg">
        <form onSubmit={submitform}>
            
            <div className="form-group">
                <label>roleName</label>
                <input type="text" className="form-control" defaultValue={data.roleName}onChange={(e)=>setroleName(e.target.value)}></input>
            </div>
            {/* <div className="form-group">
                <label>Email</label>
                <input type="text" className="form-control" defaultValue={data.email}onChange={(e)=>setemail(e.target.value)}></input>
            </div>
            <div className="form-group">
                <label>password</label>
                <input type="text" className="form-control" defaultValue={data.password}onChange={(e)=>setpassword(e.target.value)}></input>
            </div>
            <div className="form-group">
                <label>Role</label>
                <input type="text" className="form-control" defaultValue={data.role}onChange={(e)=>setrole(e.target.value)}></input>
            </div> */}
            <div>
                 <button type="submit" class="btn btn-primary btn-lg">Submit</button>
            {/* </div>
            <div> */}
                <Link to ="/Home/RoleUpdate">
                 <button type="button" class="btn btn-primary btn-lg">Go Back</button>
                 </Link>
            </div>

        </form>
    </div>
  )
}
