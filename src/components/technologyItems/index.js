import "./styles.scss"

export default function TechnologyItems({numberOfTechnologies}) {
  const allTechnologies = [
    {
      name: 'Node',
      img: require("../../images/technologiesStack/node.jpg"),
    },
    {
      name: 'Java Script',
      img: require('../../images/technologiesStack/javaScript.jpg')
    },
    {
      name: 'TypeScript',
      img: require('../../images/technologiesStack/typeScript.jpg')
    },
    {
      name: 'Angular | NGXS',
      img: require('../../images/technologiesStack/angularNGXS.jpg')
    },
    {
      name: 'React | MobX',
      img: require('../../images/technologiesStack/react.jpg')
    },
    {
      name: 'Serverless Framework',
      img: require('../../images/technologiesStack/serverlessFramework.jpg')
    },
    {
      name: 'Express | Sails | Nest',
      img: require('../../images/technologiesStack/express.jpg')
    },
    {
      name: 'Amazon Web Services',
      img: require('../../images/technologiesStack/aws.jpg')
    },
    {
      name: 'Google Cloud Platform',
      img: require('../../images/technologiesStack/gcp.jpg')
    },
    {
      name: 'Microsoft Azure',
      img: require('../../images/technologiesStack/microsoftAzure.jpg')
    },
    {
      name: 'IBM Cloud',
      img: require('../../images/technologiesStack/ibm.jpg')
    },
    {
      name: 'PostgreSQL | MySQL | Aurora',
      img: require('../../images/technologiesStack/postgreSQL.jpg')
    },
    {
      name: 'Flutter | GetIt',
      img: require('../../images/technologiesStack/flutter.jpg')
    },
    {
      name: 'CloudantDB | SQLite',
      img: require('../../images/technologiesStack/cloudantDB.jpg')
    },
    {
      name: 'Amazon Quantum Ledger DB',
      img: require('../../images/technologiesStack/amazonQuantumLedgerDB.jpg')
    },
    {
      name: 'Dart',
      img: require('../../images/technologiesStack/dart.jpg')
    },
    {
      name: 'Electron',
      img: require('../../images/technologiesStack/electron.jpg')
    }
  ]
  const displayTechnologies = allTechnologies.slice(0, numberOfTechnologies)
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
