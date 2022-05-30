import React, {useState} from 'react';
import {Modal} from '../../../modal/Modal';
import {JointUsFormView} from './JointUsFormView';

// TODO: connect send API context
export function JoinUsForm(props) {
  const [value, setValue] = useState({
    name: '',
    email: '',
    link: '',
    agreement: false
  });
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <JointUsFormView
        value={value}
        onChange={setValue}
        sendDisabled={false}
        onSend={() => setIsOpen(!isOpen)}
      />
      <Modal.Notification
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        Notification text
      </Modal.Notification>
    </div>
  );
}
