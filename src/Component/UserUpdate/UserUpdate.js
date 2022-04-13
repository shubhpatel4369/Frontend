import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { DeleteData } from './DeleteData'
import { UserUpdatedata } from './UserUpdatedata';
import '../ButtonCSS/Button.css';


export const UserUpdate = () => {



    const [userList, setuserList] = useState([])
    const [travellist, settravellist] = useState([])

    const getData = () => {
        axios.get(`http://localhost:4000/users`).then(res => {
            console.log(res.data.data)
            setuserList(res.data.data)
        })
    }

    useEffect(() => {
        getData()

        return () => {

        }
    }, [])

    const deleteData = (id) => {
        axios.delete(`http://localhost:4000/users/${id}`).then(res => {
            alert(res.status)
        })
    }

    return (
        <div className="bg-color">
            <table class="table d">
                <thead clsss="thead-dark">

                    {/* <button class="btn-lg"/> */}
                    <h2>User table</h2>
                    <Link to="/Home/adddata">
                        <button type="button" class="btn-lg">Add User</button>
                    </Link>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        {/* <th scope="col">Password</th> */}
                        <th scope="col">Role</th>
                        <th scope="col">Action</th>

                    </tr>
                </thead>

                <tbody class = "bg-color">

                    
                    {
                       
                            userList.map((user) => {
                                return (
                                    <tr>
                                        <th scope="row">{user._id}</th>
                                        <th scope="row">{user.username}</th>
                                        <th scope="row">{user.email}</th>
                                        {/* <th scope="row">{user.password}</th> */}
                                        <th scope="row">{user.role.roleName}</th>
                                        <td>
                                            <Link to={`/Home/UserUpdate/DeleteData/${user._id}`}>
                                                <button class="btn-lg3"
                                    onClick={() => { deleteData(user._id) }}>Delete</button></Link>
                                            <Link to={`/Home/UserUpdate/UserUpdatedata/${user._id}`}>
                                                <button class="btn-lg2" 
                                                onClick={() => { UserUpdatedata(user._id)}}>UPDATE</button></Link>
                                            {/* className="btn btn-primary">UPDATE</Link> */}
                                        </td>
                                    </tr>
                                )
                            })
                            
                    }
                    
                </tbody>
            </table>
        </div>
    )
}
