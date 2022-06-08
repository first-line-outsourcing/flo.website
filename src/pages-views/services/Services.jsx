import {graphql, useStaticQuery} from 'gatsby';
import {getImage, StaticImage} from 'gatsby-plugin-image';
import * as React from 'react';
import {Heading} from '../../components/typography/Heading';
import {Highlight} from '../../components/typography/Highlight';
import {Paragraph} from '../../components/typography/Paragraph';
import {PageLayout} from '../../layout/page/PageLayout';
import {Parallax, Background} from 'react-parallax';
import {Card} from './component/Card';
import * as styles from './Services.module.css';

function useServicesList() {
  const result = useStaticQuery(graphql`
      query {
          allMdx(filter: {fields: {source: {eq: "services"}}}) {
              edges {
                  node {
                      id
                      slug
                      frontmatter {
                          description
                          shortTitle
                          horPreviewImage {
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

  const items = result.allMdx.edges;

  return items.map(n => {
    const metadata = n.node.frontmatter;
    return ({
      id: n.node.id,
      path: `/services/${n.node.slug}`,
      title: metadata.shortTitle,
      description: metadata.description,
      previewImage: getImage(metadata.horPreviewImage)
    });
  });
}

function Hero() {
  return (
    <Parallax strength={300}>
      <Background className={styles.heroBackground}>
        <StaticImage
          className={styles.heroImage}
          src="./images/hero001.png"
          alt="Background"
          quality={100}
          placeholder="blurred"
        />
      </Background>
      <PageLayout.Container className={styles.heroContent}>
        <Heading>Full-cycle development for your business needs</Heading>
      </PageLayout.Container>
    </Parallax>
  );
}

export function Services(props) {
  const list = useServicesList();

  return (
    <PageLayout
      seo={{
        title: 'Services'
      }}
      hero={<Hero/>}
      headerNoMenuHeightFix
    >
      <div
        className={styles.root}
      >
        <PageLayout.Container >
          <Heading.H2>
            Our{' '}
            <Highlight>
              se<Highlight.Blink>r</Highlight.Blink>vic<Highlight.Blink>e</Highlight.Blink>s
            </Highlight>
          </Heading.H2>
          <Paragraph>Together with you we discuss your challenges and choose the most effective way of solving them. We interview you to understand your business, understand the processes and offer the and concentrate on the result you get after our partnership.</Paragraph>
          <ul className={styles.list}>
            {
              list.map(item => (
                <li key={item.path}>
                  <Card
                    link={item.path}
                    preview={item.previewImage}
                    description={item.description}
                    title={item.title}
                  />
                </li>
              ))
            }
          </ul>
        </PageLayout.Container>
      </div>
    </PageLayout>
  );
}
