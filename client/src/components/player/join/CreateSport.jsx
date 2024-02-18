import React from "react";
import './styles/create.css';
import '../styles/animations.css'
import Nav from "../Nav/Nav";
import SportContent from "./SportContent";
import './styles/create.css';


function CreateSport() {
    return (
        <div className="container">
            <main>
                <Nav />
                <SportContent />
            </main>
        </div>
    )
}

export default CreateSport;