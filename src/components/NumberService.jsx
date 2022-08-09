import React from 'react';

import NumberServiceItem from './NumberServiceItem';
import Title from './Title';

import './styles/NumberService.css';
import icon1 from '../assets/img/iconos/01.png';
import icon2 from '../assets/img/iconos/02.png';
import icon3 from '../assets/img/iconos/03.png';
import icon4 from '../assets/img/iconos/04.png';

const NumberService = () => { 
    return (
    <section id="services" className="services">
        <div className="container">

            <Title
                title="CP INFRAESTRUCTURA"
                title2="EN NÚMEROS"
            />

            <div className="row">
                <NumberServiceItem 
                title="844 kms"
                descripcion="Construidos y/o rehabilitados"
                icon={icon1}
                />
                <NumberServiceItem 
                title="5.5 millones"
                descripcion="Toneladas Extraídas y Producidas de Agregados Pétreos para la Construcción"
                icon={icon2}
                />
                <NumberServiceItem 
                title="1.296"
                descripcion="Unidades Construidas"
                icon={icon3}
                />
                <NumberServiceItem 
                title="Comunidad"
                descripcion="CP Infraestructura, S.A. de C.V. ha realizado distintos apoyos en mano de obra, materiales, herramienta y equipo para la comunidad"
                icon={icon4}
                />

            </div>

        </div>
    </section>
    );
}

export default NumberService;