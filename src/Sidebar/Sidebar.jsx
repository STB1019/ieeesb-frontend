/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import SidebarData from './SidebarData';
import './Sidebar.css';

function Sidebar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div>
      <div className="sidebar">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <Link to="#" className="menu-bars">
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
          {SidebarData.map((item) => (
            <li key={item.title} className={item.cName}>
              <Link to={item.path}>
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
