import React from 'react';

const CarroucelItem = ({img, title, text}) => { 
    
    const divStyle = {
        'backgroundImage': 'url('+img+')',
    };

    return (
        <React.Fragment>   
            <div className="carousel-item active" style={divStyle}>
                <div className="carousel-container">
                    <div className="container">
                        <p className="animate__animated animate__fadeInUp">{title}</p>
                        <h2 className="animate__animated animate__fadeInDown">{text}</h2>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default CarroucelItem;