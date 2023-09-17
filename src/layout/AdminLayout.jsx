import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminFooter from './components/AdminFooter'
import '../assets/css/adminlte.min.css'

function AdminLayout() {
  return (
    <div className="hold-transition sidebar-mini">
        <div className="wrapper">
        AdminLayout
        <div className="content-wrapper">
        <Outlet/>
        </div>
     
        <AdminFooter/>
        </div>
        
    </div>
  )
}

export default AdminLayout