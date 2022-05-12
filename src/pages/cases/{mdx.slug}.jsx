import {graphql} from 'gatsby';
import {MDXRenderer} from 'gatsby-plugin-mdx';
import * as React from 'react';
import {PageLayout} from '../../layout/page/PageLayout';


export default function Case({data}) {
  return (
    <PageLayout
      hero={<div style={{height: 500}}/>}
    >
      <PageLayout.Container>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </PageLayout.Container>
    </PageLayout>
  );
}

export const query = graphql`
    query ($id: String) {
        mdx(id: {eq: $id}) {
            frontmatter {
                title
                techList
            }
            body
        }
    }
`;
