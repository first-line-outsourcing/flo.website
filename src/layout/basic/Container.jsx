import React from 'react';
import classNames from 'classnames';
import * as styles from './all.module.css';


/**
 * Container
 *
 * @param {React.HTMLAttributes} props
 * @param {boolean | 'left' | 'right'} [props.reset] Reset paddings of parent container. true - both sides / left - left side / right - right side.
 * @returns {JSX.Element}
 * @constructor
 */
export function Container(props) {
  return (
    <div
      {...props}
      className={classNames(styles.container, props.className, {
        [styles.containerResetLeft]: props.reset === true || props.reset === 'left',
        [styles.containerResetRight]: props.reset === true || props.reset === 'right',
      })}
    />
  )
}
