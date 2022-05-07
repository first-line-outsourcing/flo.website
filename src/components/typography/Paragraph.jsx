import React from 'react';
import classNames from 'classnames';
import * as styles from './Paragraph.module.css';

export function Paragraph(props) {
  return (<p {...props} className={classNames(styles.root, props.className)}/>)
}
