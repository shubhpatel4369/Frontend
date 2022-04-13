import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


export const Addtripplan = () => {
    const [CountryName, setCountryName] = useState('')
    const [StateName, setStateName] = useState('')
    const [user, setuser] = useState('')
    const [HotelName, setHotelName] = useState('')
    const [Duration, setDuration] = useState('')
    const [Placestovisit, setPlacestovisit] = useState('')
    const [Comment, setComment] = useState('')

    var data ={
      CountryName:CountryName,
      StateName:StateName,
      user:user,
      HotelName:HotelName,
      Duration:Duration,
      Placestovisit:Placestovisit,
      Comment:Comment
    }

    const submit = (e)=>{
        e.preventDefault()
        axios.post("http://localhost:4000/tripplans",data).then((res)=>{
            console.log(res.status)
            console.log(res.data)
            alert("tripplan added")
        })
    }

  return (
    <div>
        <form onSubmit={submit}>
         


            
            <div className="form-group">
                <label>CountryName</label>
                <input type="text" className="form-control" defaultValue={data.CountryName}onChange={(e)=>setCountryName(e.target.value)}></input>
            </div>
            <div className="form-group">
                <label>StateName</label>
                <input type="text" className="form-control" defaultValue={data.StateName}onChange={(e)=>setStateName(e.target.value)}></input>
            </div>
            <div className="form-group">
                <label>User</label>
                <input type="text" className="form-control" defaultValue={data.user}onChange={(e)=>setuser(e.target.value)}></input>
            </div>
            <div className="form-group">
                <label>HotelName</label>
                <input type="text" className="form-control" defaultValue={data.HotelName}onChange={(e)=>setHotelName(e.target.value)}></input>
            </div>
            <div className="form-group">
                <label>Duration</label>
                <input type="text" className="form-control" defaultValue={data.Duration}onChange={(e)=>setDuration(e.target.value)}></input>
            </div>
            <div className="form-group">
                <label>Placestovisit</label>
                <input type="text" className="form-control" defaultValue={data.Placestovisit}onChange={(e)=>setPlacestovisit(e.target.value)}></input>
            </div>
            <div className="form-group">
                <label>Comment</label>
                <input type="text" className="form-control" defaultValue={data.Comment}onChange={(e)=>setComment(e.target.value)}></input>
            </div>
            <div>
                 <button type="submit" class="btn btn-primary btn-lg">Submit</button>
                 <Link to ="/Home/TripplanUpdate">
                 <button type="button" class="btn btn-primary btn-lg">Go Back</button>
                 </Link>
            </div>
            

        </form>
    </div>
  )
}