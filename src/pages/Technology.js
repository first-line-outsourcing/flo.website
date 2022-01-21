import React from "react";
import style from "./Technology.module.scss";
import DevelopmentCycle from "./tecnology/developmentCycle/developmentCycle";
import OurService from "./tecnology/ourService/ourService";
import "./Technologies.scss";

export default function Technology() {
    return (
        <div className={style.tech}>
            <div className="heading">
                <div className="container">
                    <div className="row">
                        <div className="col-8">
                            <h1>Full-cycle development for your business needs</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${style.about}`}><div className={'container'}> <DevelopmentCycle/></div></div>
                <div className={style.service}><div className={'container'}><OurService/></div></div>
                <div>contact</div>
                <div>our cases</div>
                <div>client testimoniaals</div>
        </div>
    );
}
