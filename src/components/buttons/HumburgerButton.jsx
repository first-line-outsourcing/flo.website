// Thank you https://codepen.io/designcouch/pen/ExvwPY
import React from 'react';
import classNames from 'classnames';
import * as styles from './HumburgerButton.module.css';


/**
 * Humburger button
 *
 * @param {React.ButtonHTMLAttributes} props Props
 * @param {boolean} [props.open] Set open state
 * @returns {JSX.Element}
 * @constructor
 */
export function HumburgerButton(props) {
  return (
    <button {...props} className={classNames(styles.root, props.className, {
      [styles.open]: props.open
    })}>
      <div>
        <span/>
        <span/>
        <span/>
      </div>
    </button>
  )
}
