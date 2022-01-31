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

export default function TechnologyItems({technologyNumbers}) {
  const allTechnologies = [
    {
      name: 'Node',
      img: node,
    },
    {
      name: 'Java Script',
      img: javaScript,
    },
    {
      name: 'TypeScript',
      img: typeScript,
    },
    {
      name: 'Angular | NGXS',
      img: angularNGXS,
    },
    {
      name: 'React | MobX',
      img: react,
    },
    {
      name: 'Serverless Framework',
      img: serverlessFramework,
    },
    {
      name: 'Express | Sails | Nest',
      img: express,
    },
    {
      name: 'Amazon Web Services',
      img: aws,
    },
    {
      name: 'Google Cloud Platform',
      img: gcp,
    },
    {
      name: 'Microsoft Azure',
      img: microsoftAzure,
    },
    {
      name: 'IBM Cloud',
      img: ibm,
    },
    {
      name: 'PostgreSQL | MySQL | Aurora',
      img: postgreSQL,
    },
    {
      name: 'Flutter | GetIt',
      img: flutter,
    },
    {
      name: 'CloudantDB | SQLite',
      img: cloudantDB,
    },
    {
      name: 'Amazon Quantum Ledger DB',
      img: amazonQuantumLedgerDB,
    },
    {
      name: 'Dart',
      img: dart,
    },
    {
      name: 'Electron',
      img: electron,
    }
  ]
  const displayTechnologies = allTechnologies.filter((technology, index) =>
    technologyNumbers.includes(index)
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
