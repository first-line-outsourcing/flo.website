import {StaticImage} from 'gatsby-plugin-image';
import React, {useMemo} from 'react';
import {Background, Parallax} from 'react-parallax';
import {Heading} from '../../components/typography/Heading';
import {Paragraph} from '../../components/typography/Paragraph';
import {PageLayout} from '../../layout/page/PageLayout';
import {Intro} from './components/intro/Intro';
import {Position} from './components/position/Position';
import * as styles from './JoinUs.module.css';


function Hero() {
  return (
    <Parallax strength={300}>
      <Background className={styles.heroBackground}>
        <StaticImage
          className={styles.heroImage}
          src="images/joinUsHero.png"
          alt="Background"
          quality={100}
          placeholder="blurred"
        />
      </Background>
      <PageLayout.Container>
        <div className={styles.heroContent}>
          <Heading>Work with us</Heading>
          <Paragraph size="s">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.
            Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar
            tempor.</Paragraph>
        </div>
      </PageLayout.Container>
    </Parallax>
  );
}

/**
 * Join us
 *
 * @typedef {{salary: string, name: string, level: string, category: string, workTime: string}} Meta
 * @param {{body: any, meta: Meta}[]} props.positions
 * @returns {JSX.Element}
 * @constructor
 */
export function JoinUs(props) {
  const byCategory = useMemo(() => {
    const result = props.positions.reduce((out, item) => {
      if (!out[item.category]) {
        out[item.category] = {
          category: item.meta.category,
          items: [item]
        };
        return out;
      }

      out[item.category].items.push(item);
      return out;
    }, {});
    return Object.values(result);
  }, [props.positions]);

  return (
    <PageLayout
      hero={<Hero/>}
      headerNoMenuHeightFix
      footerForm="join-us"
    >
      <div
        className={styles.root}
      >
        <Intro/>
        <PageLayout.Container>
          {
            byCategory.map(item => (
              <div key={item.category} className={styles.block}>
                <Heading.H4 theme="dark">{item.category}</Heading.H4>
                {
                  item.items.map(position => (
                    <Position
                      key={position.meta.name}
                      title={position.meta.name}
                      level={position.meta.level}
                      content={position.body}
                    />
                  ))
                }
              </div>
            ))
          }
        </PageLayout.Container>
      </div>
    </PageLayout>
  );
}
