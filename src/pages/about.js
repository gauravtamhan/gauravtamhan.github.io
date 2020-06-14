import React from 'react';
import { Link } from 'gatsby';

export default function About() {
    return (
        <div style={{ color: `teal` }}>
            <Link to="/">Home</Link>
            <p>Send us a message!</p>
        </div>
    );
}
