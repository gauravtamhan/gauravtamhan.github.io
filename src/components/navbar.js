import React, { Fragment, useState, useEffect } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Resume from '../assets/resume/gaurav_tamhan_resume_2020_updated.pdf';

const STAGGER_DELAY = 80;

const MobileOverlay = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    opacity: ${props => (props.isOpen ? '1' : '0')};
    pointer-events: ${props => (props.isOpen ? 'auto' : 'none')};
    top: 0;
    left: 0;
    background: #1b1f3b;
    z-index: 40;
    display: block;
`;

const MobileNav = styled.div`
    background-color: transparent;
    position: absolute;
    width: 100%;
    height: 100%;
`;

const MobileNavWrapper = styled.div`
    position: relative;
    padding-left: 4%;
    padding-right: 4%;
    top: 67px;
    height: calc(100% - 67px);
    display: flex;
    flex-direction: column;
`;

const NavItemContainer = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const MobileNavListItem = styled.li`
    transform: ${props =>
        props.isOpen ? 'translateX(0%)' : 'translateX(-100%)'};
    transition-duration: 0.35s;
    transition-timing-function: ease;
    transition-property: transform;
    transition-delay: ${props => STAGGER_DELAY * props.index}ms;
`;

const MenuFooterContainer = styled.div`
    opacity: ${props => (props.isOpen ? '1' : '0')};
    transition-duration: 0.45s;
    transition-timing-function: ease;
    transition-property: opacity;
    transition-delay: ${props => STAGGER_DELAY * props.index}ms;
`;

const SCROLL_DISABLED_CLASS = 'scroll-disabled';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        if (menuOpen) {
            document.body.classList.add(SCROLL_DISABLED_CLASS);
        } else {
            document.body.classList.remove(SCROLL_DISABLED_CLASS);
        }
    });

    const queryData = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        navLinks {
                            label
                            location
                        }
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

    const { navLinks } = queryData.site.siteMetadata;

    const ResumeNavItem = (
        <a className="nav-link" href={Resume} target="_blank" rel="noreferrer">
            Resume
        </a>
    );

    const { email, github, linkedin } = queryData.site.siteMetadata.socialLinks;

    const socialData = [
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
        <Fragment>
            <div
                className="navbar-container bg-primary-2"
                style={{ minHeight: 70 }}
            >
                <nav className="navbar navbar-expand-md navbar-dark bg-primary-2 fixed-top">
                    <div className="container">
                        <Link className="navbar-brand" to="/">
                            Gaurav Tamhan
                        </Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            onClick={() => setMenuOpen(prevState => !prevState)}
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="navbar-collapse justify-content-end collapse">
                            <div className="py-2 py-md-0">
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
            <MobileOverlay isOpen={menuOpen}>
                <MobileNav>
                    <MobileNavWrapper>
                        <NavItemContainer>
                            <ul className="navbar-nav text-light">
                                {navLinks.map((item, index) => (
                                    <MobileNavListItem
                                        key={index}
                                        isOpen={menuOpen}
                                        index={index}
                                        className="nav-item"
                                    >
                                        <Link
                                            to={item.location}
                                            className="nav-link h2"
                                        >
                                            {item.label}
                                        </Link>
                                    </MobileNavListItem>
                                ))}
                                <MobileNavListItem
                                    isOpen={menuOpen}
                                    index={navLinks.length}
                                    className="nav-item"
                                >
                                    <a
                                        className="nav-link h2"
                                        href={Resume}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Resume
                                    </a>
                                </MobileNavListItem>
                            </ul>
                        </NavItemContainer>
                        <MenuFooterContainer
                            isOpen={menuOpen}
                            index={navLinks.length + 1}
                            className="d-flex flex-column align-items-center text-light mb-3 g-mobile-menu-footer"
                        >
                            <a
                                href={`mailto:${email}`}
                                className="btn btn-lg btn-block btn-primary mb-3"
                            >
                                {email}
                            </a>
                            <ul className="nav">
                                {socialData.map((x, i) => (
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
                        </MenuFooterContainer>
                    </MobileNavWrapper>
                </MobileNav>
            </MobileOverlay>
        </Fragment>
    );
}

export default Navbar;
