// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`


module.exports = {
  siteName: 'JTWilsonDesign',
  siteDescription: 'freelance portfolio for Joe Wilson',
  siteUrl: 'https://jtwilson.design',
  titleTemplate: '%s | JTWilson.Design',
  plugins: [],
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        // ...global plugins
      ]
    }
  },
  templates: {
    Product: '/store/products/:slug'
  },
  plugins: [{
      use: "gridsome-plugin-tailwindcss",

      options: {
        tailwindConfig: './tailwind.config.js',
        presetEnvConfig: {},
        shouldImport: false,
        shouldTimeTravel: false
      }

    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'posts/**/*.md',
        typeName: 'Post',
        remark: {
          plugins: [
            // ...local plugins
          ]
        }
      }
    },
    {
      use: `gridsome-plugin-netlify-cms`,
      options: {
        publicPath: `/admin`
      }
    },
    {
      use: '~/src/sources/products',
      options: {
        apiKey: process.env.GRIDSOME_AIRTABLE_KEY,
        base: process.env.GRIDSOME_AIRTABLE_BASE,
      },
    },
  ]
}