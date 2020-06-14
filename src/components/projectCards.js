import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Fitspot from '../images/projectCards/fitspot-2.png';
import HouseATL from '../images/projectCards/house-atl.png';

const IMG_MAP = {
    0: HouseATL,
    1: Fitspot,
};

function ProjectCards({ uri }) {
    const queryData = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        projectLinks {
                            name
                            link
                            description
                        }
                    }
                }
            }
        `
    );

    const { projectLinks } = queryData.site.siteMetadata;

    return (
        <div className="row">
            {projectLinks.map(
                (project, index) =>
                    project.link !== uri && (
                        <div key={index} className="col-sm-6 col-lg-4 mb-4">
                            <Link className="g-project-cards" to={project.link}>
                                <img
                                    className="rounded mb-3"
                                    src={IMG_MAP[index]}
                                />
                                <h4 className="mb-1">{project.name}</h4>
                                <div className="text-small text-muted">
                                    {project.description}
                                </div>
                            </Link>
                        </div>
                    )
            )}
        </div>
    );
}

export default ProjectCards;
