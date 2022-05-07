import React from 'react';
import * as styles from './all.module.css';


export function Footer(props) {
  return (
    <footer className={styles.footer}>
      {props.children}
    </footer>
  )
}
