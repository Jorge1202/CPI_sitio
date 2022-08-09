import React from 'react';
import { Link, NavLink  } from 'react-router-dom';

import './styles/Header.css';
import logo from '../assets/img/logos/LOGO_CPI.png';


const Header = () => {

    
     document.addEventListener("click", function(element){
        /////// Prevent closing from click inside dropdown
        document.getElementById("ul_navbar").addEventListener("click", menuMobile);
    }); 
    function menuMobile() {
        var l = document.getElementsByClassName('bi mobile-nav-toggle');
        l[0].classList.remove("bi-x");
        l[0].classList.add("bi-list");
        var element = document.getElementById("navbar");
        element.classList.remove("navbar-mobile");
    }
    return (
        <React.Fragment>   
            <header id="header" className="fixed-top header-scrolled">
                <div className="container d-flex align-items-center justify-content-between">
                    <h1 className="logo"><Link to="/"><img src={logo} alt="" /></Link></h1>
                    {/* <Link to="index.html" className="logo"><img src="assets/img/logo.png" alt="" className="img-fluid"/></Link> */}

                    <nav id="navbar" className="navbar">
                        <ul id="ul_navbar">
                            <li><NavLink exact activeClassName="active" className="nav-link scrollto" to="/">Inicio</NavLink></li>
                            <li><NavLink activeClassName="active" className="nav-link scrollto" to="/Nosotros">Quiénes somos</NavLink></li>
                            <li><NavLink activeClassName="active" className="nav-link scrollto" to="/UnidadesNegocio">Unidades de negocio</NavLink></li>
                            <li><NavLink activeClassName="active" className="nav-link scrollto" to="/Proyectos">Proyectos destacados</NavLink></li>
                            <li><NavLink activeClassName="active" className="nav-link scrollto " to="/Comunidad">Comunidad</NavLink></li>
                            <li><NavLink activeClassName="active" className="nav-link scrollto" to="/Contacto">Contacto</NavLink></li>
                            {/* <li><Link className="getstarted scrollto" to="#about">Get Started</Link></li> */}
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle"></i>
                        <div></div>
                    </nav>
                    <div className="social-links text-center text-md-right pt-3 pt-md-0">
                        {/* <Link to="#" className="google-plus"><i className="bi bi-envelope-fill"></i></Link>
                        <Link to="#" className="linkedin"><i className="bi bi-whatsapp"></i></Link>
                        <Link to="#" className="instagram"><i className="bi bi-instagram"></i></Link>
                        <Link to="#" className="facebook"><i className="bi bi-facebook"></i></Link>  */}
                    </div>
                </div>
            </header>
        </React.Fragment>
    );

    
}

export default Header;