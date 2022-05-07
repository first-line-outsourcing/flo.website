import classNames from 'classnames';
import React, {useCallback, useState} from 'react';
import * as styles from './Collapse.module.css';

/**
 * Collapse
 *
 * @param props
 * @param {string} props.title
 * @param {string} [props.className]
 * @param {React.ReactChild} props.children
 * @returns {JSX.Element}
 * @constructor
 */
export function Collapse(props) {
  const [open, setOpen] = useState(false);
  const onOpen = useCallback(
    () => {
      setOpen(!open);
    },
    [open, setOpen]
  );

  return (
    <div className={classNames(styles.root, props.className, {
      [styles.open]: open
    })}>
      <h6 onClick={onOpen}>{props.title}</h6>
      <div className={styles.content}>
        {props.children}
      </div>
    </div>
  )
}
