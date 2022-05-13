import React, {useMemo} from 'react';
import classNames from 'classnames';
import * as styles from './Button.module.css';

/**
 * Button
 *
 * @param {React.ButtonHTMLAttributes} props Props
 * @param {'accent'|'tab-dark'} [props.theme] Theme
 * @param {boolean} [props.active]
 * @param {'l' | 'xl'} [props.size] Size
 * @param {boolean} [props.full] Fit full width of parent container
 * @param {boolean} [props.responsiveFull] Fit full width of parent container only on mobile
 * @returns {JSX.Element}
 * @constructor
 */
export function Button(props) {
  const className = useMemo(() => classNames(
    props.className,
    styles.btn,
    {
      [styles.theme_accent]: props.theme === 'accent',
      [styles.theme_tabDark]: props.theme === 'tab-dark',
    },
    {
      [styles.resetHover]: props.theme === 'tab-dark',
      [styles.resetFocus]: props.theme === 'tab-dark',
      [styles.active]: props.active,
    },
    {
      [styles.size_l]: props.size === 'l',
      [styles.size_xl]: props.size === 'xl',
    },
    {
      [styles.full]: props.full,
      [styles.responsiveFull]: props.responsiveFull,
    }
  ), [props.theme, props.active, props.size, props.full, props.responsiveFull]);

  const propsShallow = {...props};

  delete propsShallow.theme;
  delete propsShallow.size;
  delete propsShallow.full;
  delete propsShallow.responsiveFull;
  delete propsShallow.active;

  return <button {...propsShallow} className={className}/>
}
