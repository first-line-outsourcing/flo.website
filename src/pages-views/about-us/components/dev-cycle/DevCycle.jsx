import {StaticImage} from 'gatsby-plugin-image';
import React from 'react';
import {Heading} from '../../../../components/typography/Heading';
import {Highlight} from '../../../../components/typography/Highlight';
import {Paragraph} from '../../../../components/typography/Paragraph';
import {PageLayout} from '../../../../layout/page/PageLayout';
import * as styles from './DevCycle.module.css';
import figure from './images/figure.svg';

export function DevCycle(props) {
  return (
    <div className={styles.root}>
      <PageLayout.Container>
        <div className={styles.header}>
          <div>
            <Heading.H2 theme="dark">
              <Highlight theme="solid">Full cycle</Highlight>
              {' '}
              of development
              <br/>
              services
            </Heading.H2>
            <img src={figure} alt="Figure"/>
          </div>
          <Paragraph size="s">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor.</Paragraph>
          <Paragraph size="s">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. </Paragraph>
        </div>
        <StaticImage className={styles.miniImage} src="./images/dev_cycle_mini_000.png" alt="image" quality={100} />
        <StaticImage className={styles.fullImage} src="./images/dev_cycle_full_000.png" alt="image" quality={100} />
      </PageLayout.Container>
    </div>
  );
}
