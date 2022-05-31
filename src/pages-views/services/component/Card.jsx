import {GatsbyImage} from 'gatsby-plugin-image';
import React from 'react';
import {Heading} from '../../../components/typography/Heading';
import {Paragraph} from '../../../components/typography/Paragraph';
import * as styles from './Card.module.css';
import ArrowSvg from './images/arrow.inline.svg';

/**
 * Card
 *
 * @param props
 * @param {import('gatsby-plugin-image').IGatsbyImageData} props.preview Preview image
 * @param {string} props.title Title
 * @param {string} props.description Description
 * @param {string} props.link Link
 * @returns {JSX.Element}
 * @constructor
 */
export function Card(props) {
  return (
    <a
      className={styles.root}
      href={props.link}
    >
      <Heading.H4 className={styles.title}>{props.title}</Heading.H4>
      <div>
        <Paragraph className={styles.description}>{props.description}</Paragraph>
        <ArrowSvg
          className={styles.arrow}
        />
      </div>
      <div>
        <GatsbyImage
          image={props.preview}
          alt="Preview"
        />
      </div>
    </a>
  );
}
