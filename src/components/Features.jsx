import React from 'react';

import Title from './Title';
import './styles/Features.css';

import img1 from '../assets/img/iconos/reloj.svg';
import img2 from '../assets/img/iconos/carretera.svg';
import img3 from '../assets/img/iconos/porton.svg';
import img4 from '../assets/img/iconos/gasolina.svg';
import img5 from '../assets/img/iconos/user.svg';

const Features = () => { 
    return (
        <React.Fragment>   
            <section id="historia" className="features">
                <div className="container" >
                    <div className="row feature-icons">

                        <Title
                            title="HISTORIA"
                        />

                        <div className="row justify-content-center">

                            {/* <div className="col-xl-4 text-center" data-aos="fade-bi bight" data-aos-delay="100">
                                <img src="assets/img/features-3.png" className="img-fluid p-4" alt=""/>
                            </div> */}

                            <div className="col-xl-8 d-flex content">
                                <div className="row align-self-center gy-4">

                                    <div className="col-md-12 icon-box" >
                                    <i className="bi"> <img src={img1} alt="reloj"/> </i> 
                                        <div>
                                            <h4>1988 Fundación </h4>
                                            <p>Se crea Caminos y Pavimentos del Sur, S.A. de C.V.</p>
                                        </div>
                                    </div>

                                    <div className="col-md-12 icon-box"  data-aos-delay="100">
                                        <i className="bi"> <img src={img2} alt="reloj"/> </i> 
                                        <div>
                                        <h4>1990 Crecimiento y consolidación </h4>
                                        <p>En la década de los 90´s se realiza obra pública: aeropuertos, autopistas de altas especificaciones, diferentes obras estatales y municipales, e inicia su participación en la industria minera.</p>
                                        </div>
                                    </div>

                                    <div className="col-md-12 icon-box" data-aos-delay="200">
                                        <i className="bi"> <img src={img3} alt="reloj"/> </i> 
                                        <div>
                                        <h4>2000 Expansión a nivel nacional </h4>
                                        <p>Se continúa con la participación en obras públicas y se inicia con proyectos de inversión privada, principalmente en desarrollos inmobiliarios, comerciales y de servicios.</p>
                                        </div>
                                    </div>

                                    <div className="col-md-12 icon-box" data-aos-delay="300">
                                        <i className="bi"> <img src={img4} alt="reloj"/> </i> 
                                        <div>
                                        <h4>2010 Diversificación</h4>
                                        <p>Se constituye CP Infraestructura, incursionando en nuevas unidades de negocio: energía en sus diferentes ramas, destacando el almacenamiento para autoconsumo en la producción minera.</p>
                                        </div>
                                    </div>

                                    <div className="col-md-12 icon-box" data-aos-delay="400">
                                        <i className="bi"> <img src={img5} alt="reloj"/> </i> 
                                        <div>
                                            <h4>2020 Proyectos de Inversión Estructurados</h4>
                                            <p>Participación en el desarrollo de infraestructura bajo el esquema de APP.  Estaciones de servicio para la comercialización de hidrocarburos y TARs</p>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default Features;