import React, {useState} from 'react';
import {ContactUs} from '../../../../components/blocks/contact-us/ContactUs';
import {Heading} from '../../../../components/typography/Heading';
import {Highlight} from '../../../../components/typography/Highlight';
import {Paragraph} from '../../../../components/typography/Paragraph';
import {PageLayout} from '../../../../layout/page/PageLayout';
import {TabContent} from '../../../../components/tabs/TabContent';
import {TabsNav} from '../../../../components/tabs/TabsNav';
import * as styles from './Serverless.module.css';

export function Serverless(props) {
  const [tab, setTab] = useState('aws');

  return (
    <div className={styles.root}>
      <PageLayout.Container>
        <div className={styles.content}>
          <Heading style={{textAlign: 'center'}}>
            Serverless and Cloud computing
            <Highlight> eva<Highlight.Blink>n</Highlight.Blink>gelis<Highlight.Blink>t</Highlight.Blink>s</Highlight>
          </Heading>
          <Paragraph size="s" style={{textAlign: 'center'}}>
            We’re experts at Serverless development and help our clients don’t think about infrastructure management. This model allows you to pay just for usage of cloud resources. No wasting money for containers or instances anymore.
          </Paragraph>
          <Paragraph size="s" style={{marginTop: 16, textAlign: 'center'}}>
            Event-driven architecture allows to keep your solution highly scalable and reliable. Focus on your business challenges with cost-effective solution. we will help you with a quick scale!
          </Paragraph>
          <TabsNav
            className={styles.tabs}
            active={tab}
            onActive={setTab}
            tabs={[
              {
                id: 'aws',
                name: 'Amazon web services (AWS)',
              },
              {
                id: 'gcp',
                name: 'Google cloud platform (GCP)',
              },
              {
                id: 'azure',
                name: 'Microsoft Azure',
              },
              {
                id: 'ibm',
                name: 'IBM Cloud',
              }
            ]}
          />
          <TabContent>
            <TabContent.Item active={tab === 'aws'}>
              <div className={styles.container}>
                <div>
                  <ul className={styles.list}>
                    <li>hybrid deployment</li>
                    <li>minimal financial losses during the launch of new projects </li>
                    <li>regional and zonal coverage</li>
                  </ul>
                </div>
                <div>
                  <ul className={styles.list}>
                    <li>analytical service with templates</li>
                    <li>multiple payment options</li>
                  </ul>
                </div>
              </div>
            </TabContent.Item>
            <TabContent.Item active={tab === 'gcp'}>
              <div className={styles.container}>
                <div>
                  <ul className={styles.list}>
                    <li>hybrid deployment</li>
                    <li>minimal financial losses during the launch of new projects </li>
                    <li>regional and zonal coverage</li>
                  </ul>
                </div>
                <div>
                  <ul className={styles.list}>
                    <li>analytical service with templates</li>
                    <li>multiple payment options</li>
                  </ul>
                </div>
              </div>
            </TabContent.Item>
            <TabContent.Item active={tab === 'azure'}>
              <div className={styles.container}>
                <div>
                  <ul className={styles.list}>
                    <li>hybrid deployment</li>
                    <li>minimal financial losses during the launch of new projects </li>
                    <li>regional and zonal coverage</li>
                  </ul>
                </div>
                <div>
                  <ul className={styles.list}>
                    <li>analytical service with templates</li>
                    <li>multiple payment options</li>
                  </ul>
                </div>
              </div>
            </TabContent.Item>
            <TabContent.Item active={tab === 'ibm'}>
              <div className={styles.container}>
                <div>
                  <ul className={styles.list}>
                    <li>hybrid deployment</li>
                    <li>minimal financial losses during the launch of new projects </li>
                    <li>regional and zonal coverage</li>
                  </ul>
                </div>
                <div>
                  <ul className={styles.list}>
                    <li>analytical service with templates</li>
                    <li>multiple payment options</li>
                  </ul>
                </div>
              </div>
            </TabContent.Item>
          </TabContent>
        </div>
        <ContactUs/>
      </PageLayout.Container>
    </div>
  );
}
