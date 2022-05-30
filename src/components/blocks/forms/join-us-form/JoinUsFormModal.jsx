import React, {useState} from 'react';
import {Modal} from '../../../modal/Modal';
import {JoinUsForm} from './JoinUsForm';

export const context = React.createContext({
  open() {},
  close() {}
});

const {Provider} = context;

function JoinUsFormModalView(props) {
  return (
    <Modal
      isOpen={props.isOpen}
      onClose={props.onClose}
      headerTitle="Send us your resume and we will contact you"
    >
      <JoinUsForm />
    </Modal>
  );
}

export function JoinUsFormModal(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Provider value={{
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
    }}>
      {props.children}
      <JoinUsFormModalView
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </Provider>
  );
}
