import React from 'react';
import classNames from 'classnames';
import * as styles from './Paragraph.module.css';


/**
 * Paragraph
 *
 * @param {React.HTMLAttributes} props
 * @param {'xs' | 's' | 'm'} [props.size] Size. Default os m.
 * @param {boolean} [props.gaps] Show gaps
 * @returns {JSX.Element}
 * @constructor
 */
export function Paragraph(props) {
  const pProps = {...props};
  delete pProps.gaps;
  delete pProps.size;
  return (<p {...pProps} className={classNames(styles.root, props.className, {
    [styles.size_s]: props.size === 's',
    [styles.size_xs]: props.size === 'xs',
    [styles.gaps]: props.gaps,
  })}/>)
}
