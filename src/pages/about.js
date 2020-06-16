import React from 'react';
import Layout from '../components/layout';

export default function About() {
    return (
        <Layout>
            <section>
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
                            <img
                                src="https://negativespace.co/wp-content/uploads/2017/06/negative-space-macbook-air-coding-html-javascript-goran-ivos.jpg"
                                alt=""
                                className="rounded"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="pt-0">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-10">
                            <article className="article article-portfolio">
                                <h5>Who Am I?</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Duis nisi tellus, bibendum
                                    non tortor at, molestie ultrices elit.
                                    Aliquam a est lectus. Donec eu blandit
                                    neque, sit amet tincidunt risus. Aenean
                                    hendrerit non massa vitae mattis. Proin ac
                                    quam sed tortor accumsan rhoncus interdum
                                    vitae lacus. Nulla facilisi. Nullam at
                                    vehicula risus. Duis arcu neque, dignissim
                                    eu bibendum vel, suscipit pulvinar urna.
                                    Praesent id quam pellentesque, cursus ex
                                    sed, imperdiet mauris. Vestibulum
                                    scelerisque eros ac elit scelerisque, in
                                    mollis ipsum viverra.
                                </p>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
