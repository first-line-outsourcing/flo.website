import React from 'react';
import {PageLayout} from '../../../layout/page/PageLayout';
import {TechIcon} from '../../icons/tech/TechIcon';
import {Heading} from '../../typography/Heading';
import {Highlight} from '../../typography/Highlight';
import * as styles from './TechStack.module.css';

/**
 *
 * @param {('js'|'JavaScript'|'Node'|'NodeJs'|'js-box'|'ts-box'|'TypeScript'|'angular'|'Angular'|'react'|'React'|'aws'|'AWS'|'postgresql'|'PostgreSQL'|'sls-framework'|'Serverless framework'|'Serverless'|'express'|'Express'|'gcp'|'GCP'|'Google Cloud Platform'|'azure'|'Azure'|'Microsoft Azure'|'ibm'|'IBM'|'flutter'|'Flutter'|'cloudantdb'|'amazon-quantum-ledger-db'|'dart'|'Dart'|'electron'|'Electron'|'ios'|'iOS'|'web'|'Web'|'android'|'Android'|'Terraform'|'terraform')[]} props.list List of tech stacks
 * @returns {JSX.Element}
 * @constructor
 */
export function TechStack(props) {
  return (
    <div className={styles.root}>
      <PageLayout.Container>
        <Heading.H2 className={styles.title}>
          <Highlight theme="solid">Technologies</Highlight>
          {' '}
          stack
        </Heading.H2>
        <div className={styles.listContainer}>
          <ul className={styles.list}>
            {
              props.list.map(i => (
                <li>
                <span>
                  <TechIcon
                    name={i}
                    theme="dark"
                  />
                </span>
                  <span>{i}</span>
                </li>
              ))
            }
          </ul>
        </div>
      </PageLayout.Container>
    </div>
  );
}
