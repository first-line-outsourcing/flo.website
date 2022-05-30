import classNames from 'classnames';
import React from 'react';
import * as styles from './Label.module.css';


/**
 * Label
 *
 * @param {React.LabelHTMLAttributes} props
 * @returns {JSX.Element}
 * @constructor
 */
export function Label(props) {
  return (
    <label {...props} className={classNames(styles.root, props.className)} />
  );
}
