import React from 'react';
import Icon from './images/Instagram.inline.svg';
import {SocialLinkBase} from './SocialLinkBase';

/**
 * Instagram social link
 *
 * @param {string} [className]
 * @param {string} link
 * @returns {JSX.Element}
 * @constructor
 */
export function InstagramSocialLink({className, link}) {
  return (
    <SocialLinkBase className={className} link={link}>
      <Icon />
    </SocialLinkBase>
  );
}
