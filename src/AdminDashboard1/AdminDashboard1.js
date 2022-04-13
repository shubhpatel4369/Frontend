import React from 'react';
import { Sidebar } from '../Component/SideBar/Sidebar';
import { Navbar } from './Navbar';
import {Footer} from './Footer';
export const AdminDashboard = () => {
  return (
    <div>
        <Navbar/>
        <Sidebar/>
        <Footer/>
    </div>
  )
}
