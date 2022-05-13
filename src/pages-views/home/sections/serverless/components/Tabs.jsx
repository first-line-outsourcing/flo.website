import React, {useCallback, useState} from 'react';
import {Button} from '../../../../../components/buttons/Button';
import * as styles from './Tabs.module.css';

/**
 * Tabs
 *
 * @param props
 * @param {{name: string, id: string}[]} props.tabs Tabs list
 * @param {(active: string) => void} props.onActive
 * @param {String} props.active Id of active tab
 * @returns {JSX.Element}
 * @constructor
 */
export function Tabs(props) {
  const onTab = useCallback(
    (id) => () => {
      if (props.active !== id) {
        props.onActive(id);
      }
    },
    [props.onActive, props.active]
  );

  return (
    <nav className={styles.root}>
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
