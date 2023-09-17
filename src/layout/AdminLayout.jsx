import React from 'react'
import { Outlet } from 'react-router-dom'

function AdminLayout() {
  return (
    <div className="hold-transition sidebar-mini">
        <div className="wrapper">
        AdminLayout
        <Outlet/>
        </div>
        
    </div>
  )
}

export default AdminLayout