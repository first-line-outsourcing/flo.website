import React from 'react';
import * as styles from './all.module.css';


export function Header(props) {
  return (
    <header className={styles.header}>
      {props.children}
    </header>
  );
}
