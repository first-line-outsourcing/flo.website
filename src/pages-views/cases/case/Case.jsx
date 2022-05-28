import React from 'react';
import {MDXProvider} from '@mdx-js/react';
import {GatsbyImage} from 'gatsby-plugin-image';
import {MDXRenderer} from 'gatsby-plugin-mdx';
import {Background, Parallax} from 'react-parallax';
import {ContactUs} from '../../../components/blocks/contact-us/ContactUs';
import {Speech} from '../../../components/blocks/speech/Speech';
import {Testimonials} from '../../../components/blocks/testimonials/Testimonials';
import {ImagesGrid} from '../../../components/images-grid/ImagesGrid';
import {ImagesSlider} from '../../../components/images-slider/ImagesSlider';
import {Heading} from '../../../components/typography/Heading';
import {Highlight} from '../../../components/typography/Highlight';
import {Paragraph} from '../../../components/typography/Paragraph';
import {UL} from '../../../components/typography/UL';
import {PageLayout} from '../../../layout/page/PageLayout';
import * as styles from './Case.module.css';
import * as contentStyles from './content.module.css';
import {Header} from './components/Header';
import ReactPlayer from 'react-player/lazy'


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
  p: props => (
    <PageLayout.Container>
      <Paragraph
        style={{maxWidth: 588, marginLeft: 'auto', marginRight: 'auto'}}
        size="s"
        gaps
      >
        {props.children}
      </Paragraph>
    </PageLayout.Container>
  ),
  h1: props => (
    <PageLayout.Container>
      <Heading theme="dark">{props.children}</Heading>
    </PageLayout.Container>
  ),
  h2: props => (
    <PageLayout.Container>
      <Heading.H2 theme="dark">{props.children}</Heading.H2>
    </PageLayout.Container>
  ),
  h4: props => (
    <PageLayout.Container>
      <Heading.H4 theme="dark">{props.children}</Heading.H4>
    </PageLayout.Container>
  ),
  ImagesSlider: props => (
    <PageLayout.Container>
      <ImagesSlider {...props} gaps />
    </PageLayout.Container>
  ),
  ImagesGrid: props => (
    <PageLayout.Container>
      <ImagesGrid {...props} gaps />
    </PageLayout.Container>
  ),
  Highlight: props => (
    <Highlight theme="solid">{props.children}</Highlight>
  ),
  ul: props => (
    <PageLayout.Container>
      <UL style={{maxWidth: 588, marginLeft: 'auto', marginRight: 'auto'}} size="s" gaps>{props.children}</UL>
    </PageLayout.Container>
  ),
  li: props => (
    <PageLayout.Container>
      <UL.LI>{props.children}</UL.LI>
    </PageLayout.Container>
  ),
  Speech: props => (
    <PageLayout.Container>
      <Speech {...props} gaps />
    </PageLayout.Container>
  ),
  ExpandedImage: props => (
    <div className={contentStyles.expandedImage}>
      <img
        src={props.src}
        alt={props.alt}
      />
    </div>
  ),
  table: props => (
    <PageLayout.Container className={contentStyles.gaps}>
      <div className={contentStyles.scrollable}>
        <table className={contentStyles.table} {...props}/>
      </div>
    </PageLayout.Container>
  ),
  Video: props => (
    <PageLayout.Container className={contentStyles.gaps}>
      <div className={contentStyles.videoFrame}>
        <div className={contentStyles.videoContainer}>
         <ReactPlayer url={props.url} controls width="100%" height="100%" />
        </div>
      </div>
    </PageLayout.Container>
  )
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
      <MDXProvider
        components={contentComponents}
      >
        <div style={{backgroundColor: '#ffffff', color: '#1B1B1F'}}>
          <Header
            techList={props.techList}
            siteLink={props.siteLink}
            social={props.social}
            numbers={props.numbers}
          />
          <MDXRenderer>{props.content}</MDXRenderer>
          <Testimonials className={contentStyles.gaps} style={{padding: 0}}/>
          <PageLayout.Container className={contentStyles.gapsPadding}>
            <ContactUs/>
          </PageLayout.Container>
        </div>
      </MDXProvider>
    </PageLayout>
  );
}
