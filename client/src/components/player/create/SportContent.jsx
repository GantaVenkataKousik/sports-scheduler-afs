import React from 'react';
import LeftSportContent from './LeftSportContent';
import RightContent from './rightContent/RightContent';
import './styles/create.css';

function SportContent() {
    return (
        <section className="create-content">
            <LeftSportContent />
            <RightContent />
        </section>
    );
}

export default SportContent;
