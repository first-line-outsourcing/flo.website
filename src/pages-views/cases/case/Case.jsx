import React from 'react';
import {MDXProvider} from '@mdx-js/react';
import {GatsbyImage} from 'gatsby-plugin-image';
import {MDXRenderer} from 'gatsby-plugin-mdx';
import {Background, Parallax} from 'react-parallax';
import {ContactUs} from '../../../components/blocks/contact-us/ContactUs';
import {Numbers} from '../../../components/blocks/numbers/Numbers';
import {Testimonials} from '../../../components/blocks/testimonials/Testimonials';
import {ImagesGrid} from '../../../components/images-grid/ImagesGrid';
import {ImagesSlider} from '../../../components/images-slider/ImagesSlider';
import {Heading} from '../../../components/typography/Heading';
import {Paragraph} from '../../../components/typography/Paragraph';
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

const contentComponents = {
  p: props => <Paragraph style={{maxWidth: 588, marginLeft: 'auto', marginRight: 'auto'}} size="s">{props.children}</Paragraph>,
  h1: props => <Heading theme="dark">{props.children}</Heading>,
  h2: props => <Heading.H2 theme="dark">{props.children}</Heading.H2>,
  h4: props => <Heading.H4 theme="dark">{props.children}</Heading.H4>,
  ImagesSlider,
  ImagesGrid
}

/**
 *
 * @param {string} props.heroTitle
 * @param {import('gatsby-plugin-image').IGatsbyImageData} props.heroBg
 * @param {string} props.techList
 * @param {any} props.social
 * @param {string} props.siteLink
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
      <MDXProvider
        components={contentComponents}
      >
        <div style={{backgroundColor: '#ffffff', color: '#1B1B1F'}}>
          <Header
            techList={props.techList}
            siteLink={props.siteLink}
            social={props.social}
          />
          <PageLayout.Container>
            <MDXRenderer>{props.content}</MDXRenderer>
          </PageLayout.Container>
          <Testimonials/>
          <PageLayout.Container>
            <ContactUs/>
          </PageLayout.Container>
        </div>
      </MDXProvider>
    </PageLayout>
  );
}
