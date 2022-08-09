import React from 'react';
// import { Link } from 'react-router-dom';
import Modal from './Modal';

const esquema = ({img, nombre, puesto, descripcion}) => { 
    return (
        <React.Fragment>   
            <div className="col-lg-4 col-md-6 col-sm-6 mb-35 d-flex align-items-stretch">
                <div className="member">
                    <div className="member-img">
                        <Modal 
                            titulo={nombre}
                            descripcion={descripcion}
                            img={img}
                        />
                        {/* <img src={img} className="img-fluid" alt=""/> */}
                        {/* <div className="social">
                            <Link to=""><i className="bi bi-twitter"></i></Link>
                            <Link to=""><i className="bi bi-facebook"></i></Link>
                            <Link to=""><i className="bi bi-instagram"></i></Link>
                            <Link to=""><i className="bi bi-linkedin"></i></Link>
                        </div> */}
                    </div>
                    <div className="member-info">
                        <h4>{nombre}</h4>
                        <span>{puesto}</span>
                        {/* <p>{descripcion}</p> */}
                        {/* <Modal 
                            titulo={nombre}
                            descripcion={descripcion}
                            img={img}
                        /> */}
                    </div>
                </div>
            </div>
            
        </React.Fragment>
    );
}

export default esquema;