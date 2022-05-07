import React from 'react';
import Icon from './images/Facebook.inline.svg';
import {SocialLinkBase} from './SocialLinkBase';


/**
 * Facebook social link
 *
 * @param {string} [className]
 * @param {string} link
 * @returns {JSX.Element}
 * @constructor
 */
export function FacebookSocialLink({className, link}) {
  return (
    <SocialLinkBase className={className} link={link}>
      <Icon />
    </SocialLinkBase>
  );
}
