import React from "react";
import { Outlet } from "react-router-dom";
import AdminFooter from "./components/AdminFooter";
import "../assets/css/adminlte.min.css";
import "../assets/plugins/fontawesome-free/css/all.min.css";
import "../assets/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css";
import "../assets/plugins/icheck-bootstrap/icheck-bootstrap.min.css";
import "../assets/plugins/jqvmap/jqvmap.min.css";
import "../assets/plugins/overlayScrollbars/css/OverlayScrollbars.min.css";
import "../assets/plugins/daterangepicker/daterangepicker.css";
import "../assets/plugins/summernote/summernote-bs4.css";
import "../pages/Test/CreateExam.css"
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
