import classNames from 'classnames';
import React, {useCallback, useRef, useState} from 'react';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import * as styles from './Input.module.css';
import FileSvg from './images/File.inline.svg';

/**
 * Input
 *
 * @param {React.InputHTMLAttributes} props
 * @returns {JSX.Element}
 * @constructor
 */
export function Input(props) {
  return (
    <input {...props} className={classNames(styles.root, props.className)} />
  );
}

/**
 *
 * @param props
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
      <FileSvg />
      <span>{name || 'Attach file'}</span>
      <input ref={ref} type="file" onInput={onInput} />
    </label>
  );
}

function TextArea(props) {
  return (
    <textarea {...props} className={classNames(styles.root, props.className)} />
  );
}

function Phone(props) {
  return (
    <PhoneInput {...props} className={styles.root} />
  )
}

Input.InputFile = InputFile;
Input.TextArea = TextArea;
Input.Phone = Phone;
