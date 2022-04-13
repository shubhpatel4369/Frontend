import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom'; 

export const HotelUpdateData = () => {

    var id = useParams().id
    const [data, setdata] = useState('')
    const [HotelName, setHotelName] = useState(data.HotelName)
    const [HotelAddress, setHotelAddress] = useState(data.HotelAddress)
    const [ContactNo, setContactNo] = useState(data.ContactNo)
    const [city, setcity] = useState(data.city)
    const [State, setState] = useState(data.State)
    

    const HotelUpdateData = async () => {
        await axios.get(`http://localhost:4000/hotels/${id}`).then(res => {
            console.log(res.data.data)
            setdata(res.data.data)
            // console.log(res.data.data.State)
        })
    }


    useEffect(() => {
        HotelUpdateData()

        return () => {

        }
    }, [])

    const submitform = (e) => {
        e.preventDefault()
        console.log("submit called")

        var UpdatedHotel = {
            HotelName: HotelName,
            HotelAddress: HotelAddress,
            ContactNo: ContactNo,
            city: city,
            State: State
        }

        axios.put(`http://localhost:4000/hotels/${id}`, UpdatedHotel).then(res => {
            alert("Hotel Updated")
        })
    }

    return (
        <div>
            {
                data.city && data.State !== undefined ?

                    <form onSubmit={submitform}>

                        <div className="form-group">
                            <label>HotelName</label>
                            <input type="text" className="form-control" defaultValue={data.HotelName} onChange={(e) => setHotelName(e.target.value)}></input>
                        </div>
                        <div className="form-group">
                            <label>HotelAddress</label>
                            <input type="text" className="form-control" defaultValue={data.HotelAddress} onChange={(e) => setHotelAddress(e.target.value)}></input>
                        </div>
                        <div className="form-group">
                            <label>ContactNo</label>
                            <input type="text" className="form-control" defaultValue={data.ContactNo} onChange={(e) => setContactNo(e.target.value)}></input>
                        </div>
                        <div className="form-group">
                            <label>City</label>
                            <input type="text" className="form-control" defaultValue={data.city.CityName} onChange={(e) => setcity(e.target.value)}></input>
                        </div>
                        <div className="form-group">
                            <label>State</label>
                            <input type="text" className="form-control" defaultValue={data.State.StateName} onChange={(e) => setState(e.target.value)}></input>
                        </div>
                        <div>
                            <button type="submit" class="btn btn-primary btn-lg">Submit</button>
                        {/* </div>
                        <div> */}
                            <Link to="/Home/HotelUpdate">
                                <button type="button" class="btn btn-primary btn-lg">Go Back</button>
                            </Link>
                        </div>
                    </form>
                    : "loading...."
            }

        </div>

    )
}