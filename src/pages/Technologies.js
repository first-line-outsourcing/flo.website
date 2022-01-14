import React from "react";
import TechnologyCard from "../components/technologyCard/technologyCard";
import TechnologiesStyle from './Technologies.module.scss'
import AmazonQuantum from '../images/technologies/AmazonQuantum.svg'
import Angular from '../images/technologies/Angular.svg'
import AWS from '../images/technologies/AWS.svg'
import Azure from '../images/technologies/Azure.svg'
import Dart from '../images/technologies/Dart.svg'
import Electron from '../images/technologies/Electron.svg'
import Express from '../images/technologies/Express.svg'
import Flutter from '../images/technologies/Flutter.svg'
import GCP from '../images/technologies/GCP.svg'
import IBMC from '../images/technologies/IBMC.svg'
import Js from '../images/technologies/Js.svg'
import NodeJs from '../images/technologies/NodeJs.svg'
import PostgreSQL from '../images/technologies/PostgreSQL.svg'
import logoReact from '../images/technologies/logoReact.svg'
import SQLite from '../images/technologies/SQLite.svg'
import TS from '../images/technologies/TS.svg'

export default function Technologies() {
    let cardArray = [
        {
            img: NodeJs,
            title: 'NodeJs',
            text: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consequuntur, enim esse nemo suscipit vitae.'
        },
        {
            img: Js,
            title: 'Js',
            text: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consequuntur, enim esse nemo suscipit vitae.'
        },
        {
            img: TS,
            title: 'TS',
            text: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consequuntur, enim esse nemo suscipit vitae.'
        },
        {
            img: Angular,
            title: 'Angular',
            text: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consequuntur, enim esse nemo suscipit vitae.'
        },
        {
            img: logoReact,
            title: 'React',
            text: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consequuntur, enim esse nemo suscipit vitae.'
        },
        {
            img: Express,
            title: 'Express',
            text: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consequuntur, enim esse nemo suscipit vitae.'
        },
        {
            img: AWS,
            title: 'AWS',
            text: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consequuntur, enim esse nemo suscipit vitae.'
        },
        {
            img: GCP,
            title: 'GCP',
            text: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consequuntur, enim esse nemo suscipit vitae.'
        },
        {
            img: Azure,
            title: 'Azure',
            text: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consequuntur, enim esse nemo suscipit vitae.'
        },
        {
            img: IBMC,
            title: 'IBMC',
            text: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consequuntur, enim esse nemo suscipit vitae.'
        },
        {
            img: PostgreSQL,
            title: 'PostgreSQL',
            text: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consequuntur, enim esse nemo suscipit vitae.'
        },
        {
            img: Flutter,
            title: 'Flutter',
            text: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consequuntur, enim esse nemo suscipit vitae.'
        },
        {
            img: SQLite,
            title: 'SQLite',
            text: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consequuntur, enim esse nemo suscipit vitae.'
        },
        {
            img: AmazonQuantum,
            title: 'AmazonQuantum',
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
        return <div className={'col-lg-4 col-sm-12'} key={key++}>
            <TechnologyCard img={card.img} title={card.title} text={card.text}/>
        </div>
    })
    
    return (
        <div className='services'>
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
                <div className={TechnologiesStyle.cardContainer}>
                    <div className={'row'}>
                        {cards}
                    </div>
                </div>
            </div>
        </div>
    )
}
