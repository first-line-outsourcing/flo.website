import React from 'react';
import {TechIcon} from '../../icons/tech/TechIcon';
import * as styles from './TechList.module.css';
import classNames from 'classnames';

const iconsMap = {
  'JavaScript': 'js-box',
  'TypeScript': 'ts-box',
  'Angular': 'angular',
  'iOS': 'ios',
  'Web': 'web',
  'Android': 'android',
};

/**
 *
 * @param {string[]} props.techList List of technologies
 * @param {string} [props.className]
 * @param {'light'|'dark'} [props.theme]
 * @returns {JSX.Element}
 * @constructor
 */
export function TechList(props) {
  return (
    <ul className={classNames(styles.techList, props.className)}>
      {props.techList.map(tech => (
        <li key={tech}>
          <TechIcon
            name={iconsMap[tech]}
            theme={props.theme === 'light' ? 'dark' : 'light'}
          />
          <span>{tech}</span>
        </li>
      ))}
    </ul>
  );
}
