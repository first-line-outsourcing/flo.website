import {GatsbyImage} from 'gatsby-plugin-image';
import React, {useCallback} from 'react';
import {Background, Parallax} from 'react-parallax';
import {Cases} from '../../../components/blocks/cases/Cases';
import {OurWorkProcess} from '../../../components/blocks/our-work-process/OurWorkProcess';
import {TechStack} from '../../../components/blocks/tech-stack/TechStack';
import {UserContent} from '../../../components/blocks/user-content/UserContent';
import {Heading} from '../../../components/typography/Heading';
import {Paragraph} from '../../../components/typography/Paragraph';
import {PageLayout} from '../../../layout/page/PageLayout';
import * as styles from './Service.module.css';

function Hero(props) {
  return (
    <Parallax strength={300}>
      <Background className={styles.heroBackground}>
        <GatsbyImage
          className={styles.heroImage}
          image={props.bg}
          alt="Background"
        />
      </Background>
      <PageLayout.Container>
        <div className={styles.heroContent}>
          <Heading>{props.title}</Heading>
          <Paragraph size="s">{props.description}</Paragraph>
        </div>
      </PageLayout.Container>
    </Parallax>
  );
}

/**
 * Service page view
 *
 * @param {string} props.id
 * @param {string} props.title
 * @param {string} props.description
 * @param {string[]} props.techStack
 * @param {any} props.heroImage
 * @param {any} props.content
 * @returns {JSX.Element}
 * @constructor
 */
export function Service(props) {
  const filter = useCallback(
    (item) => {
      if (item.id === props.id) {
        return false;
      }
      return item.techList.some(i => props.techStack.includes(i));
    },
    [props.id]
  );


  return (
    <PageLayout
      seo={{
        title: props.title
      }}
      hero={
        <Hero
          title={props.title}
          description={props.description}
          bg={props.heroImage}
        />
      }
      headerNoMenuHeightFix
    >
      <div
        className={styles.root}
      >
        <UserContent>{props.content}</UserContent>
      </div>
      <Cases
        theme="dark"
        heading="tech"
        headingTech={props.title}
        filter={filter}
        max={4}
        footerButton="see-more"
      />
      <TechStack
        list={props.techStack}
      />
      <OurWorkProcess/>
    </PageLayout>
  );
}
