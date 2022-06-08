import * as React from 'react';
import {Heading} from '../../components/typography/Heading';
import {Highlight} from '../../components/typography/Highlight';
import {Paragraph} from '../../components/typography/Paragraph';
import {PageLayout} from '../../layout/page/PageLayout';
import {Cases as CasesSection} from '../../components/blocks/cases/Cases';
import * as styles from './Cases.module.css';

function Hero() {
  return (
    <div className={styles.heroContainer}>
      <PageLayout.Container>
        <div className={styles.heroContent}>
          <Heading>
            <Highlight>Cases</Highlight>
          </Heading>
          <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. </Paragraph>
        </div>
      </PageLayout.Container>
    </div>
  );
}

export function Cases(props) {
  return (
    <PageLayout
      seo={{
        title: 'Cases'
      }}
      hero={<Hero/>}
    >
      <CasesSection
        theme="dark"
        max={6}
        footerButton="load-more"
      />
    </PageLayout>
  );
}
