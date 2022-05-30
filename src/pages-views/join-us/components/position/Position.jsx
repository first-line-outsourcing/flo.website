import {MDXRenderer} from 'gatsby-plugin-mdx';
import React, {useCallback, useContext, useState} from 'react';
import {context} from '../../../../components/blocks/forms/join-us-form/JoinUsFormModal';
import {Button} from '../../../../components/buttons/Button';
import {Heading} from '../../../../components/typography/Heading';
import {MDXProvider} from '@mdx-js/react';
import {Highlight} from '../../../../components/typography/Highlight';
import {Paragraph} from '../../../../components/typography/Paragraph';
import {UL} from '../../../../components/typography/UL';
import {PageLayout} from '../../../../layout/page/PageLayout';
import * as styles from './Position.module.css';
import ArrowSvg from './images/arrow.inline.svg';
import classNames from 'classnames';

const contentComponents = {
  p: props => (
    <Paragraph
      size="s"
      gaps
    >
      {props.children}
    </Paragraph>
  ),
  h1: props => (
    <Heading theme="dark">{props.children}</Heading>
  ),
  h2: props => (
    <Heading.H2 theme="dark">{props.children}</Heading.H2>
  ),
  h4: props => (
    <Heading.H4 theme="dark">{props.children}</Heading.H4>
  ),
  Highlight: props => (
    <Highlight theme="solid">{props.children}</Highlight>
  ),
  ul: props => (
    <UL size="s" gaps>{props.children}</UL>
  ),
  li: props => (
    <UL.LI>{props.children}</UL.LI>
  ),
};

/**
 * Position
 *
 * @param {string} props.title
 * @param {string} props.level
 * @param {any} props.content
 * @returns {JSX.Element}
 * @constructor
 */
export function Position(props) {
  const ctx = useContext(context);
  const [open, setOpen] = useState(false);
  const onToggle = useCallback(
    () => {
      setOpen(!open)
    },
    [open, setOpen]
  );

  return (
    <div className={classNames(styles.root, {
      [styles.open]: open
    })}>
      <button className={styles.header} onClick={onToggle}>
        <div>
          <Heading.H4>{props.title}</Heading.H4>
          <span>{props.level}</span>
        </div>
        <div>
          <ArrowSvg/>
        </div>
      </button>
      <div className={styles.content}>
        <div>
          <MDXProvider
            components={contentComponents}
          >
            <MDXRenderer>{props.content}</MDXRenderer>
          </MDXProvider>
          <div className={styles.footer}>
            <Button
              theme="accent"
              size="l"
              responsiveFull
              onClick={ctx.open}
            >Join the team</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
