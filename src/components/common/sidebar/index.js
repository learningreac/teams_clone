//import { useState } from 'react';
import './sidebar.css';
import SidebarTop from './SidebarTop';
import SidebarBottom from './SidebarBottom';

const Sidebar = () => {
    //const [isActive, SetIsActive] = useState(false);
    const handleOptionClick = (event) => {
        
        console.log('clicked',event.target)
    }
    return (
        <div className="sidebar">
           <SidebarTop onClick={handleOptionClick}/>
           <SidebarBottom onClick={handleOptionClick}/>
        </div>
    )
};

export default Sidebar;