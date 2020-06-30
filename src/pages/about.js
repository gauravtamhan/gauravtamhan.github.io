import React from 'react';
import Layout from '../components/layout';
import ProjectCards from '../components/projectCards';
import Image from '../assets/about.jpg';

export default function About(props) {
    return (
        <Layout pageTitle="About">
            <section className="pb-5">
                <div className="container">
                    <div className="row justify-content-center text-center mb-6">
                        <div className="col-xl-8 col-lg-9 col-md-10">
                            <h1 className="display-4 mb-4">
                                Hi there, <br /> I'm Gaurav Tamhan.
                            </h1>
                            <p className="lead">
                                I work as a Frontend Developer and User
                                Experience designer creating thoughtful
                                experiences with the combination of engineering
                                and design.
                            </p>
                        </div>
                    </div>
                    <div className="row justify-content-center mb-lg-n7">
                        <div className="col-xl-10">
                            <img src={Image} alt="" className="rounded" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="pt-0">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-10">
                            <article className="article article-portfolio">
                                <h5>Summary</h5>
                                <p>
                                    I’m a developer at heart with a keen eye for
                                    visual design and an obsession for making
                                    things look good. I love collaborating with
                                    user researchers, designers, and engineers
                                    to develop truly amazing products.
                                </p>
                                <p>
                                    My background in Computer Science and Human
                                    Computer Interaction enables me to speak the
                                    language of UXer’s and Engineers to bring
                                    products from conception to realization with
                                    as little friction as possible.
                                </p>
                                <p>
                                    Through my courses, freelancing, and
                                    full-time experiences I’ve had the
                                    opportunity to create memorable products
                                    that are not only enjoyable to use but are
                                    written in code that's maintainable and easy
                                    to understand.
                                </p>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-primary-alt">
                <div className="container">
                    <div className="row mb-4">
                        <div className="col">
                            <h3 className="h2">Explore Works</h3>
                        </div>
                    </div>
                    <ProjectCards uri={props.uri} />
                </div>
            </section>
        </Layout>
    );
}
