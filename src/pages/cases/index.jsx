import {graphql, Link} from 'gatsby';
import {GatsbyImage, getImage} from 'gatsby-plugin-image'
import * as React from 'react';
import {useMemo} from 'react';
import {PageLayout} from '../../layout/page/PageLayout';


export default function Cases({data}) {
    const list = useMemo(() => {
        return data.allMdx.edges
          .filter(edge => edge.node.parent.sourceInstanceName === 'cases')
          .map(edge => ({
              id: edge.node.id,
              shortTitle: edge.node.frontmatter.shortTitle,
              techList: edge.node.frontmatter.techList,
              slug: edge.node.slug,
              previewCardImage: getImage(edge.node.frontmatter.previewCardImage),
          }))
    }, [data]);

    return (
      <PageLayout
        hero={<div style={{height: 500}}/>}
      >
          {
              list.map(item => (
                <div key={item.id}>
                    <Link to={`/cases/${item.slug}`}>{item.shortTitle}</Link>
                    <GatsbyImage image={item.previewCardImage} alt={item.shortTitle}/>
                </div>
              ))
          }
      </PageLayout>
    );
}

export const query = graphql`
    query {
        allMdx {
            edges {
                node {
                    slug
                    parent {
                        internal {
                            type
                        }
                        ... on File {
                            id
                            name
                            sourceInstanceName
                        }
                    }
                    id
                    frontmatter {
                        title
                        techList
                        shortTitle
                        previewCardImage {
                            childImageSharp {
                                gatsbyImageData
                            }
                        }
                    }
                }
            }
        }
    }
`;
