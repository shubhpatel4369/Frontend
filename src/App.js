import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';

import { Login } from './Component/Login/Login.js';
//import img from '../public/asset/img/Login.png';

import "../src/asset/css/bootstrap-theme.min.css"
import "../src/asset/css/fontAwesome.css"
import "../src/asset/css/hero-slider.css"
import "../src/asset/css/owl-carousel.css"
import "../src/asset/css/datepicker.css"
import "../src/asset/css/templatemo-style.css"
import "../src/asset/css/bootstrap.min.css"
import "../src/asset/css/bootstrap.css.map"
import "../src/asset/css/bootstrap.css"
import "../src/asset/css/bootstrap-theme.css"


import "../src/assets/css/style.css"
// import "../src/asset/css/fonts/flexslider-icon.eot"
// import "../src/asset/css/fonts/flexslider-icon.svg"
// import "../src/asset/css/fonts/flexslider-icon.ttf"
// import "../src/asset/css/fonts/flexslider-icon.woff"
import { Route, Routes } from 'react-router-dom';
import { UpdateData } from './Component/UpdateData';
// import { DeleteData } from './Component/DeleteData';
import { RoleUpdate1 } from './Component/RoleUpdate1';
import { UserUpdate } from './Component/UserUpdate/UserUpdate';
import { TraveldiaryUpdate } from './Component/Traveldiaryupdate/TraveldiaryUpdate';
import {UserUpdatedata} from './Component/UserUpdate/UserUpdatedata'
import { Sidebar } from './Component/SideBar/Sidebar';
import { AddData } from './Component/UserUpdate/AddData';
import { AddRole } from './Component/RoleUpdate/AddRole';
import { RoleUpdateData } from './Component/RoleUpdate/RoleUpdateData';
import {RoleUpdate} from './Component/RoleUpdate/RoleUpdate';
import { AddHotel } from './Component/HotelUpdate/AddHotel';
import { HotelUpdateData } from './Component/HotelUpdate/HotelUpdateData';
import { HotelUpdate } from './Component/HotelUpdate/HotelUpdate';
import { CountryUpdate } from './Component/CountryUpdate/CountryUpdate';
import { CountryUpdateData } from './Component/CountryUpdate/CountryUpdateData';
import {Registration} from './Pages/Registration';
import {TraveldiaryUpdatedata} from './Component/Traveldiaryupdate/TraveldiaryUpdatedata';
import {TripplanUpdatedata} from './Component/TripPlan/TripplanUpdatedata'
import {TripplanUpdate} from './Component/TripPlan/TripplanUpdate';
import {AddCountry} from './Component/CountryUpdate/AddCountry';
import {Addtripplan} from './Component/TripPlan/Addtripplan';
import {AddTraveldiary} from './Component/Traveldiaryupdate/AddTraveldiary';
import {AddCity} from './Component/CityUpdate/AddCity';
import { Profile } from './Component/Profile/Profile';
import {StateUpdate} from './Component/StateUpdate/StateUpdate'
import { AdminDashboard1 } from './AdminDashboard1/AdminDashboard1';
import { AdminDashboard } from './Pages/AdminDashboard/AdminDashboard';
import "../src/asset/css/bootstrap.css.map"
import { StateUpdateData } from './Component/StateUpdate/StateUpdateData';
import {AddState} from './Component/StateUpdate/AddState';
import { CityUpdate } from './Component/CityUpdate/CityUpdate';
import { CityUpdateData } from './Component/CityUpdate/CityUpdateData';
import { Traveldiary } from './Component/TravelDiary/Traveldiary';
import {Homepage} from './Pages/TravelFeedBack/Homepage'
import {Mostpopular} from '../src/Pages/Most popular/Mostpopular';

<link href="https://fonts.googleapis.com/css?family=Raleway:100,200,300,400,500,600,700,800,900" rel="stylesheet"/>




function App() {
  return (
    <div>
    {/* <UserUpdate/>
    // <DeleteData/>
    //  <Login/>
    // <Home/> 
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a */}
    {/* //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React */}
    {/* //     </a> */}
    {/* //   </header> */}
    {/* //</div> */}
    {/* // <RoleUpdate/>
    // <UserUpdate/>
    // <TraveldiaryUpdate/> 
    //<Login1/> */}
    {/* <Routes>
      <Route path = "/" element = {<Login/>}></Route>
      <Route path = "/AdminDashboard" element = {<AdminDashboard/>}></Route>
      <Route path = "/AdminDashboard/Component/RoleUpdate" element = {<RoleUpdate/>}></Route>
      <Route path ="/Registration" element={<Registration/>}></Route>
      <Route path ="/registration/Login" element={<Login/>}></Route>
      <Route path ="/Home" element={<Home/>}></Route>
      <Route path ="/Home/UserUpdate" element={<UserUpdate/>}></Route>
      <Route path ="/Home/UserUpdate/DeleteData" element={<UserUpdate/>}></Route>
      <Route path ="/Home/UserUpdate/UserUpdatedata/:id" element={<UserUpdatedata/>}></Route>
      <Route path ="/Home/AddData" element={<AddData/>}></Route>
      <Route path ="/Home/RoleUpdate" element={<RoleUpdate/>}></Route>
      <Route path ="/Home/RoleUpdate/DeleteData" element={<RoleUpdate/>}></Route>
      <Route path ="/Home/RoleUpdate/RoleUpdateData/:id" element={<RoleUpdateData/>}></Route>
      <Route path ="/Home/AddRole" element={<AddRole/>}></Route> */}



      
      {/* <Route path ="/Home/CountryUpdate" element={<CountryUpdate/>}></Route>
      <Route path ="/Home/CountryUpdate/DeleteData" element={<CountryUpdate/>}></Route>
      <Route path ="/Home/CountryUpdate/CountryUpdateData/:id" element={<CountryUpdateData/>}></Route>
      <Route path ="/Home/AddCountry" element={<AddCountry/>}></Route> */}


      {/* <Route path ="/Home/HotelUpdate" element={<HotelUpdate/>}></Route>
      <Route path ="/Home/HotelUpdate/DeleteData" element={<HotelUpdate/>}></Route>
      <Route path ="/Home/HotelUpdate/HotelUpdateData/:id" element={<HotelUpdateData/>}></Route>
      <Route path ="/Home/AddHotel" element={<AddHotel/>}></Route>
      <Route path ="/Home/TripplanUpdate" element={<TripplanUpdate/>}></Route>
      <Route path ="/Home/TripplanUpdate/DeleteData" element={<TripplanUpdate/>}></Route>
      <Route path ="/Home/TripplanUpdate/TripplanUpdatedata/:id" element={<TripplanUpdatedata/>}></Route>
      <Route path ="/Home/Addtripplan" element={<Addtripplan/>}></Route>
      <Route path ="/Home/TraveldiaryUpdate" element={<TraveldiaryUpdate/>}></Route>
      <Route path ="/Home/TraveldiaryUpdate/DeleteData" element={<TraveldiaryUpdate/>}></Route>
      <Route path ="/Home/TraveldiaryUpdate/TraveldiaryUpdateData/:id" element={<TraveldiaryUpdatedata/>}></Route>
      <Route path ="/Home/AddTraveldiary" element={<AddTraveldiary/>}></Route> */}


    {/* </Routes> */}
    {/* <Routes> */}
    {/* <Route path = "/" element = {<Login/>}></Route> */}


    {/* <Route path = "/AdminDashboard" element = {<AdminDashboard/>}></Route>
    <Route path = "/AdminDashboard/CountryUpdate" element = {<CountryUpdate/>}></Route>
    <Route path = "/AdminDashboard/CountryUpdate/DeleteData/:id" element = {<CountryUpdate/>}></Route>
    <Route path = "/AdminDashboard/CountryUpdate/CountryUpdateData/:id" element = {<CountryUpdateData/>}></Route>
    <Route path = "/AdminDashboard/AddCountry" element= {<AddCountry/>}></Route>
    <Route path = "/AdminDashboard/RoleUpdate" element = {<RoleUpdate/>}></Route>
    <Route path = "/AdminDashboard/RoleUpdate/DeleteData/:id" element = {<RoleUpdate/>}></Route>
    <Route path = "/AdminDashboard/RoleUpdate/RoleUpdateData/:id" element = {<RoleUpdateData/>}></Route>
    <Route path = "/AdminDashboard/AddRole" element= {<AddRole/>}></Route>
    <Route path = "/AdminDashboard/StateUpdate" element = {<StateUpdate/>}></Route>
    <Route path = "/AdminDashboard/StateUpdate/DeleteData/:id" element = {<StateUpdate/>}></Route>
    <Route path = "/AdminDashboard/StateUpdate/StateUpdateData/:id" element = {<StateUpdateData/>}></Route>
    <Route path = "/AdminDashboard/AddState" element= {<AddState/>}></Route>
    <Route path = "/AdminDashboard/CityUpdate" element = {<CityUpdate/>}></Route>
    <Route path = "/AdminDashboard/CityUpdate/DeleteData/:id" element = {<CityUpdate/>}></Route>
    <Route path = "/AdminDashboard/CityUpdate/CityUpdateData/:id" element = {<CityUpdateData/>}></Route>
    <Route path = "/AdminDashboard/AddCity" element= {<AddCity/>}></Route>
    <Route path ="/Registration" element={<Registration/>}></Route>
    <Route path ="/registration/Login" element={<Login/>}></Route>
    <Route path ="/AdminDashboard/Traveldiary" element={<Traveldiary/>}></Route>
    <Route path ="/AdminDashboard/Traveldiary/DeleteData/:id" element={<Traveldiary/>}></Route>

    </Routes> */}
    <Homepage/>
    {/* <Mostpopular/> */}
    {/* <AdminDashboard/> */}
    {/* <Profile/> */}
    {/* <AdminDashboard/> */}
    {/* <Login/> */}
    {/* <Sidebar/> */}
    {/* <Home/> */}
    {/* <UserUpdate/> */}
    {/* <Registration/> */}
    </div>
  );
}

export default App;

