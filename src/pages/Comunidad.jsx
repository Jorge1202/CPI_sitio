import React from 'react';

import Ctrlcomunidad from '../components/Comunidad';
import Carroucelv1 from '../components/Carroucelv1';

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

const Comunidad = () => { 
    return (
        <React.Fragment>   
            <main id="main" className="mt-5r slider">
                <Carroucelv1 items={items} /> 
                <Ctrlcomunidad/>
            </main>
        </React.Fragment>
    );
}

export default Comunidad;