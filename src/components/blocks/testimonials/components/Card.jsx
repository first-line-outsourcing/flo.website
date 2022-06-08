import {GatsbyImage} from 'gatsby-plugin-image';
import React from 'react';
import {Paragraph} from '../../../typography/Paragraph';
import * as styles from './Card.module.css';
import figure from './images/figure.svg';

/**
 * @param props
 * @param {string} props.personName
 * @param {string} props.personDescription
 * @param {import('gatsby-plugin-image').IGatsbyImageData} props.personPhoto
 * @param {string} props.text
 * @param {import('gatsby-plugin-image').IGatsbyImageData} props.image
 * @returns {JSX.Element}
 * @constructor
 */
export function Card(props) {
  return (
    <div className={styles.root}>
      <div>
        <Paragraph className={styles.text}>{props.text}</Paragraph>
        <div className={styles.person}>
          <GatsbyImage className={styles.personPhoto} image={props.personPhoto} alt={props.personName}/>
          <div className={styles.personInfo}>
            <Paragraph size="s">{props.personName}</Paragraph>
            <Paragraph size="xs">{props.personDescription}</Paragraph>
          </div>
        </div>
      </div>
      <div>
        {
          props.image && (
            <>
              <GatsbyImage className={styles.image} image={props.image} alt="Image"/>
              <img className={styles.figure} src={figure} alt="Figure"/>
            </>
          )
        }
        {
          !props.image && (
            <div className={styles.noImage}/>
          )
        }
      </div>
    </div>
  );
}
