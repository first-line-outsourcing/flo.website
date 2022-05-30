import React, {useState} from 'react';
import {Modal} from '../../../modal/Modal';
import {ContactUsFormView} from './ContactUsFormView';

// TODO: connect send API context
export function ContactUsForm(props) {
  const [value, setValue] = useState({
    name: '',
    email: '',
    projectDescription: '',
    agreement: false
  });
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <ContactUsFormView
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
