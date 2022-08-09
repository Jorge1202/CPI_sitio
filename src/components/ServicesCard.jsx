import React from 'react';

const ServicesCard = ({img,title, text, urlReadMore}) => (
    <div className="col-md-6 d-flex align-items-stretch aos-init aos-animate " data-aos="fade-up">
        <div className="card">
            <div className="card-img">
                <img src={img} alt={title}/>
            </div>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
            </div>
        </div>                    
    </div>
);

export default ServicesCard;