import React from 'react';
import Icon from './images/In.inline.svg';
import {SocialLinkBase} from './SocialLinkBase';

/**
 * In social link
 *
 * @param {string} [className]
 * @param {string} link
 * @returns {JSX.Element}
 * @constructor
 */
export function InSocialLink({className, link}) {
  return (
    <SocialLinkBase className={className} link={link}>
      <Icon />
    </SocialLinkBase>
  );
}
