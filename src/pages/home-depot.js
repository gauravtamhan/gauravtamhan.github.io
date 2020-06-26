import React from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import Layout from '../components/layout';
import ProjectCards from '../components/projectCards';
import ProjectDetails from '../components/projectDetails';
import HeroImage from '../assets/homeDepot/image-1.jpg';
import Persona1 from '../assets/homeDepot/persona-1.png';
import Persona2 from '../assets/homeDepot/persona-2.png';
import Persona3 from '../assets/homeDepot/persona-3.png';
import Image2 from '../assets/homeDepot/image-2.png';
import Design1 from '../assets/homeDepot/design-1.png';
import Design2 from '../assets/homeDepot/design-2.png';
import Design3 from '../assets/homeDepot/design-3.png';
import IA from '../assets/homeDepot/ia.png';
import Prototype from '../assets/homeDepot/prototype.png';

const pageTitle = 'Home Depot UX Design';
const prototypeLink = 'https://invis.io/C4Q6X7OFSBZ#/335360129_Login';

const quickRow = [
    {
        heading: 'Role',
        body: 'UX Design & Research',
    },
    {
        heading: 'Duration',
        body: '14 weeks',
    },
    {
        heading: 'Deliverable',
        body: 'Interactive Prototype',
        btnClick: function () {
            return scrollTo('#prototype');
        },
    },
];

const personas = [Persona1, Persona2, Persona3];

function HomeDepot(props) {
    return (
        <Layout scrollTopBtn pageTitle={pageTitle}>
            <section className="bg-primary-2 text-light">
                <div className="container">
                    <div className="row justify-content-center text-center mb-6">
                        <div className="col-xl-8 col-lg-9 col-md-10">
                            <h5 className="mb-4">
                                User Experience Research & Design
                            </h5>
                            <h1 className="display-4 mb-4">{pageTitle}</h1>
                            <p className="lead">
                                I had the opportunity to work with The Home
                                Depot Store Ops team to redesign their
                                enterprise device, the First Phone. Used by all
                                in-store associates, this device serves to track
                                store operations and inventory, and complete
                                day-to-day tasks.
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
                                <h5>What is the First Phone?</h5>
                                <p>
                                    The First Phone is a bulky android phone
                                    with a built-in RFID scanner and a custom
                                    user interface loaded with 40+ applications
                                    to help associates complete in-store tasks.
                                    The problem however, is that the process of
                                    using the First Phone is terribly
                                    complicated.
                                </p>

                                <h5>The Problem</h5>
                                <p>
                                    The phone is crowded with multiple
                                    applications, most of which are only used to
                                    complete a single operation within a task.
                                    As a result, completing a task requires
                                    having to launch two to three applications
                                    at a time while passing data between
                                    multiple apps. Additionally, many apps have
                                    overlapping functionalities creating
                                    inconsistent and redundant paths to
                                    completing a single process. This leads to a
                                    confusing and disorienting experience that
                                    slows down associate’s work flows, hinders
                                    the acclimation of new hire associates, and
                                    results in massive time wasted and money
                                    lost for the company.
                                </p>
                                <blockquote className="bg-primary-alt">
                                    <div className="text-small text-center text-muted mb-2">
                                        A design challenge emerged...
                                    </div>
                                    <div className="h3 text-center px-md-3">
                                        How can we devise a solution that
                                        removes the friction of using the
                                        current First Phone, and reduces the
                                        cognitive load for completing tasks?
                                    </div>
                                </blockquote>
                                <h5>Research & Findings</h5>
                                <p>
                                    To begin, my team and I conducted a series
                                    of research methods ranging from interviews
                                    with our target users and corporate
                                    stakeholders, ethnographic studies with
                                    store associates, and an online survey with
                                    workers from various roles and departments
                                    to better understand the role of the First
                                    Phone and how it’s percieved.
                                </p>
                                <p>
                                    Through this research we gained information
                                    regarding the structure of the FirstPhone
                                    and its ties with the rest of the company
                                    from a developmental and organizational
                                    perspective, valuable insight into the
                                    day-to-day operations of associates
                                    interacting with the FirstPhone and how
                                    these interactions are context and role
                                    dependent, as well as both qualitative and
                                    quantitative data to help us better
                                    empathize with the user and understand their
                                    pain points and frustrations.
                                </p>
                                <h5>Identifying Key Information</h5>
                                <p>
                                    At this point we had learned about our
                                    users. Now it was time to distill the
                                    information and use the data to inform our
                                    design.
                                </p>
                                <h6>Personafying the Users</h6>
                                <p>
                                    Analyzing our data revealed three common
                                    motifs among our user population, and we
                                    created associating personas for each. This
                                    allowed us to define our user’s needs and
                                    goals, effectively defining the
                                    characteristics of our design.
                                </p>
                                <div className="row">
                                    {personas.map((x, i) => (
                                        <div key={i} className="col-md-6">
                                            <figure className="my-md-1">
                                                <img
                                                    src={x}
                                                    alt=""
                                                    className="rounded"
                                                />
                                            </figure>
                                        </div>
                                    ))}
                                </div>
                                <h6>Affinity Diagraming</h6>
                                <p>
                                    We then conducted an affinity diagramming
                                    session to analyze our research data.
                                    Organizing individual data points into
                                    similar themes brought out important
                                    implications for our design. At a high level
                                    these implications include privilege
                                    control, context sensitivity, proactivity,
                                    accessibility, and overall system
                                    robustness.
                                </p>
                                <figure>
                                    <img
                                        src={Image2}
                                        alt=""
                                        className="rounded"
                                    />
                                </figure>
                                <h5>Concepting</h5>
                                <p>
                                    Using the information gathered we created
                                    three low-fidelity mockups in order to
                                    conceptualize our design ideas. Each of the
                                    concepts captured all of our design
                                    implications, but represented a different
                                    model of how a user would accomplish a task.
                                </p>
                                <h6>Task Based Design</h6>
                                <p>
                                    The first concept was a task based design
                                    that served as a helpful launcher on top of
                                    the existing grid of apps. The aim was to
                                    streamline the process and reduce the
                                    learning curve for day-one employees.
                                </p>
                                <figure className="mt-4 inline-figure">
                                    <img src={Design1} alt="" />
                                </figure>
                                <h6>Process Based Design</h6>
                                <p>
                                    The second concept was a process based
                                    design focused on streamlining user’s
                                    workflows by presenting all of the relevant
                                    functions in one place so that they could be
                                    chained together in order to complete tasks.
                                </p>
                                <figure className="mt-4 inline-figure">
                                    <img src={Design2} alt="" />
                                </figure>
                                <h6>AR Based Design</h6>
                                <p>
                                    The third concept moved away from the notion
                                    of apps and focused on context awareness.
                                    With the help of augmented reality (AR) on a
                                    smartphone, user’s could point their camera
                                    at an item and see all relevant data and
                                    actions.
                                </p>
                                <figure className="mt-4 inline-figure">
                                    <img src={Design3} alt="" />
                                </figure>
                                <h6>Testing</h6>
                                <p>
                                    We conducted a focus group at a local Home
                                    Depot store with six associates of various
                                    roles and gathered feedback on different
                                    aspects of each concept. We found that the
                                    AR concept was the most well received, along
                                    with the task based nature of the first
                                    concept. In developing our final design we
                                    tried to combine those elements that proved
                                    successful from our concepts while still
                                    trying to make our design a cohesive
                                    experience that wasn’t too complex to use.
                                </p>
                                <h5>Refining the Design</h5>
                                <p>
                                    Developing a clear information architecture
                                    was crucial for our design. We wanted to
                                    ensure that we were incorporating everything
                                    we had learned thus far in the cleanest way
                                    possible, and having a birds-eye view of our
                                    system really helped in ironing out the
                                    small details.
                                </p>
                                <figure>
                                    <img src={IA} alt="" />
                                </figure>
                                <p>
                                    Using Sketch and InVision we were then able
                                    to quickly translate the information
                                    architecture into an high-fidelity
                                    prototype. This design was then presented to
                                    Home Depot associates in a usability testing
                                    session as an interactive prototype running
                                    on a mobile phone, allowing them to get a
                                    better feel of what the finished product
                                    would look like. Using the results from our
                                    usability testing session we were further
                                    able to iterate on our system design
                                </p>
                                <h5 id="prototype">The Design</h5>
                                <p>
                                    Below is interactive demo of our final
                                    prototype. We presented this final prototype
                                    to Home Depot UX designers for a heuristic
                                    evaluation and to share everything we had
                                    learnt throughout the process.
                                </p>
                                <div className="row bg-dynamic rounded py-4">
                                    <div className="col-md d-flex justify-content-center">
                                        <img
                                            style={{ width: 300 }}
                                            src={Prototype}
                                            alt=""
                                        />
                                    </div>
                                    <div className="col-md d-flex align-items-center">
                                        <div className=" w-100 text-center">
                                            <div className="h3 d-none d-md-block d-lg-block d-xl-block">
                                                A Reimagined First Phone
                                                Experience
                                            </div>
                                            <OutboundLink
                                                className="btn btn-lg btn-primary mt-3"
                                                href={prototypeLink}
                                                rel="noreferrer"
                                                target="_blank"
                                            >
                                                View Prototype
                                            </OutboundLink>
                                        </div>
                                    </div>
                                </div>
                                <h5>Final Note</h5>
                                <p>
                                    Overall, the Home Depot UX team was quite
                                    pleased with the restructured flow and
                                    system design from a usability standpoint,
                                    claiming that this truly took on the
                                    “scan-to-start” notion that they had
                                    originally envisioned. They also liked the
                                    updated aesthetic and design consistency
                                    that played on people’s familiarity of using
                                    their own smartphones.
                                </p>
                                <p>
                                    With this redesigned system, however, there
                                    are still aspects that need to be further
                                    considered. Things like accessibility
                                    support, visibility of system status, error
                                    handling, etc. would greatly enhance our
                                    design and ultimately provide a better
                                    experience for the end user.
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

export default HomeDepot;
