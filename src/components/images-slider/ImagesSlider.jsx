import React, {useCallback, useRef} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import classNames from 'classnames';
import {ArrowButton} from '../buttons/arrow/ArrowButton';
import * as styles from './ImagesSlider.module.css';

/**
 * Images slider
 *
 * @param {string[]} props.images
 * @param {boolean} [props.gaps] Show gaps
 * @returns {JSX.Element}
 * @constructor
 */
export function ImagesSlider(props) {
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
    <div className={classNames(styles.root, {
      [styles.gaps]: props.gaps
    })}>
      <Swiper
        spaceBetween={24}
        slidesPerView={1}
        onSwiper={(swiper) => swiperRef.current = swiper}
      >
        {
          props.images.map(item => (
            <SwiperSlide key={item}>
              <div className={styles.imageFrame}>
                <div className={styles.imageContainer}>
                  <img className={styles.image} src={item} alt="Image"/>
                </div>
              </div>
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
    </div>
  );
}
