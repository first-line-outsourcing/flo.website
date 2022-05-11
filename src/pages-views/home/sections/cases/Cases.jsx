import React from 'react';
import {Button} from '../../../../components/buttons/Button';
import {Heading} from '../../../../components/typography/Heading';
import {Highlight} from '../../../../components/typography/Highlight';
import {PageLayout} from '../../../../layout/page/PageLayout';
import * as styles from './Cases.module.css';
import {Card} from './components/Card';

export function Cases(props) {
  return (
    <div className={styles.root}>
      <PageLayout.Container>
        <Heading.H2 theme="black" className={styles.title}>
          Featured
          <Highlight theme="solid"> case </Highlight>
          studies
        </Heading.H2>
        <ul className={styles.row}>
          <li>
            <Card/>
          </li>
          <li>
            <Card/>
          </li>
        </ul>
        <ul className={styles.row}>
          <li>
            <Card/>
          </li>
        </ul>
        <div className={styles.footer}>
          <Button theme="accent" responsiveFull size="xl">See more</Button>
        </div>
      </PageLayout.Container>
    </div>
  );
}

