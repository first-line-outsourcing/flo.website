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

/**
 * Highlight text
 *
 * Highlight.Blink - Make text blinking
 *
 * Hot to use
 * ```
 * <Highlight>
 *   te
 *   <Highlight.Blink>x</Highlight.Blink>
 *   t
 * </Highlight>
 * ```
 *
 * @param {React.HTMLAttributes} props Props
 * @param {'solid'} [props.theme] Theme.
 * @returns {JSX.Element}
 * @constructor
 */
export function Highlight(props) {
  return (<span {...props} className={classNames(styles.root, props.className, {
    [styles.solid]: props.theme === 'solid'
  })} />);
}

Highlight.Blink = Blink;
