import React from 'react';
import Icon from './images/In.inline.svg';
import {SocialLinkBase} from './SocialLinkBase';

/**
 * In social link
 *
 * @param {string} [props.className]
 * @param {string} props.link
 * @param {string} [props.size]
 * @param {'light'|'dark'} [props.theme]
 * @returns {JSX.Element}
 * @constructor
 */
export function InSocialLink(props) {
  return (
    <SocialLinkBase className={props.className} link={props.link} size={props.size} theme={props.theme}>
      <Icon />
    </SocialLinkBase>
  );
}
