import React from 'react';
import {Heading} from '../../../../components/typography/Heading';
import {Highlight} from '../../../../components/typography/Highlight';
import {Paragraph} from '../../../../components/typography/Paragraph';
import {PageLayout} from '../../../../layout/page/PageLayout';
import * as styles from './Facts.module.css';
import guitarImage from './images/guitar.svg';
import boardImage from './images/board.svg';
import sportImage from './images/sport.svg';
import likeImage from './images/like.svg';
import catImage from './images/cat.svg';
import coffeeImage from './images/coffee.svg';
import gamesImage from './images/games.svg';
import mangoImage from './images/mango.svg';
import musicImage from './images/music.svg';
import programmingImage from './images/programming.svg';

export function Facts(props) {
  return (
    <div className={styles.root}>
      <PageLayout.Container>
        <Heading.H2 theme="light" className={styles.title}>Facts about us</Heading.H2>
        <ul className={styles.list}>
          <li>
            <img src={guitarImage}/>
            <Highlight>6</Highlight>
            <Paragraph>Guitar players</Paragraph>
          </li>
          <li>
            <img src={boardImage}/>
            <Highlight>5</Highlight>
            <Paragraph>Longboard riders</Paragraph>
          </li>
          <li>
            <img src={sportImage}/>
            <Highlight>10</Highlight>
            <Paragraph>Sport lovers</Paragraph>
          </li>
          <li>
            <img src={likeImage}/>
            <Highlight>26</Highlight>
            <Paragraph>Average age</Paragraph>
          </li>
          <li>
            <img src={catImage}/>
            <Highlight>11</Highlight>
            <Paragraph>Pet owners</Paragraph>
          </li>
          <li>
            <img src={coffeeImage}/>
            <Highlight>3</Highlight>
            <Paragraph>kg coffee per month</Paragraph>
          </li>
          <li>
            <img src={gamesImage}/>
            <Highlight>15</Highlight>
            <Paragraph>Board games in the office</Paragraph>
          </li>
          <li>
            <img src={mangoImage}/>
            <Highlight>8</Highlight>
            <Paragraph>Mango fans</Paragraph>
          </li>
          <li>
            <img src={musicImage}/>
            <Highlight>1</Highlight>
            <Paragraph>Husky listener</Paragraph>
          </li>
          <li>
            <img src={programmingImage}/>
            <Highlight>7</Highlight>
            <Paragraph>Programming languages</Paragraph>
          </li>
        </ul>
      </PageLayout.Container>
    </div>
  );
}
