import React from 'react';
import { useLocation } from 'react-router-dom';
import NavItem from './NavItem';
import './nav.css';

function Nav() {
    const location = useLocation();

    const navItems = [
        { iconClass: "fa-house", text: "Home", path: "/player/dashboard" },
        { iconClass: "fa-plus", text: "Create", path: "/player/create" },
        { iconClass: "fa-right-to-bracket", text: "Join", path: "/player/join" },
        { iconClass: "fa-door-open", text: "JoinTeam", path: "/player/join/jointeam" },
        { iconClass: "fa-calendar-check", text: "Schedules", path: "/player/schedules" },
        { iconClass: "fa-chart-simple", text: "Statistics", path: "/player/statistics" }
    ];

    return (
        <nav className="main-menu">
            <img className="logo" src="/images/persons/gvklogo.png" alt="" />
            <ul>
                {navItems.map((item, index) => (
                    <li key={index}>
                        <NavItem
                            iconClass={item.iconClass}
                            text={item.text}
                            status={location.pathname === item.path ? "active" : ""}
                            to={item.path} 
                        />
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Nav;
