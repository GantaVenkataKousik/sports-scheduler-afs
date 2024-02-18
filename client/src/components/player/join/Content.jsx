import React from 'react';
import LeftContent from './leftContent/LeftContent';
import RightContent from './rightContent/RightContent';
import './styles/create.css';

function Content() {
    return (
        <section className="create-content">
            <LeftContent />
            <RightContent />
        </section>
    );
}

export default Content;
