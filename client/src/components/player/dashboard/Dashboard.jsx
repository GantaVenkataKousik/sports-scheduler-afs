import React from "react";
import Footer from "../Footer/Footer";
import Content from "./content/Content";
import Nav from '../Nav/Nav'
import './styles/dashboard.css';
import '../styles/animations.css'

function Dashboard() {
    return (
        <div className="container player">
            <main>
                <Nav />
                <Content />
            </main>
            <Footer />
        </div>
    )
}

export default Dashboard;