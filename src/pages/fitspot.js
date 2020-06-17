import React from 'react';
import Layout from '../components/layout';
import ProjectCards from '../components/projectCards';
import ProjectDetails from '../components/projectDetails';
import HeroImage from '../assets/fitspot/image-1.png';
import Video1 from '../assets/fitspot/side-menu.mp4';
import Video2 from '../assets/fitspot/theme.mp4';
import Video3 from '../assets/fitspot/tiles.mp4';
import Video4 from '../assets/fitspot/trainer-app.mp4';

const quickRow = [
    {
        heading: 'Role',
        body: 'Frontend Developer',
    },
    {
        heading: 'Duration',
        body: '14 months',
    },
];

function Fitspot(props) {
    return (
        <Layout scrollTopBtn>
            <section className="bg-primary-2 text-light">
                <div className="container">
                    <div className="row justify-content-center text-center mb-6">
                        <div className="col-xl-8 col-lg-9 col-md-10">
                            <h5 className="mb-4">Frontend Development</h5>
                            <h1 className="display-4 mb-4">
                                Working at Fitspot
                            </h1>
                            <p className="lead">
                                In the summer of 2018 I started working at
                                Fitspot, a fitness-focused company that promotes
                                workplace wellness through on-site and digital
                                programs. Through this experience, I was able to
                                work alongside senior developers to build
                                multiple client-facing products.
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
                                <h5>Growth & Development</h5>
                                <p>
                                    Before starting at Fitspot, I had set a
                                    personal goal for myself to improve my
                                    abilities with frontend technologies,
                                    especially React, and gain a better
                                    understanding of the development process,
                                    from ideation to launch. Since this was a
                                    relatively young company, I got to take on
                                    multiple projects and learned to adapt
                                    quickly in a fast-paced environment. Below
                                    are a few of the projects I worked on.
                                </p>

                                <h6>UI Enhancements</h6>
                                <p>
                                    Replaced the traditional top navigation for
                                    the entire site with a responsive and easily
                                    configurable side navigation component. This
                                    component is now used throughout the entire
                                    suite of applications.
                                </p>
                                <figure>
                                    <video
                                        className="rounded"
                                        playsInline
                                        autoPlay
                                        muted
                                        loop
                                    >
                                        <source src={Video1} type="video/mp4" />
                                    </video>
                                </figure>
                                <p>
                                    Upon client request, added a theme picker
                                    that allows users to personalize the look of
                                    their web portal. This feature was built
                                    using Sass mixins for generating the CSS and
                                    the browser’s localStorage API to save the
                                    user’s theme preference.
                                </p>
                                <figure>
                                    <video
                                        className="rounded"
                                        playsInline
                                        autoPlay
                                        muted
                                        loop
                                    >
                                        <source src={Video2} type="video/mp4" />
                                    </video>
                                </figure>
                                <h6>New Features</h6>
                                <p>
                                    As a way to show little snippets of
                                    information in a fun and engaging way, I
                                    introduced informational tiles into the core
                                    web portal. These tiles display information
                                    in the form of images, text, links, and/or
                                    videos and utilize CSS animations to
                                    smoothly animate through the different
                                    content.
                                </p>
                                <p>
                                    In addition to the user-facing side, I built
                                    a tile editor into the content management
                                    tool. This allows for both managing existing
                                    tiles and easily building and deploying new
                                    tiles.
                                </p>
                                <figure>
                                    <video
                                        className="rounded"
                                        playsInline
                                        autoPlay
                                        muted
                                        loop
                                    >
                                        <source src={Video3} type="video/mp4" />
                                    </video>
                                </figure>
                                <h6>Building a New App</h6>
                                <p>
                                    I was tasked with taking the existing React
                                    Native mobile app and rebuilding it from
                                    scratch as a progressive web app (PWA). This
                                    allowed the product to be accessible from
                                    the desktop as a web app, and installed as a
                                    standalone app on mobile.
                                </p>
                                <p>
                                    The rationale behind this project was
                                    primarily so that the codebase would no
                                    longer be fragmented between React Native
                                    and React web which meant faster updates and
                                    better integration with the continuous
                                    deployment system. Additionally, this was an
                                    opportunity to improve both the UX of the
                                    app, as well as improve upon the code to
                                    reduce its bundle size and increase
                                    maintainability.
                                </p>
                                <p>
                                    This was by far my favorite project to work
                                    on as it was the most challenging, but also
                                    provided a great opportunity to hone my
                                    technical and design skills.
                                </p>
                                <figure>
                                    <video
                                        className="rounded"
                                        playsInline
                                        autoPlay
                                        muted
                                        loop
                                    >
                                        <source src={Video4} type="video/mp4" />
                                    </video>
                                </figure>
                                <h5>Looking Back</h5>
                                <p>
                                    My experience at Fitspot was great exposure
                                    into the role of a frontend developer.
                                    During my time here I had great exposure to
                                    the full ideation and creation process, as
                                    well as the opportunity to learn and
                                    practice new development technologies and
                                    concepts. I learned a ton about React,
                                    Redux, Webpack, Sass, Git, application
                                    security, and much more.
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

export default Fitspot;
