import {graphql, useStaticQuery} from 'gatsby';
import {getImage} from 'gatsby-plugin-image';
import {nanoid} from 'nanoid';
import * as React from "react"
import {Blog as BlogView} from '../../pages-views/blog/Blog';

function useList() {
  const result = useStaticQuery(graphql`
      query {
          allMdx {
              edges {
                  node {
                      id
                      slug
                      frontmatter {
                          title
                          publishDate
                          previewImage {
                              childImageSharp {
                                  gatsbyImageData
                              }
                          }
                      }
                      parent {
                          ... on File {
                              sourceInstanceName
                          }
                      }
                  }
              }
          }
      }
  `);
  const items = result.allMdx.edges
    .filter(i => i.node.parent.sourceInstanceName === 'blog-posts');

  return items
    .map(i => ({
      id: i.node.id,
      // id: nanoid(),
      title: i.node.frontmatter.title,
      preview: getImage(i.node.frontmatter.previewImage),
      publishDate: new Date(i.node.frontmatter.publishDate),
      link: `/blog/${i.node.slug}`
    }))
    .sort((a, b) => +a.publishDate - +b.publishDate);
}

export default function Blog() {
  const posts = useList();

  return (
    <BlogView
      posts={posts}
    />
  );
};