import React, {useCallback, useMemo, useRef, useState} from 'react';
import {Parallax} from 'react-parallax';
import {ArrowButton} from '../../components/buttons/arrow/ArrowButton';
import {Button} from '../../components/buttons/Button';
import {Heading} from '../../components/typography/Heading';
import {Paragraph} from '../../components/typography/Paragraph';
import {PageLayout} from '../../layout/page/PageLayout';
import classNames from 'classnames';
import * as styles from './Blog.module.css';
import {Card} from './components/Card';


function Hero() {
  return (
    <Parallax strength={300}>
      <PageLayout.Container>
        <div className={styles.heroContent}>
          <Heading>Blog</Heading>
          <Paragraph size="s">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.
            Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar
            tempor.</Paragraph>
        </div>
      </PageLayout.Container>
    </Parallax>
  );
}

const PER_PAGE = 8;
const scrollToTop = (ref) => {
  if (ref.current) {
    const rect = ref.current.getBoundingClientRect();
    if (rect.top < 0) {
      window.scrollBy(0, rect.top + -20);
    }
  }
};

export function Blog(props) {
  const containerRef = useRef();
  const [showedPages, setShowedPages] = useState(1);
  const showedPosts = useMemo(() => {
    if (typeof showedPages === 'number') {
      return props.posts.slice((showedPages - 1) * PER_PAGE, showedPages * PER_PAGE);
    }
    return props.posts.slice((showedPages[0] - 1) * PER_PAGE, showedPages[1] * PER_PAGE);
  }, [showedPages, props.posts]);
  const totalPages = useMemo(() => Math.ceil(props.posts.length / PER_PAGE), [props.posts]);
  const currentPage = useMemo(() => Array.isArray(showedPages) ? showedPages[1] : showedPages, [showedPages]);
  const pagination = useMemo(() => {
    if (totalPages < 6) {
      return new Array(totalPages).fill(0).map((_, index) => index + 1);
    }

    let start = 1;
    let end = 4;

    while(!(currentPage >= start && currentPage <= end)) {
      start += 4;
      end += 4;
    }

    if (end > totalPages) {
      end = totalPages;
    }

    const isEnd = end === totalPages;

    if (!isEnd && currentPage !== start) {
      if (currentPage === end) {
        start++;
        end++;
      }
    }

    const cursorAtBeginning = currentPage === start;

    if (isEnd && cursorAtBeginning) {
      start -= 2;
    }

    return new Array(6).fill(0).map((_, index) => {
      if (isEnd && !cursorAtBeginning) {
        if (index === 1) {
          return -1;
        } else if (index === 0) {
          return 1;
        }

        return index - 2 + start;
      }

      if (index === 4) {
        return -1;
      } else if (index === 5) {
        return totalPages;
      }

      return index + start;
    });
  }, [totalPages, currentPage]);
  const onPage = useCallback(
    (page) => () => {
      setShowedPages(page);
      scrollToTop(containerRef);
    },
    [showedPages, setShowedPages, containerRef]
  );
  const onLoadMore = useCallback(
    () => {
      if (typeof showedPages === 'number') {
        setShowedPages([showedPages, showedPages + 1]);
      } else {
        setShowedPages([showedPages[0], showedPages[1] + 1]);
      }
    },
    [showedPages, setShowedPages]
  );
  const onNext = useCallback(
    () => {
      if (currentPage === totalPages) {
        return;
      }
      setShowedPages(currentPage + 1);
    },
    [currentPage, totalPages, setShowedPages]
  );

  const onPrev = useCallback(
    () => {
      if (currentPage === 1) {
        return;
      }
      setShowedPages(currentPage - 1);
    },
    [currentPage, setShowedPages]
  );


  return (
    <PageLayout
      seo={{
        title: 'Blog'
      }}
      hero={<Hero/>}
      headerNoMenuHeightFix
    >
      <div
        className={styles.root}
        ref={containerRef}
      >
        <PageLayout.Container>
          <ul className={styles.list}>
            {
              showedPosts.map(post => (
                <li key={post.id}>
                  <Card
                    title={post.title}
                    publishDate={post.publishDate}
                    preview={post.preview}
                    link={post.link}
                  />
                </li>
              ))
            }
          </ul>
          <div className={styles.paginationContainer}>
            <div>
              <ArrowButton
                theme="orange"
                direction="left"
                onClick={onPrev}
              />
              {
                pagination.map(number => {
                  if (number === -1) {
                    return (
                      <span className={styles.paginationDots}>...</span>
                    );
                  }

                  return (
                    <button
                      key={number}
                      onClick={onPage(number)}
                      className={classNames(styles.paginationNumber, {
                        [styles.active]: currentPage === number
                      })}
                    >{number}</button>
                  );
                })
              }
              <ArrowButton
                theme="orange"
                direction="right"
                onClick={onNext}
              />
            </div>
            {
              totalPages > 1 && currentPage !== totalPages && (
                <Button
                  theme="accent"
                  size="xl"
                  responsiveFull
                  className={styles.loadMore}
                  onClick={onLoadMore}
                >
                  Load more
                </Button>
              )
            }
          </div>
        </PageLayout.Container>
      </div>
    </PageLayout>
  );
}
