/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    /* Your site config here */
    siteMetadata: {
        navLinks: [
            {
                label: 'Portfolio',
                location: '/',
            },
            {
                label: 'About',
                location: '/about',
            },
        ],
        projectLinks: [
            {
                name: 'House ATL Data Collective',
                link: '/house-atl',
                description:
                    'A geo-vis application that analyzes affordable housing in Atlanta',
            },
            {
                name: 'Working at Fitspot',
                link: '/fitspot',
                description:
                    'A look into my experience as a frontend developer at Fitspot, a fitness tech startup',
            },
        ],
        socialLinks: {
            email: 'gaurav.tamhan@gmail.com',
            linkedin: 'https://www.linkedin.com/in/gauravtamhan/',
            github: 'https://github.com/gauravtamhan',
        },
    },
    plugins: [
        'gatsby-plugin-sass',
        'gatsby-plugin-fontawesome-css',
        'gatsby-plugin-styled-components',
        'gatsby-plugin-smoothscroll',
    ],
};
