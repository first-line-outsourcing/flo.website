import {graphql} from 'gatsby';
import * as React from 'react';
import {BlogPost as BlogPostView} from '../../pages-views/blog/blog-post/BlogPost';


export default function Case({data}) {
  return (
    <BlogPostView
      id={data.mdx.id}
      title={data.mdx.frontmatter.title}
      publishDate={new Date(data.mdx.frontmatter.publishDate)}
      tags={data.mdx.frontmatter.tags}
      content={data.mdx.body}
    />
  );
}

export const query = graphql`
    query ($id: String) {
        mdx(id: {eq: $id}) {
            id
            frontmatter {
                title
                publishDate
                tags
            }
            body
        }
    }
`;
