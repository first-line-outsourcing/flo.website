import {Link} from 'gatsby';
import React from 'react';
import {PageLayout} from '../../../layout/page/PageLayout';
import {Heading} from '../../typography/Heading';
import {Highlight} from '../../typography/Highlight';
import {Paragraph} from '../../typography/Paragraph';
import {ContactUs} from '../contact-us/ContactUs';
import * as styles from './OurWorkProcess.module.css';


export function OurWorkProcess(props) {
  return (
    <div
      className={styles.root}
    >
      <PageLayout.Container>
        <Heading.H2 className={styles.title}>
          Our
          {' '}
          <Highlight>
            work process
          </Highlight>
        </Heading.H2>
        <Paragraph size="s" className={styles.subHeader}>We’re transparent in our work and use agile. We’ll be in touch with you and start the next step only after your approval.</Paragraph>
        <ul className={styles.list}>
          <li>
            Init
          </li>
          <li className={styles.empty}/>
          <li className={styles.empty}/>
          <li>
            Discovery
          </li>

          <li>
            Design
          </li>
          <li className={styles.empty}/>
          <li className={styles.empty}/>
          <li>
            Development
          </li>

          <li>
            Delivery
          </li>
          <li className={styles.empty}/>
          <li className={styles.empty}/>
          <li>
            Support
          </li>
        </ul>
        <Link to="/process" className={styles.link}>Read more</Link>
      </PageLayout.Container>
    </div>
  );
}
