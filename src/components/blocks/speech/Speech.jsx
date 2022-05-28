import {GatsbyImage} from 'gatsby-plugin-image';
import React from 'react';
import {Heading} from '../../typography/Heading';
import {Paragraph} from '../../typography/Paragraph';
import * as styles from './Speech.module.css';
import classNames from 'classnames';

/**
 * Speech
 *
 * @param {import('gatsby-plugin-image').IGatsbyImageData | string} props.personPhoto
 * @param {string} props.personName
 * @param {string} props.personPosition
 * @param {string} props.title
 * @param {string} props.text
 * @param {boolean} [props.gaps]
 * @returns {JSX.Element}
 * @constructor
 */
export function Speech(props) {
  return (
    <div className={classNames(styles.root, {
      [styles.gaps]: props.gaps
    })}>
      <div>
        {
          typeof props.personPhoto === 'string'
            ? <img src={props.personPhoto} alt={props.personName}  className={styles.photo}/>
            : <GatsbyImage image={props.personPhoto}  className={styles.photo}/>
        }
        <Paragraph size="s" className={styles.name}>{props.personName}</Paragraph>
        <Paragraph size="xs" className={styles.position}>{props.personPosition}</Paragraph>
      </div>
      <div>
        <Heading.H2>{props.title}</Heading.H2>
        <Paragraph>{props.text}</Paragraph>
      </div>
    </div>
  );
}
