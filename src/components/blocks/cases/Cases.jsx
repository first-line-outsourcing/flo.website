import {graphql, useStaticQuery} from 'gatsby';
import {navigate} from 'gatsby';
import {getImage, StaticImage} from 'gatsby-plugin-image';
import React, {useCallback, useMemo} from 'react';
import {Button} from '../../buttons/Button';
import {Heading} from '../../typography/Heading';
import {Highlight} from '../../typography/Highlight';
import {PageLayout} from '../../../layout/page/PageLayout';
import * as styles from './Cases.module.css';
import {Card} from './components/Card';

function useCasesList() {
  const data = useStaticQuery(graphql`
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
  `);

  return data.allMdx.edges
    .filter(edge => edge.node.parent.sourceInstanceName === 'cases')
    .map(edge => ({
      id: edge.node.id,
      shortTitle: edge.node.frontmatter.shortTitle,
      techList: edge.node.frontmatter.techList,
      link: `/cases/${edge.node.slug}`,
      previewCardImage: getImage(edge.node.frontmatter.previewCardImage),
    })).slice(0, 4);
}

export function Cases(props) {
  const list = useCasesList();
  const sorted = useMemo(() => {
    return list.reduce((out, item) => {
      if (out.length === 0 || out[out.length - 1].length === 2) {
        out.push([]);
      }
      const target = out[out.length - 1];
      target.push(item);
      return out;
    }, [])
  }, [list]);
  const onSeeMore = useCallback(
    async () => {
      await navigate('/cases')
    },
    []
  );

  return (
    <div className={styles.root}>
      <PageLayout.Container className={styles.container}>
        <StaticImage className={styles.bg} src="./images/bg.png" alt="Background" />
        <Heading.H2 theme="black" className={styles.title}>
          Featured
          <Highlight theme="solid"> case </Highlight>
          studies
        </Heading.H2>
        {
          sorted.map(row => (
            <ul className={styles.row}>
              {
                row.map(col => (
                  <li key={col.id}>
                    <Card
                      link={col.link}
                      preview={col.previewCardImage}
                      title={col.shortTitle}
                      techList={col.techList}
                    />
                  </li>
                ))
              }
            </ul>
          ))
        }
        <div className={styles.footer}>
          <Button
            onClick={onSeeMore}
            theme="accent"
            responsiveFull
            size="xl"
          >See more</Button>
        </div>
      </PageLayout.Container>
    </div>
  );
}

