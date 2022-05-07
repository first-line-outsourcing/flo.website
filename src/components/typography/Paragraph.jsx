import React from 'react';
import classNames from 'classnames';
import * as styles from './Paragraph.module.css';


/**
 * Paragraph
 *
 * @param {React.HTMLAttributes} props
 * @returns {JSX.Element}
 * @constructor
 */
export function Paragraph(props) {
  return (<p {...props} className={classNames(styles.root, props.className)}/>)
}
