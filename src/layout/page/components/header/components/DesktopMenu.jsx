import classNames from 'classnames';
import {Link} from 'gatsby';
import React from 'react';
import {Button} from '../../../../../components/buttons/Button';
import ArrowRightImage from '../../../../../images/arrowRight.inline.svg';
import LogoImage from '../../../../../images/Logo.inline.svg';
import {BasicLayout} from '../../../../basic/BasicLayout';
import * as styles from '../Header.module.css';
import * as desktopStyles from './DesktopMenu.module.css';


export function DesktopMenu() {
  return (
    <section className={desktopStyles.navigation}>
      <BasicLayout.Container>
        <div className={desktopStyles.navigationContent}>
          <div className={styles.logoContainer}>
            <Link className={styles.logoLink} to="/">
              <LogoImage/>
            </Link>
          </div>
          <div className={desktopStyles.pagesLinksContainer}>
            <ul className={desktopStyles.pagesLinks}>
              <li>
                <Link className={classNames('anchor', styles.link)} to="/services">Our services</Link>
              </li>
              <li>
                <Link className={classNames('anchor', styles.link)} to="/technologies">Technologies</Link>
              </li>
              <li>
                <Link className={classNames('anchor', styles.link)} to="/components">Components</Link>
              </li>
              <li>
                <Link className={classNames('anchor', styles.link)} to="/cases">Portfolio</Link>
              </li>
              <li>
                <Link className={classNames('anchor', styles.link)} to="/about">About</Link>
              </li>
              <li>
                <Link className={classNames('anchor', styles.link)} to="/contacts">Contacts</Link>
              </li>
              <li>
                <Button theme="accent">
                  Contact us
                  <ArrowRightImage
                    style={{
                      verticalAlign: 'middle',
                      marginLeft: 16
                    }}
                  />
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </BasicLayout.Container>
    </section>
  )
}

DesktopMenu.HeightFix = function HeightFix() {
  return (<div className={desktopStyles.heightFix} />)
}
