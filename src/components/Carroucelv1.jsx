import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

import '../components/styles/Carrouselv1.css';

// import img1 from '../assets/img/recurso/portada_01.jpeg'
// import img2 from '../assets/img/recurso/portada_02.jpeg'
// import img3 from '../assets/img/recurso/portada_03.jpeg'

// const items = [
//   {
//     src: img1,
//     altText: 'Somos una empresa 100% mexicana, orientada a la estructuración de proyectos con más de 40 años construyendo para México',
//     caption: ''
//   },
//   {
//     src: img3,
//     altText: '',
//     caption: ''
//   },
//   {
//     src: img2,
//     altText: '',
//     caption: ''
//   }
// ];

const Carroucel = ({items}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} width="100%" height="850px"/>
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Atras" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Siguiente" onClickHandler={next} />
    </Carousel>
  );
}

export default Carroucel;