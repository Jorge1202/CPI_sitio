import React from 'react';
import Title from './Title';

import './styles/Testimonials.css';

const Testimonials = ({bg_img, title, colorTitle, texto }) => { 
    const divStyle = {
        backgroundImage: `url(${bg_img})`,
      };

    return (
        <React.Fragment>   
            <section id="testimonials" className="testimonials" style={divStyle}>
                <div className="container" >

                    <div className="swiper-slide">
                        <div className="testimonial-item">
                            <Title
                                title={title}
                                color={colorTitle}
                            /> 
                            <p>
                                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                {texto}
                                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                            </p>
                        </div>
                    </div>

                </div>
            </section>
        </React.Fragment>
    );
}

export default Testimonials;