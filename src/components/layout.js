import React, { Fragment } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

function Layout(props) {
    return (
        <Fragment>
            <Navbar />
            {props.children}
            {!props.noFooter && <Footer />}
        </Fragment>
    );
}

export default Layout;
