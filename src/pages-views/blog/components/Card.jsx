import {GatsbyImage, StaticImage} from 'gatsby-plugin-image';
import React from 'react';
import {Heading} from '../../../components/typography/Heading';
import * as styles from './Card.module.css';

/**
 *
 * @param props.preview
 * @param props.title
 * @param props.publishDate
 * @param props.link
 * @returns {JSX.Element}
 * @constructor
 */
export function Card(props) {
  return (
    <a className={styles.root} href={props.link}>
      <div>
        <GatsbyImage image={props.preview} alt="Preview"/>
      </div>
      <div>
        <span>{props.publishDate.toISOString().split('T')[0]}</span>
        <div>
          <Heading.H4>{props.title}</Heading.H4>
        </div>
      </div>
    </a>
  );
}
