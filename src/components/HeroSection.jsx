import React from 'react';

import './styles/HeroSection.css';

const HeroSection = () => { 
    return (
        <React.Fragment>   
            <section id="hero">
                <div className="hero-container"  data-aos-delay="150">
                    <h2>BIENVENIDO A: CP INFRAESTRUCTURA S.A. DE C.V</h2>
                    <h1>Más de 30 años <br/>de experiencia</h1>
                </div>
            </section>
        </React.Fragment>
    );
}

export default HeroSection;