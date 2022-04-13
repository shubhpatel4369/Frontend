import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { HotelUpdateData } from './HotelUpdateData';
import {DeleteData} from './DeleteData';
// import { DeleteData } from './DeleteData';
import '../ButtonCSS/Button.css';

export const  HotelUpdate = () => {

    const [HotelList, setHotelList] = useState([])
    const [travellist, settravellist] = useState([])

    const getData = () => {
        axios.get("http://localhost:4000/hotels").then(res => {
            console.log(res.data.data)
            setHotelList(res.data.data)
        })
    }

    useEffect(() => {
        getData()

        return () => {

        }
    }, [])

    const deleteData = (id) => {
        axios.delete(`http://localhost:4000/hotels/${id}`).then(res => {
            alert(res.status)
        })
    }

    return (
        <div className="bg-color">
            <table class="table d">
                <thead clsss="thead-dark">
                <h2>Hotel table</h2>
                    <Link to="/Home/addHotel">
                        <button type="button" class="btn btn-primary btn-lg">Add Hotel</button>
                    </Link>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">HotelName</th>
                        <th scope="col">HotelAddress</th>
                        <th scope="col">ContactNo</th>
                        <th scope="col">City</th>
                        <th scope="col">State</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        HotelList.map((Hotel) => {
                            return (
                                <tr>
                                    <th scope="row">{Hotel._id}</th>
                                    <th scope="row">{Hotel.HotelName}</th>
                                    <th scope="row">{Hotel.HotelAddress}</th>
                                    <th scope="row">{Hotel.ContactNo}</th>
                                    <th scope="row">{Hotel.city.CityName}</th>
                                    <th scope="row">{Hotel.State.StateName}</th>
                                    
                                    
                                    
                                    {/* <th scope="row">{Country.latitude}</th> */}
                                    {/* <th scope="row">{user.role}</th> */}
                                    <td>
                                        <Link to={`/Home/HotelUpdate/DeleteData/${Hotel._id}`}>
                                        <button class="btn-lg3"
                                         onClick={() => {deleteData(Hotel._id) }}>delete</button></Link>
                                        <Link to={`/Home/HotelUpdate/HotelUpdateData/${Hotel._id}`}>
                                         <button class="btn-lg2"
                                          onClick={() => { HotelUpdateData(Hotel._id) }}>UPDATE</button></Link> 
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