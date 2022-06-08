import React from 'react';
import {Highlight} from '../../typography/Highlight';
import {PageLayout} from '../../../layout/page/PageLayout';
import * as styles from './Numbers.module.css';
import classNames from 'classnames';


/**
 *
 * @param {{value: string, caption: string, key: string}[]} props.list List
 * @param {'dark'|'light'} [props.theme] Theme
 * @params {boolean} [props.compact]
 * @params {boolean} [props.responsiveSize]
 * @returns {JSX.Element}
 * @constructor
 */
export function Numbers(props) {
  return (
    <div className={classNames(styles.root, {
      [styles.light]: props.theme === 'light',
      [styles.compact]: props.compact,
      [styles.responsiveSize]: props.responsiveSize
    })}>
      <ul>
        {
          props.list.map(item => (
            <li key={item.key}>
              <span><Highlight theme={props.theme === 'light' ? 'solid' : undefined}>{item.value}</Highlight></span>
              <p>{item.caption}</p>
            </li>
          ))
        }
      </ul>
    </div>
  );
}
