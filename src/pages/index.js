import React from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';
import Layout from '../components/layout';
import ProjectCards from '../components/projectCards';
import HeroImage from '../assets/hero.png';

function Home() {
    return (
        <Layout pageTitle="Frontend Developer">
            <section className="bg-primary-2 text-light pt-3 pt-sm-5 pt-md-7">
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
                            <button
                                className="btn btn-lg btn-primary"
                                onClick={() => scrollTo('#projects')}
                            >
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section id="projects" className="bg-primary-2 text-light">
                <div className="container">
                    <ProjectCards />
                </div>
            </section>
        </Layout>
    );
}

export default Home;
