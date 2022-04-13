import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


export const AddRole = () => {
    const [roleName, setroleName] = useState('')
    // const [email, setemail] = useState('')
    // const [password, setpassword] = useState('')
    // const [role, setrole] = useState('')

    var data ={
        roleName:roleName,
        // email:email,
        // password:password,
        // role:role
    }

    const submit = (e)=>{
        e.preventDefault()
        axios.post("http://localhost:4000/roles",data).then((res)=>{
            console.log(res.status)
            console.log(res.data)
            alert("role added")
        })
    }

  return (
    <div class="d mg">
        <form onSubmit={submit}>
         


            
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
                 <Link to ="/Home/RoleUpdate">
                 <button type="button" class="btn btn-primary btn-lg">Go Back</button>
                 </Link>
            </div>
            

        </form>
    </div>
  )
}
