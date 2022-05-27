import React from 'react';
import Icon from './images/Facebook.inline.svg';
import {SocialLinkBase} from './SocialLinkBase';


/**
 * Facebook social link
 *
 * @param {string} [props.className]
 * @param {string} props.link
 * @param {string} [props.size]
 * @param {'light'|'dark'} [props.theme]
 * @returns {JSX.Element}
 * @constructor
 */
export function FacebookSocialLink(props) {
  return (
    <SocialLinkBase className={props.className} link={props.link} size={props.size} theme={props.theme}>
      <Icon />
    </SocialLinkBase>
  );
}
