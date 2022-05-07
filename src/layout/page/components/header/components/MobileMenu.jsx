import classNames from 'classnames';
import {Link} from 'gatsby';
import React, {useLayoutEffect, useState} from 'react';
import {Button} from '../../../../../components/buttons/Button';
import {HumburgerButton} from '../../../../../components/buttons/HumburgerButton';
import {FacebookSocialLink} from '../../../../../components/buttons/social/FacebookSocialLink';
import {InSocialLink} from '../../../../../components/buttons/social/InSocialLink';
import {InstagramSocialLink} from '../../../../../components/buttons/social/InstagramSocialLink';
import ArrowRightImage from '../../../../../images/arrowRight.inline.svg';
import LogoImage from '../../../../../images/Logo.inline.svg';
import {BasicLayout} from '../../../../basic/BasicLayout';
import * as styles from '../Header.module.css';
import * as mobileStyles from './MobileMenu.module.css';

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  useLayoutEffect(() => {
    if (open) {
      document.body.classList.add('disable-scroll');
    } else {
      document.body.classList.remove('disable-scroll');
    }
  }, [open])

  return (
    <section className={classNames(mobileStyles.navigation, {[mobileStyles.open]: open})}>
      <div className={mobileStyles.top}>
        <BasicLayout.Container>
          <div className={mobileStyles.topContent}>
            <div className={styles.logoContainer}>
              <Link className={styles.logoLink} to="/">
                <LogoImage/>
              </Link>
            </div>
            <ul className={mobileStyles.actions}>
              <li></li>
              <li>
                <HumburgerButton
                  open={open}
                  onClick={() => setOpen(!open)}
                />
              </li>
            </ul>
          </div>
        </BasicLayout.Container>
      </div>
      <div className={mobileStyles.back}>
        <BasicLayout.Container>
          <div className={mobileStyles.pagesLinksContainer}>
            <ul className={mobileStyles.pagesLinks}>
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
            </ul>
          </div>
          <div className={mobileStyles.footer}>
            <Button theme="accent" size="l" full>
              Contact us
              <ArrowRightImage
                style={{
                  verticalAlign: 'middle',
                  marginLeft: 16
                }}
              />
            </Button>
            <div className={mobileStyles.socialLinks}>
              <InSocialLink className={mobileStyles.socialLink} link="https://google.com/" />
              <InstagramSocialLink className={mobileStyles.socialLink} link="https://google.com/" />
              <FacebookSocialLink className={mobileStyles.socialLink} link="https://google.com/" />
            </div>
          </div>
        </BasicLayout.Container>
      </div>
    </section>
  )
}

MobileMenu.HeightFix = function HeightFix() {
  return (<div className={mobileStyles.heightFix} />)
}
