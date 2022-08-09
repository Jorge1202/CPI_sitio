import React from 'react';

import CarroucelItem from './CarroucelItem';
import './styles/Carroucel.css';

import img1 from '../assets/img/recurso/DJI_20.jpg';
import img2 from '../assets/img/recurso/DJI_19.jpg'; 

const Carroucel = () => { 
    return (
        <React.Fragment>   
            <section id="hero">
                <div id="heroCarousel" data-bs-interval="5000" className="carousel slide carousel-fade" data-bs-ride="carousel">

                    <ol className="carousel-indicators" id="hero-carousel-indicators"></ol>
                    <div className="carousel-inner" role="listbox">

                        <CarroucelItem img={img1} title="BIENVENIDO A: CP INFRAESTRUCTURAS S.A. DE C.V" text="Más de 30 años de experiencia"/>    
                        <CarroucelItem img={img2} title="BIENVENIDO A: CP INFRAESTRUCTURAS S.A. DE C.V" text="Más de 30 años de experiencia"/>    
                        <CarroucelItem img={img1} title="BIENVENIDO A: CP INFRAESTRUCTURAS S.A. DE C.V" text="Más de 30 años de experiencia"/>    
                        
                    </div>

                    <a className="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
                    </a>

                    <a className="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
                        <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
                    </a>

                </div>
            </section>
        </React.Fragment>
    );
}

export default Carroucel;