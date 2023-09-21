import React, { useState } from 'react'

function AdminSidebarTreeview({topic,icon,submenu,url}) {

   const [isOpen, setOpen] = useState(false);

  return (
    <li className={`nav-item has-treeview ${isOpen === true ? 'menu-open' : ''}`}>
      <a href="#" onClick={() => setOpen(!isOpen)} className="nav-link">
      <i className={`nav-icon ${icon}`}></i>
        <p>
        <a href={url}>{topic}</a>
          {/* <i className="right fas fa-angle-left"></i> */}
        </p>
      </a>
      <ul className={`nav nav-treeview ${isOpen === true ? 'show' : 'hide'}`}>
        {submenu?.map((menu, index) => (
          <li className="nav-item" key={index}>
            <a href={menu.url} className="nav-link">
              <i className="far fa-circle nav-icon"></i>
              {menu.title}
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
}

export default AdminSidebarTreeview