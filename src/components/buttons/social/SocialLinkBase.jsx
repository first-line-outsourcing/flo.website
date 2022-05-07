import classNames from 'classnames';
import React from 'react';
import * as styles from './styles.module.css';


/**
 * Base component for social link
 *
 * @param props
 * @param {string} props.link Link
 * @param {string} [props.className]
 * @param {React.ReactElement} props.children Icon
 * @returns {JSX.Element}
 * @constructor
 */
export function SocialLinkBase(props) {
  return (
    <a className={classNames(styles.root, props.className)} href={props.link}>
      {props.children}
    </a>
  );
}
