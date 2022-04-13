import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
  

export const UpdateData = () => {
    
    var id = useParams().id
    const [data, setdata] = useState('')
    const [Countryname, setCountryname] = useState(data.country_name)
    // const [CountryId, setCountryId] = useState(data.country_Id)
    const [latitude, setlatitude] = useState(data.latitude)
    const [longiude, setlongiude] = useState(data.longitude)

    const UpdateData = async () => {
        await axios.get(`http://localhost:4000/countries/${id}`).then(res => {
            console.log(res.data.data)
            setdata(res.data.data)
        })
    }
    useEffect(() => {

        UpdateData()
        return () => {

        }
    }, [])

    const submit = (e)=>{
        
    }

    return (
        
            
            <div className="container">
                <form onSubmit={submit}>
                    <div className="form-group">
                        <label>CountryName</label>
                        <input type="text" className="form-control" defaultValue={data.Countryname} onChange={(e) => setCountryname(e.target.value)}></input>
                    </div>
                    <div className="form-group">
                        <label>Latitude</label>
                        <input type="text" className="form-control" defaultValue={data.latitude} onChange={(e) => setlatitude(e.target.value)}></input>
                    </div>
                    <div className="form-group">
                        <label>Longitude</label>
                        <input type="text" className="form-control" defaultValue={data.longitude} onChange={(e) => setlongiude(e.target.value)}></input>
                    </div>
                   
                    <button type = "submit" className="btn-btn-primary">Submit</button>
                </form>
            
        </div>
    )
}
