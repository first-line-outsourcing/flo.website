import {Link} from 'gatsby';
import {GatsbyImage} from 'gatsby-plugin-image';
import React from 'react';
import {TechIcon} from '../../../icons/tech/TechIcon';
import {Heading} from '../../../typography/Heading';
import {TechList} from '../../tech-list/TechList';
import * as styles from './Card.module.css';
import classNames from 'classnames';



/**
 * Case card
 *
 * @param props
 * @param {String} props.title Title
 * @param {String} props.link Link to page
 * @param {import('gatsby-plugin-image').IGatsbyImageData} props.preview Preview image
 * @param {String[]} props.techList List of technologies
 * @param {'light'|'dark'} [props.theme]
 * @returns {JSX.Element}
 * @constructor
 */
export function Card(props) {
  return (
    <div className={classNames(styles.root, {
      [styles.dark]: props.theme === 'dark'
    })}>
      <Link className={styles.linkable} to={props.link}>
        <div className={styles.previewContainer}>
          <GatsbyImage className={styles.preview} image={props.preview}  alt="Preview"/>
        </div>
        <Heading.H4 className={styles.title} theme={props.theme === 'light' ? 'dark' : 'light'}>{props.title}</Heading.H4>
      </Link>
      <TechList
        techList={props.techList}
        theme={props.theme}
      />
    </div>
  );
}

