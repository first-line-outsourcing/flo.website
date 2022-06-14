import React from 'react';
import {TechIcon} from '../../../components/icons/tech/TechIcon';
import {Heading} from '../../../components/typography/Heading';
import {Paragraph} from '../../../components/typography/Paragraph';
import * as styles from './Card.module.css';

/**
 *
 * @param {'js'|'js-box'|'ts-box'|'angular'|'react'|'aws'|'postgresql'|'sls-framework'|'express'|'gcp'|'azure'|'ibm'|'flutter'|'cloudantdb'|'amazon-quantum-ledger-db'|'dart'|'electron'|'ios'|'web'|'android'|'terraform'} props.icon Icon name
 * @param {string} props.name Tech name
 * @param {string} props.description Tech name
 * @returns {JSX.Element}
 * @constructor
 */
export function Card(props) {
  return (
    <div className={styles.root}>
      <TechIcon name={props.icon}/>
      <Heading.H4>{props.name}</Heading.H4>
      <Paragraph>{props.description}</Paragraph>
    </div>
  );
}
