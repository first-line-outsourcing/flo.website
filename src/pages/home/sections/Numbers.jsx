import React from 'react';
import {Highlight} from '../../../components/typography/Highlight';
import {PageLayout} from '../../../layout/page/PageLayout';
import * as styles from './Numbers.module.css';

export function Numbers(props) {
  return (
    <PageLayout.Container>
      <ul className={styles.root}>
        <li>
          <span><Highlight>54</Highlight></span>
          <p>Clients reached their goals</p>
        </li>
        <li>
          <span><Highlight>83%</Highlight></span>
          <p>Net promoter score</p>
        </li>
        <li>
          <span> <Highlight>20+</Highlight></span>
          <p>High-skilled employees</p>
        </li>
        <li>
          <span><Highlight>4</Highlight></span>
          <p>Years of remote development</p>
        </li>
      </ul>
    </PageLayout.Container>
  );
}
