import React, {useState} from 'react';
import {Input} from './components/Input';
import {Label} from './components/Label';


export function ContactUsForm(props) {
  const [value, setValue] = useState();

  return (
    <div>
      <Label>Name</Label>
      <Input type="tel" pattern="2-[0-9]{3}-[0-9]{3}" />
      <Label>Name</Label>
      <Input.InputFile onFile={() => {}} />
      <Input.TextArea />
      <Input.Phone
        placeholder="Enter phone number"
        value={value}
        onChange={setValue}
      />
    </div>
  );
}
