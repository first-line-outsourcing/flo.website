import classNames from 'classnames';
import React, {useCallback, useRef, useState} from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import CheckSvg from './images/check.inline.svg';
import FileSvg from './images/File.inline.svg';
import * as styles from './Input.module.css';


/**
 * Input
 *
 * @param {React.InputHTMLAttributes} props
 * @returns {JSX.Element}
 * @constructor
 */
export function Input(props) {
  return (
    <input {...props} className={classNames(styles.root, props.className)}/>
  );
}

/**
 * File input
 *
 * @param {(file: File | void) => void} props.onFile
 * @param {string} props.className
 * @returns {JSX.Element}
 * @constructor
 */
function InputFile(props) {
  const ref = useRef();
  const [name, setName] = useState();
  const onInput = useCallback((event) => {
    const file = event.target.files[0];
    console.log(file);
    setName(file && file.name);
    props.onFile(file);
  }, [props.onFile, setName]);

  return (
    <label className={classNames(styles.root, styles.file, props.className)}>
      <FileSvg/>
      <span>{name || 'Attach file'}</span>
      <input ref={ref} type="file" onInput={onInput}/>
    </label>
  );
}

/**
 * Text area
 *
 * @param {(value?: string) => void} props.onChange
 * @param {string|undefined} props.value
 * @param {number} [props.maxLength]
 * @param {string} [props.className]
 * @param {string} [props.id]
 * @returns {JSX.Element}
 * @constructor
 */
function TextArea(props) {
  const [charsCount, setCharsCount] = useState(0);
  const onChange = useCallback(
    (event) => {
      const value = event.target.value;
      const length = value ? value.length : 0;
      if (length !== charsCount) {
        setCharsCount(length);
      }
      props.onChange(value);
    },
    [charsCount, setCharsCount, props.onChange]
  )

  return (
    <div className={styles.textAreaWrapper}>
      <textarea
        id={props.id}
        value={props.value}
        maxLength={props.maxLength}
        onChange={onChange}
        className={classNames(styles.root, props.className)}
      />
      {props.maxLength > 1 && <span>{charsCount} / {props.maxLength}</span>}
    </div>
  );
}

/**
 * Phone
 *
 * @param {import('react-phone-number-input').Value} props.value
 * @param {(value?: import('react-phone-number-input').Value) => void} props.onChange
 * @param {string} [props.className]
 * @param {string} [props.id]
 * @returns {JSX.Element}
 * @constructor
 */
function Phone(props) {
  return (
    <PhoneInput
      id={props.id}
      onChange={props.onChange}
      value={props.value}
      className={classNames(styles.root, props.className)}
    />
  )
}

/**
 *
 * @param {boolean} props.checked
 * @param {(checked: boolean) => void} props.onChecked
 * @param {string} [props.className]
 * @returns {JSX.Element}
 * @constructor
 */
function Checkbox(props) {
  const onChange = useCallback(
    (event) => {
      const next = event.target.checked;
      if (props.checked !== next) {
        props.onChecked(next);
      }
    },
    [props.checked, props.onChecked]
  );

  return (
    <label className={classNames(styles.checkboxRoot, props.className)}>
      <input
        type="checkbox"
        checked={props.checked}
        onChange={onChange}
      />
      <CheckSvg/>
    </label>
  )
}

Input.InputFile = InputFile;
Input.TextArea = TextArea;
Input.Phone = Phone;
Input.Checkbox = Checkbox;
