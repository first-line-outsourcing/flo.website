import {Link} from 'gatsby';
import React from 'react';
import {Heading} from '../../../../../components/typography/Heading';
import {Paragraph} from '../../../../../components/typography/Paragraph';
import * as styles from './Card.module.css';


/**
 * Card
 *
 * @param props
 * @param {string} props.background Background image URL
 * @param {string} props.title Title
 * @param {string} props.description Description
 * @param {string} props.link Link
 * @returns {JSX.Element}
 * @constructor
 */
export function Card(props) {
  return (
    <Link
      className={styles.root}
      style={{
        backgroundImage: `url(${props.background})`
      }}
    >
      <Heading.H4>{props.title}</Heading.H4>
      <Paragraph>{props.description}</Paragraph>
    </Link>
  );
}
