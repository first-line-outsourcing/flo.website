import classNames from 'classnames';
import {Link} from 'gatsby';
import React, {useContext, useLayoutEffect, useState} from 'react';
import {context} from '../../../../../components/blocks/contact-us-form/ContactUsFormModal';
import {SocialLinks} from '../../../../../components/blocks/social-links/SocialLinks';
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
import MessageSvg from './images/message.inline.svg';

export function MobileMenu() {
  const ctx = useContext(context);
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
              <li>
                <Button
                  theme="accent"
                  className={mobileStyles.actionsContactUs}
                  onClick={ctx.open}
                >
                  <span>Contact us</span>
                  <ArrowRightImage
                    style={{
                      verticalAlign: 'middle',
                      marginLeft: 16
                    }}
                  />
                  <MessageSvg />
                </Button>
              </li>
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
                <Link className={classNames('anchor', styles.link)} to="/process">Process</Link>
              </li>
              <li>
                <Link className={classNames('anchor', styles.link)} to="/solutions">Solutions</Link>
              </li>
              <li>
                <Link className={classNames('anchor', styles.link)} to="/cases">Portfolio</Link>
              </li>
              <li>
                <Link className={classNames('anchor', styles.link)} to="/blog">Blog</Link>
              </li>
              <li>
                <Link className={classNames('anchor', styles.link)} to="/about-us">About Us</Link>
              </li>
              {/*<li>*/}
              {/*  <Link className={classNames('anchor', styles.link)} to="/contacts">Contacts</Link>*/}
              {/*</li>*/}
            </ul>
          </div>
          <div className={mobileStyles.footer}>
            <Button
              theme="accent"
              size="l"
              full
              onClick={ctx.open}
            >
              Contact us
              <ArrowRightImage
                style={{
                  verticalAlign: 'middle',
                  marginLeft: 16
                }}
              />
            </Button>
            <div className={mobileStyles.socialLinks}>
              <SocialLinks
                instagram="https://google.com"
                linkedin="https://google.com"
                facebook="https://google.com"
              />
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
