import {StaticImage} from 'gatsby-plugin-image';
import React from 'react';
import {Autoplay} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Heading} from '../../../../components/typography/Heading';
import {Highlight} from '../../../../components/typography/Highlight';
import {Paragraph} from '../../../../components/typography/Paragraph';
import {PageLayout} from '../../../../layout/page/PageLayout';
import * as styles from './OurLife.module.css';


export function OurLife(props) {
  return (
    <div className={styles.root}>
      <PageLayout.Container>
        <Heading.H2 className={styles.title} theme="dark">
          Our
          {' '}
          <Highlight theme="solid">life</Highlight>
        </Heading.H2>
        <Paragraph className={styles.subHeader} size="s">Unlike most other firms, we take business needs first, making cutting-edge tech work for the goals of your company.</Paragraph>
      </PageLayout.Container>
      <Swiper
        slidesPerView={'auto'}
        style={{
          alignItems: 'center'
        }}
        initialSilde={2}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        modules={[Autoplay]}
        rewind
        loop
      >
        <SwiperSlide className={styles.item}>
          <StaticImage src="./images/our_life_000.png" alt="Photo" quality={100}/>
          <StaticImage src="./images/our_life_001.png" alt="Photo" quality={100}/>
          <StaticImage src="./images/our_life_002.png" alt="Photo" quality={100}/>
          <StaticImage src="./images/our_life_003.png" alt="Photo" quality={100}/>
        </SwiperSlide>
        <SwiperSlide className={styles.item}>
          <StaticImage src="./images/our_life_003.png" alt="Photo" quality={100}/>
          <StaticImage src="./images/our_life_002.png" alt="Photo" quality={100}/>
          <StaticImage src="./images/our_life_001.png" alt="Photo" quality={100}/>
          <StaticImage src="./images/our_life_000.png" alt="Photo" quality={100}/>
        </SwiperSlide>
        <SwiperSlide className={styles.item}>
          <StaticImage src="./images/our_life_002.png" alt="Photo" quality={100}/>
          <StaticImage src="./images/our_life_003.png" alt="Photo" quality={100}/>
          <StaticImage src="./images/our_life_000.png" alt="Photo" quality={100}/>
          <StaticImage src="./images/our_life_001.png" alt="Photo" quality={100}/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
