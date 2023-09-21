import React from "react";
import { Outlet } from "react-router-dom";
import AdminFooter from "./components/AdminFooter";
import "../assets/css/adminlte.css";
import "../assets/plugins/fontawesome-free/css/all.min.css";
import AdminHeader from "./components/AdminHeader";
import AdminSidebar from "./components/AdminSidebar";


function AdminLayout() {
  return (
    <div className="hold-transition sidebar-mini">
      <div className="wrapper">
        <AdminHeader />
        <AdminSidebar />
        <div className="content-wrapper"> 
          <Outlet />
          
        </div>
        <AdminFooter />
      </div>
    </div>
  );
}

export default AdminLayout;
