import React from 'react';

const ServicesCard = ({img, title, text, urlReadMore}) => (
    <div className="col-lg-6 col-md-6 d-flex align-items-stretch" data-aos-delay="100">
        <div className="card">
            <img src={img} className="card-img" alt={title}/>
            {/* <div className="card-icon">
                <i className="ri-brush-4-line"></i>
            </div> */}
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text text-justify">{text}</p>
            </div>
        </div>
    </div>
);

export default ServicesCard;