import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

  

export const CityUpdateData = () => {
    
    var id = useParams().id
    const [data, setdata] = useState('')
    const [CityName, setCityName] = useState(data.CityName)
    // const [CountryId, setCountryId] = useState(data.country_Id)
    const [State, setState] = useState(data.state)
    // const [longiude, setlongiude] = useState(data.longitude)

    const CityUpdateData = async () => {
        await axios.get(`http://localhost:4000/cities/${id}`).then(res => {
            console.log(res.data.data)
            setdata(res.data.data)
        })
    }
   

    useEffect(() => {
        CityUpdateData()
      
        return () => {
          
        }
      }, [])


      const submitform = (e) => {
        e.preventDefault()
        console.log("submit called")

        var UpdatedCity = {
            CityName: CityName,
            State: State
            
        }

        axios.put(`http://localhost:4000/cities/${id}`, UpdatedCity).then(res => {
            alert("city Updated")
        })
    }
      

    return (
        <div>
            {
                data.State !== undefined ?
            
            <form onSubmit={submitform}>
                
                
                    <div className="form-group">
                        <label>CityName</label>
                        <input type="text" className="form-control" defaultValue={data.CityName} onChange={(e) => setCityName(e.target.value)}></input>
                    </div>
                    <div className="form-group">
                        <label>State</label>
                        <input type="text" className="form-control" defaultValue={data.State.StateName} onChange={(e) => setState(e.target.value)}></input>
                    </div>
                    {/* <div className="form-group">
                        <label>Longitude</label>
                        <input type="text" className="form-control" defaultValue={data.longitude} onChange={(e) => setlongiude(e.target.value)}></input>
                    </div> */}
                    <div>
                 <button type="submit" class="btn-lg">Submit</button>
                 <Link to ="/AdminDashboard/CityUpdate">
                 <button type="button" class="btn-lg1">Go Back</button>
                 </Link>
            </div>
            </form>
        :"loading"
}
        </div>
        
    )
}