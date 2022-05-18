import React from 'react';
import {ContactUsFormModal} from '../../components/blocks/contact-us-form/ContactUsFormModal';
import {BasicLayout} from '../basic';
import {Footer} from './components/footer/Footer';
import {Header} from './components/header/Header';


/**
 * Page layout
 *
 * @param props
 * @param {React.ReactElement} [props.children] Page content
 * @param {React.ReactElement} [props.hero] Hero content
 * @param {string} [props.heroRootClassName] Hero container className
 * @param {boolean} [props.headerNoMenuHeightFix]
 * @returns {JSX.Element}
 * @constructor
 */
export function PageLayout(props) {
  return (
    <ContactUsFormModal>
      <BasicLayout>
        <BasicLayout.Header>
          <Header
            heroRootClassName={props.heroRootClassName}
            noMenuHeightFix={props.headerNoMenuHeightFix}
          >
            {props.hero}
          </Header>
        </BasicLayout.Header>
        <BasicLayout.Content>
          {props.children}
        </BasicLayout.Content>
        <BasicLayout.Footer>
          <Footer />
        </BasicLayout.Footer>
      </BasicLayout>
    </ContactUsFormModal>
  );
}

PageLayout.Container = BasicLayout.Container;
