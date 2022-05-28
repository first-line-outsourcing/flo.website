import React from 'react';
import classNames from 'classnames';
import * as styles from './ImagesGrid.module.css';

/**
 * Images grid
 *
 * @param {string[]} props.images
 * @param {boolean} [props.gaps] Show gaps
 * @returns {JSX.Element}
 * @constructor
 */
export function ImagesGrid(props) {
  return (
    <ul className={classNames(styles.root, {
      [styles.gaps]: props.gaps
    })}>
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
