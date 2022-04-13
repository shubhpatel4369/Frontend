import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
  

export const RoleUpdate = () => {

    var id = useParams().id;
    const [data, setdata] = useState('')
    const [roleName, setroleName] = useState('data.roleNme')

    const RoleUpdate = async () => {
        await axios.get(`http://localhost:4000/roles/${id}`).then(res => {
            console.log(res.data.data)
            setdata(res.data.data)
        })
    }
    useEffect(() => {

        RoleUpdate()
        return () => {

        }
    }, [])

    const submit = (e)=>{
        
    }

    return (
        
            
        <div className="container">
            <form onSubmit={submit}>
                <div className="form-group">
                    <label>roleName</label>
                    <input type="text" className="form-control" defaultValue={data.rolename} onChange={(e) => setroleName(e.target.value)}></input>
                </div>
                
                <button type = "submit" className="btn-btn-primary">Submit</button>
                </form>
            
        </div>
    )
}
