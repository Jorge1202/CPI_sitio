import React from 'react';
import './styles/Clients.css';

import Title from './Title';

import img1 from '../assets/img/clients/gobierno-de-mexico.png';
import img2 from '../assets/img/clients/sct.png';
import img3 from '../assets/img/clients/CAPUFE.png';
import img4 from '../assets/img/clients/Cemex.png';
import img5 from '../assets/img/clients/cementos-moctezuma.png';
import img6 from '../assets/img/clients/TEC-MONTEREY.png';

const Clients = () => { 
    return (
        <React.Fragment>   
            <section id="clientes" className="clients">
                <div className="container">
                    <Title
                        title="CLIENTES"
                    /> 
                    <div className="row">

                        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                            <img src={img1} className="img-fluid" alt=""/>
                        </div>

                        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                            <img src={img2} className="img-fluid" alt=""/>
                        </div>

                        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                            <img src={img3} className="img-fluid" alt=""/>
                        </div>

                        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                            <img src={img4} className="img-fluid" alt=""/>
                        </div>

                        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                            <img src={img5} className="img-fluid" alt=""/>
                        </div>

                        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                            <img src={img6} className="img-fluid" alt=""/>
                        </div>

                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default Clients;