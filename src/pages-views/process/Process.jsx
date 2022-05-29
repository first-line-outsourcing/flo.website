import React from 'react';
import {StaticImage} from 'gatsby-plugin-image';
import {Background, Parallax} from 'react-parallax';
import {ContactUs} from '../../components/blocks/contact-us/ContactUs';
import {Heading} from '../../components/typography/Heading';
import {Highlight} from '../../components/typography/Highlight';
import {Paragraph} from '../../components/typography/Paragraph';
import {PageLayout} from '../../layout/page/PageLayout';
import * as styles from './Process.module.css';


function Hero() {
  return (
    <Parallax strength={300}>
      <Background className={styles.heroBackground}>
        <StaticImage
          className={styles.heroImage}
          src="./images/hero002.png"
          alt="Background"
          quality={100}
          placeholder="blurred"
        />
      </Background>
      <PageLayout.Container>
        <div className={styles.heroContent}>
          <Heading>Work process</Heading>
          <Paragraph size="s">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor.</Paragraph>
        </div>
      </PageLayout.Container>
    </Parallax>
  );
}

export function Process(props) {
  return (
    <PageLayout
      hero={<Hero/>}
      headerNoMenuHeightFix
    >
      <div
        className={styles.root}
      >
        <PageLayout.Container>
          <Heading.H2 style={{textAlign: 'center', margin: 0}}>
            Our work{' '}
            <Highlight>
              pr<Highlight.Blink>o</Highlight.Blink>ce<Highlight.Blink>s</Highlight.Blink>s
            </Highlight>
          </Heading.H2>
          <Paragraph size="s" className={styles.subHeader}>Together with you we discuss your challenges and choose the most effective way of solving them. We
            interview you to understand your business, understand the processes and offer the and concentrate on the
            result you get after our partnership.</Paragraph>
          <ul className={styles.list}>
            <li>
              <Heading.H2>Init</Heading.H2>
              <Paragraph size="s">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. </Paragraph>
              <ul>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Lorem ipsum dolor sit amet</li>
              </ul>
            </li>
            <li className={styles.empty}/>
            <li className={styles.empty}/>
            <li>
              <Heading.H2>Discovery</Heading.H2>
              <Paragraph size="s">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. </Paragraph>
              <ul>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Lorem ipsum dolor sit amet</li>
              </ul>
            </li>

            <li>
              <Heading.H2>Design</Heading.H2>
              <Paragraph size="s">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. </Paragraph>
              <ul>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Lorem ipsum dolor sit amet</li>
              </ul>
            </li>
            <li className={styles.empty}/>
            <li className={styles.empty}/>
            <li>
              <Heading.H2>Development</Heading.H2>
              <Paragraph size="s">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. </Paragraph>
              <ul>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Lorem ipsum dolor sit amet</li>
              </ul>
            </li>

            <li>
              <Heading.H2>Delivery</Heading.H2>
              <Paragraph size="s">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. </Paragraph>
              <ul>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Lorem ipsum dolor sit amet</li>
              </ul>
            </li>
            <li className={styles.empty}/>
            <li className={styles.empty}/>
            <li>
              <Heading.H2>Support</Heading.H2>
              <Paragraph size="s">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. </Paragraph>
              <ul>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Lorem ipsum dolor sit amet</li>
              </ul>
            </li>
          </ul>
          <ContactUs/>
        </PageLayout.Container>
      </div>
    </PageLayout>
  );
}
