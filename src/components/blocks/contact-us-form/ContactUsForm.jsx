import React, {useState} from 'react';
import {ContactUsFormView} from './ContactUsFormView';

// TODO: connect send API context
export function ContactUsForm(props) {
  const [value, setValue] = useState({
    name: '',
    email: '',
    projectDescription: '',
    agreement: false
  });

  return (
    <div>
      <ContactUsFormView
        value={value}
        onChange={setValue}
        sendDisabled={false}
        onSend={() => {}}
      />
    </div>
  );
}
