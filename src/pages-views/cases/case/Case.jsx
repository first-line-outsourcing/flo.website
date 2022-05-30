import {GatsbyImage} from 'gatsby-plugin-image';
import React from 'react';
import {Background, Parallax} from 'react-parallax';
import {ContactUs} from '../../../components/blocks/contact-us/ContactUs';
import {Testimonials} from '../../../components/blocks/testimonials/Testimonials';
import {UserContent} from '../../../components/blocks/user-content/UserContent';
import {Heading} from '../../../components/typography/Heading';
import {PageLayout} from '../../../layout/page/PageLayout';
import * as styles from './Case.module.css';
import {Header} from './components/Header';


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
        </div>
      </PageLayout.Container>
    </Parallax>
  );
}

/**
 *
 * @param {string} props.heroTitle
 * @param {import('gatsby-plugin-image').IGatsbyImageData} props.heroBg
 * @param {string} props.techList
 * @param {any} props.social
 * @param {string} props.siteLink
 * @param {any} props.numbers
 * @param {any} props.content
 * @returns {JSX.Element}
 * @constructor
 */
export function Case(props) {
  return (
    <PageLayout
      hero={
        <Hero
          title={props.heroTitle}
          bg={props.heroBg}
        />
      }
      headerNoMenuHeightFix
    >
      <div style={{backgroundColor: '#ffffff', color: '#1b1b1f'}}>
        <Header
          techList={props.techList}
          siteLink={props.siteLink}
          social={props.social}
          numbers={props.numbers}
        />
        <UserContent>{props.content}</UserContent>
        <Testimonials className={styles.gaps} style={{padding: 0}}/>
        <PageLayout.Container className={styles.gapsPadding}>
          <ContactUs/>
        </PageLayout.Container>
      </div>
    </PageLayout>
  );
}
