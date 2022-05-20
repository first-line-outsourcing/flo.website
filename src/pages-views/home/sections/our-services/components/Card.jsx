import {Link} from 'gatsby';
import React from 'react';
import {Heading} from '../../../../../components/typography/Heading';
import {Paragraph} from '../../../../../components/typography/Paragraph';
import * as styles from './Card.module.css';


/**
 * Card
 *
 * @param props
 * @param {string} props.preview Preview image
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
        backgroundImage: `url(${props.preview})`
      }}
      to={props.link}
    >
      <Heading.H4>{props.title}</Heading.H4>
      <Paragraph
        size="s"
        style={{
          minHeight: 75
        }}
      >{props.description}</Paragraph>
    </Link>
  );
}
