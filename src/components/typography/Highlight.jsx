import React, {useMemo} from 'react';
import classNames from 'classnames';
import * as styles from './Hightlight.module.css';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Blink(props) {
  const seconds = useMemo(() => getRandomInt(1, 4), []);
  return <span className={styles.blink} style={{animationDuration: `${seconds}s`}}>{props.children}</span>;
}

export function Highlight(props) {
  return (<span {...props} className={classNames(styles.root, props.className)} />);
}

Highlight.Blink = Blink;
