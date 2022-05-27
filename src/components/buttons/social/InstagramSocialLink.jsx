import React from 'react';
import Icon from './images/Instagram.inline.svg';
import {SocialLinkBase} from './SocialLinkBase';

/**
 * Instagram social link
 *
 * @param {string} [props.className]
 * @param {string} props.link
 * @param {string} [props.size]
 * @param {'light'|'dark'} [props.theme]
 * @returns {JSX.Element}
 * @constructor
 */
export function InstagramSocialLink(props) {
  return (
    <SocialLinkBase className={props.className} link={props.link} size={props.size} theme={props.theme}>
      <Icon />
    </SocialLinkBase>
  );
}
