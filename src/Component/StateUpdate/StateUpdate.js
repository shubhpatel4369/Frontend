import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import {DeleteData} from './DeleteData';
import '../ButtonCSS/Button.css';
import { StateUpdateData } from './StateUpdateData';

export const  StateUpdate = () => {

    const [StateList, setStateList] = useState([])
    const [travellist, settravellist] = useState([])

    const getData = () => {
        axios.get("http://localhost:4000/states").then(res => {
            console.log(res.data.data)
            setStateList(res.data.data)
        })
    }

    useEffect(() => {
        getData()

        return () => {

        }
    }, [])

    const deleteData = (id) => {
        axios.delete(`http://localhost:4000/states/${id}`).then(res => {
            alert(res.status)
        })
    }

    return (
        <div className="bg-color">
            <table class="table d">
                <thead clsss="thead-dark">

                <h2>State table</h2>
                    <Link to="/AdminDashboard/addState">
                        <button type="button" class="btn-lg">Add State</button>
                    </Link>

                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">StateName</th>
                        <th scope="col">Country</th>
                        <th scope="col">Action</th>
                        {/* <th scope="col">latitude</th> */}
                        {/* <th scope="col">Role</th> */}
                    </tr>
                </thead>

                <tbody>
                    {
                        StateList.map((State) => {
                            return (
                                <tr>
                                    <th scope="row">{State._id}</th>
                                    <th scope="row">{State.StateName}</th>
                                    <th scope="row">{State.country.CountryName}</th>
                                    {/* <th scope="row">{Country.latitude}</th> */}
                                    {/* <th scope="row">{user.role}</th> */}
                                    <td>
                                        <Link to={`/AdminDashboard/StateUpdate/DeleteData/${State._id}`}>
                                            <button class="btn-lg3"
                                             onClick={() => {deleteData(State._id) }}>delete</button></Link>
                                        <Link to={`/AdminDashboard/StateUpdate/StateUpdateData/${State._id}`}>
                                            <button class="btn-lg2"
                                             onClick={() => {StateUpdateData(State._id)}}>UPDATE</button></Link> 
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