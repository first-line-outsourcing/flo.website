import React from 'react';
import {Numbers} from '../../../../components/blocks/numbers/Numbers';
import {SocialLinks} from '../../../../components/blocks/social-links/SocialLinks';
import {TechList} from '../../../../components/blocks/tech-list/TechList';
import {Heading} from '../../../../components/typography/Heading';
import {PageLayout} from '../../../../layout/page/PageLayout';
import * as styles from './Header.module.css';

/**
 *
 * @param {string[]} props.techList
 * @param {string} props.siteLink
 * @param {any} props.social
 * @param {any} props.numbers
 * @returns {JSX.Element}
 * @constructor
 */
export function Header(props) {
  return (
    <>
      <PageLayout.Container className={styles.root}>
        <div>
          <Heading.H2>Technologies stack</Heading.H2>
          <TechList
            className={styles.techList}
            techList={props.techList}
            theme="light"
          />
        </div>
        <div>
          <a className={styles.link} href={props.siteLink}>Website</a>
          <SocialLinks
            className={styles.socialLinks}
            inline
            responsive
            fixedGaps
            theme="light"
            instagram={props.social?.instagram}
            linkedin={props.social?.linkedin}
            facebook={props.social?.facebook}
          />
        </div>
      </PageLayout.Container>
      {
        props.numbers && (
          <div className={styles.numbers}>
            <Numbers
              theme="light"
              list={props.numbers}
            />
          </div>
        )
      }
    </>
  );
}
