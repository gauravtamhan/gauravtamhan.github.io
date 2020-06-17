import React from 'react';
import Layout from '../components/layout';
import ProjectCards from '../components/projectCards';
import ProjectDetails from '../components/projectDetails';
import HeroImage from '../assets/houseATL/image-1.png';
import Image2 from '../assets/houseATL/image-2.png';
import Image3 from '../assets/houseATL/image-3.png';
import Image4 from '../assets/houseATL/image-4.png';

const liveLink = 'http://geospatial.gatech.edu/HOUSEATL/#/';

const quickRow = [
    {
        heading: 'Role',
        body: 'Frontend Developer',
    },
    {
        heading: 'Duration',
        body: '4 months',
    },
    {
        heading: 'Live',
        body: 'Visit Webapp',
        link: liveLink,
    },
];

function HouseATL(props) {
    return (
        <Layout scrollTopBtn>
            <section className="bg-primary-2 text-light">
                <div className="container">
                    <div className="row justify-content-center text-center mb-6">
                        <div className="col-xl-8 col-lg-9 col-md-10">
                            <h5 className="mb-4">Data Visualization</h5>
                            <h1 className="display-4 mb-4">
                                House ATL Data Collective
                            </h1>
                            <p className="lead">
                                As part of my Graduate Research Assistantship
                                through Georgia Tech, I had the opportunity to
                                build the public-facing web portal that
                                organizes and visualizes data on subsidized
                                housing in metro Atlanta for House ATL.
                            </p>
                        </div>
                    </div>
                    <div className="row justify-content-center mb-lg-n7">
                        <div className="col-xl-10">
                            <img src={HeroImage} alt="" className="rounded" />
                        </div>
                    </div>
                </div>
            </section>
            <ProjectDetails data={quickRow} />
            <section className="pt-4">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-10">
                            <article className="article article-portfolio">
                                <h5>Project Purposes & Goals</h5>
                                <p>
                                    The goal of the web portal was to create a
                                    platform that allows civic leaders and
                                    housing agencies to gain an overview of the
                                    state of subsidized housing as well as
                                    update, retrieve, and manipulate the data to
                                    observe patterns and make informed
                                    decisions.
                                </p>
                                <p>Some of the tasks include:</p>
                                <ul>
                                    <li>
                                        Understanding geospatial layout of the
                                        data
                                    </li>
                                    <li>
                                        Observing data clusters in relation to
                                        other geographic and zoning indicators
                                    </li>
                                    <li>
                                        Filtering and sorting the data by key
                                        metrics to observe trends
                                    </li>
                                    <li>
                                        Viewing a snapshot of how much data is
                                        being contributed by different agencies
                                    </li>
                                    <li>
                                        Uploading additional data sets based on
                                        newly established guidelines
                                    </li>
                                </ul>
                                <figure>
                                    <img
                                        src={Image2}
                                        alt=""
                                        className="rounded"
                                    />
                                </figure>
                                <figure>
                                    <img
                                        src={Image3}
                                        alt=""
                                        className="rounded"
                                    />
                                </figure>
                                <h5>Web Stack Explanation</h5>
                                <p>
                                    React made the most sense for a state-driven
                                    application like this. Its component-based
                                    nature and reactive updates to state changes
                                    made updating and maintaining the code base
                                    much easier.
                                </p>
                                <p>
                                    Using Redux allowed for not having to pass
                                    state through components and instead
                                    maintaining an overall application state.
                                    Additionally, the integration of middleware
                                    like Redux Thunk allowed for managing state
                                    changes asynchronously during API calls.
                                </p>
                                <p>
                                    Additional libraries used include D3.js for
                                    building and dynamically updating charts in
                                    the snapshot view, as well as Material-UI
                                    for providing Material Design styled UI
                                    elements.
                                </p>
                                <figure className="mt-3 inline-figure">
                                    <img
                                        src={Image4}
                                        alt=""
                                        className="rounded"
                                    />
                                </figure>
                                <h5>Lessons Learned</h5>
                                <p>
                                    For this project I got to work closely with
                                    stakeholders, the lead designer, and the
                                    backend team to bring this product to life.
                                    Along the way, I learned how to
                                    collaboratively solve problems and the
                                    importance of having open communication with
                                    other teams to meet requirements on time.
                                </p>
                                <p>
                                    This project also provided a great
                                    opportunity to hone my skills building a
                                    larger scale application from scratch. I
                                    learned how to adapt quickly to requirement
                                    changes by organizing and writing more
                                    modular code. This helped soften the impact
                                    of making big architectural or user-flow
                                    related changes during the development
                                    process, and ultimately cut down on
                                    development time.
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
                            <h3 className="h2">More Works</h3>
                        </div>
                    </div>
                    <ProjectCards uri={props.uri} />
                </div>
            </section>
        </Layout>
    );
}

export default HouseATL;
