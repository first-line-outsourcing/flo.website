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

export default function Technologies() {
    let cardArray = [
        {
            img: NodeJs,
            title: 'Node.Js',
            text: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consequuntur, enim esse nemo suscipit vitae.'
        },
        {
            img: Js,
            title: 'Java Script',
            text: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consequuntur, enim esse nemo suscipit vitae.'
        },
        {
            img: TS,
            title: 'TypeScript',
            text: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consequuntur, enim esse nemo suscipit vitae.'
        },
        {
            img: Angular,
            title: 'Angular | NGXS',
            text: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consequuntur, enim esse nemo suscipit vitae.'
        },
        {
            img: logoReact,
            title: 'React | MobX',
            text: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consequuntur, enim esse nemo suscipit vitae.'
        },
        {
            img: SLS,
            title: 'Serverless Framework',
            text: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consequuntur, enim esse nemo suscipit vitae.'
        },
        {
            img: Express,
            title: 'Express | Sails | Nest',
            text: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consequuntur, enim esse nemo suscipit vitae.'
        },
        {
            img: AWS,
            title: 'Amazon Web Services',
            text: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consequuntur, enim esse nemo suscipit vitae.'
        },
        {
            img: GCP,
            title: 'Google Cloud Platform',
            text: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consequuntur, enim esse nemo suscipit vitae.'
        },
        {
            img: Azure,
            title: 'Microsoft Azure',
            text: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consequuntur, enim esse nemo suscipit vitae.'
        },
        {
            img: IBMC,
            title: 'IBM Cloud',
            text: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consequuntur, enim esse nemo suscipit vitae.'
        },
        {
            img: PostgreSQL,
            title: 'PostgreSQL | MySQL | Aurora',
            text: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consequuntur, enim esse nemo suscipit vitae.'
        },
        {
            img: Flutter,
            title: 'Flutter | Getit',
            text: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consequuntur, enim esse nemo suscipit vitae.'
        },
        {
            img: SQLite,
            title: 'CloudantDB | SQLite',
            text: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consequuntur, enim esse nemo suscipit vitae.'
        },
        {
            img: AmazonQuantum,
            title: 'Amazon Quantum Ledger DB',
            text: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consequuntur, enim esse nemo suscipit vitae.'
        },
        {
            img: Dart,
            title: 'Dart',
            text: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consequuntur, enim esse nemo suscipit vitae.'
        },
        {
            img: Electron,
            title: 'Electron',
            text: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consequuntur, enim esse nemo suscipit vitae.'
        },
    ]
    let windowSize = window.innerWidth
    if (windowSize <= 720) {
        cardArray = [
            {
                img: Js,
                title: 'Js',
                text: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consequuntur, enim esse nemo suscipit vitae.'
            },
            {
                img: Express,
                title: 'Express',
                text: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consequuntur, enim esse nemo suscipit vitae.'
            },
            {
                img: Dart,
                title: 'Dart',
                text: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consequuntur, enim esse nemo suscipit vitae.'
            },
        ]
    }
    let key = 0;
    let cards = cardArray.map((card) => {
        return <div className={'col-lg-4 col-sm-12 col-md-6'} key={key++}>
            <TechnologyCard img={card.img} title={card.title} text={card.text}/>
        </div>
    })
    
    return (
        <div className="tech">
            <div className="heading">
                <div className="container">
                    <div className="row">
                        <div className="col-8">
                            <h1>Full-cycle development for your business needs</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'container'}>
                <div className="cardContainer">
                    <div className={'row'}>
                        {cards}
                    </div>
                </div>
            </div>
        </div>
    )
}
