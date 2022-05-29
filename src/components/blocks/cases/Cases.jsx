import {graphql, useStaticQuery} from 'gatsby';
import {navigate} from 'gatsby';
import {getImage, StaticImage} from 'gatsby-plugin-image';
import React, {useCallback, useMemo, useState} from 'react';
import {Button} from '../../buttons/Button';
import {Heading} from '../../typography/Heading';
import {Highlight} from '../../typography/Highlight';
import {PageLayout} from '../../../layout/page/PageLayout';
import {Paragraph} from '../../typography/Paragraph';
import * as styles from './Cases.module.css';
import {Card} from './components/Card';
import classNames from 'classnames';

function useCasesList(filter) {
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
    .filter(edge => {
      if (edge.node.parent.sourceInstanceName !== 'cases') {
        return false;
      }

      if (filter) {
        if (filter.type === 'tech') {
          const techList = edge.node.frontmatter.techList;
          if (!techList.some(tech => filter.value === tech)) {
            return false;
          }
        }
      }

      return true;
    })
    .map(edge => ({
      id: edge.node.id,
      shortTitle: edge.node.frontmatter.shortTitle,
      techList: edge.node.frontmatter.techList,
      link: `/cases/${edge.node.slug}`,
      previewCardImage: getImage(edge.node.frontmatter.previewCardImage),
    }));
}

/**
 * Cases list
 *
 * @typedef {{type: 'tech', value: string}} Filter
 *
 * @param {'light'|'dark'} [props.theme] Default is light
 * @param {number} [props.max] Max number of cases to show
 * @param {'load-more'|'see-more'} [props.footerButton] Button in the footer
 * @param {Filter} [props.filter] Filter
 * @param {string} [props.heading] Heading
 * @param {string} [props.headingTech] Heading tech
 * @returns {JSX.Element}
 * @constructor
 */
export function Cases(props) {
  const list = useCasesList(props.filter);
  const [showedPages, setShowedPages] = useState(1);
  const showedCount = useMemo(() => props.max ? props.max * showedPages : Infinity, [showedPages, props.max]);
  const viewList = useMemo(() => {
    return list.slice(0, showedCount);
  }, [list, showedCount])
  const sorted = useMemo(() => {
    return viewList.reduce((out, item) => {
      if (out.length === 0 || out[out.length - 1].length === 2) {
        out.push([]);
      }
      const target = out[out.length - 1];
      target.push(item);
      return out;
    }, [])
  }, [viewList]);
  const onSeeMore = useCallback(
    async () => {
      await navigate('/cases')
    },
    []
  );
  const onLoadMore = useCallback(
    () => {
      setShowedPages(showedPages + 1);
    },
    [showedPages, setShowedPages]
  );

  return (
    <div className={classNames(styles.root, {
      [styles.dark]: props.theme === 'dark'
    })}>
      <StaticImage
        className={styles.bg}
        src="./images/bg.png"
        alt="Background"
        placeholder="blurred"
      />
      <PageLayout.Container className={styles.container}>

        {
          props.heading === 'other' && (
            <Heading.H2 theme={props.theme === 'light' ? 'dark' : 'light'} className={styles.title}>
              Other cases
            </Heading.H2>
          )
        }
        {
          props.heading === 'featured' && (
            <Heading.H2 theme={props.theme === 'light' ? 'dark' : 'light'} className={styles.title}>
              Featured
              <Highlight theme={props.theme === 'light' ? 'solid' : undefined}> case </Highlight>
              studies
            </Heading.H2>
          )
        }
        {
          props.heading === 'tech' && props.headingTech && (
            <>
              <Heading theme={props.theme === 'light' ? 'dark' : 'light'} className={styles.title}>
                <Highlight theme={props.theme === 'light' ? 'solid' : undefined}>Our {props.headingTech}</Highlight>
              </Heading>
              <Paragraph>We developed the entertainment platform and increased sales by 15%, integrated social networks with external services, and increased DAU by 8%... What are you waiting for? Let’s work together!</Paragraph>
            </>
          )
        }
        {
          sorted.map(row => (
            <ul className={styles.row}>
              {
                row.map(col => (
                  <li key={col.id}>
                    <Card
                      link={col.link}
                      theme={props.theme}
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
        {
          props.footerButton && (
            <div className={styles.footer}>
              {
                props.footerButton === 'see-more' && (
                  <Button
                    onClick={onSeeMore}
                    theme="accent"
                    responsiveFull
                    size="xl"
                  >See more</Button>
                )
              }
              {
                props.footerButton === 'load-more' && showedCount < list.length && (
                  <Button
                    onClick={onLoadMore}
                    theme="accent"
                    responsiveFull
                    size="xl"
                  >Load more</Button>
                )
              }
            </div>
          )
        }
      </PageLayout.Container>
    </div>
  );
}

