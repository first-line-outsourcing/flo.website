import {graphql, useStaticQuery} from 'gatsby';
import React, {useMemo} from 'react';
import {Anchor} from '../../components/buttons/Anchor';
import {Heading} from '../../components/typography/Heading';
import {Highlight} from '../../components/typography/Highlight';
import {Paragraph} from '../../components/typography/Paragraph';
import {PageLayout} from '../../layout/page/PageLayout';
import * as styles from './Contacts.module.css';
import PointSvg from './images/point.inline.svg';
import PhoneSvg from './images/phone.inline.svg';
import MessageSvg from './images/message.inline.svg';


export function Contacts(props) {
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

  return (
    <PageLayout>
      <div className={styles.background}>
        <PageLayout.Container className={styles.root}>
          <Heading style={{margin: 0}}>
            <Highlight>Contacts</Highlight>
          </Heading>
          <div className={styles.content}>
            <ul className={styles.contacts}>
              <li>
                <PointSvg/>
                <div>
                  <Paragraph size="s">Address</Paragraph>
                  <Paragraph size="s">{siteMetadata.companyAddress}</Paragraph>
                </div>
              </li>
              <li>
                <PhoneSvg/>
                <div>
                  <Paragraph size="s">Call Us</Paragraph>
                  <Paragraph size="s"><Anchor href={`tel:${tel}`}>{siteMetadata.companyNumber}</Anchor></Paragraph>
                </div>
              </li>
              <li>
                <MessageSvg/>
                <div>
                  <Paragraph size="s">For Support Enquiries</Paragraph>
                  <Paragraph size="s"><Anchor href={`mailto:${siteMetadata.companyEmail}`}>{siteMetadata.companyEmail}</Anchor></Paragraph>
                </div>
              </li>
            </ul>
            <div className={styles.map}>
              <iframe className='map' title="map"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2819.608031310213!2d38.96634605195044!3d45.03288187899546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40f04fa3cbf68c8d%3A0x79321c0649b7567e!2sOktyabr&#39;skaya%20Ulitsa%2C%20141%2C%20Krasnodar%2C%20Krasnodarskiy%20kray%2C%20350000!5e0!3m2!1sen!2sru!4v1644235175636!5m2!1sen!2sru"/>
            </div>
          </div>
        </PageLayout.Container>
      </div>
    </PageLayout>
  );
}
