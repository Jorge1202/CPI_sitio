import React from 'react';

// import HeroSection from '../components/HeroSection';
// import Carroucel from '../components/Carroucel';
import Carroucelv1 from '../components/Carroucelv1';
import Testimonials from '../components/Testimonials';
// import MapChart from '../components/MapChart';
import Clients from '../components/Clients';
import Contact from '../components/Contact';
import Title from '../components/Title';
import NumberService from '../components/NumberService';

import '../assets/css/Home.css';

import imgMap from '../assets/img/recurso/mapa.jpeg';
import bgImg from '../assets/img/recurso/031.jpg';

import img1 from '../assets/img/recurso/slider1.jpg'
import img2 from '../assets/img/recurso/slider2.jpg'
import img3 from '../assets/img/recurso/slider3.jpg'
// import img4 from '../assets/img/recurso/slider4.png'
import img5 from '../assets/img/recurso/slider5.jpg'
import img6 from '../assets/img/recurso/portada_03.jpeg'
import img7 from '../assets/img/recurso/portada_02.jpeg'
import img8 from '../assets/img/recurso/km105.png'

const items = [
  {
    src: img1,
    altText: '',
    caption: 'Somos una empresa 100% mexicana, orientada a la estructuración de proyectos con más de 40 años construyendo para México'
  },
  {
    src: img3,
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
  }
];

const Home = () => (
    <React.Fragment>
        {/* <HeroSection/> */}
        <main id="main" className="textCarrucel">
            <Carroucelv1 items={items} />
            <NumberService/>

            <section id="presencia" className="map">
                <div className="container">
                    <Title
                        title="PRESENCIA"
                    /> 
                    <div className="row justify-content-center">
                        <img src={imgMap} alt="" />
                    </div>
                    <div className="cont">

                    </div>
                </div>
            </section>
            <Clients/>

            <Testimonials
                bg_img={bgImg}
                colorTitle="#fff"
                title="SOBRE NOSOTROS"
                texto="Somos una empresa 100% mexicana especializada en la construcción y promoción de infraestructura"
            />

            <Contact/>
        </main>
    </React.Fragment>
);

export default Home;