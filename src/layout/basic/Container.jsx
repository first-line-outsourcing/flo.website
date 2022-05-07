import React from 'react';
import classNames from 'classnames';
import * as styles from './all.module.css';


export function Container(props) {
  return (
    <div {...props} className={classNames(styles.container, props.className)} />
  )
}
