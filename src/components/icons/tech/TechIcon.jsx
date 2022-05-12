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

const map = {
  'js': Js,
  'js-box': JsBox,
  'ts-box': TsBox,
  'angular': Angular,
  'react': _React,
  'aws': Aws,
  'postgresql': PostgreSql,
  'sls-framework': SlsFramework,
  'express': Express,
  'gcp': Electron,
  'azure': Azure,
  'ibm': Ibm,
  'flutter': Flutter,
  'cloudantdb': CloudantDb,
  'amazon-quantum-ledger-db': AmazonQuantumLedgerDb,
  'dart': Dart,
  'electron': Electron,
  'ios': Ios,
  'web': Web,
  'android': Android
};

/**
 * Tech iconik
 *
 * @param {String} [props.className]
 * @param {React.CSSProperties} [props.style] Style
 * @param {'js'|'js-box'|'ts-box'|'angular'|'react'|'aws'|'postgresql'|'sls-framework'|'express'|'gcp'|'azure'|'ibm'|'flutter'|'cloudantdb'|'amazon-quantum-ledger-db'|'dart'|'electron'|'ios'|'web'|'android'} props.name Name
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
      <Icon/>
    </i>
  );
}
