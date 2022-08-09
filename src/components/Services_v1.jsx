import React from 'react';

import './styles/Services_v1.css';
import ServicesCardv1 from './ServicesCard_v1';
import Title from './Title';
// import Subtitle from './Subtitle';

import infraestructura from '../assets/img/recurso/autopistadelsol.jpg';
import mineria from '../assets/img/recurso/mineria.png';
import INMOBILIARIO from '../assets/img/recurso/portada_03.jpeg';
import energia from '../assets/img/recurso/energia.jpg';

const Services = () => (
    <section id="about-boxes" className="about-boxes">
        <div className="container">
            <Title
                title="UNIDADES DE NEGOCIO"
            /> 
            {/* <Subtitle
                subtitle=" Desde el año 2000, hemos adquirido valiosa experiencia al proporcionar nuestros servicios de ingeniería de renombre en una amplia gama de sectores"
            />  */}
            
            <div className="cont_parrafo">
                <p>
                Desde su fundación, crecimiento, consolidación y expansión, CP Infraestructura, S.A. de C.V. logra la diversificación en diversos sectores de la industria, innovando en procesos utilizando tecnología de punta.  Siendo una empresa con la filosofía de calidad total, impulsa y promueve la sostenibilidad.

                </p>
            </div>

            <div className="row">
                <ServicesCardv1
                    img={infraestructura}
                    title="INFRAESTRUCTURA"
                    text="Estructuración de proyectos de inversión mediante esquemas de APP, de obra pública y privada."            
                />

                <ServicesCardv1
                    img={mineria}
                    title="MINERÍA"
                    text="Más de 30 años de experiencia; producción histórica de agregados pétreos: 8 millones de toneladas. Producción anual promedio: 270 mil toneladas. Reservas probadas: 70 millones de toneladas."            
                />
                
                <ServicesCardv1
                    img={INMOBILIARIO}
                    title="INMOBILIARIO"
                    text="Central de Abasto Emiliano Zapata (CAEZ).  Desarrollo comercial y de servicios bajo el esquema de condominio horizontal-vertical. Consta de 1,296 unidades condominales.  Proyecto inmobiliario regional de interés público para el desarrollo agroalimentario y de comercio de los bienes de consumo de la zona Centro-Sur del país.  Localizado en la carretera Temixco-Emiliano Zapata, municipio del mismo nombre en el Estado de Morelos."              
                />

                <ServicesCardv1
                    img={energia}
                    title="ENERGÍA"
                    text="Mas de 20 años en actividades propias de la empresa. Proyecto de estación de servicio de comercialización de petrolíferos con venta al público a partir de 2022."            
                />
                
            </div>
        </div>
    </section>
);

export default Services;