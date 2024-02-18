import React from 'react';
import Nav from '../Nav/Nav';
import Content from './Content';
import './styles/statistics.css';

function Statistics() {
    return (
        <div className="container">
            <main>
                <Nav />
                <Content />
            </main>
        </div>
    );
}

export default Statistics;
