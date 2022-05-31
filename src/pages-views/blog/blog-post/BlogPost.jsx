import React from 'react';
import {Parallax} from 'react-parallax';
import {UserContent} from '../../../components/blocks/user-content/UserContent';
import {Heading} from '../../../components/typography/Heading';
import {Paragraph} from '../../../components/typography/Paragraph';
import {PageLayout} from '../../../layout/page/PageLayout';
import * as styles from './BlogPost.module.css';
import {OtherPosts} from './components/OtherPosts';


function Hero(props) {
  return (
    <Parallax strength={300}>
      <PageLayout.Container>
        <div className={styles.heroContent}>
          <Heading>{props.title}</Heading>
          <Paragraph size="s">{props.publishDate.toISOString().split('T')[0]}</Paragraph>
        </div>
      </PageLayout.Container>
    </Parallax>
  );
}

export function BlogPost(props) {
  return (
    <PageLayout
      hero={
        <Hero
          title={props.title}
          publishDate={props.publishDate}
        />
      }
      headerNoMenuHeightFix
    >
      <div
        className={styles.root}
      >
        <UserContent>{props.content}</UserContent>
      </div>
      <OtherPosts
        currentId={props.id}
        tags={props.tags}
        limit={3}
      />
    </PageLayout>
  );
}
