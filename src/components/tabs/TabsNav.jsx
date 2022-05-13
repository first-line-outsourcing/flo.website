import classNames from 'classnames';
import React, {useCallback, useState} from 'react';
import {Button} from '../buttons/Button';
import * as styles from './TabsNav.module.css';

/**
 * Tabs
 *
 * @param props
 * @param {{name: string, id: string}[]} props.tabs Tabs list
 * @param {(active: string) => void} props.onActive
 * @param {String} props.active Id of active tab
 * @param {String} [props.className]
 * @returns {JSX.Element}
 * @constructor
 */
export function TabsNav(props) {
  const onTab = useCallback(
    (id) => () => {
      if (props.active !== id) {
        props.onActive(id);
      }
    },
    [props.onActive, props.active]
  );

  return (
    <nav className={classNames(styles.root, props.className)}>
      {
        props.tabs.map(tab => (
          <Button
            key={tab.id}
            active={props.active === tab.id}
            theme="tab-dark"
            onClick={onTab(tab.id)}
            className={styles.tab}
          >{tab.name}</Button>
        ))
      }
    </nav>
  );
}
