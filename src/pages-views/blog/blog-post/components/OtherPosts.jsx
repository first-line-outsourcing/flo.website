import {graphql, useStaticQuery} from 'gatsby';
import {getImage} from 'gatsby-plugin-image';
import React, {useCallback, useRef} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {ArrowButton} from '../../../../components/buttons/arrow/ArrowButton';
import {Heading} from '../../../../components/typography/Heading';
import {PageLayout} from '../../../../layout/page/PageLayout';
import * as styles from './OtherPosts.module.css';
import {Card} from '../../components/Card';

function useList(currentId, tags, limit) {
  const result = useStaticQuery(graphql`
      query {
          allMdx(filter: {fields: {source: {eq: "blog-posts"}}}) {
              edges {
                  node {
                      id
                      slug
                      frontmatter {
                          title
                          publishDate
                          tags
                          previewImage {
                              childImageSharp {
                                  gatsbyImageData
                              }
                          }
                      }
                  }
              }
          }
      }
  `);

  const nodes = result.allMdx.edges;

  const filter = n => {
    if (n.node.id === currentId) {
      return false;
    }

    const ntags = n.node.frontmatter.tags;

    if (!ntags.some(t => tags.includes(t))) {
      return false;
    }

    return true;
  };

  return nodes
    .filter(filter)
    .sort((a, b) => +a.publishDate - +b.publishDate)
    .slice(0, limit)
    .map(n => ({
      id: n.node.id,
      title: n.node.frontmatter.title,
      publishDate: new Date(n.node.frontmatter.publishDate),
      preview: getImage(n.node.frontmatter.previewImage),
      link: `/blog/${n.node.slug}`
    }))
}

/**
 *
 * @param {string} props.currentId Id of current post
 * @param {string[]} props.tags Tags to filter
 * @param {number} props.limit Limit
 * @returns {JSX.Element}
 * @constructor
 */
export function OtherPosts(props) {
  const list = useList(props.currentId, props.tags, props.limit);
  const swiperRef = useRef(null);
  const slideNext = useCallback(
    () => {
      if (swiperRef.current) {
        swiperRef.current.slideNext();
      }
    },
    [swiperRef]
  );
  const slidePrev = useCallback(
    () => {
      if (swiperRef.current) {
        swiperRef.current.slidePrev();
      }
    },
    [swiperRef]
  );

  if (list.length === 0) {
    return null;
  }

  return (
    <div className={styles.root}>
      <PageLayout.Container>
        <Heading.H4>Related posts</Heading.H4>
        <Swiper
          slidesPerView={'auto'}
          spaceBetween={16}
          breakpoints={{
            1440: {
              spaceBetween: 24,
              enabled: false,
            }
          }}
          style={{
            alignItems: 'center'
          }}
          onSwiper={(swiper) => swiperRef.current = swiper}
        >
          {
            list.map(post => (
              <SwiperSlide className={styles.item}>
                <Card
                  title={post.title}
                  publishDate={post.publishDate}
                  preview={post.preview}
                  link={post.link}
                />
              </SwiperSlide>
            ))
          }
        </Swiper>
        <div className={styles.controls}>
          <ArrowButton
            theme="orange"
            direction="left"
            onClick={slidePrev}
          />
          <ArrowButton
            theme="orange"
            direction="right"
            onClick={slideNext}
          />
        </div>
      </PageLayout.Container>
    </div>
  );
}
