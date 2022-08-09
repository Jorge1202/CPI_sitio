import React from 'react';
import './styles/Subtitle.css';

const Subtitle = ({title, subtitle}) => { 
    return (
        <div className="subtitle-header">
            <h2>{title}</h2>
            <p>{subtitle}</p>
        </div>
    );
}

export default Subtitle;