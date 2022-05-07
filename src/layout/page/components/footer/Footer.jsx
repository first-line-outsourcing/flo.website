import {Link} from 'gatsby';
import React from 'react';
import {Anchor} from '../../../../components/buttons/Anchor';
import {FacebookSocialLink} from '../../../../components/buttons/social/FacebookSocialLink';
import {InSocialLink} from '../../../../components/buttons/social/InSocialLink';
import {InstagramSocialLink} from '../../../../components/buttons/social/InstagramSocialLink';
import {PageLayout} from '../../PageLayout';
import * as mobileStyles from '../header/components/MobileMenu.module.css';
import {Collapse} from './components/Collapse';
import * as styles from './Footer.module.css';
import LogoImage from '../../../../images/Logo.inline.svg';
import awardImage from './images/award.png';

export function Footer(props) {
  return (
    <PageLayout.Container>
      <div className={styles.root}>
        <div className={styles.logoContainer}>
          <LogoImage />
        </div>
        <div className={styles.navigation}>
          <Collapse className={styles.collapse} title="Contacts">
            <ul className={styles.links}>
              <li>First Line Outsorsing</li>
              <li><Anchor href="mailto:hello@flo.team">hello@flo.team</Anchor></li>
              <li><Anchor href="tel:+79996384544">+7 (999) 638-45-44</Anchor></li>
              <li>Russia, Krasnodar Oktabrskaya 141</li>
            </ul>
          </Collapse>
          <Collapse className={styles.collapse} title="Company">
            <ul className={styles.links}>
              <li><Link className="anchor" aria-current="page" to="/about">About us</Link></li>
              <li><Anchor aria-current="page" href="https://medium.com/firstlineoutsourcing">Blog</Anchor></li>
              <li><Link className="anchor" aria-current="page" to="/hiring" >Hiring</Link></li>
              <li><Link className="anchor" aria-current="page" to="/cases">Portfolio</Link></li>
            </ul>
          </Collapse>
          <Collapse className={styles.collapse} title="Development">
            <ul className={styles.links}>
              <li><Link className="anchor" aria-current="page" to="/services">Frontend development</Link></li>
              <li><Link className="anchor" aria-current="page" to="/services">Backend development</Link></li>
              <li><Link className="anchor" aria-current="page" to="/services">Mobile development</Link></li>
              <li><Link className="anchor" aria-current="page" to="/services">QA Automation</Link></li>
            </ul>
          </Collapse>
          <Collapse className={styles.collapse} title="Services">
            <ul className={styles.links}>
              <li><Link className="anchor" aria-current="page" to="/services">Amazon Web Services</Link></li>
              <li><Link className="anchor" aria-current="page" to="/services">Google Cloud Platform</Link></li>
              <li><Link className="anchor" aria-current="page" to="/services">Microsoft Azure</Link></li>
              <li><Link className="anchor" aria-current="page" to="/services">IBM Cloud</Link></li>
            </ul>
          </Collapse>
        </div>
        <div className={styles.ending}>
          <p className={styles.copyright}>
            Created by <s>Creative cult</s><br/>
            © All rights reserved. Flo team 2021
          </p>
          <div className={styles.socialLinks}>
            <InSocialLink className={styles.socialLink} link="https://google.com/" />
            <InstagramSocialLink className={styles.socialLink} link="https://google.com/" />
            <FacebookSocialLink className={styles.socialLink} link="https://google.com/" />
          </div>
          <div className={styles.award}>
            <img src={awardImage} alt="Award"/>
          </div>
        </div>
      </div>
    </PageLayout.Container>
  );
}
