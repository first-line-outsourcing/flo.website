import classNames from 'classnames';
import React from 'react';
import * as styles from './TabContent.module.css'

/**
 *  Tab content
 *
 *  Usage example
 *  ```
 *  <TabContent>
 *    <TabContent.Item active>
 *      Content here
 *    <TabContent.Item/>
 *    <TabContent.Item>
 *      Content here
 *    <TabContent.Item/>
 *  </TabContent>
 *  ```
 * @param props
 * @param {React.ReactNode[]} props.children Tab items
 * @returns {JSX.Element}
 * @constructor
 */
export function TabContent(props) {
  return (
    <div className={styles.root}>{props.children}</div>
  );
}

/**
 *
 * @param props
 * @param {boolean} props.active
 * @param {React.ReactNode[] | React.ReactNode} props.children Tab items
 * @returns {JSX.Element}
 * @constructor
 */
function Item(props) {
  return (
    <div className={classNames(styles.item, props.active && styles.active)}>{props.children}</div>
  );
}

TabContent.Item = Item;
