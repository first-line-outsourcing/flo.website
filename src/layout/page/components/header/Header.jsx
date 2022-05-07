import classNames from 'classnames';
import React from 'react';
import {DesktopMenu} from './components/DesktopMenu';
import {MobileMenu} from './components/mobile-menu/MobileMenu';
import * as styles from './header.module.css';

export function Header(props) {
  return (
    <div className={styles.root}>
      <DesktopMenu/>
      <MobileMenu/>
      {
        props.children && (
          <section className={classNames(styles.heroContainer, props.heroRootClassName)}>
            <DesktopMenu.HeightFix />
            <MobileMenu.HeightFix />
            {props.children}
          </section>
        )
      }
    </div>
  );
}
