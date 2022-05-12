import React from 'react';
import {TechIcon} from '../components/icons/tech/TechIcon';

const list = ['js','js-box','ts-box','angular','react','aws','postgresql','sls-framework','express','gcp','azure','ibm','flutter','cloudantdb','amazon-quantum-ledger-db','dart','electron'];

export default function TestTechIcons(props) {
  return (
    <div>
      <div
        style={{
          background: '#ffffff',
          padding: '24px 48px',
        }}
      >
        {
          list.map(name => (
            <TechIcon
              key={name}
              name={name}
              style={{
                fontSize: '48px'
              }}
            />
          ))
        }
      </div>
      <div
        style={{
          background: 'black',
          padding: '24px 48px',
        }}
      >
        {
          list.map(name => (
            <TechIcon
              key={name}
              name={name}
              theme="light"
              style={{
                fontSize: '48px'
              }}
            />
          ))
        }
      </div>
    </div>
  );
}
