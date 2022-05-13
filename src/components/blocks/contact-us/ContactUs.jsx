import React from 'react';
import {Button} from '../../buttons/Button';
import {Heading} from '../../typography/Heading';
import {Paragraph} from '../../typography/Paragraph';
import * as styles from './ContactUs.module.css';
import img from './images/img.svg';

export function ContactUs(props) {
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <Heading.H2
          theme="light"
          style={{margin: 0}}
        >Are you ready for your business growth?</Heading.H2>
        <Paragraph
          site="s"
          style={{
            paddingTop: 16,
            paddingBottom: 32
          }}
        >Let’s move your business forward to the clouds! Tell us about your idea! We will interview you and offer the best solution for reaching the goal.</Paragraph>
        <Button
          responsiveFull
          size="xl"
        >Contact Us</Button>
      </div>
      <img className={styles.img} src={img} alt="Growth"/>
    </div>
  );
}
