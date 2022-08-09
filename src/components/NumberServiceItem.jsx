import React from 'react';

const NumberServiceItem = ({title, descripcion, icon}) => { 
    return (
        <React.Fragment>   
            <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div className="icon-box">
                    <div className="icon"><img className="imgIcon" src={icon} alt=""/></div>
                    <h4>{title}</h4>
                    <p>{descripcion}</p>
                </div>
            </div>
        </React.Fragment>
    );
}


export default NumberServiceItem;