import React from 'react';

import './styles/Team.css';
import Title from './Title';
import TeamItem from "./TeamItem";

import CEO from '../assets/img/Team/CEO.jfif';
import COO from '../assets/img/Team/COO.jfif';
import ADMON from '../assets/img/Team/ADMON.jfif';
import JURIDICA from '../assets/img/Team/JURIDICA.jfif';
import Controller from '../assets/img/Team/CONTROLLER.jfif';
import TI from '../assets/img/Team/TI.jfif';


// import CFO from '../assets/img/Team/CFO.jpeg';
const Team = () => { 
    return (
        <React.Fragment>   
            <section id="direccion" className="team" data-aos-easing="ease-in-out" data-aos-duration="500">
                <div className="container">
                    <Title
                        title="ALTA DIRECCIÓN"
                    /> 
                    <div className="row justify-content-center">
                        <TeamItem
                            img={CEO}
                            nombre="Mtro. Roberto Zaleta Palma"
                            puesto="Chief Executive Officer (CEO)"
                            descripcion="Ingeniero Industrial y de Sistemas por el ITESM, cuenta con el MEDEX (Maestría en Alta
                                Dirección para Ejecutivos con Experiencia) por el IPADE y especialidad por la Escuela de
                                Negocios de Columbia University en “Value Investing”. Roberto tiene más de 15 años de
                                experiencia en los sectores de Infraestructura, Minería, Finanzas, Energía y Turismo. En
                                2011 inicia la operación de CP Infraestructura como socio fundador. Ha participado en la
                                estructuración, promoción y ejecución de proyectos en los ramos de minería, turismo,
                                comerciales y de servicios. En el 2019 junto con Gonzalo Plascencia fundan Master
                                Partners Mergers and Acquisitions, S.C., desempeñando las responsabilidades de CEO
                                de la firma."
                        />
                        <TeamItem
                            img={Controller}
                            nombre="Lic. Gonzalo Plascencia Inclán"
                            puesto="Controller"
                            descripcion="Licenciado en administración de empresas por La Universidad La Salle de la Ciudad de México. Empresario con mas de 25 años de experiencia en el sector industrial y agropecuario. En el año 2004 participa como socio de NSC Consultores, S.C. desempeñando las responsabilidades de Director Comercial y de Relaciones Públicas. Actualmente es socio fundador de Master Partners Mergers Acquisitions, S.C.
                            "
                        />
                        <TeamItem
                            img={JURIDICA}
                            nombre="Mtra. Rocío Nava Carmona"
                            puesto="Directora Jurídica"
                            descripcion="Licenciada en Derecho por la Facultad de Derecho de la Universidad Autónoma de Guerrero, cuenta con Maestría en Justicia Penal con enfoque en el Proceso Penal Acusatorio. Se ha desempeñado como agente del Ministerio Público en diferentes Estados de la República, en el fuero común como en el fuero federal. Tiene una trayectoria con más de 25 años de experiencia tanto en el sector público como en el sector privado. Desde su fundación en 2011, es Directora Jurídica de CP INFRAESTRUCTURA, S.A. DE C.V. y a partir del 2021, de MASTER PARTNERS, S.C.
                            "
                        />
                        <TeamItem
                            img={COO}
                            nombre="Mtro. Gumercindo Vázquez"
                            puesto="Chief Operations Officer (COO)"
                            descripcion="Maestro en Alta Dirección para Ejecutivos con Experiencia (MEDEX) por el IPADE.  Gumercindo tiene experiencia operativa, administrativa y fiscal y consultor empresarial en México y otros países de América Latina.  Ha colaborado en TELMEX, Seguros Monterrey, Seguros Bancomer, la Secretaría de Hacienda y Crédito Público y en el Servicio de Administración Tributaria, cuenta con amplia experiencia en el desarrollo de productos y servicios en telecomunicaciones, operación y servicio a clientes.  
                            Es especialista en operaciones y en M&A."
                        />
                        <TeamItem
                            img={TI}
                            nombre="Lic. Alejandro Rivera Delgado"
                            puesto="Tecnologías de la Información"
                            descripcion="Tiene más de 22 años de experiencia en el sector telecomunicaciones, donde ha desarrollado productos de hardware, aplicaciones móviles y servicios, desde la homologación y creación de dispositivos móviles hasta el lanzamiento al mercado de servicios tecnológicos. Ha implementado proyectos en Estados Unidos, Europa, América del Sur y México. Cuenta con más de 9 años de experiencia en la medición, la evaluación y el conocimiento profundo de las diferentes variables de investigación de mercados, operaciones en campo, inteligencia de negocio y minería de datos. Estudió la licenciatura en economía en el Instituto Tecnológico Autónomo de México."
                        />
                        <TeamItem
                            img={ADMON}
                            nombre="Lic. Claudia Ruvalcaba Chalita"
                            puesto="Lic. Administración de Empresas"
                            descripcion="Licenciada en Administración de Empresas, por la Universidad Bonaterra (Universidad Panamericana Campus Aguascalientes). Ha desarrollado su actividad laboral y profesional por más de 20 años a nivel dirección y gerencia en áreas administrativas tanto del sector público como privado, destacando puestos directivos en diferentes empresas, entre otras: Consejo de Ciencia y Tecnología de Morelos (CCyTEM), Central de Abasto Emiliano Zapata, Caminos y Pavimentos del Sur. S.A. de C.V.
                            Claudia, actualmente desempeña el puesto Coordinador Administrativo de Master Partners Mergers and Acquisitions, S.C., coordinando la ejecución, manejo, análisis, planificación y toma de decisiones para el cumplimiento del objetivo de la empresa
                            "
                        />
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default Team;