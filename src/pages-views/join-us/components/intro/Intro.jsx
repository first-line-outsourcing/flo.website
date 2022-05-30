import {StaticImage} from 'gatsby-plugin-image';
import React, {useCallback, useRef} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {ArrowButton} from '../../../../components/buttons/arrow/ArrowButton';
import {Heading} from '../../../../components/typography/Heading';
import {Highlight} from '../../../../components/typography/Highlight';
import {Paragraph} from '../../../../components/typography/Paragraph';
import {PageLayout} from '../../../../layout/page/PageLayout';
import * as styles from './Intro.module.css';

export function Intro(props) {
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

  return (
    <div className={styles.root}>
      <PageLayout.Container>
        <div className={styles.header}>
          <div>
            <Heading.H2 theme="dark">
              <Highlight theme="solid">Full cycle</Highlight>
              {' '}
              of development
              <br/>
              services
            </Heading.H2>
          </div>
          <Paragraph size="s">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor.</Paragraph>
        </div>
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
        <Swiper
          slidesPerView={'auto'}
          spaceBetween={16}
          breakpoints={{
            768: {
              spaceBetween: 24
            }
          }}
          style={{
            alignItems: 'center'
          }}
          onSwiper={(swiper) => swiperRef.current = swiper}
        >
          <SwiperSlide className={styles.item}>
            <StaticImage src="./images/join_us_intro_001.png" alt="Photo" quality={100}/>
          </SwiperSlide>
          <SwiperSlide className={styles.item}>
            <StaticImage src="./images/join_us_intro_001.png" alt="Photo" quality={100}/>
          </SwiperSlide>
          <SwiperSlide className={styles.item}>
            <StaticImage src="./images/join_us_intro_001.png" alt="Photo" quality={100}/>
          </SwiperSlide>
        </Swiper>
        <div className={styles.mood}>
          <div>
            <Heading.H2 theme="dark">
              <Highlight theme="solid">Coffee, cookies</Highlight>
              {' '}
              and working mood
            </Heading.H2>
            <ul>
              <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, expedita.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, expedita.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, expedita.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, expedita.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, expedita.</li>
            </ul>
          </div>
          <div>
            <StaticImage src="./images/join_us_mood_000.png" alt="Photo" quality={100}/>
          </div>
        </div>
      </PageLayout.Container>
    </div>
  );
}
