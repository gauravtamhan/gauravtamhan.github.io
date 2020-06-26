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
                                <Fragment key={index}>
                                    <div className="flex-md-fill my-3 text-center">
                                        <h6 className="mb-1">{item.heading}</h6>
                                        {item['link'] && (
                                            <OutboundLink
                                                href={item.link}
                                                rel="noreferrer"
                                                target="_blank"
                                            >
                                                {item.body}
                                            </OutboundLink>
                                        )}
                                        {item['btnClick'] && (
                                            <button
                                                className="btn btn-link"
                                                onClick={item.btnClick}
                                            >
                                                {item.body}
                                            </button>
                                        )}
                                        {!item['link'] && !item['btnClick'] && (
                                            <p className="mb-0">{item.body}</p>
                                        )}
                                    </div>
                                    <hr className="mx-0 my-0 d-block d-md-none" />
                                </Fragment>
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
