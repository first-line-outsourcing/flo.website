import {graphql} from 'gatsby';
import {getImage} from 'gatsby-plugin-image';
import * as React from 'react';
import {Service as ServiceView} from '../../pages-views/services/service/Service';


export default function Service({data}) {
  return (
    <ServiceView
      id={data.mdx.id}
      title={data.mdx.frontmatter.title}
      description={data.mdx.frontmatter.description}
      techStack={data.mdx.frontmatter.techStack}
      heroImage={getImage(data.mdx.frontmatter.heroImage)}
      content={data.mdx.body}
    />
  );
}

export const query = graphql`
    query ($id: String) {
        mdx(id: {eq: $id}) {
            id
            frontmatter {
                description
                title
                techStack
                description
                heroImage {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
            }
            body
        }
    }
`;
