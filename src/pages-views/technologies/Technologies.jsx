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
                description="A single-threaded, open-source, cross-platform runtime environment for building fast and scalable server-side and networking applications."
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
                description="A strongly typed programming language that builds on JavaScript, giving you better tooling at any scale."
              />
            </li>
            <li>
              <Card
                icon="angular"
                name="Angular | NGXS"
                description="A most potent, component-based, open-source framework for building scalable web applications written in TypeScript. "
              />
            </li>
            <li>
              <Card
                icon="react"
                name="React | MobX"
                description="The main purpose of React is to be fast, scalable, and simple. It works only on user interfaces in the application. This corresponds to the view in the MVC template."
              />
            </li>
            <li>
              <Card
                icon="sls-framework"
                name="Serverless Framework"
                description="An open source tool available for building, packaging and deploying serverless applications across multiple cloud providers and platforms like AWS, GCP, Azure, Kubernetes, etc."
              />
            </li>
            <li>
              <Card
                icon="express"
                name="Express | Sails | Nest"
                description="Node.js frameworks designed to build API's web applications cross-platform mobile apps quickly and make Node.js easy."
              />
            </li>
            <li>
              <Card
                icon="aws"
                name="Amazon Web Services"
                description="A comprehensive, evolving cloud computing platform provided by Amazon that includes a mixture of infrastructure as a service (IaaS), platform as a service (PaaS) and packaged software as a service (SaaS) offerings."
              />
            </li>
            <li>
              <Card
                icon="aws"
                name="AWS SAM/CDK"
                description="Open-source software development frameworks to define your cloud application resources using familiar programming languages for Amazon Web Services."
              />
            </li>
            <li>
              <Card
                icon="gcp"
                name="Google Cloud Platform"
                description="A public cloud vendor that offers a suite of computing services to do everything from data management to delivering web and video over the web to AI and machine learning tools."
              />
            </li>
            <li>
              <Card
                icon="azure"
                name="Microsoft Azure"
                description="A cloud computing platform and an online portal that allows you to access and manage cloud services and resources provided by Microsoft."
              />
            </li>
            <li>
              <Card
                icon="ibm"
                name="IBM Cloud"
                description="The most open and secure public cloud platform for business, a next-generation hybrid multicloud platform, advanced data and AI capabilities, and deep enterprise expertise across 20 industries."
              />
            </li>
            <li>
              <Card
                icon="postgresql"
                name="PostgreSQL | MySQL | Aurora"
                description="Most popular and powerful databases specifically used by business professionals or program developers for administering, updating, maintaining and manipulating the databases or tables that are used for business decision-making."
              />
            </li>
            <li>
              <Card
                icon="flutter"
                name="Flutter | GetIt"
                description="An open source framework by Google for building beautiful, natively compiled, multi-platform applications from a single codebase."
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
                description="Dart is a client-optimized language for developing fast apps on any platform. Its goal is to offer the most productive programming language for multi-platform development, paired with a flexible execution runtime platform for app frameworks."
              />
            </li>
            <li>
              <Card
                icon="electron"
                name="Electron"
                description="a framework for building desktop applications using JavaScript, HTML, and CSS. By embedding Chromium and Node.js into its binary, Electron allows you to maintain one JavaScript codebase and create cross-platform apps that work on Windows, macOS, and Linux."
              />
            </li>
          </ul>
        </PageLayout.Container>
      </div>
    </PageLayout>
  );
}
