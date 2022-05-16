import React, {useState} from 'react';
import {ContactUsForm} from '../components/blocks/contact-us-form/ContactUsForm';
import {ContactUsFormView} from '../components/blocks/contact-us-form/ContactUsFormView';


const list = ['js', 'js-box', 'ts-box', 'angular', 'react', 'aws', 'postgresql', 'sls-framework', 'express', 'gcp', 'azure', 'ibm', 'flutter', 'cloudantdb', 'amazon-quantum-ledger-db', 'dart', 'electron'];

export default function Test(props) {
  return (
    <ContactUsForm />
  );
}
