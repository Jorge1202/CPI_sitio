import React from 'react';
import { Link  } from 'react-router-dom';

import './styles/MenuNavbar.css';

import logo from '../assets/img/logos/LOGO_CPI.png';

const MenuNavbar = () => { 

    // document.addEventListener("DOMContentLoaded", function(){
    //     /////// Prevent closing from click inside dropdown
    //     document.querySelectorAll('.smenu').forEach(function(element){
    //     	element.addEventListener('click', function (e) {
    //     		e.stopPropagation();
    //     	});
    //     })
    // }); 

    return (
        <React.Fragment>   
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">

                    <div className="row">
                        <div className="col-lg-4 col-6">
                            <Link className="navbar-brand" to="/"><img src={logo} alt="" /></Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>
                        <div className="col-lg-8 col-6">
                            <div className="collapse navbar-collapse" id="main_nav">
                                <ul className="navbar-nav">
                                    {/* <li className="nav-item active"> <Link exact activeClassName="active" className="nav-link" to="/">Home </Link> </li>
                                    <li className="nav-item"><Link activeClassName="active" className="nav-link" to="/"> About </Link></li>
                                    <li className="nav-item"><Link activeClassName="active" className="nav-link" to="/Contacto"> Contacto </Link></li> */}
                                    <li className="nav-item dropdown has-megamenu">
                                        <Link activeClassName="active" className="nav-link dropdown-toggle smenu" to="/" data-bs-toggle="dropdown"> Inicio  </Link>
                                        <div className="dropdown-menu megamenu smenu" role="menu">
                                            <div class="row g-3">
                                                <div class="col-lg-3 col-6">
                                                    <div class="col-megamenu">
                                                        {/* <h6 class="title">Inicio</h6> */}
                                                        <ul class="list-unstyled">
                                                            <li><Link to="/">Inicio</Link></li>
                                                            <li><Link to="/sandboxcpi#presencia">Presencia</Link></li>
                                                            <li><Link to="/sandboxcpi#clientes">Clientes</Link></li>
                                                            <li><Link to="/sandboxcpi#contacto">Contacto</Link></li>
                                                        </ul>
                                                    </div> 
                                                </div>
                                            </div>
                                        </div> 
                                    </li>
                                    <li className="nav-item dropdown has-megamenu">
                                        <Link activeClassName="active" className="nav-link dropdown-toggle smenu" to="/Nosotros" data-bs-toggle="dropdown"> Quiénes somos </Link>
                                        <div className="dropdown-menu megamenu smenu" role="menu">
                                            <div class="row g-3">
                                                <div class="col-lg-3 col-6">
                                                    <div class="col-megamenu">
                                                        {/* <h6 class="title">Quiénes somos</h6> */}
                                                        <ul class="list-unstyled">
                                                            <li><Link to="/Nosotros">Quiénes somos</Link></li>
                                                            <li><Link to="/Nosotros#historia">Historia</Link></li>
                                                            <li><Link to="/Nosotros#direccion">Alta dirección</Link></li>
                                                        </ul>
                                                    </div> 
                                                </div>
                                            </div>
                                        </div> 
                                    </li>
                                    <li className="nav-item dropdown has-megamenu">
                                        <Link activeClassName="active" className="nav-link dropdown-toggle smenu" to="/UnidadesNegocio" data-bs-toggle="dropdown"> Unidades de negocio  </Link>
                                        <div className="dropdown-menu megamenu smenu" role="menu">
                                            <div class="row g-3">
                                                <div class="col-lg-3 col-6">
                                                    <div class="col-megamenu">
                                                        {/* <h6 class="title">Unidades de negocio</h6> */}
                                                        <ul class="list-unstyled">
                                                            <li><Link to="/UnidadesNegocio">Unidades de negocio</Link></li>
                                                            <li><Link to="/UnidadesNegocio#grafica">Desarrollo de infraestructura</Link></li>
                                                        </ul>
                                                    </div> 
                                                </div>
                                            </div>
                                        </div> 
                                    </li>
                                    <li className="nav-item dropdown has-megamenu">
                                        <Link activeClassName="active" className="nav-link dropdown-toggle smenu" to="/Proyectos" data-bs-toggle="dropdown"> Proyectos destacados  </Link>
                                        <div className="dropdown-menu megamenu smenu" role="menu">
                                            <div class="row g-3">
                                                <div class="col-lg-3 col-6">
                                                    <div class="col-megamenu">
                                                        {/* <h6 class="title">Proyectos destacados</h6> */}
                                                        <ul class="list-unstyled">
                                                            <li><Link to="/Proyectos">Proyectos destacados</Link></li>
                                                            <li><Link to="/Proyectos#video">Central de abastos Emiliano Zabata (video)</Link></li>
                                                        </ul>
                                                    </div> 
                                                </div>
                                            </div>
                                        </div> 
                                    </li>
                                    <li className="nav-item"><Link activeClassName="active" className="nav-link" to="/Comunidad"> Comunidad </Link></li>
                                    <li className="nav-item"><Link activeClassName="active" className="nav-link" to="/Contacto"> Contacto </Link></li>
                                </ul>
                            </div> 
                        </div>

                    </div>
                </div> 
            </nav>
        </React.Fragment>
    );
}

export default MenuNavbar;