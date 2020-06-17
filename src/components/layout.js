import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import ScrollTopBtn from '../components/scrollTopBtn';

function Layout({ pageTitle, children, noFooter, scrollTopBtn }) {
    return (
        <Fragment>
            <Helmet>
                <title>{`Gaurav Tamhan - ${pageTitle}`}</title>
            </Helmet>
            <Navbar />
            {children}
            {!noFooter && <Footer />}
            {scrollTopBtn && <ScrollTopBtn />}
        </Fragment>
    );
}

export default Layout;
