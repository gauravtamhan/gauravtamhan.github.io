import React, { Fragment } from 'react';
import Footer from '../components/footer';
import ProjectCards from '../components/projectCards';
import HeroImage from '../images/hero.png';

function Home() {
    return (
        <Fragment>
            <section className="bg-primary-2 text-light">
                <div className="container">
                    <div className="row">
                        <div className="col-8 offset-2 col-sm-6 offset-sm-3 order-lg-2 col-lg-4 offset-lg-0">
                            <div className="mb-4">
                                <img
                                    className="g-hero"
                                    alt=""
                                    src={HeroImage}
                                />
                            </div>
                        </div>
                        <div className="col-lg-8 d-flex align-items-center text-center text-lg-left">
                            <h1 className="display-3">
                                Hello, I’m Gaurav. <br />A frontend{' '}
                                <span style={{ color: '#4F8AFF' }}>
                                    developer
                                </span>{' '}
                                from Atlanta.
                            </h1>
                        </div>
                    </div>
                    <div className="row mt-3 mt-lg-0">
                        <div className="col text-center text-lg-left">
                            <button className="btn btn-lg btn-primary">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-primary-2 text-light">
                <div className="container">
                    <ProjectCards />
                </div>
            </section>
            <Footer />
        </Fragment>
    );
}

export default Home;
