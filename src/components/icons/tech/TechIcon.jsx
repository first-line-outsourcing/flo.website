import classNames from 'classnames';
import React, {useMemo} from 'react';
import * as styles from './TechIcon.module.css';
import AmazonQuantumLedgerDb from './images/amazon-quantum-ledger-db.inline.svg';
import Angular from './images/angular.inline.svg';
import Aws from './images/aws.inline.svg';
import Azure from './images/azure.inline.svg';
import CloudantDb from './images/cloudantdb.inline.svg';
import Dart from './images/dart.inline.svg';
import Electron from './images/electron.inline.svg';
import Express from './images/express.inline.svg';
import Flutter from './images/flutter.inline.svg';
import Gcp from './images/gcp.inline.svg';
import Ibm from './images/ibm.inline.svg';
import Js from './images/js.inline.svg';
import JsBox from './images/js-box.inline.svg';
import PostgreSql from './images/postgresql.inline.svg';
import _React from './images/react.inline.svg';
import SlsFramework from './images/sls-framework.inline.svg';
import TsBox from './images/ts-box.inline.svg';
import Ios from './images/ios.inline.svg';
import Web from './images/web.inline.svg';
import Android from './images/android.inline.svg';
import Terraform from './images/terraform.inline.svg';

const map = {
  'js': Js,
  'JavaScript': Js,
  'Node': Js,
  'NodeJs': Js,
  'Node.js': Js,
  'js-box': JsBox,
  'ts-box': TsBox,
  'TypeScript': TsBox,
  'angular': Angular,
  'Angular': Angular,
  'react': _React,
  'React': _React,
  'aws': Aws,
  'AWS': Aws,
  'postgresql': PostgreSql,
  'PostgreSQL': PostgreSql,
  'sls-framework': SlsFramework,
  'Serverless framework': SlsFramework,
  'Serverless': SlsFramework,
  'express': Express,
  'Express': Express,
  'gcp': Electron,
  'GCP': Electron,
  'Google Cloud Platform': Electron,
  'azure': Azure,
  'Azure': Azure,
  'Microsoft Azure': Azure,
  'ibm': Ibm,
  'IBM': Ibm,
  'flutter': Flutter,
  'Flutter': Flutter,
  'cloudantdb': CloudantDb,
  'amazon-quantum-ledger-db': AmazonQuantumLedgerDb,
  'dart': Dart,
  'Dart': Dart,
  'electron': Electron,
  'Electron': Electron,
  'ios': Ios,
  'iOS': Ios,
  'web': Web,
  'Web': Web,
  'android': Android,
  'Android': Android,
  'Terraform': Terraform,
  'terraform': Terraform,
};


/**
 * Tech iconik
 *
 * @param {String} [props.className]
 * @param {React.CSSProperties} [props.style] Style
 * @param {'js'|'JavaScript'|'Node'|'NodeJs'|'js-box'|'ts-box'|'TypeScript'|'angular'|'Angular'|'react'|'React'|'aws'|'AWS'|'postgresql'|'PostgreSQL'|'sls-framework'|'Serverless framework'|'Serverless'|'express'|'Express'|'gcp'|'GCP'|'Google Cloud Platform'|'azure'|'Azure'|'Microsoft Azure'|'ibm'|'IBM'|'flutter'|'Flutter'|'cloudantdb'|'amazon-quantum-ledger-db'|'dart'|'Dart'|'electron'|'Electron'|'ios'|'iOS'|'web'|'Web'|'android'|'Android'|'Terraform'|'terraform'} props.name Name
 * @param {'dark' | 'light} [props.theme] Theme. Default is dark.
 * @returns {JSX.Element}
 * @constructor
 */
export function TechIcon(props) {
  const Icon = useMemo(() => map[props.name], [props.name]);

  return (
    <i role="img" style={props.style} className={classNames(styles.root, {
      [styles.light]: props.theme === 'light'
    }, props.className)}>
      {
        Icon && <Icon/>
      }
    </i>
  );
}
