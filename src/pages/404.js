import React from 'react';
import Layout from '../components/layout';

function NotFound() {
    return (
        <Layout pageTitle="Page Not Found" noFooter>
            <div className="bg-primary-2 full-height">
                <section className="bg-primary-2 text-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10">
                                <h1 className="display-3">Page not found</h1>
                                <div className="my-4">
                                    <p className="lead">
                                        Uh oh! Looks like the page you were
                                        looking for doesn’t exist. Try going
                                        back or using the links at the top to
                                        navigate to another page.
                                    </p>
                                </div>
                                <button
                                    className="btn btn-lg btn-primary"
                                    onClick={() => {
                                        window.history.back();
                                    }}
                                >
                                    Go Back
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
}

export default NotFound;
