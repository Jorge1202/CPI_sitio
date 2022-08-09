import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

// STYLES
import '../assets/vendor/animate.css/animate.min.css';
import '../assets/vendor/aos/aos.css';
import '../assets/vendor/bootstrap/css/bootstrap.min.css';
import '../assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '../assets/vendor/boxicons/css/boxicons.min.css';
import '../assets/vendor/glightbox/css/glightbox.min.css';
import '../assets/vendor/swiper/swiper-bundle.min.css';
import '../assets/css/index.css';

// JS 
import {appendScript} from '../assets/js/scripts/appendScript';

// PAGES
import Home from './Home';
import Nosotros from './Nosotros';
import UnidadesNegocio from './UnidadesNegocio';
import Proyectos from './Proyectos';
import Comunidad from './Comunidad';
import Contacto from './Contacto';

// Componentes 
import Layout from '../components/Layout';
import NotFund from './NotFund';
// import JsScript from '../components/JsScript';

class APP extends React.Component {
    
    render(){
        return(    
            <React.Fragment>
                <BrowserRouter>
                    <Layout>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/Nosotros" component={Nosotros} />
                            <Route path="/Proyectos" component={Proyectos} />
                            <Route path="/UnidadesNegocio" component={UnidadesNegocio} />
                            <Route path="/Comunidad" component={Comunidad} />
                            <Route path="/Contacto" component={Contacto} />
                            <Route component={NotFund} />
                        </Switch>
                    </Layout>
                </BrowserRouter>
                {/* <JsScript src="assets/vendor/aos/aos.js"/> */}
            </React.Fragment>
        );
    }


    componentDidMount () {
        appendScript("assets/vendor/aos/aos.js");
        appendScript("assets/vendor/bootstrap/js/bootstrap.bundle.min.js");
        appendScript("assets/vendor/glightbox/js/glightbox.min.js");
        appendScript("assets/vendor/isotope-layout/isotope.pkgd.min.js");
        appendScript("assets/vendor/php-email-form/validate.js");
        appendScript("assets/vendor/purecounter/purecounter.js");
        appendScript("assets/vendor/swiper/swiper-bundle.min.js");
        appendScript("assets/vendor/waypoints/noframework.waypoints.js");       
        appendScript("assets/js/main.js");  
    }

}
export default APP;