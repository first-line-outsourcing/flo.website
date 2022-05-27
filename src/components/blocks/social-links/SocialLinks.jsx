import React from 'react';
import * as styles from './SocialLinks.module.css';
import {FacebookSocialLink} from '../../buttons/social/FacebookSocialLink';
import {InSocialLink} from '../../buttons/social/InSocialLink';
import {InstagramSocialLink} from '../../buttons/social/InstagramSocialLink';
import classNames from 'classnames';

/**
 * Social links
 *
 * @param {string} [props.className]
 * @param {string} [props.instagram]
 * @param {string} [props.linkedin]
 * @param {string} [props.facebook]
 * @param {boolean} [props.inline]
 * @param {boolean} [props.responsive]
 * @param {boolean} [props.fixedGaps]
 * @param {'light'|'dark'} [props.theme]
 * @returns {JSX.Element}
 * @constructor
 */
export function SocialLinks(props) {
  return (
    <div className={classNames(styles.socialLinks, {
      [styles.inline]: props.inline,
      [styles.responsive]: props.responsive,
      [styles.fixedGaps]: props.fixedGaps,
    }, props.className)}>
      {
        props.linkedin && (
          <InSocialLink className={styles.socialLink} link={props.linkedin} theme={props.theme}/>
        )
      }
      {
        props.instagram && (
          <InstagramSocialLink className={styles.socialLink} link={props.instagram} theme={props.theme}/>
        )
      }
      {
        props.facebook && (
          <FacebookSocialLink className={styles.socialLink} link={props.facebook} theme={props.theme}/>
        )
      }
    </div>
  );
}
