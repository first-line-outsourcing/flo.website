import {StaticImage} from 'gatsby-plugin-image';
import * as React from 'react';
import {Testimonials} from '../../components/blocks/testimonials/Testimonials';
import {Button} from '../../components/buttons/Button';
import {Heading} from '../../components/typography/Heading';
import {Highlight} from '../../components/typography/Highlight';
import {Paragraph} from '../../components/typography/Paragraph';
import {PageLayout} from '../../layout/page/PageLayout';
import * as styles from './Home.module.css';
import heroCurvImage from './images/hero_curv.svg';
import {AboutUs} from './sections/about-us/AboutUs';
import {Cases} from './sections/cases/Cases';
import {Numbers} from './sections/Numbers';
import {OurServices} from './sections/our-services/OurServices';
import {Serverless} from './sections/serverless/Serverless';

function Hero() {
  return (
    <div className={styles.heroContainer}>
      <PageLayout.Container>
        <div className={styles.heroContent}>
          <div className={styles.heroTextContainer}>
            <Heading.H1>
              Move
              <Highlight> y<Highlight.Blink>o</Highlight.Blink>ur b<Highlight.Blink>u</Highlight.Blink>sine<Highlight.Blink>s</Highlight.Blink>s </Highlight>
              forward
            </Heading.H1>
            <Paragraph>Cloud web and mobile development based on serverless architecture for reaching your business goals </Paragraph>
            <div style={{height: 48}}/>
            <Button theme="accent" size="xl" responsiveFull>What we do</Button>
          </div>
          <div className={styles.heroVideoPlaceholder}>
            <div>
              <StaticImage src="./images/hero_video_placeholder.png" alt="Video placeholder"/>
              <img className={styles.heroVideoPlaceholderCurv} src={heroCurvImage} />
            </div>
          </div>
        </div>
      </PageLayout.Container>
    </div>
  );
}

export function Home(props) {
  return (
    <PageLayout
      hero={<Hero />}
      heroRootClassName={styles.heroRoot}
    >
      <Numbers />
      <AboutUs />
      <OurServices />
      <Cases />
      <Serverless />
      <Testimonials
        categories={['main']}
      />
    </PageLayout>
  );
}
