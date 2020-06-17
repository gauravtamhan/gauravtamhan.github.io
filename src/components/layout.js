import React, { Fragment } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import ScrollTopBtn from '../components/scrollTopBtn';

function Layout(props) {
    return (
        <Fragment>
            <Navbar />
            {props.children}
            {!props.noFooter && <Footer />}
            {props.scrollTopBtn && <ScrollTopBtn />}
        </Fragment>
    );
}

export default Layout;
