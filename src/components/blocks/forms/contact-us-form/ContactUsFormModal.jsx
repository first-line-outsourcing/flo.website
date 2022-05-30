import React, {useState} from 'react';
import {Modal} from '../../../modal/Modal';
import {ContactUsForm} from './ContactUsForm';

export const context = React.createContext({
  open() {},
  close() {}
});

const {Provider} = context;

function ContactUsFormModalView(props) {
  return (
    <Modal
      isOpen={props.isOpen}
      onClose={props.onClose}
      headerTitle="Contact us"
    >
      <ContactUsForm />
    </Modal>
  );
}

export function ContactUsFormModal(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Provider value={{
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
    }}>
      {props.children}
      <ContactUsFormModalView
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </Provider>
  );
}
