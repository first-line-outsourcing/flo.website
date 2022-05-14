import React from 'react';
import {ContactUsForm} from '../components/blocks/contact-us-form/ContactUsForm';


const list = ['js', 'js-box', 'ts-box', 'angular', 'react', 'aws', 'postgresql', 'sls-framework', 'express', 'gcp', 'azure', 'ibm', 'flutter', 'cloudantdb', 'amazon-quantum-ledger-db', 'dart', 'electron'];

export default function Test(props) {
  return (
    <div style={{padding: 16}}>
      <ContactUsForm/>
    </div>
  );
}
