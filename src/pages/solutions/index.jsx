import {graphql, useStaticQuery} from 'gatsby';
import {getImage} from 'gatsby-plugin-image';
import * as React from "react"
import {Services as ServicesView} from '../../pages-views/services/Services';

function useList() {
  const result = useStaticQuery(graphql`
      query {
          allMdx(filter: {fields: {source: {eq: "solutions"}}}) {
              edges {
                  node {
                      id
                      slug
                      frontmatter {
                          description
                          shortTitle
                          horPreviewImage {
                              childImageSharp {
                                  gatsbyImageData
                              }
                          }
                      }
                  }
              }
          }
      }
  `);

  const items = result.allMdx.edges;

  return items.map(n => {
    const metadata = n.node.frontmatter;
    return ({
      id: n.node.id,
      path: `/solutions/${n.node.slug}`,
      title: metadata.shortTitle,
      description: metadata.description,
      previewImage: getImage(metadata.horPreviewImage)
    });
  });
}

export default function Solutions() {
  const list = useList();
  return (
    <ServicesView
      title="Solutions"
      list={list}
    />
  )
};
