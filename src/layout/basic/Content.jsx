import React from 'react';
import * as styles from './all.module.css';


export function Content(props) {
    return (
        <main className={styles.content}>
            {props.children}
        </main>
    )
}
