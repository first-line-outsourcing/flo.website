import "./styles.scss"
import node from "../../images/technologiesStack/node.jpg";
import javaScript from "../../images/technologiesStack/javaScript.jpg";
import typeScript from "../../images/technologiesStack/typeScript.jpg";
import angularNGXS from "../../images/technologiesStack/angularNGXS.jpg";
import react from "../../images/technologiesStack/react.jpg";
import serverlessFramework from "../../images/technologiesStack/serverlessFramework.jpg";
import express from "../../images/technologiesStack/express.jpg";
import aws from "../../images/technologiesStack/aws.jpg";
import gcp from "../../images/technologiesStack/gcp.jpg";
import microsoftAzure from "../../images/technologiesStack/microsoftAzure.jpg";
import ibm from "../../images/technologiesStack/ibm.jpg";
import postgreSQL from "../../images/technologiesStack/postgreSQL.jpg";
import flutter from "../../images/technologiesStack/flutter.jpg";
import cloudantDB from "../../images/technologiesStack/cloudantDB.jpg";
import amazonQuantumLedgerDB from "../../images/technologiesStack/amazonQuantumLedgerDB.jpg";
import dart from "../../images/technologiesStack/dart.jpg";
import electron from "../../images/technologiesStack/electron.jpg";

export default function TechnologyItems({technologies}) {
  const allTechnologies = {
    node: {
      name: 'Node',
      img: node,
    },
    javaScript: {
      name: 'Java Script',
      img: javaScript,
    },
    typeScript: {
      name: 'TypeScript',
      img: typeScript,
    },
    angularNGXS: {
      name: 'Angular | NGXS',
      img: angularNGXS,
    },
    react: {
      name: 'React | MobX',
      img: react,
    },
    serverlessFramework: {
      name: 'Serverless Framework',
      img: serverlessFramework,
    },
    express: {
      name: 'Express | Sails | Nest',
      img: express,
    },
    aws: {
      name: 'Amazon Web Services',
      img: aws,
    },
    gcp: {
      name: 'Google Cloud Platform',
      img: gcp,
    },
    microsoftAzure: {
      name: 'Microsoft Azure',
      img: microsoftAzure,
    },
    ibm: {
      name: 'IBM Cloud',
      img: ibm,
    },
    postgreSQL: {
      name: 'PostgreSQL | MySQL | Aurora',
      img: postgreSQL,
    },
    flutter: {
      name: 'Flutter | GetIt',
      img: flutter,
    },
    cloudantDB: {
      name: 'CloudantDB | SQLite',
      img: cloudantDB,
    },
    amazonQuantumLedgerDB: {
      name: 'Amazon Quantum Ledger DB',
      img: amazonQuantumLedgerDB,
    },
    dart: {
      name: 'Dart',
      img: dart,
    },
    electron: {
      name: 'Electron',
      img: electron,
    }
  }
  const displayTechnologies = technologies.map((technology) =>
    allTechnologies[technology]
  )
  return (
    <div className="row justify-content-center technologies">
      {displayTechnologies.map((technology) => (
        <div className="technologyItem" key={technology.name}>
          <div className="imageArea">
            <img src={technology.img} alt=""/>
          </div>
          <p>{technology.name}</p>
        </div>
      ))}
    </div>
  )
}
