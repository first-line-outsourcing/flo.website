import React from 'react';
import {Heading} from '../../../../components/typography/Heading';
import {Paragraph} from '../../../../components/typography/Paragraph';
import {PageLayout} from '../../../../layout/page/PageLayout';
import * as styles from './AboutUs.module.css';


export function AboutUs(props) {
  return (
    <section className={styles.root}>
      <PageLayout.Container>
        <div className={styles.content}>
          <Heading.H2>About us</Heading.H2>
          <div className={styles.facts}>
            <div>
              <Paragraph>We&#39;ve already helped our clients from media, broadcasting, entertainment, stock market clients,
                hiring, legal services. Maybe it&#39;s your turn!</Paragraph>
              <Paragraph>Love to work with/Already helped funded startups, ambitious small and medium-sized companies.</Paragraph>
            </div>
            <div>
              <Paragraph>We do not just design solutions but solve business problems for your business development.</Paragraph>
              <Paragraph>Develop web and mobile apps – from idea to launch!</Paragraph>
            </div>
            <div>
              <Paragraph>We use modern, flexible frameworks for your convenient cooperation with us.</Paragraph>
              <Paragraph>Help to expand the business by using cloud solutions.</Paragraph>
            </div>
          </div>
        </div>
      </PageLayout.Container>
    </section>
  );
}

