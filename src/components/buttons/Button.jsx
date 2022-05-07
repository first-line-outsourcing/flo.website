import React, {useMemo} from 'react';
import classNames from 'classnames';
import * as styles from './Button.module.css';

/**
 * Button
 *
 * @param {React.ButtonHTMLAttributes} props Props
 * @param {'accent'} [props.theme] Theme
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
    props.theme && `theme_${props.theme}`,
    props.size && `size_${props.size}`,
    {
      [styles.full]: props.full,
      [styles.responsiveFull]: props.responsiveFull,
    }
  ), [props.type]);
  return <button {...props} className={className}/>
}
