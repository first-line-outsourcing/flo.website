import React from 'react';
import classNames from 'classnames';
import * as styles from './Heading.module.css';


/**
 * h1 heading
 *
 * @param {React.HTMLAttributes} props Props
 * @param {'light' | 'dark'} [props.theme] Theme. Default is light.
 * @returns {JSX.Element}
 * @constructor
 */
function H1(props) {
  return <h1 {...props} className={classNames(styles.h1, props.className, {
    [styles.light]: props.theme ? props.theme === 'light' : true,
    [styles.black]: props.theme === 'dark'
  })} />;
}

/**
 * h2 heading
 *
 * @param {React.HTMLAttributes} props Props
 * @param {'light' | 'dark'} [props.theme] Theme. Default is light.
 * @returns {JSX.Element}
 * @constructor
 */
function H2(props) {
  return <h2 {...props} className={classNames(styles.h2, props.className, {
    [styles.light]: props.theme ? props.theme === 'light' : true,
    [styles.black]: props.theme === 'dark'
  })} />;
}

/**
 * h3 heading
 *
 * @param {React.HTMLAttributes} props Props
 * @param {'light' | 'dark'} [props.theme] Theme. Default is light.
 * @returns {JSX.Element}
 * @constructor
 */
function H4(props) {
  return <h4 {...props} className={classNames(styles.h4, props.className, {
    [styles.light]: props.theme ? props.theme === 'light' : true,
    [styles.black]: props.theme === 'dark'
  })} />;
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
 * @param {'light' | 'dark'} [props.theme] Theme. Default is light.
 * @returns {JSX.Element}
 * @constructor
 */
export function Heading(props) {
  return <H1 {...props}/>
}

Heading.H1 = H1;
Heading.H2 = H2;
Heading.H4 = H4;
