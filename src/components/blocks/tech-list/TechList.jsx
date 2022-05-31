import React from 'react';
import {TechIcon} from '../../icons/tech/TechIcon';
import * as styles from './TechList.module.css';
import classNames from 'classnames';


/**
 * Inline Tech list
 *
 * @param {('js'|'JavaScript'|'Node'|'NodeJs'|'js-box'|'ts-box'|'TypeScript'|'angular'|'Angular'|'react'|'React'|'aws'|'AWS'|'postgresql'|'PostgreSQL'|'sls-framework'|'Serverless framework'|'Serverless'|'express'|'Express'|'gcp'|'GCP'|'Google Cloud Platform'|'azure'|'Azure'|'Microsoft Azure'|'ibm'|'IBM'|'flutter'|'Flutter'|'cloudantdb'|'amazon-quantum-ledger-db'|'dart'|'Dart'|'electron'|'Electron'|'ios'|'iOS'|'web'|'Web'|'android'|'Android')[]} props.techList List of technologies
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
            name={tech}
            theme={props.theme === 'light' ? 'dark' : 'light'}
          />
          <span>{tech}</span>
        </li>
      ))}
    </ul>
  );
}
