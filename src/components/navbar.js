import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Resume from '../assets/resume/gaurav_tamhan_resume_2020_updated.pdf';

function Navbar() {
    const queryData = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        navLinks {
                            label
                            location
                        }
                    }
                }
            }
        `
    );

    const { navLinks } = queryData.site.siteMetadata;

    const ResumeNavItem = (
        <a className="nav-link" href={Resume} target="_blank" rel="noreferrer">
            Resume
        </a>
    );

    return (
        <div
            className="navbar-container bg-primary-2"
            style={{ minHeight: 70 }}
        >
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary-2 fixed-top">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        Gaurav Tamhan
                    </Link>
                    <div className="navbar-collapse justify-content-end collapse">
                        <div className="py-2 py-lg-0">
                            <ul className="navbar-nav">
                                {navLinks.map((item, index) => (
                                    <li key={index} className="nav-item">
                                        <Link
                                            to={item.location}
                                            className="nav-link"
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                                {ResumeNavItem}
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
