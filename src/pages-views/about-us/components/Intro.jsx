import React from 'react';
import {Numbers} from '../../../components/blocks/numbers/Numbers';
import {Heading} from '../../../components/typography/Heading';
import {Highlight} from '../../../components/typography/Highlight';
import {Paragraph} from '../../../components/typography/Paragraph';
import {PageLayout} from '../../../layout/page/PageLayout';
import * as styles from './Intro.module.css';

export function Intro(props) {
  return (
    <div className={styles.root}>
      <PageLayout.Container>
        <div className={styles.content}>
          <div>
            <Heading.H2>
              About
              {' '}
              <Highlight theme="solid">us</Highlight>
            </Heading.H2>
            <Paragraph size="s" gaps>Unlike most other firms, we take business needs first, making cutting-edge tech work for the goals of your company.</Paragraph>
            <Paragraph size="s">One of our core values is design. As fans of all things simple, we create clean, in-your-face user interfaces even for the most sophisticated workflows.We strongly believe in the lean methodology, which means we'll encourage you to spend as little money as possible for the first version of your product. Instead of making assumptions and allocating huge budgets upfront, we should quickly create an MVP for you, take it to the market, collect feedback and reiterate fast!</Paragraph>
          </div>
          <div>
            <Numbers
              theme="light"
              compact
              responsiveSize
              list={[
                {
                  key: '1',
                  value: '54',
                  caption: 'Clients reached their goals'
                },
                {
                  key: '2',
                  value: '83%',
                  caption: 'Net promoter score'
                },
                {
                  key: '3',
                  value: '20+',
                  caption: 'High-skilled employees'
                },
                {
                  key: '4',
                  value: '4',
                  caption: 'Years of remote development'
                }
              ]}
            />
          </div>
        </div>
      </PageLayout.Container>
    </div>
  );
}
