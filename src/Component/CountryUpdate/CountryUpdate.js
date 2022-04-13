import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import {DeleteData} from './DeleteData';
import {CountryUpdateData} from './CountryUpdateData'
// import { DeleteData } from './DeleteData';
import '../ButtonCSS/Button.css';

export const  CountryUpdate = () => {

    const [CountryList, setCountryList] = useState([])
    const [travellist, settravellist] = useState([])

    const getData = () => {
        axios.get("http://localhost:4000/countries").then(res => {
            console.log(res.data.data)
            setCountryList(res.data.data)
        })
    }

    useEffect(() => {
        getData()

        return () => {

        }
    }, [])

    const deleteData = (id) => {
        axios.delete(`http://localhost:4000/countries/${id}`).then(res => {
            alert(res.status)
        })
    }

    return (
        <div className="bg-color">
            <table class="table d">
                <thead clsss="thead-dark">
                <h2>Country table</h2>
                    <Link to="/AdminDashboard/addCountry">
                        <button type="button" class="btn-lg">Add Country</button>
                    </Link>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">CountryName</th>
                        <th scope="col">longitude</th>
                        <th scope="col">latitude</th>
                        <th scope="col">Action</th>
                        {/* <th scope="col">Role</th> */}
                    </tr>
                </thead>

                <tbody>
                    {
                        CountryList.map((Country) => {
                            return (
                                <tr>
                                    <th scope="row">{Country._id}</th>
                                    <th scope="row">{Country.CountryName}</th>
                                    <th scope="row">{Country.longitude}</th>
                                    <th scope="row">{Country.latitude}</th>
                                    {/* <th scope="row">{Country.Action}</th> */}
                                    {/* <th scope="row">{user.role}</th> */}
                                    <td>
                                        <Link to={`/AdminDashboard/CountryUpdate/DeleteData/${Country._id}`}>
                                        <button class="btn-lg3"
                                         onClick={() => {deleteData(Country._id) }}>delete</button></Link>
                                        <Link to={`/AdminDashboard/CountryUpdate/CountryUpdateData/${Country._id}`}>
                                        <button class="btn-lg2"
                                         onClick={() => { CountryUpdateData(Country._id) }}>UPDATE</button></Link> 
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