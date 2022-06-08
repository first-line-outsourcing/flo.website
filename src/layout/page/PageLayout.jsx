import React, {useMemo} from 'react';
import {API} from '../../api/api';
import {ContactUsFormModal} from '../../components/blocks/forms/contact-us-form/ContactUsFormModal';
import {JoinUsFormModal} from '../../components/blocks/forms/join-us-form/JoinUsFormModal';
import {BasicLayout} from '../basic';
import {Footer} from './components/footer/Footer';
import {Header} from './components/header/Header';
import {apiContext} from '../../api/context';
import {SEO} from './components/SEO';

const {Provider: APIProvider} = apiContext;


/**
 * Page layout
 *
 * @param props
 * @param {React.ReactElement} [props.children] Page content
 * @param {React.ReactElement} [props.hero] Hero content
 * @param {string} [props.heroRootClassName] Hero container className
 * @param {Record<string, any>>} [props.seo] SEO
 * @param {boolean} [props.headerNoMenuHeightFix]
 * @param {'contact-us'|'join-us'} [props.footerForm] Form to show
 * @returns {JSX.Element}
 * @constructor
 */
export function PageLayout(props) {
  const api = useMemo(() => new API(), []);

  return (
    <>
      <SEO
        {...props.seo}
      />
      <APIProvider value={api}>
        <JoinUsFormModal>
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
                <Footer form={props.footerForm} />
              </BasicLayout.Footer>
            </BasicLayout>
          </ContactUsFormModal>
        </JoinUsFormModal>
      </APIProvider>
    </>
  );
}

PageLayout.Container = BasicLayout.Container;
