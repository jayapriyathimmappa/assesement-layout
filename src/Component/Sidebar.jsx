import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faChartBar,
  faUsers,
  faCog,
  faSignOutAlt,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar bg-dark">
      <div className="sidebar-menu">
        <div className="menu-item">
          <FontAwesomeIcon icon={faHome} className="menu-icon" />
        </div>
        <div className="menu-item">
          <FontAwesomeIcon icon={faChartBar} className="menu-icon" />
        </div>
        <div className="menu-item">
          <FontAwesomeIcon icon={faUsers} className="menu-icon" />
        </div>
        <div className="menu-item">
          <FontAwesomeIcon icon={faCog} className="menu-icon" />
        </div>
        <div className="menu-item">
          <FontAwesomeIcon icon={faCartShopping} className="menu-icon" />
        </div>
      </div>
      <div className="sidebar-footer">
        <div className="menu-item">
          <FontAwesomeIcon icon={faSignOutAlt} className="menu-icon" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
