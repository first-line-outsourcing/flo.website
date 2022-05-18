import React, {useCallback} from 'react';
import VendorModal from 'react-modal';
import {Button} from '../buttons/Button';
import {Heading} from '../typography/Heading';
import {Paragraph} from '../typography/Paragraph';
import * as styles from './Modal.module.css';
import CloseSvg from './images/close.inline.svg';

/**
 * Modal
 *
 * @param {boolean} props.isOpen Indicate whether window is open or not
 * @param {React.ReactElement} props.children Modal content
 * @param {() => void} [props.onClose] Triggered on close
 * @param {boolean} [props.header] Show header
 * @param {string} [props.headerTitle] Header title
 * @returns {JSX.Element}
 * @constructor
 */
export function Modal(props) {
  const onClose = useCallback(
    () => {
      if (props.onClose) {
        props.onClose();
      }
    },
    [props.onClose]
  );

  return (
    <VendorModal
      className={styles.root}
      overlayClassName={styles.overlay}
      bodyOpenClassName={styles.body}
      isOpen={props.isOpen}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick
    >
      <div className={styles.box}>
        {
          (props.header === undefined || props.header) && (
            <div className={styles.header}>
              <Heading.H4>{props.headerTitle}</Heading.H4>
              <button onClick={onClose}>
                <CloseSvg />
              </button>
            </div>
          )
        }
        <div>
          {props.children}
        </div>
      </div>
    </VendorModal>
  );
}

/**
 * Notification
 *
 * @param {boolean} props.isOpen Indicate whether window is open or not
 * @param {string} props.children Message
 * @param {() => void} props.onClose Triggered on close
 * @returns {JSX.Element}
 * @constructor
 */
function Notification(props) {
  const onClose = useCallback(
    () => {
      if (props.onClose) {
        props.onClose();
      }
    },
    [props.onClose]
  );

  return (
    <VendorModal
      className={styles.root}
      overlayClassName={styles.overlay}
      bodyOpenClassName={styles.body}
      isOpen={props.isOpen}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick
    >
      <div className={styles.notification}>
        <Paragraph style={{fontSize: 18}}>
          {props.children}
        </Paragraph>
        <Button
          theme="accent"
          size="xl"
          full
          onClick={onClose}
        >Okay</Button>
      </div>
    </VendorModal>
  )
}

Modal.Notification = Notification;
