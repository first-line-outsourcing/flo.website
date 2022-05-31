import {graphql, useStaticQuery} from 'gatsby';
import * as React from "react"
import {JoinUs as JoinUsView} from '../pages-views/join-us/JoinUs';

function useList() {
  const result = useStaticQuery(graphql`
      query {
          allMdx(filter: {fields: {source: {eq: "positions"}}}) {
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
                  }
              }
          }
      }
  `);

  return result.allMdx.edges
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
