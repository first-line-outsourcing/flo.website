import {StaticImage} from 'gatsby-plugin-image';
import React from 'react';
import {Background, Parallax} from 'react-parallax';
import {ContactUs} from '../../components/blocks/contact-us/ContactUs';
import {Heading} from '../../components/typography/Heading';
import {Paragraph} from '../../components/typography/Paragraph';
import {PageLayout} from '../../layout/page/PageLayout';
import * as styles from './AboutUs.module.css';
import {DevCycle} from './components/dev-cycle/DevCycle';
import {Facts} from './components/facts/Facts';
import {Intro} from './components/Intro';
import {OurLife} from './components/our-life/OurLife';
import {OurTeam} from './components/OurTeam';

function Hero() {
  return (
    <Parallax strength={300}>
      <Background className={styles.heroBackground}>
        <StaticImage
          className={styles.heroImage}
          src="images/hero003.png"
          alt="Background"
          quality={100}
          placeholder="blurred"
        />
      </Background>
      <PageLayout.Container>
        <div className={styles.heroContent}>
          <Heading>Our team</Heading>
          <Paragraph size="s">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. </Paragraph>
        </div>
      </PageLayout.Container>
    </Parallax>
  );
}

export function AboutUs(props) {
  return (
    <PageLayout
      seo={{
        title: 'About Us'
      }}
      hero={<Hero/>}
      headerNoMenuHeightFix
    >
      <div
        className={styles.root}
      >
        <Intro/>
        <OurTeam/>
        <Facts/>
        <DevCycle/>
        <OurLife/>
        <div className={styles.contactUs}>
          <PageLayout.Container>
            <ContactUs/>
          </PageLayout.Container>
        </div>
      </div>
    </PageLayout>
  );
}
