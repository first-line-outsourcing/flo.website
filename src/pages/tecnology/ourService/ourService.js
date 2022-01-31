import React from 'react';
import ServiceItem from "../../../components/serviceItem";

const OurService = () => {
    const items = [
        {
            title: "Web dev",
            description: "We develop SaaS solutions, SPA, PWA based on serverless architecture to level up your business. We help with different tasks, the process of optimization, sales growth, and customer loyalty.",
            img: require("../../../images/services/webDev.jpg"),
            link: "https://flo.team/"
        },
        {
            title: "Mobile dev",
            description: "Сross-platform app development for a quick launch! Be in touch with your clients!",
            img: require("../../../images/services/mobileDev.jpg"),
            link: "https://flo.team/"
        },
        {
            title: "Desktop apps",
            description: "We develop apps for private networks and for specific tasks. We customize the inner tasks of your business.",
            img: require("../../../images/services/desktopApps.jpg"),
            link: "https://flo.team/"
        },
    ]
    return (
        <div>
            <div className="title">
                <div className="row">
                    <div className="col">
                        <h3>Our <span>services</span></h3>
                        <p>
                            Together with you we discuss your challenges and choose the most effective way of solving them. We
                            interview you to understand your business, understand the processes and offer the and concentrate on the
                            result you get after our partnership.
                        </p>
                    </div>
                </div>
            </div>
            {items.map((item) => (
                <>
                    <ServiceItem
                        title={item.title}
                        description={item.description}
                        img={item.img}
                        link={item.link}
                    />
                </>
            ))}
        </div>
    );
};

export default OurService;
