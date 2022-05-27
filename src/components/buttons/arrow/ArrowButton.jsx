import classNames from 'classnames';
import React from 'react';
import Arrow from './images/arrow.inline.svg';
import * as styles from './ArrowButton.module.css';


/**
 * Arrow button
 *
 * @param {React.ButtonHTMLAttributes} props
 * @param {'highlighted'|'orange'} [props.theme] Theme
 * @param {'right' | 'left'} [props.direction] Direction. Default is right.
 * @returns {JSX.Element}
 * @constructor
 */
export function ArrowButton(props) {
  return (
    <button {...props} className={classNames(styles.root, props.className, {
      [styles.themeHighlighted]: props.theme === 'highlighted',
      [styles.orange]: props.theme === 'orange',
      [styles.left]: props.direction === 'left'
    })}>
      <Arrow />
    </button>
  );
}
