import React from 'react';

import './styles/Services.css';
import ServicesCard from './ServicesCard';
import Title from './Title';

import autopista_001 from '../assets/img/recurso/autopista_001.jpg';
import autopista_002 from '../assets/img/recurso/rehabilitaciondepistasderodamiento.jpg';
import mina_001 from '../assets/img/recurso/rellenosanitariolaperseverancia.jpg';
import mina_002 from '../assets/img/recurso/centroproduccionagregadospetreos2.jpeg';
import mina_003 from '../assets/img/recurso/DSC_01.jpg';
import mina_004 from '../assets/img/recurso/DJI_24.jpg';

const Services = () => (
    <section className="service-details">
        <div className="container">
            <Title
                title="PROYECTOS DESTACADOS"
            /> 

            <div className="row">
                <ServicesCard
                    img={autopista_001}
                    title="Rehabilitación de la Autopista México – Puebla"
                />
                 <ServicesCard
                    img={autopista_002}
                    title="Rehabilitación de pistas de rodamiento de diversos aeropuertos en el país"          
                />
                 <ServicesCard
                    img={mina_001}
                    title="Construcción del Relleno Sanitario “La Perseverancia” en Cuautla, Morelos"
                />
                <ServicesCard
                    img={mina_002}
                    title="Centro de producción de agregados pétreos de origen basáltico “Km 105” "          
                />

                <ServicesCard
                    img={mina_003}
                    title="Central de Abastos Emiliano Zapata"
                />
                <ServicesCard
                    img={mina_004}
                    title="Centro de producción de agregados pétreos de origen calizo “Banco de Roca”  "          
                />


                {/* <ServicesCard
                    img={infraestructura}
                    title="Rehabilitación de la Autopista Cuernavaca – Acapulco (Tramos en Morelos y Guerrero)"           
                />

                <ServicesCard
                    img={aeropuertos}
                    title="Rehabilitación de la Autopista México – Querétaro"            
                /> */}
                
            </div>
            
        </div>
    </section>
);

export default Services;