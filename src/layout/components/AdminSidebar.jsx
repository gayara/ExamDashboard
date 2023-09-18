import React from "react";
import AdminSidebarTreeview from "./AdminSidebarTreeview";
import logo from '../../assets/img/graduation.png';


function AdminSidebar() {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <a href="/" className="brand-link">
        <img
          src={logo}
          alt="company Logo"
          className="brand-image img-circle elevation-4"
          style={{ opacity: ".8" }}
        />
        <span className="brand-text font-weight-light">Eduford</span>
      </a>

      <div className="sidebar">
        {/* <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img
              src="../../dist/img/user2-160x160.jpg"
              className="img-circle elevation-2"
              alt="User"
            />
          </div>
          <div className="info">
            <a href="/" className="d-block">
              Alexander Pierce
            </a>
          </div>
        </div> */}

        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <li className="nav-item has-treeview">
              <AdminSidebarTreeview topic="Admin" icon="fas fa-user-shield" submenu={[{url:'/admin/dashboard'}]}/>
              <AdminSidebarTreeview topic="User" icon="fas fa-user-graduate"/>
              <AdminSidebarTreeview topic="Subject" icon="fas fa-book" />
              <AdminSidebarTreeview topic="Module" icon="fas fa-star" />
              <AdminSidebarTreeview topic="Test" icon="fas fa-pencil-alt" submenu={[{title:'Subjects',url:'/admin/subjectList'}]}/>
              
          </li> 
          </ul>
        </nav>
      </div>
    </aside>
  );
}

export default AdminSidebar;
