import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
// import { DeleteData } from './DeleteData';
import '../ButtonCSS/Button.css';
import { CityUpdateData } from './CityUpdateData';

export const  CityUpdate = () => {

    const [CityList, setCityList] = useState([])
    const [travellist, settravellist] = useState([])

    const getData = () => {
        axios.get("http://localhost:4000/cities").then(res => {
            console.log(res.data.data)
            setCityList(res.data.data)
        })
    }

    useEffect(() => {
        getData()

        return () => {

        }
    }, [])

    const deleteData = (id) => {
        axios.delete(`http://localhost:4000/cities/${id}`).then(res => {
            alert(res.status)
        })
    }

    return (
        <div className="bg-color">
            <table class="table d">
                <thead clsss="thead-dark">
                

                <h2>City table</h2>
                    <Link to="/AdminDashboard/AddCity">
                        <button type="button" class="btn-lg">Add City</button>
                    </Link>

                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">CityName</th>
                        <th scope="col">State</th>
                        <th scope="col">Action</th>
                        {/* <th scope="col">latitude</th> */}
                        {/* <th scope="col">Role</th> */}
                    </tr>
                </thead>

                <tbody>
                    {
                        CityList.map((City) => {
                            return (
                                <tr>
                                    <th scope="row">{City._id}</th>
                                    <th scope="row">{City.CityName}</th>
                                    <th scope="row">{City.State.StateName}</th>
                                    {/* <th scope="row">{City.Action}</th> */}
                                    {/* <th scope="row">{Country.latitude}</th> */}
                                    {/* <th scope="row">{user.role}</th> */}
                                    <td>
                                        <Link to={`/AdminDashboard/CityUpdate/DeleteData/${City._id}`}>
                                        <button class ="btn-lg3"
                                         onClick={() => {deleteData(City._id) }}>delete</button></Link>
                                        <Link to={`/AdminDashboard/CityUpdate/CityUpdateData/${City._id}`}>
                                        <button class ="btn-lg2"
                                         onClick={() => { CityUpdateData(City._id) }}>UPDATE</button></Link>
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