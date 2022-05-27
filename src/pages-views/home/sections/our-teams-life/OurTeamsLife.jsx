import {StaticImage} from 'gatsby-plugin-image';
import React from 'react';
import {Autoplay} from "swiper";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Heading} from '../../../../components/typography/Heading';
import {Highlight} from '../../../../components/typography/Highlight';
import * as styles from './OurTeamsLife.module.css';

export function OurTeamsLife(props) {
  return (
    <div className={styles.root}>
      <Heading.H2 theme="dark" className={styles.title}>
        <Highlight theme="solid">Our team</Highlight>’s life
      </Heading.H2>
      <Swiper
        slidesPerView={'auto'}
        style={{
          alignItems: 'center'
        }}
        spaceBetween={32}
        initialSilde={2}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        breakpoints={{
          768: {
            spaceBetween: 50
          }
        }}
        modules={[Autoplay]}
        rewind
        loop
      >
        <SwiperSlide className={styles.image}>
          <StaticImage className={styles.innerImage} src="./images/01.png" alt="Photo"/>
        </SwiperSlide>
        <SwiperSlide className={styles.image}>
          <StaticImage className={styles.innerImage} src="./images/02.png" alt="Photo"/>
        </SwiperSlide>
        <SwiperSlide className={styles.image}>
          <StaticImage className={styles.innerImage} src="./images/03.png" alt="Photo"/>
        </SwiperSlide>
        <SwiperSlide className={styles.image}>
          <StaticImage className={styles.innerImage} src="./images/04.png" alt="Photo"/>
        </SwiperSlide>
        <SwiperSlide className={styles.image}>
          <StaticImage className={styles.innerImage} src="./images/05.png" alt="Photo"/>
        </SwiperSlide>
        <SwiperSlide className={styles.image}>
          <StaticImage className={styles.innerImage} src="./images/06.png" alt="Photo"/>
        </SwiperSlide>
      </Swiper>
    </div>
  )

}
