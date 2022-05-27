import classNames from 'classnames';
import {graphql, useStaticQuery} from 'gatsby';
import {getImage} from 'gatsby-plugin-image';
import React, {useCallback, useRef} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {PageLayout} from '../../../layout/page/PageLayout';
import {Heading} from '../../typography/Heading';
import {Highlight} from '../../typography/Highlight';
import {Card} from './components/Card';
import * as styles from './Testimonials.module.css';
import {ArrowButton} from '../../buttons/arrow/ArrowButton';
import figure0 from './images/figure0.svg';

function useList(categories) {
  const list = useStaticQuery(graphql`
      query  {
          allTestimonials {
              edges {
                  node {
                      personName
                      personDescription
                      personPhoto {
                          childImageSharp {
                              gatsbyImageData
                          }
                      }
                      text
                      image {
                          childImageSharp {
                              gatsbyImageData
                          }
                      }
                      categories
                  }
              }
          }
      }
  `);

  const mapper = item => ({
    personName: item.node.personName,
    personDescription: item.node.personDescription,
    personPhoto: getImage(item.node.personPhoto),
    text: item.node.text,
    image: getImage(item.node.image),
  });

  if (!categories) {
    return list.allTestimonials.edges.map(mapper);
  }

  return list.allTestimonials.edges
    .filter(item => item.node.categories.some(category => categories.includes(category)))
    .map(mapper);
}

/**
 *
 * @param props
 * @param {string[]} [props.categories] Categories to filter by
 * @returns {JSX.Element}
 * @constructor
 */
export function Testimonials(props) {
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
  const list = useList(props.categories);

  return (
    <div className={styles.root}>
      <PageLayout.Container style={{position: 'relative'}}>
        <Heading.H2 theme="dark" className={styles.title}>
          Client <Highlight theme="solid">testimonials</Highlight>
        </Heading.H2>
        <div>
          <div className={classNames(styles.controls, styles.hideOnDesktop)}>
            <ArrowButton
              direction="left"
              onClick={slidePrev}
            />
            <ArrowButton
              direction="right"
              onClick={slideNext}
            />
          </div>
          <Swiper
            spaceBetween={24}
            slidesPerView={1}
            rewind
            loop
            onSwiper={(swiper) => swiperRef.current = swiper}
          >
            {
              list.map(item => (
                <SwiperSlide key={item.personName}>
                  <Card
                    {...item}
                  />
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
        <div className={classNames(styles.controls, styles.hideOnDesktopLess)}>
          <ArrowButton
            direction="left"
            onClick={slidePrev}
          />
          <ArrowButton
            direction="right"
            onClick={slideNext}
          />
        </div>
      </PageLayout.Container>
      <img className={styles.figure} src={figure0} alt="Figure"/>
    </div>
  );
}
