import {graphql, useStaticQuery} from 'gatsby';
import React, {useCallback, useRef} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {ArrowButton} from '../../../../components/buttons/arrow/ArrowButton';
import {Heading} from '../../../../components/typography/Heading';
import {Highlight} from '../../../../components/typography/Highlight';
import {Paragraph} from '../../../../components/typography/Paragraph';
import {PageLayout} from '../../../../layout/page/PageLayout';
import {Card} from './components/Card';
import curvImage from './images/curv.svg';
import * as styles from './OurServices.module.css';


function useServicesList() {
  const result = useStaticQuery(graphql`
      query {
          allMdx(filter: {fields: {source: {eq: "services"}}}) {
              edges {
                  node {
                      id
                      slug
                      frontmatter {
                          shortDescription
                          shortTitle
                          verPreviewImage {
                              publicURL
                          }
                      }
                  }
              }
          }
      }
  `);

  const items = result.allMdx.edges;

  return items.map(n => {
    const metadata = n.node.frontmatter;
    return ({
      id: n.node.id,
      path: `/services/${n.node.slug}`,
      title: metadata.shortTitle,
      description: metadata.shortDescription,
      preview: metadata.verPreviewImage.publicURL
    });
  });
}

export function OurServices(props) {
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
  const services = useServicesList()

  return (
    <section className={styles.root}>
      <PageLayout.Container className={styles.container}>
        <img src={curvImage} className={styles.curv}/>
        <div className={styles.content}>
          <div className={styles.text}>
            <Heading.H2>
              Our{' '}
              <Highlight>
                se<Highlight.Blink>r</Highlight.Blink>vic<Highlight.Blink>e</Highlight.Blink>s
              </Highlight>
            </Heading.H2>
            <Paragraph
              style={{
                maxWidth: 396
              }}
              size="s"
            >We provide high-quality services to help your business grow. We aren’t about just closing tickets in Jira –
              we help your business to conquer new heights!</Paragraph>
          </div>
          <div className={styles.swiperMostOuterContainer}>
            <PageLayout.Container reset="right">
              <div className={styles.swiperContainer}>
                <div className={styles.swiperWidthFix}>
                  <Swiper
                    spaceBetween={24}
                    slidesPerView={Math.min(3, services.length)}
                    rewind
                    loop
                    onSwiper={(swiper) => swiperRef.current = swiper}
                  >
                    {
                      services.map(service => (
                        <SwiperSlide key={service.id}>
                          <Card
                            title={service.title}
                            description={service.description}
                            link={service.path}
                            preview={service.preview}
                          />
                        </SwiperSlide>
                      ))
                    }
                  </Swiper>
                </div>
              </div>
            </PageLayout.Container>
          </div>
        </div>
        <div className={styles.controls}>
          <ArrowButton
            direction="left"
            theme="highlighted"
            onClick={slidePrev}
          />
          <ArrowButton
            direction="right"
            theme="highlighted"
            onClick={slideNext}
          />
        </div>
      </PageLayout.Container>
    </section>
  );
}
