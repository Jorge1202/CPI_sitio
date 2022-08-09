import React from 'react';

import Carroucelv1 from '../components/Carroucelv1';
import ServicesV1 from '../components/Services_v1';
import Title from '../components/Title';
import imgGrafica from '../assets/img/recurso/kmyaños.png';

import img1 from '../assets/img/recurso/slider1.jpg'
import img2 from '../assets/img/recurso/slider2.jpg'
import img3 from '../assets/img/recurso/slider3.jpg'
// import img4 from '../assets/img/recurso/slider4.png'
import img5 from '../assets/img/recurso/slider5.jpg'
import img6 from '../assets/img/recurso/silider_013.jpg'
import img7 from '../assets/img/recurso/silider_030.jpg'
import img8 from '../assets/img/recurso/km105.png'


const items = [
  {
    src: img1,
    altText: '',
    caption: ''
  },
  {
    src: img2,
    altText: '',
    caption: ''
  },
  {
    src: img6,
    altText: '',
    caption: ''
  },
  {
    src: img7,
    altText: '',
    caption: ''
  },
  {
    src: img8,
    altText: '',
    caption: ''
  },
];

const UnidadesNegocio = () => { 
    return (
        <React.Fragment>   
            <main id="main" className="mt-5r slider">
                <Carroucelv1 items={items} />
                <ServicesV1/>
                <section id="grafica" className="">
                    <div className="container">
                        <Title
                            title="DESARROLLO DE INFRAESTRUCTURA CARRETERA"
                        />
                        <div className="row justify-content-center">
                            <div className="col-lg-8 col-md-12">
                                <img src={imgGrafica} className="card-img-top" alt="GRAFICA"/>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </React.Fragment>
    );
}

export default UnidadesNegocio;