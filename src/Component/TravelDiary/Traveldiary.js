import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import {DeleteData} from './DeleteData'; 
// import {TraveldiaryUpdatedata} from './TraveldiaryUpdatedata';
import '../ButtonCSS/Button.css';
export const  Traveldiary = () => {

    const [traveldiaryList, settraveldiaryList] = useState([])
    const [travellist, settravellist] = useState([])

    const getData = () => {
        axios.get("http://localhost:4000/traveldiaries").then(res => {
            console.log(res.data.data)
            settraveldiaryList(res.data.data)
        })
    }

    useEffect(() => {
        getData()

        return () => {

        }
    }, [])

    const deleteData = (id) => {
        axios.delete(`http://localhost:4000/traveldiaries/${id}`).then(res => {
            alert(res.status)
        })
    }

    return (
        <div className="bg-color">
            <table class="table d">
                <thead clsss="thead-dark">
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Feedback</th>
                        {/* <th scope="col">Role</th> */}
                    </tr>
                </thead>

                <tbody>
                    {
                        traveldiaryList.map((traveldiary) => {
                            return (
                                <tr>
                                    <th scope="row">{traveldiary._id}</th>
                                    <th scope="row">{traveldiary.username}</th>
                                    <th scope="row">{traveldiary.email}</th>
                                    <th scope="row">{traveldiary.feedback}</th>
                                    {/* <th scope="row">{user.role}</th> */}
                                    <td>
                                        <Link to={`/AdminDashboard/Traveldiary/DeleteData/${traveldiary._id}`}>
                                        <button class="btn-lg3"
                                         onClick={() => {deleteData(traveldiary._id) }}>delete</button></Link>
                                        {/* <Link to={`/Home/TraveldiaryUpdate/TraveldiaryUpdateData/${traveldiary._id}`}>
                                        <button class="btn-lg2"
                                         onClick={()=>{TraveldiaryUpdatedata(traveldiary._id)}}>UPDATE</button></Link> */}
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