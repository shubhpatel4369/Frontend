import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
  

export const CountryUpdateData = () => {
    
    var id = useParams().id
    const [data, setdata] = useState('')
    const [CountryName, setCountryName] = useState(data.CountryName)
    // const [CountryId, setCountryId] = useState(data.country_Id)
    const [latitude, setlatitude] = useState(data.latitude)
    const [longiude, setlongiude] = useState(data.longitude)

    const CountryUpdateData = async () => {
        await axios.get(`http://localhost:4000/countries/${id}`).then(res => {
            console.log(res.data.data)
            setdata(res.data.data)
        })
    }
   

    useEffect(() => {
        CountryUpdateData()
      
        return () => {
          
        }
      }, [])

      const submitform =(e)=>{
        e.preventDefault()
        console.log("submit called")
    
        var UpdatedCountry={
                CountryName:CountryName,
                longiude:longiude,
                latitude:latitude                
        }
      
        axios.put(`http://localhost:4000/countries/${id}`,UpdatedCountry).then(res => {
            alert("Country Updated")
        })
    }

    return (
        <div>
            <form onSubmit={submitform}>  
                
                
                    <div className="form-group">
                        <label>CountryName</label>
                        <input type="text" className="form-control" defaultValue={data.CountryName} onChange={(e) => setCountryName(e.target.value)}></input>
                    </div>
                    <div className="form-group">
                        <label>Latitude</label>
                        <input type="text" className="form-control" defaultValue={data.latitude} onChange={(e) => setlatitude(e.target.value)}></input>
                    </div>
                    <div className="form-group">
                        <label>Longitude</label>
                        <input type="text" className="form-control" defaultValue={data.longitude} onChange={(e) => setlongiude(e.target.value)}></input>
                    </div>
                    <div>
                 <button type="submit" class="btn-lg">Submit</button>
                 <Link to ="/AdminDashboard/CountryUpdate">
                 <button type="button" class="btn-lg1">Go Back</button>
                 </Link>
            </div>
            </form>
        </div>
        
    )
}