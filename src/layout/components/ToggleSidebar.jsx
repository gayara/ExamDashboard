import React, { useState } from 'react'

function ToggleSidebar({menu}) {

        const [isOpen, setOpen] = useState(false);
     
       return (
         <li className={`sidebar-mini layout-fixed ${isOpen === true ? 'sidebar-closed sidebar-collapse' : ''}`}>
           <a href="#" onClick={() => setOpen(!isOpen)} className="nav-link">
           </a>
         </li>
       );
     }
     

export default ToggleSidebar;