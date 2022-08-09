import React from 'react'

// import Header from './Header';
import MenuNavbar from './HeaderSubmenu';
import Footer from './Footer';

const Layout = (props) => { 
    return (
        <React.Fragment>    
            <MenuNavbar/>
            {props.children}
            <Footer/>
        </React.Fragment>
    );
}

export default Layout;