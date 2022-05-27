import React from 'react';
import * as styles from './ImagesGrid.module.css';

/**
 * Images grid
 *
 * @param {string[]} props.images
 * @returns {JSX.Element}
 * @constructor
 */
export function ImagesGrid(props) {
  return (
    <ul className={styles.root}>
      {props.images.map(image => (
        <li key={image}>
          <div className={styles.frame}>
            <div className={styles.container}>
              <img src={image} alt="Image"/>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
