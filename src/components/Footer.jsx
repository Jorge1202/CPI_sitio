import React from 'react';
// import { Link } from 'react-router-dom';

import './styles/Footer.css';

const Footer = () => { 
    return (
        <React.Fragment>   
            <footer id="footer">
                <div className="container d-md-flex py-4">

                    <div className="me-md-auto text-center text-md-start">
                        <div className="copyright">
                            &copy; CP INFRAESTRUCTURA, S.A. DE C.V.
                        </div>
                    </div>
                    {/* <div className="social-links text-center text-md-right pt-3 pt-md-0">
                        <Link to="#" className="google-plus"><i className="bi bi-envelope-fill"></i></Link>
                        <Link to="#" className="linkedin"><i className="bi bi-whatsapp"></i></Link>
                        <Link to="#" className="instagram"><i className="bi bi-instagram"></i></Link>
                        <Link to="#" className="facebook"><i className="bi bi-facebook"></i></Link> 
                    </div> */}

                </div>
            </footer>
        </React.Fragment>
    );
}

export default Footer;