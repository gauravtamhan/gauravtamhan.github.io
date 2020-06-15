import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    const queryData = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        socialLinks {
                            email
                            github
                            linkedin
                        }
                    }
                }
            }
        `
    );

    const { email, github, linkedin } = queryData.site.siteMetadata.socialLinks;

    const data = [
        {
            icon: faEnvelope,
            link: `mailto:${email}`,
        },
        {
            icon: faLinkedin,
            link: linkedin,
        },
        {
            icon: faGithub,
            link: github,
        },
    ];

    return (
        <footer className="pb-5 bg-primary-2 text-light">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="h1">Interested in collaborating?</div>
                        <div className="my-4">
                            <p className="lead">
                                Feel free to reach out if you're looking for a
                                developer, have a question, or just want to
                                connect.
                            </p>
                        </div>
                        <div className="my-5">
                            <a
                                href={`mailto:${email}`}
                                className="btn btn-lg btn-primary"
                            >
                                {email}
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col">
                        <ul className="nav">
                            {data.map((x, i) => (
                                <li key={i} className="nav-item">
                                    <a
                                        href={x.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="nav-link"
                                    >
                                        <FontAwesomeIcon
                                            icon={x.icon}
                                            size="lg"
                                            fixedWidth
                                        />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-auto">
                        <small className="text-muted">
                            ©2020 Gaurav Tamhan. All Rights Reserved.
                        </small>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
