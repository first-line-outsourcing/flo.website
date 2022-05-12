import {StaticImage} from 'gatsby-plugin-image';
import React from 'react';
import {Button} from '../../../../components/buttons/Button';
import {Heading} from '../../../../components/typography/Heading';
import {Highlight} from '../../../../components/typography/Highlight';
import {PageLayout} from '../../../../layout/page/PageLayout';
import * as styles from './Cases.module.css';
import {Card} from './components/Card';
import Img01 from './images/01.png';
import Img02 from './images/02.png';

export function Cases(props) {
  return (
    <div className={styles.root}>
      <PageLayout.Container className={styles.container}>
        <StaticImage className={styles.bg} src="./images/bg.png" alt="Background" />
        <Heading.H2 theme="black" className={styles.title}>
          Featured
          <Highlight theme="solid"> case </Highlight>
          studies
        </Heading.H2>
        <ul className={styles.row}>
          <li>
            <Card
              link="/"
              preview={Img01}
              title="Test"
              techList={['Android', 'Web', 'iOS']}
            />
          </li>
          <li>
            <Card
              link="/"
              preview={Img02}
              title="Test"
              techList={['Android', 'Web', 'iOS']}
            />
          </li>
        </ul>
        <ul className={styles.row}>
          <li>
            <Card
              link="/"
              preview={Img01}
              title="Test"
              techList={['Android', 'Web', 'iOS']}
            />
          </li>
        </ul>
        <div className={styles.footer}>
          <Button theme="accent" responsiveFull size="xl">See more</Button>
        </div>
      </PageLayout.Container>
    </div>
  );
}

