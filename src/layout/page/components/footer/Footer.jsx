import {graphql, Link, useStaticQuery} from 'gatsby';
import {StaticImage} from 'gatsby-plugin-image';
import React, {useMemo} from 'react';
import {ContactUsForm} from '../../../../components/blocks/forms/contact-us-form/ContactUsForm';
import {JoinUsForm} from '../../../../components/blocks/forms/join-us-form/JoinUsForm';
import {SocialLinks} from '../../../../components/blocks/social-links/SocialLinks';
import {Anchor} from '../../../../components/buttons/Anchor';
import {FacebookSocialLink} from '../../../../components/buttons/social/FacebookSocialLink';
import {InSocialLink} from '../../../../components/buttons/social/InSocialLink';
import {InstagramSocialLink} from '../../../../components/buttons/social/InstagramSocialLink';
import {Heading} from '../../../../components/typography/Heading';
import {Highlight} from '../../../../components/typography/Highlight';
import {PageLayout} from '../../PageLayout';
import {Collapse} from './components/Collapse';
import * as styles from './Footer.module.css';
import LogoImage from '../../../../images/Logo.inline.svg';
import awardImage from './images/award.png';


/**
 * Footer
 *
 * @param {'contact-us'|'join-us'} [props.form] Form to show
 * @returns {JSX.Element}
 * @constructor
 */
export function Footer(props) {
  const {site: {siteMetadata}} = useStaticQuery(graphql`
      query {
          site {
              siteMetadata {
                  companyAddress
                  companyEmail
                  companyNumber
              }
          }
      }
  `);
  const tel = useMemo(() => siteMetadata.companyNumber.replace(/[^\d+]/g, ''), []);
  const form = props.form || 'contact-us';

  return (
    <div className={styles.root}>
      {
        form === 'contact-us' && (
          <div className={styles.formRoot}>
            <StaticImage
              className={styles.background}
              src="./images/contactUsBg.png"
              alt="Map"
            />
            <PageLayout.Container>
              <div className={styles.formContent}>
                <div>
                  <Heading.H2 className={styles.formHeading}>
                    Contact
                    {' '}
                    <Highlight>us</Highlight>
                  </Heading.H2>
                </div>
                <div>
                  <ContactUsForm />
                </div>
              </div>
            </PageLayout.Container>
          </div>
        )
      }
      {
        form === 'join-us' && (
          <div className={styles.formRoot}>
            <PageLayout.Container>
              <div className={styles.formContent}>
                <div>
                  <Heading.H2 className={styles.formHeading}>
                    <Highlight>Send us your resume</Highlight>
                    {' '}
                    and we will contact you
                  </Heading.H2>
                </div>
                <div>
                  <JoinUsForm />
                </div>
              </div>
            </PageLayout.Container>
          </div>
        )
      }
      <PageLayout.Container>
        <div className={styles.bottom}>
          <div className={styles.logoContainer}>
            <LogoImage />
          </div>
          <div className={styles.navigation}>
            <Collapse className={styles.collapse} title="Contacts">
              <ul className={styles.links}>
                <li>First Line Outsorsing</li>
                <li><Anchor href={`mailto:${siteMetadata.companyEmail}`}>{siteMetadata.companyEmail}</Anchor></li>
                <li><Anchor href={`tel:${tel}`}>{siteMetadata.companyNumber}</Anchor></li>
                <li>{siteMetadata.companyAddress}</li>
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
            <SocialLinks
              instagram="https://google.com"
              linkedin="https://google.com"
              facebook="https://google.com"
            />
            <a href="__LINK__" className={styles.award}>
              <img src={awardImage} alt="Award"/>
            </a>
          </div>
        </div>
      </PageLayout.Container>
    </div>
  );
}
