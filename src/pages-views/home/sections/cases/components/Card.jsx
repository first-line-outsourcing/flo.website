import {Link} from 'gatsby';
import {GatsbyImage, StaticImage} from 'gatsby-plugin-image';
import React from 'react';
import {TechIcon} from '../../../../../components/icons/tech/TechIcon';
import {Heading} from '../../../../../components/typography/Heading';
import * as styles from './Card.module.css';

const iconsMap = {
  'JavaScript': 'js-box',
  'TypeScript': 'ts-box',
  'Angular': 'angular',
  'iOS': 'ios',
  'Web': 'web',
  'Android': 'android',
};

/**
 * Case card
 *
 * @param props
 * @param {String} props.title Title
 * @param {String} props.link Link to page
 * @param {import('gatsby-plugin-image').IGatsbyImageData} props.preview Preview image
 * @param {String[]} props.techList List of technologies
 * @returns {JSX.Element}
 * @constructor
 */
export function Card(props) {
  return (
    <div className={styles.root}>
      <Link className={styles.linkable} to={props.link}>
        <div className={styles.previewContainer}>
          <GatsbyImage className={styles.preview} image={props.preview}  alt="Preview"/>
        </div>
        <Heading.H4 className={styles.title} theme="black">{props.title}</Heading.H4>
      </Link>
      <ul className={styles.techList}>
        {props.techList.map(tech => (
          <li key={tech}>
            <TechIcon
              name={iconsMap[tech]}
            />
            <span>{tech}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

