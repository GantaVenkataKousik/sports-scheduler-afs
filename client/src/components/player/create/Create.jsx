import React from "react";
import './styles/create.css';
import '../styles/animations.css'
import Nav from "../Nav/Nav";
import Content from "./Content"

function Create() {
    return (
        <div className="container">
            <main>
                <Nav />
                <Content />
            </main>
        </div>
    )
}

export default Create;