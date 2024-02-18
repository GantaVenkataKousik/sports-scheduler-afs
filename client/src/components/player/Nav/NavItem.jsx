import React from 'react';
import { Link } from 'react-router-dom';

function NavItem({ iconClass, text, status, to }) {
    // Check if the current location matches exactly with the specified path
    const isActive = window.location.pathname === to;

    return (
        <li className={`nav-item ${isActive ? 'active' : ''}`}>
            <b></b>
            <b></b>
            <Link to={to}>
                <i className={`fa ${iconClass} nav-icon`}></i>
                <span className="nav-text">{text}</span>
            </Link>
        </li>
    );
}

export default NavItem;
