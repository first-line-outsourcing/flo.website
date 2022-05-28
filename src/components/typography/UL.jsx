import React from 'react';
import * as styles from './UL.module.css';
import classNames from 'classnames';


/**
 *
 * @param {React.HTMLAttributes} props
 * @param {'xs' | 's' | 'm'} [props.size] Size. Default os m.
 * @param {boolean} [props.gaps] Show gaps
 * @returns {JSX.Element}
 * @constructor
 */
export function UL(props) {
  return (
    <ul {...props} className={classNames(styles.root, {
      [styles.size_s]: props.size === 's',
      [styles.size_xs]: props.size === 'xs',
      [styles.gaps]: props.gaps,
    }, props.className)}/>
  );
}

function LI(props) {
  return <li {...props}/>;
}

UL.LI = LI;
