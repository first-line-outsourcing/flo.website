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
import {Cases} from '../../components/blocks/cases/Cases';
import {Numbers} from '../../components/blocks/numbers/Numbers';
import {OurServices} from './sections/our-services/OurServices';
import {OurTeamsLife} from './sections/our-teams-life/OurTeamsLife';
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
            {/*TODO: add link or action*/}
            <Button theme="accent" size="xl" responsiveFull>What we do</Button>
          </div>
          <div className={styles.heroVideoPlaceholder}>
            <div>
              <StaticImage src="./images/hero_video_placeholder.png" alt="Video placeholder"/>
              <img className={styles.heroVideoPlaceholderCurv} src={heroCurvImage} alt="Video" />
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
      seo={{
        title: 'Home'
      }}
      hero={<Hero />}
      heroRootClassName={styles.heroRoot}
    >
      <PageLayout.Container>
        <Numbers
          theme="dark"
          list={[
            {
              key: '1',
              value: '54',
              caption: 'Clients reached their goals',
            },
            {
              key: '2',
              value: '83%',
              caption: 'Net promoter score',
            },
            {
              key: '3',
              value: '20+',
              caption: 'High-skilled employees',
            },
            {
              key: '4',
              value: '4',
              caption: 'Years of remote development',
            }
          ]}
        />
      </PageLayout.Container>
      <AboutUs />
      <OurServices />
      <Cases
        max={4}
        footerButton="see-more"
        theme="light"
        heading="featured"
      />
      <Serverless />
      <Testimonials
        categories={['main']}
      />
      <OurTeamsLife />
    </PageLayout>
  );
}
