import React, { useEffect, useState } from 'react'
//import img from "./asset/img/Login.png";
import loginimg from './Login.png'
// import './Component/Login/Login.css'
import {Link, useNavigate} from 'react-router-dom';
import '../Login/Login.css';
import { ToastContainer } from 'react-toastify';
import { Registration } from '../../Pages/Registration';
export const Login = () => {
    
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    
    // var navigate = useNavigate();

    const handlesubmit= async(e)=>{
        e.preventDefault();

        console.log("submit called....")
        localStorage.setItem('email',email)
        localStorage.setItem('password',password)
        // var data={
        //     email:email,
        //     password:password
        // }
    }

    return (
        <div>
             
             <section class="vh-100">
                <div class="container-fluid h-custom">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-md-9 col-lg-5 col-xl-4">
                            <img src={loginimg} class="image"
                                alt="Sample image" />
                        </div>
                        <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <form onSubmit={handlesubmit}>
                                {/* <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start"> */}
                                    {/* <p class="lead fw-normal mb-0 me-3">Sign in with</p>
                                    <button type="button" class="btn btn-primary btn-floating mx-1">
                                        <i class="fab fa-facebook-f"></i>
                                    </button>

                                    <button type="button" class="btn btn-primary btn-floating mx-1">
                                        <i class="fab fa-twitter"></i>
                                    </button>

                                    <button type="button" class="btn btn-primary btn-floating mx-1">
                                        <i class="fab fa-linkedin-in"></i>
                                    </button>
                                </div>

                                <div class="divider d-flex align-items-center my-4">
                                    <p class="text-center fw-bold mx-3 mb-0">Or</p>
                                </div> */}

                                {/* <!-- Email input --> */}
                                <div class="form-outline mb-5">
                                <label class="form-label " for="form3Example3">Email address</label>
                                    <input type="email" id="form3Example3" class="form-control form-control-lg"
                                        placeholder="Enter a valid email address" 
                                        onChange={(e)=>{setemail(e.target.value)}}/>
                                    
                                </div>

                                {/* <!-- Password input --> */}
                                <div class="form-outline mb-5">
                                <label class="newep" for="form3Example4">Password</label>
                                    <input type="password" id="form3Example4" class="form-control form-control-lg"
                                        placeholder="Enter password"
                                        onChange={(e)=>{setpassword(e.target.value)}} />
                                    
                                </div>

                                <div class="d-flex justify-content-between align-items-center">
                                    {/* <!-- Checkbox --> */}
                                    <div class="form-check mb-0">
                                        <input class="form-check-input me-10" type="checkbox" value="" id="form2Example3" />
                                        <label class="newep" for="form2Example3">
                                            Remember me
                                        </label>
                                    </div>
                                    <Link to="/AdminDashboard" class="text-body">Forgot password?</Link>
                                </div>

                                <div class="text-center text-lg-start mt-4 pt-2">
                                    <Link to ="/Home">
                                    <button type="handlesubmit" class="btn btn-primary btn-lg" 
                                    style={{paddingleft: "2.5rem" , paddingright: "2.5rem"}}
                                    onClick={handlesubmit}>Login</button></Link>
                                    {/* <ToastContainer
                                    position="top-right"
                                    autoClose={1800}
                                    hideProgressBar={false}
                                    newestOnTop={false}
                                    closeOnClick
                                    rtl={false}
                                    pauseOnFocusLoss
                                    draggable
                                    pauseOnHover
                                    /> */}

                                    <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? 
                                    <Link to={'/Registration'}
                                        class="link-danger">Register</Link></p>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
                <div class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
                    {/* <!-- Copyright --> */}
                    <div class="text-white mb-3 mb-md-0">
                        {/* Copyright © 2020. All rights reserved. */}
                    </div>
                    {/* <!-- Copyright --> */}

                    {/*  <!-- Right --> */}
                    <div>
                        <a href="#!" class="text-white me-4">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#!" class="text-white me-4">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="#!" class="text-white me-4">
                            <i class="fab fa-google"></i>
                        </a>
                        <a href="#!" class="text-white">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                    {/*  <!-- Right --> */}
                </div>
            </section>
        </div>
    )
}

