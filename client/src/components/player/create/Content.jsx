import React from 'react';
import LeftContent from './leftContent/LeftContent';
import RightContent from './rightContent/RightContent';
import './styles/create.css';

function Content() {
    return (
        <div className="create-content">
            <LeftContent />
            <RightContent />
        </div>
    );
}

export default Content;
