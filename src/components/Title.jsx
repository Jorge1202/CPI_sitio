import React from 'react';

import './styles/Title.css';

const Title = ({title, title2, color}) => { 
    const divStyle = {
        color: color,
      };

    return (
        <React.Fragment>   
            <div className="section-title">
                <h2 style={divStyle}>{title} <span>{title2}</span></h2> 
            </div>
        </React.Fragment>
    );
}

export default Title;