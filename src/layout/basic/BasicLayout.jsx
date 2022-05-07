import React from 'react';
import * as styles from './all.module.css';
import {Container} from './Container';
import {Header} from './Header';
import {Content} from './Content';
import {Footer} from './Footer';
import classNames from 'classnames';


/**
 * Basic layout for pages. Use it to build custom layouts.
 *
 * @param {{fitParentHeight?: boolean; children: React.Element}} props
 * @returns {JSX.Element}
 * @constructor
 */
export function BasicLayout(props) {
  return (
    <section className={classNames(styles.layout, props.fitParentHeight === true && styles.fitParentHeight)}>
      {props.children}
    </section>
  );
}

BasicLayout.Header = Header;
BasicLayout.Content = Content;
BasicLayout.Footer = Footer;
BasicLayout.Container = Container;
