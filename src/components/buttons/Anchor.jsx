import classNames from 'classnames';
import React from 'react';


/**
 * Anchor
 *
 * How to use
 *
 * Import Anchor.modules.css into global CSS.
 * You can use Anchor component or .anchor CSS class.
 *
 * @param {React.AnchorHTMLAttributes} props Properties
 * @returns {JSX.Element}
 * @constructor
 */
export function Anchor(props) {
  return (<a {...props} className={classNames('anchor', props.className)}/>);
}
