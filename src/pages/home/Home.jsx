import * as React from 'react';
import {Button} from '../../components/buttons/Button';
import {Heading} from '../../components/typography/Heading';
import {Highlight} from '../../components/typography/Highlight';
import {Paragraph} from '../../components/typography/Paragraph';
import {PageLayout} from '../../layout/page/PageLayout';
import * as styles from './Home.module.css';
import videoPlaceholderImage from './images/hero_video_placeholder.png';
import {Numbers} from './sections/Numbers';

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
            <img src={videoPlaceholderImage} alt="Video placeholder"/>
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
    </PageLayout>
  );
}
