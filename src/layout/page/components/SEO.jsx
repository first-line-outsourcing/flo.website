import * as React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

export function SEO({ description, lang, meta = [], title }) {
  const { site, file: ogImage } = useStaticQuery(
    graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                }
            }
            file(sourceInstanceName: {eq: "images"}, name: {eq: "ogImage"}) {
                publicURL
            }
        }
    `
  );

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:image`,
          content: ogImage.publicURL,
        },
        {
          property: `og:type`,
          content: `website`,
        },
      ].concat(meta)}
    />
  )
}
