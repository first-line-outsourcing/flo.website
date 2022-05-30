import {graphql, useStaticQuery} from 'gatsby';
import * as React from "react"
import {JoinUs as JoinUsView} from '../pages-views/join-us/JoinUs';

function useList() {
  const result = useStaticQuery(graphql`
      query {
          allMdx {
              edges {
                  node {
                      frontmatter {
                          salary
                          name
                          level
                          category
                          workTime
                      }
                      body
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

  return result.allMdx.edges
    .filter(i => i.node.parent.sourceInstanceName === 'positions')
    .map(i => ({
      meta: i.node.frontmatter,
      body: i.node.body,
    }));
}

export default function JoinUs() {
  const positions = useList();

  return (
    <JoinUsView
      positions={positions}
    />
  );
}
