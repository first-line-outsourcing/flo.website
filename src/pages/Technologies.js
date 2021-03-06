import React from "react";
import TechnologyCard from "../components/technologyCard/technologyCard";
import AmazonQuantum from '../images/technologies/AmazonQuantum.svg'
import Angular from '../images/technologies/Angular.svg'
import AWS from '../images/technologies/AWS.svg'
import Azure from '../images/technologies/Azure.svg'
import Dart from '../images/technologies/Dart.svg'
import Electron from '../images/technologies/Electron.svg'
import Express from '../images/technologies/Express.svg'
import Flutter from '../images/technologies/Flutter.svg'
import GCP from '../images/technologies/GCP.svg'
import IBMC from '../images/technologies/IBMC.png'
import Js from '../images/technologies/Js.svg'
import NodeJs from '../images/technologies/NodeJs.svg'
import PostgreSQL from '../images/technologies/PostgreSQL.svg'
import logoReact from '../images/technologies/logoReact.svg'
import SQLite from '../images/technologies/SQLite.svg'
import TS from '../images/technologies/TS.svg'
import SLS from '../images/technologies/sls.png'
import './Technologies.scss'

export default function Technologies() {
  const cardArray = [
    {
      img: NodeJs,
      title: 'Node.Js',
      text: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consequuntur, enim esse nemo suscipit vitae.',
      link: "https://flo.team/"
    },
    {
      img: Js,
      title: 'Java Script',
      text: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consequuntur, enim esse nemo suscipit vitae.',
      link: "https://flo.team/"
    },
    {
      img: TS,
      title: 'TypeScript',
      text: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consequuntur, enim esse nemo suscipit vitae.',
      link: "https://flo.team/"
    },
    {
      img: Angular,
      title: 'Angular | NGXS',
      text: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consequuntur, enim esse nemo suscipit vitae.',
      link: "/technology/angular"
    },
    {
      img: logoReact,
      title: 'React | MobX',
      text: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consequuntur, enim esse nemo suscipit vitae.',
      link: "https://flo.team/"
    },
    {
      img: SLS,
      title: 'Serverless Framework',
      text: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consequuntur, enim esse nemo suscipit vitae.',
      link: "https://flo.team/"
    },
    {
      img: Express,
      title: 'Express | Sails | Nest',
      text: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consequuntur, enim esse nemo suscipit vitae.',
      link: "https://flo.team/"
    },
    {
      img: AWS,
      title: 'Amazon Web Services',
      text: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consequuntur, enim esse nemo suscipit vitae.',
      link: "https://flo.team/"
    },
    {
      img: GCP,
      title: 'Google Cloud Platform',
      text: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consequuntur, enim esse nemo suscipit vitae.',
      link: "https://flo.team/"
    },
    {
      img: Azure,
      title: 'Microsoft Azure',
      text: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consequuntur, enim esse nemo suscipit vitae.',
      link: "https://flo.team/"
    },
    {
      img: IBMC,
      title: 'IBM Cloud',
      text: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consequuntur, enim esse nemo suscipit vitae.',
      link: "https://flo.team/"
    },
    {
      img: PostgreSQL,
      title: 'PostgreSQL | MySQL | Aurora',
      text: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consequuntur, enim esse nemo suscipit vitae.',
      link: "https://flo.team/"
    },
    {
      img: Flutter,
      title: 'Flutter | Getit',
      text: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consequuntur, enim esse nemo suscipit vitae.',
      link: "https://flo.team/"
    },
    {
      img: SQLite,
      title: 'CloudantDB | SQLite',
      text: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consequuntur, enim esse nemo suscipit vitae.',
      link: "https://flo.team/"
    },
    {
      img: AmazonQuantum,
      title: 'Amazon Quantum Ledger DB',
      text: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consequuntur, enim esse nemo suscipit vitae.',
      link: "https://flo.team/"
    },
    {
      img: Dart,
      title: 'Dart',
      text: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consequuntur, enim esse nemo suscipit vitae.',
      link: "https://flo.team/"
    },
    {
      img: Electron,
      title: 'Electron',
      text: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consequuntur, enim esse nemo suscipit vitae.',
      link: "https://flo.team/"
    },
  ]

  const cards = cardArray.map((card) => {
    return (
      <div className={'col-lg-6 col-sm-12 col-md-6 col-xl-4 desktopCards'} key={card.title}>
        <TechnologyCard img={card.img} title={card.title} text={card.text} link={card.link}/>
      </div>
    );
  })

  return (
    <div className={'technologiesPage'}>
      <div className="heading">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8">
              <h1 className='technologiesTitle'>Software Development Technologies</h1>
              <p className='technologiesDescription'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aspernatur beatae dolor enim esse
                exercitationem fugiat hic, ipsum iure maiores omnis quam quasi quo reiciendis sunt ullam? In nemo quidem
                quo.</p>
            </div>
          </div>
        </div>
      </div>

      <div className={'container'}>
        <div className={'cardContainer'}>
          <div className={'row'}>
            {cards}
          </div>
        </div>
      </div>

    </div>
  );
}
