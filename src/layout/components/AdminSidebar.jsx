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

      <div className="sidebar overflow-auto">
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
                <AdminSidebarTreeview topic="Admin Dashboard" url="/admin/dashboard" icon="fas fa-user-shield" />
                <AdminSidebarTreeview topic="Manage User" icon="fas fa-user-graduate" />
                <AdminSidebarTreeview topic="Subject Management" icon="fas fa-book" />
                <AdminSidebarTreeview topic="Module Management" icon="fas fa-cubes" />
                <AdminSidebarTreeview topic="MCQ Management" icon="fas fa-question-circle" />
                <AdminSidebarTreeview topic="Create MCQ" icon="fas fa-question" />
                <AdminSidebarTreeview topic="Create Exam" icon="fas fa-edit" url ='/admin/createTest' />
                <AdminSidebarTreeview topic="Exam Management" icon="fas fa-tasks"  url ='/admin/testList' />
                <AdminSidebarTreeview topic="Student Progress" icon="fas fa-chart-line" />
                <AdminSidebarTreeview topic="Student Dashboard" icon="fas fa-graduation-cap" />
                <AdminSidebarTreeview topic="Bookmarks" icon="fas fa-bookmark" />
                <AdminSidebarTreeview topic="Certificates" icon="fas fa-certificate" />
                <AdminSidebarTreeview topic="Check Student Progress" icon="fas fa-check-circle" />
                
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}

export default AdminSidebar;
