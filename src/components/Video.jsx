import React from 'react';

import Title from './Title';
import video from '../assets/video/Central_de_Abasto_EZ.mp4'

const Video = () => { 
    return (
        <React.Fragment>   
            <section id="video">
                <div className="container">
                    <Title
                        title="CENTRAL DE ABASTOS EMILIANO ZABATA (VIDEO)"
                    /> 

                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-12">
                            <video width="100%" height="500" controls>
                                <source src={video} type="video/mp4"/>
                            </video>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default Video;