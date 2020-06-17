import React, { Fragment } from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

function ProjectDetails({ data }) {
    return (
        <Fragment>
            <div className="container">
                <div className="row justify-content-center mt-2 mt-md-0">
                    <div className="col-xl-10">
                        <div className="d-flex flex-column flex-md-row">
                            {data.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex-md-fill my-2 my-md-3 text-left text-md-center"
                                >
                                    <h6 className="mb-1">{item.heading}</h6>
                                    {item['link'] ? (
                                        <OutboundLink
                                            href={item.link}
                                            rel="noreferrer"
                                            target="_blank"
                                        >
                                            {item.body}
                                        </OutboundLink>
                                    ) : (
                                        <p className="mb-0">{item.body}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <hr className="mt-0 d-none d-md-block" />
        </Fragment>
    );
}

export default ProjectDetails;
