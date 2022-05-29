import {graphql} from 'gatsby';
import {getImage} from 'gatsby-plugin-image';
import * as React from 'react';
import {Case as CaseView} from '../../pages-views/cases/case/Case';


export default function Case({data}) {
  return (
    <CaseView
      heroTitle={data.mdx.frontmatter.title}
      heroBg={getImage(data.mdx.frontmatter.heroBg)}
      techList={data.mdx.frontmatter.techList}
      siteLink={data.mdx.frontmatter.siteLink}
      social={data.mdx.frontmatter.social}
      numbers={data.mdx.frontmatter.numbers}
      content={data.mdx.body}
    />
  );
}

export const query = graphql`
    query ($id: String) {
        mdx(id: {eq: $id}) {
            frontmatter {
                title
                techList
                siteLink
                social {
                    instagram
                    linkedin
                    facebook
                }
                numbers {
                    key
                    caption
                    value
                }
                heroBg {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
            }
            body
        }
    }
`;
