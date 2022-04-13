import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {DeleteData} from './DeleteData';
import { RoleUpdateData } from './RoleUpdateData';
import '../ButtonCSS/Button.css';






export const RoleUpdate = () => {
    const [roleList, setroleList] = useState([])
    const [travellist, settravellist] = useState([])

    const getData = () => {
        axios.get(`http://localhost:4000/roles`).then(res => {
            console.log(res.data.data)
            setroleList(res.data.data)
        })
    }

    useEffect(() => {
        getData()

        return () => {

        }
    }, [])

    const deleteData = (id) => {
        axios.delete(`http://localhost:4000/roles/${id}`).then(res => {
            alert(res.status)
            // console.log("role delete")
        })
    }


  return (
      <div>
    <div className="bg-color">
            <table class="table d">
                <thead clsss="thead-dark">
                    <h2>Role table</h2>
                <Link to ="/Home/AddRole">
                 <button type="button" class="btn btn-primary btn-lg">Add Role</button>
                 </Link>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">roleName</th>
                        <th scope="col">Action</th>
                        {/* <th scope="col">Email</th> */}
                        {/* <th scope="col">Password</th> */}
                        {/* <th scope="col">Role</th> */}
                    </tr>
                </thead>

                <tbody>
                    {
                        roleList.map((role) => {
                            return (
                                <tr>
                                    <th scope="row">{role._id}</th>
                                    <th scope="row">{role.roleName}</th>
                                    {/* <th scope="row">{user.email}</th> */}
                                    {/* <th scope="row">{user.password}</th> */}
                                    {/* <th scope="row">{user.role}</th> */}
                                    <td>
                                        <Link to={`/Home/RoleUpdate/DeleteData/${role._id}`}>
                                        <button class="btn-lg3"
                                         onClick={() => {deleteData(role._id) }}>Delete</button></Link>
                                        <Link to={`/Home/RoleUpdate/RoleUpdatedata/${role._id}`}> 
                                        <button class="btn-lg2" 
                                        onClick={() => {RoleUpdateData(role._id) }}>UPDATE</button></Link>
                                        {/* className="btn btn-primary">UPDATE</Link> */}
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
        </div>
  )
}
