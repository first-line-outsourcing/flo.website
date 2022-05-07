import React from 'react';
import classNames from 'classnames';
import * as styles from './Heading.module.css';

function H1(props) {
  return <h1 {...props} className={classNames(styles.h1, props.className)} />;
}

export function Heading(props) {
  return <H1 {...props}/>
}

Heading.H1 = H1;
