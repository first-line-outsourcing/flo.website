import React from 'react';
import ReactPlayer from 'react-player/lazy';
import {PageLayout} from '../../../layout/page/PageLayout';
import * as contentStyles from '../../../pages-views/cases/case/content.module.css';
import {ImagesGrid} from '../../images-grid/ImagesGrid';
import {ImagesSlider} from '../../images-slider/ImagesSlider';
import {Heading} from '../../typography/Heading';
import {Highlight} from '../../typography/Highlight';
import {Paragraph} from '../../typography/Paragraph';
import {UL} from '../../typography/UL';
import {Speech} from '../speech/Speech';

const contentComponents = {
  p: props => (
    <PageLayout.Container>
      <Paragraph
        style={{maxWidth: 588, marginLeft: 'auto', marginRight: 'auto'}}
        size="s"
        gaps
      >
        {props.children}
      </Paragraph>
    </PageLayout.Container>
  ),
  h1: props => (
    <PageLayout.Container>
      <Heading theme="dark">{props.children}</Heading>
    </PageLayout.Container>
  ),
  h2: props => (
    <PageLayout.Container>
      <Heading.H2 theme="dark">{props.children}</Heading.H2>
    </PageLayout.Container>
  ),
  h4: props => (
    <PageLayout.Container>
      <Heading.H4 theme="dark">{props.children}</Heading.H4>
    </PageLayout.Container>
  ),
  ImagesSlider: props => (
    <PageLayout.Container>
      <ImagesSlider {...props} gaps />
    </PageLayout.Container>
  ),
  ImagesGrid: props => (
    <PageLayout.Container>
      <ImagesGrid {...props} gaps />
    </PageLayout.Container>
  ),
  Highlight: props => (
    <Highlight theme="solid">{props.children}</Highlight>
  ),
  ul: props => (
    <PageLayout.Container>
      <UL style={{maxWidth: 588, marginLeft: 'auto', marginRight: 'auto'}} size="s" gaps>{props.children}</UL>
    </PageLayout.Container>
  ),
  li: props => (
    <PageLayout.Container>
      <UL.LI>{props.children}</UL.LI>
    </PageLayout.Container>
  ),
  Speech: props => (
    <PageLayout.Container>
      <Speech {...props} gaps />
    </PageLayout.Container>
  ),
  ExpandedImage: props => (
    <div className={contentStyles.expandedImage}>
      <img
        src={props.src}
        alt={props.alt}
      />
    </div>
  ),
  table: props => (
    <PageLayout.Container className={contentStyles.gaps}>
      <div className={contentStyles.scrollable}>
        <table className={contentStyles.table} {...props}/>
      </div>
    </PageLayout.Container>
  ),
  Video: props => (
    <PageLayout.Container className={contentStyles.gaps}>
      <div className={contentStyles.videoFrame}>
        <div className={contentStyles.videoContainer}>
          <ReactPlayer url={props.url} controls width="100%" height="100%" />
        </div>
      </div>
    </PageLayout.Container>
  )
}

export function UserContent(props) {
  return (
    <div></div>
  );
}
