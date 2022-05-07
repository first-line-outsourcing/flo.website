import classNames from 'classnames';
import React from 'react';


/**
 * Anchor
 *
 * @param {React.AnchorHTMLAttributes} props Properties
 * @returns {JSX.Element}
 * @constructor
 */
export function Anchor(props) {
  return (<a {...props} className={classNames('anchor', props.className)}/>);
}
