import React from 'react';
import classNames from 'classnames';
import * as styles from './Heading.module.css';

function H1(props) {
  return <h1 {...props} className={classNames(styles.h1, props.className)} />;
}

function H2(props) {
  return <h2 {...props} className={classNames(styles.h2, props.className)} />;
}

function H4(props) {
  return <h4 {...props} className={classNames(styles.h4, props.className)} />;
}


/**
 * Heading
 *
 * How to use
 *
 * Heading = <h1>
 * Heading.H1 = <h1>
 * Heading.H2 = <h2>
 * Heading.H4 = <h4>
 *
 * @param {React.HTMLAttributes} props Props
 * @returns {JSX.Element}
 * @constructor
 */
export function Heading(props) {
  return <H1 {...props}/>
}

Heading.H1 = H1;
Heading.H2 = H2;
Heading.H4 = H4;
