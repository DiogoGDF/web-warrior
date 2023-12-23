/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import("gatsby").GatsbyConfig}
 */
module.exports = {
    /* Your site config here */
    plugins: [
        "gatsby-plugin-pnpm",
        "gatsby-transformer-remark",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "projects",
                path: "src/projects/"
            }
        }
    ],
    siteMetadata: {
        title: "Web Warrior",
        description: "web dev portfolio",
        copyright: "This website is copyright 2023 Web Warrior",
        contact: "diogogarbinato@gmail.com"
    }
}