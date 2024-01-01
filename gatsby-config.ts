import type { GatsbyConfig, PluginRef } from 'gatsby'

const config: GatsbyConfig = {
  siteMetadata: {
    siteTitle: `2024`,
    siteTitleAlt: `2024 | The Feelings`,
    siteHeadline: `2024 | The Feelings`,
    siteUrl: `https://2024-microlens.netlify.app`,
    siteDescription:
      'Nhat Nguyen Photos',
    siteImage: `/og-image.jpg`,
    siteLanguage: `en`,
    author: `@torn4dom4n`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-emilia`,
      options: {
        name: `2024`,
        socialMedia: [{}],
        showThemeAuthor: false,
        location: `Vietnam`,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `2024 | The Feelings`,
        short_name: `2024`,
        description: `Nhat Nguyen Photos`,
        start_url: `/`,
        background_color: `#fff`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-384x384.png`,
            sizes: `384x384`,
            type: `image/png`,
          },
        ],
      },
    },
  ].filter(Boolean) as Array<PluginRef>,
}

export default config
