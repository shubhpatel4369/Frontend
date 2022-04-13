import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {Link} from 'react-router-dom';


export const StateUpdateData = () => {

    var id = useParams().id
    const [data, setdata] = useState('')
    const [StateName, setStateName] = useState(data.StateName)
    // const [CountryId, setCountryId] = useState(data.country_Id)
    const [country, setcountry] = useState(data.country)
    // const [longiude, setlongiude] = useState(data.longitude)

    const StateUpdateData = async () => {
        await axios.get(`http://localhost:4000/states/${id}`).then(res => {
            console.log(res.data.data)
            setdata(res.data.data)
        })
    }


    useEffect(() => {
        StateUpdateData()

        return () => {

        }
    }, [])

    const submitform = (e) => {
        e.preventDefault()
        console.log("submit called")

        var UpdatedState = {
            StateName: StateName,
            country: country

        }

        axios.put(`http://localhost:4000/states/${id}`, UpdatedState).then(res => {
            alert("State Updated")
        })
    }


    return (
        <div class="d mg">
            {

                data.country !== undefined ?

                    <form onSubmit={submitform}>


                        <div className="form-group">
                            <label>StateName</label>
                            <input type="text" className="form-control" defaultValue={data.StateName} onChange={(e) => setStateName(e.target.value)}></input>
                        </div>
                        <div className="form-group">
                            <label>Country</label>
                            <input type="text" className="form-control" defaultValue={data.country.CountryName} onChange={(e) => setcountry(e.target.value)}></input>
                        </div>
                        {/* <div className="form-group">
                        <label>Longitude</label>
                        <input type="text" className="form-control" defaultValue={data.longitude} onChange={(e) => setlongiude(e.target.value)}></input>
                    </div> */}
                    <div>
                 <button type="submit" class="btn-lg">Submit</button>
                 <Link to ="/AdminDashboard/StateUpdate">
                 <button type="button" class="btn-lg1">Go Back</button>
                 </Link>
            </div>
                    </form>
                    : "loading"
            }

        </div>

    )
}