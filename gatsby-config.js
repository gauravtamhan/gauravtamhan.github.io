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
            {
                name: 'Home Depot UX Design',
                link: '/home-depot',
                description:
                    'Redesigning the First Phone in collaboration with The Home Depot Store Ops team',
            },
        ],
        socialLinks: {
            email: 'gaurav.tamhan@gmail.com',
            linkedin: 'https://www.linkedin.com/in/gauravtamhan/',
            github: 'https://github.com/gauravtamhan',
        },
    },
    plugins: [
        {
            resolve: 'gatsby-plugin-google-analytics',
            options: {
                trackingId: 'UA-117316278-2',
                head: true,
            },
        },
        'gatsby-plugin-sass',
        'gatsby-plugin-fontawesome-css',
        'gatsby-plugin-styled-components',
        'gatsby-plugin-smoothscroll',
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'Gaurav Tamhan',
                short_name: 'Gaurav',
                start_url: '/',
                background_color: '#1b1f3b',
                theme_color: '#1b1f3b',
                display: 'standalone',
                icon: 'src/assets/icon.png',
            },
        },
    ],
};
