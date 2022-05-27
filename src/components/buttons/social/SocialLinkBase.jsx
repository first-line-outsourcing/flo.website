import classNames from 'classnames';
import React from 'react';
import * as styles from './styles.module.css';


/**
 * Base component for social link
 *
 * @param props
 * @param {string} props.link Link
 * @param {string} [props.className]
 * @param {string} [props.size]
 * @param {'light'|'dark'} [props.theme]
 * @param {React.ReactElement} props.children Icon
 * @returns {JSX.Element}
 * @constructor
 */
export function SocialLinkBase(props) {
  return (
    <a className={classNames(styles.root, props.className, {
      [styles.light]: props.theme === 'light'
    })} href={props.link} style={{fontSize: props.size}}>
      {props.children}
    </a>
  );
}
