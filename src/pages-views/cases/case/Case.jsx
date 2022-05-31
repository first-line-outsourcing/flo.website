import {GatsbyImage} from 'gatsby-plugin-image';
import React, {useCallback} from 'react';
import {Background, Parallax} from 'react-parallax';
import {Cases} from '../../../components/blocks/cases/Cases';
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

const filter = (item) => {

}

/**
 *  Case page view
 *
 * @param {string} props.id Case ID
 * @param {string} props.heroTitle Hero title
 * @param {import('gatsby-plugin-image').IGatsbyImageData} props.heroBg Hero background image
 * @param {string} props.techList Tech list
 * @param {any} props.social Social links
 * @param {string} props.siteLink Site link
 * @param {any} props.numbers
 * @param {any} props.content
 * @returns {JSX.Element}
 * @constructor
 */
export function Case(props) {
  const filter = useCallback(
    (item) => {
      if (item.id === props.id) {
        return false;
      }
      return item.techList.some(i => props.techList.includes(i));
    },
    [props.id]
  );

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
        <Testimonials
          className={styles.gaps}
          style={{padding: 0}}
        />
        <PageLayout.Container className={styles.gapsPadding}>
          <ContactUs/>
        </PageLayout.Container>
      </div>
      <Cases
        theme="dark"
        heading="other"
        filter={filter}
        max={2}
        footerButton="see-more"
      />
    </PageLayout>
  );
}
