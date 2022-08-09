import React from 'react';

import Title from './Title';
import './styles/Historia.css';

import img from '../assets/img/recurso/portada_02.jpeg';

const Historia = () => { 
    return (
        <React.Fragment>   
            <section id="skills" className="skills">
                <div className="container">
                    <Title
                        title="MÁS DE 30 AÑOS DE EXPERIENCIA"
                    />
                    <div className="row">

                        <div className="col-lg-6 d-flex align-items-center" data-aos-delay="100">
                            <img src={img} className="img-fluid" alt=""/>
                        </div>
                        <div className="col-lg-6 pt-4 pt-lg-0 content" data-aos-delay="100">
                            <h3>CP INFRAESTRUCTURA, S.A. de C.V. es una empresa 100% mexicana con presencia nacional</h3>
                            <p className="fst-italic p_spacing">
                                Somos una compañía especializada en la construcción y promoción de infraestructura.
                            </p>

                            <div className="skills-content">
                                <p className="center">
                                CP INFRAESTRUCTURA, S.A. DE C.V. 
                                </p>
                                <div className="padd_div">
                                    <p className="text-just">
                                        <ul className="vine">
                                            <li>Ha participado en múltiples proyectos que han otorgado infraestructura en distintos Estados de la República, creando a su paso una gran cantidad de empleos, apoyando al crecimiento económico del país para la generación de bienestar.</li>
                                            <li>Ha llevado acabo proyectos de inversión privada, principalmente en desarrollos inmobiliarios, comerciales y de servicios.</li>
                                            <li>Ha incursionando en nuevas unidades de negocio: energía en sus diferentes ramas, destacando el almacenamiento para autoconsumo en la producción minera.</li>
                                            <li>Ha participado en el desarrollo de infraestructura bajo esquemas de APP.</li>
                                        </ul>
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default Historia;