import React from 'react';

import Title from './Title';
// import ServicesCardv1 from './ServicesCard_v1';
// import infraestructura from '../assets/img/recurso/comunidad.jpeg';

// const Comunidad = () => { 
//     return (
//         <React.Fragment>   
//             <section id="">
//                 <div className="container">
//                     <Title
//                         title="COMUNIDAD"
//                     /> 
//                     <div className="row justify-content-center">
//                         <ServicesCardv1
//                             img={infraestructura} 
//                             text="En reciprocidad, CPI ha realizado distintos apoyos, en mano de obra, en materiales, herramienta y equipo, ejemplo de ello es dar soporte con la rehabilitación y mantenimiento de caminos  rurales denominados  “Caminos de saca” para la Industria Cañera y Ganadera, en el sur poniente de Morelos. 
//                                 Se fortalece la actividad económica local y se da apoyo a los municipios de Morelos para Programas Sociales."       
//                         />
//                     </div>
//                 </div>
//             </section>
//         </React.Fragment>
//     );
// }

// export default Comunidad;


import './styles/Historia.css';       
import infraestructura from '../assets/img/recurso/comunidad.jpg';

const Historia = () => { 
    return (
        <React.Fragment>   
            <section id="comunidad" className="skills">
                <div className="container">
                    <Title
                        title="MÁS DE 30 AÑOS DE EXPERIENCIA"
                    />
                    <div className="row">

                        <div className="col-lg-6 d-flex align-items-center cent_just" data-aos-delay="100">
                            <img src={infraestructura} className="img-fluid" alt=""/>
                        </div>
                        <div className="col-lg-6 pt-4 pt-lg-0 content text-just" data-aos-delay="100">
                            <p>
                            En reciprocidad CP Infraestructura, S.A. de C.V. ha realizado distintos apoyos en mano de obra, materiales, herramienta y equipo para la comunidad reafirmando con ello su profundo compromiso con el país al procurar la conservación de su acervo cultural e histórico y mejorar la calidad de vida de sus habitantes.
                            </p>
                            <p>
                            Ejemplo de lo anterior es otorgar soporte en la rehabilitación y mantenimiento de diversos caminos  rurales denominados  “Caminos de saca” para la Industria Cañera y Ganadera, así como, el apoyo incondicional a los municipios de la zona Sur Poniente del Estado de Morelos para sus Programas Sociales, mejorando las condiciones de seguridad y bienestar.
                            </p>

                            <br/>
                            <p>
                            La empresa cumple con parámetros sostenibles en sus inversiones, ajustándose a los criterios “ESG”, ratificando su compromiso con la sociedad y el medio ambiente.
                            </p>
                            <div className="text-just">
                                <div className="text-just">
                                    <h5 className="fw-bold">ESG:</h5>
                                    <p className="text-just subryado">
                                        E - Environmental - ambiental
                                        <br/> S - Social - social
                                        <br/> G - Governance - gobernanza
                                    </p>
                                </div>
                                <br/>
                                <p className="text-just">
                                    <strong>ESG</strong> son las siglas en inglés de 'environmental, social and governance'.
                                    <br/> La <strong>E de Environmental</strong> engloba el efecto que la actividad de las empresas tiene en el medioambiente, de forma directa o indirecta.
                                    <br/> La <strong>S de Social</strong> incluye el impacto que una determinada empresa tiene en su entorno social, en la comunidad.
                                    <br/> La <strong>G de Governance</strong> alude al gobierno corporativo de la empresa, por ejemplo, a la composición y diversidad de su Consejo de Administración, las políticas de transparencia en su información pública o sus códigos de conducta.
                                </p>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default Historia;