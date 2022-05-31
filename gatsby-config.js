const {env} = require('./load-env');

const siteURL = new URL(process.env.SITE_URL || 'https://localhost');

console.info('env=%s', env);
console.info('site url=%s', siteURL);
console.info('bucket name=%s', process.env.AWS_BUCKET_NAME);
console.info('bucket prefix=%s', process.env.AWS_BUCKET_PREFIX);

module.exports = {
  siteMetadata: {
    title: `flo.website`,
    siteUrl: siteURL.toString(),
    companyAddress: 'Russia, Krasnodar, Oktabrskaya 1/4',
    companyNumber: '+7 (998) 838-45-44',
    companyEmail: 'hello@flo.team',
  },
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        "trackingId": "NEED_GOOGLE_ANALYTICS_TACKING_ID"
      }
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png"
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": `${__dirname}/src/images`
      },
      __key: "images"
    }, {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": `${__dirname}/src/pages`
      },
      __key: "pages"
    },{
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "cases",
        "path": `${__dirname}/content/cases`
      },
      __key: "cases"
    }, {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "testimonials",
        "path": `${__dirname}/content/testimonials`
      },
      __key: "testimonials"
    }, {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "positions",
        "path": `${__dirname}/content/positions`
      },
      __key: "positions"
    }, {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "blog-posts",
        "path": `${__dirname}/content/blog-posts`
      },
      __key: "blog-posts"
    },
    {
      resolve: `gatsby-transformer-json`,
      options: {
        typeName: ({node, object, isArray}) => {
          if (node.sourceInstanceName === 'testimonials') {
            return 'Testimonials';
          }
          return 'Json'
        }
      }
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: siteURL.toString(),
        stripQueryString: true
      }
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: process.env.AWS_BUCKET_NAME,
        bucketPrefix: process.env.AWS_BUCKET_PREFIX,
        protocol: siteURL.protocol,
        hostname: siteURL.hostname
      }
    }
  ]
};
