import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import {DeleteData} from './DeleteData';
import {TripplanUpdatedata} from './TripplanUpdatedata'
import '../ButtonCSS/Button.css';

export const  TripplanUpdate = () => {

    const [tripplanList, settripplanList] = useState([])
    const [travellist, settravellist] = useState([])

    const getData = () => {
        axios.get("http://localhost:4000/tripplans").then(res => {
            console.log(res.data.data)
            settripplanList(res.data.data)
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
                <h2>Tripplan Table</h2>
                    <Link to="/Home/addtripplan">
                        <button type="button" class="btn btn-primary btn-lg">Add TripPlan</button>
                    </Link>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">CountryName</th>
                        <th scope="col">StateName</th>
                        <th scope="col">UserId</th>
                        <th scope="col">HotelName</th>
                        <th scope="col">Duration</th>
                        <th scope="col">Placestovisit</th>
                        <th scope="col">Comment</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        tripplanList.map((tripplan) => {
                            return (
                                <tr>
                                    <th scope="row">{tripplan._id}</th>
                                    <th scope="row">{tripplan.CountryName}</th>
                                    <th scope="row">{tripplan.StateName}</th>
                                    <th scope="row">{tripplan.user.username}</th>
                                    <th scope="row">{tripplan.HotelName}</th>
                                    <th scope="row">{tripplan.Duration}</th>
                                    <th scope="row">{tripplan.Placestovisit}</th>
                                    <th scope="row">{tripplan.Comment}</th>
                                    <td>
                                        <Link to={`/Home/TripplanUpdate/DeleteData/${tripplan._id}`}>
                                        <button class="btn-lg3"
                                         onClick={() => {deleteData(tripplan._id) }}>delete</button></Link>
                                        <Link to={`/Home/TripplanUpdate/TripplanUpdatedata/${tripplan._id}`} >
                                        <button class="btn-lg2"
                                        onClick={()=>{TripplanUpdatedata(tripplan._id)}}>UPDATE</button></Link>
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