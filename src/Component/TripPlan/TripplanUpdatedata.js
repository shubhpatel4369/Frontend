import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

export const TripplanUpdatedata = () => {
    var id = useParams().id;
    const [data, setdata] = useState('')
    const [CountryName, setCountryName] = useState(data.username)
    const [StateName, setStateName] = useState(data.email)
    const [user, setuser] = useState(data.user)
    const [HotelName, setHotelName] = useState(data.HotelName)
    const [Duration, setDuration] = useState(data.Duration)
    const [Placestovisit, setPlacestovisit] = useState(data.Placestovisit)
    const [Comment, setComment] = useState(data.Comment)

    const TripplanUpdateData = async () => {
        await axios.get(`http://localhost:4000/tripplans/${id}`).then(res => {
            console.log(res.data.data)
            setdata(res.data.data)
        })
    }

    useEffect(() => {
        TripplanUpdateData()

        return () => {

        }
    }, [])

    const submitform = (e) => {
        e.preventDefault()
        console.log("Submit called")

        var UpdatedTripplan = {

            CountryName: CountryName,
            StateName: StateName,
            user: user,
            HotelName: HotelName,
            Duration: Duration,
            Placestovisit: Placestovisit,
            Comment: Comment

        }
        axios.put(`http://localhost:4000/tripplans/${id}`, UpdatedTripplan).then(res => {
            alert("'Tripplan Updated")
        })
    }


    return (
        <div>
            {
                data.user !== undefined ?
                    <form onSubmit={submitform}>

                        <div className="form-group">
                            <label>CountryName</label>
                            <input type="text" className="form-control" defaultValue={data.CountryName} onChange={(e) => setCountryName(e.target.value)}></input>
                        </div>
                        <div className="form-group">
                            <label>StateName</label>
                            <input type="text" className="form-control" defaultValue={data.StateName} onChange={(e) => setStateName(e.target.value)}></input>
                        </div>
                        <div className="form-group">
                            <label>UserId</label>
                            <input type="text" className="form-control" defaultValue={data.user.username} onChange={(e) => setuser(e.target.value)}></input>
                        </div>
                        <div className="form-group">
                            <label>HotelName</label>
                            <input type="text" className="form-control" defaultValue={data.HotelName} onChange={(e) => setHotelName(e.target.value)}></input>
                        </div>
                        <div className="form-group">
                            <label>Duration</label>
                            <input type="text" className="form-control" defaultValue={data.Duration} onChange={(e) => setDuration(e.target.value)}></input>
                        </div>
                        <div className="form-group">
                            <label>Placestovisit</label>
                            <input type="text" className="form-control" defaultValue={data.Placestovisit} onChange={(e) => setPlacestovisit(e.target.value)}></input>
                        </div>
                        <div className="form-group">
                            <label>Comment</label>
                            <input type="text" className="form-control" defaultValue={data.Comment} onChange={(e) => setComment(e.target.value)}></input>
                        </div>
                        <div>
                            <button type="submit" class="btn btn-primary btn-lg">Submit</button>
                        {/* </div>
                        <div> */}
                            <Link to="/Home/TripplanUpdate">
                                <button type="button" class="btn btn-primary btn-lg">Go Back</button>
                            </Link>
                        </div>

                    </form>

                    : "loading"
            }
        </div>
    )
}