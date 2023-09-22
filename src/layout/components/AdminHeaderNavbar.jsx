import React from 'react'

function AdminHeaderNavbar({menu}) {

        const [isOpen, setOpen] = useState(false);
     
       return (
         <li className={`sidebar-mini layout-fixed ${isOpen === true ? 'sidebar-closed sidebar-collapse' : ''}`}>
           <a href="#" onClick={() => setOpen(!isOpen)} className="nav-link">
           </a>
         </li>
       );
     }
     

export default AdminHeaderNavbar