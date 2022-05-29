import {StaticImage} from 'gatsby-plugin-image';
import React from 'react';
import {Button} from '../../../components/buttons/Button';
import {Heading} from '../../../components/typography/Heading';
import {Highlight} from '../../../components/typography/Highlight';
import {Paragraph} from '../../../components/typography/Paragraph';
import {PageLayout} from '../../../layout/page/PageLayout';
import * as styles from './OurTeam.module.css';

export function OurTeam(props) {
  return (
    <div className={styles.root}>
      <PageLayout.Container>
        <Heading.H2 className={styles.title}>
          Our
          {' '}
          <Highlight>team</Highlight>
        </Heading.H2>
        <ul className={styles.list}>
          <li>
            <StaticImage
              className={styles.photo}
              src="../images/team/our_team_000.png"
              alt="Photo"
              quality={100}
              placeholder="blurred"
            />
            <Paragraph size="s">Андрей Заикин</Paragraph>
            <Paragraph size="xs">Founder, CEO</Paragraph>
          </li>
          <li>
            <StaticImage
              className={styles.photo}
              src="../images/team/our_team_001.png"
              alt="Photo"
              quality={100}
              placeholder="blurred"
            />
            <Paragraph size="s">Живаева Анастасия</Paragraph>
            <Paragraph size="xs">CTO</Paragraph>
          </li>
          <li>
            <StaticImage
              className={styles.photo}
              src="../images/team/our_team_002.png"
              alt="Photo"
              quality={100}
              placeholder="blurred"
            />
            <Paragraph size="s">Колесников Виктор</Paragraph>
            <Paragraph size="xs">Senior Software Engineer</Paragraph>
          </li>
          <li>
            <StaticImage
              className={styles.photo}
              src="../images/team/our_team_003.png"
              alt="Photo"
              quality={100}
              placeholder="blurred"
            />
            <Paragraph size="s">Дзиова Анастасия</Paragraph>
            <Paragraph size="xs">HR Manager</Paragraph>
          </li>
          <li>
            <StaticImage
              className={styles.photo}
              src="../images/team/our_team_004.png"
              alt="Photo"
              quality={100}
              placeholder="blurred"
            />
            <Paragraph size="s">Махота Евгений</Paragraph>
            <Paragraph size="xs">Middle Software Engineer</Paragraph>
          </li>
          <li>
            <StaticImage
              className={styles.photo}
              src="../images/team/our_team_005.png"
              alt="Photo"
              quality={100}
              placeholder="blurred"
            />
            <Paragraph size="s">Серегин Марк</Paragraph>
            <Paragraph size="xs">Quality Assurance Engineer</Paragraph>
          </li>
          <li>
            <StaticImage
              className={styles.photo}
              src="../images/team/our_team_006.png"
              alt="Photo"
              quality={100}
              placeholder="blurred"
            />
            <Paragraph size="s">Кирилл Чигрин</Paragraph>
            <Paragraph size="xs">Project Manager</Paragraph>
          </li>
          <li>
            <StaticImage
              className={styles.photo}
              src="../images/team/our_team_007.png"
              alt="Photo"
              quality={100}
              placeholder="blurred"
            />
            <Paragraph size="s">Антон Ревта</Paragraph>
            <Paragraph size="xs">Middle Software Engineer</Paragraph>
          </li>
          <li>
            <StaticImage
              className={styles.photo}
              src="../images/team/our_team_008.png"
              alt="Photo"
              quality={100}
              placeholder="blurred"
            />
            <Paragraph size="s">Виталий Чорба</Paragraph>
            <Paragraph size="xs">Middle Software Engineer</Paragraph>
          </li>
          <li>
            <StaticImage
              className={styles.photo}
              src="../images/team/our_team_009.png"
              alt="Photo"
              quality={100}
              placeholder="blurred"
            />
            <Paragraph size="s">Дмитрий Сайфутдинов</Paragraph>
            <Paragraph size="xs">Project Manager</Paragraph>
          </li>
          <li>
            <StaticImage
              className={styles.photo}
              src="../images/team/our_team_010.png"
              alt="Photo"
              quality={100}
              placeholder="blurred"
            />
            <Paragraph size="s">Николенко Станислав</Paragraph>
            <Paragraph size="xs">Quality Assurance Engineer</Paragraph>
          </li>
          <li>
            <StaticImage
              className={styles.photo}
              src="../images/team/our_team_011.png"
              alt="Photo"
              quality={100}
              placeholder="blurred"
            />
            <Paragraph size="s">Кирилл Хорошилов</Paragraph>
            <Paragraph size="xs">Senior Software Engineer</Paragraph>
          </li>
        </ul>
        {/*TODO: add event*/}
        <Button
          theme="outline-dark"
          full
          size="xxl"
        >Join us</Button>
      </PageLayout.Container>
    </div>
  );
}
