import React from 'react';
import {Heading} from '../../components/typography/Heading';
import {Paragraph} from '../../components/typography/Paragraph';
import {PageLayout} from '../../layout/page/PageLayout';
import {Card} from './components/Card';
import * as styles from './Technologies.module.css';


function Hero() {
  return (
    <div className={styles.heroContainer}>
      <PageLayout.Container>
        <div className={styles.heroContent}>
          <Heading>
            Software Development Technologies
          </Heading>
          <Paragraph>Help you create web products to reach your goals and save your resources for new launches by using serverless technologies.</Paragraph>
        </div>
      </PageLayout.Container>
    </div>
  );
}

export function Technologies(props) {
  return (
    <PageLayout
      hero={<Hero/>}
      heroRootClassName={styles.heroRoot}
    >
      <div className={styles.background}>
        <PageLayout.Container>
          <ul className={styles.list}>
            <li>
              <Card
                icon="js"
                name="Node.js"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet."
              />
            </li>
            <li>
              <Card
                icon="js-box"
                name="Java Script"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet."
              />
            </li>
            <li>
              <Card
                icon="ts-box"
                name="TypeScript"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet."
              />
            </li>
            <li>
              <Card
                icon="angular"
                name="Angular | NGXS"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet."
              />
            </li>
            <li>
              <Card
                icon="react"
                name="React | MobX"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet."
              />
            </li>
            <li>
              <Card
                icon="sls-framework"
                name="Serverless Framework"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet."
              />
            </li>
            <li>
              <Card
                icon="express"
                name="Express | Sails | Nest"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet."
              />
            </li>
            <li>
              <Card
                icon="aws"
                name="Amazon Web Services"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet."
              />
            </li>
            <li>
              <Card
                icon="gcp"
                name="Google Cloud Platform"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet."
              />
            </li>
            <li>
              <Card
                icon="azure"
                name="Microsoft Azure"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet."
              />
            </li>
            <li>
              <Card
                icon="ibm"
                name="IBM Cloud"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet."
              />
            </li>
            <li>
              <Card
                icon="postgresql"
                name="PostgreSQL | MySQL | Aurora"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet."
              />
            </li>
            <li>
              <Card
                icon="flutter"
                name="Flutter | GetIt"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet."
              />
            </li>
            <li>
              <Card
                icon="cloudantdb"
                name="CloudantDB | SQLite"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet."
              />
            </li>
            <li>
              <Card
                icon="amazon-quantum-ledger-db"
                name="Amazon Quantum Ledger DB"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet."
              />
            </li>
            <li>
              <Card
                icon="dart"
                name="Dart"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet."
              />
            </li>
            <li>
              <Card
                icon="electron"
                name="Electron"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet."
              />
            </li>
          </ul>
        </PageLayout.Container>
      </div>
    </PageLayout>
  );
}
