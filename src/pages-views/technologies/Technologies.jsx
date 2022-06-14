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
      seo={{
        title: 'Technologies'
      }}
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
                description="Single-threaded, open-source, cross-platform runtime to build fast and scalable server-side applications"
              />
            </li>
            <li>
              <Card
                icon="js-box"
                name="Java Script"
                description="Dynamic programming language that's used for web and game development, in web applications, and lots more"
              />
            </li>
            <li>
              <Card
                icon="ts-box"
                name="TypeScript"
                description="Strongly typed programming language that builds on JavaScript, giving you better tooling at any scale"
              />
            </li>
            <li>
              <Card
                icon="angular"
                name="Angular | NGXS"
                description="Most potent, component-based, open-source framework to build scalable web apps written in TypeScript"
              />
            </li>
            <li>
              <Card
                icon="react"
                name="React | MobX"
                description="React is a fast, scalable and simple way to build modern and powerful web and mobile applications"
              />
            </li>
            <li>
              <Card
                icon="sls-framework"
                name="Serverless Framework"
                description="Open-source tool to build, package and deploy serverless applications to AWS, GCP, Azure, Kubernetes, etc"
              />
            </li>
            <li>
              <Card
                icon="express"
                name="Express | Sails | Nest"
                description="Node.js frameworks designed to build API's web applications cross-platform mobile apps quickly and easy"
              />
            </li>
            <li>
              <Card
                icon="aws"
                name="Amazon Web Services"
                description="Cloud computing platform provided by Amazon that includes a mixture of IaaS, PaaS and SaaS offerings"
              />
            </li>
            <li>
              <Card
                icon="aws"
                name="AWS SAM/CDK"
                description="Open-source frameworks to define cloud application resources using familiar programming languages for AWS"
              />
            </li>
            <li>
              <Card
                icon="terraform"
                name="Terraform"
                description="Infrastructure as code tool that lets build, change, and version cloud resources safely and efficiently"
              />
            </li>
            <li>
              <Card
                icon="gcp"
                name="Google Cloud Platform"
                description="Cloud vendor that offers computing services for SaaS, delivering web and video, AI and machine learning tools"
              />
            </li>
            <li>
              <Card
                icon="azure"
                name="Microsoft Azure"
                description="Сloud computing platform that allows you to access and manage cloud services and resources by Microsoft"
              />
            </li>
            <li>
              <Card
                icon="ibm"
                name="IBM Cloud"
                description="Open and secure public cloud platform, a next-gen hybrid multicloud platform, advanced data and AI capabilities"
              />
            </li>
            <li>
              <Card
                icon="postgresql"
                name="PostgreSQL | MySQL | Aurora"
                description="Powerful databases used explicitly by developers for building the highly reliable and effective solutions"
              />
            </li>
            <li>
              <Card
                icon="amazon-quantum-ledger-db"
                name="NoSQL databases"
                description="Database management approach generally means that it is non-relational, distributed, flexible, and scalable"
              />
            </li>
            <li>
              <Card
                icon="flutter"
                name="Flutter | GetIt"
                description="Open-source framework to build beautiful, natively compiled, multi-platform apps from a single codebase"
              />
            </li>
            <li>
              <Card
                icon="dart"
                name="Dart"
                description="Dart is a client-optimized language developed by Google for developing fast apps on any platform "
              />
            </li>
            <li>
              <Card
                icon="electron"
                name="Electron"
                description="Framework for building desktop apps using JavaScript, HTML, and CSS with embedded Chromium and Node.js"
              />
            </li>
          </ul>
        </PageLayout.Container>
      </div>
    </PageLayout>
  );
}
