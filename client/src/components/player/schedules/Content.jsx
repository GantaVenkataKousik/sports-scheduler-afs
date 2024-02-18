import React from 'react';
import LeftContent from './leftContent/LeftContent';
import './styles/create.css';
import RightContent from './rightContent/RightContent';

function Content() {
    return (
        <section className="schedule-create-content">
            <LeftContent />
            <RightContent />
        </section>
    );
}

export default Content;
