import {useState} from "react";
import "./styles.scss"
import arrow from "../../images/services/arrow.svg"
import arrowMobile from "../../images/services/arrowMobile.svg"

export default function ServiceItem({title, description, img}) {
  let [withHighlighting, setWithHighlighting] = useState(false);
  return (
    <div className="item row"
         onMouseEnter={() => setWithHighlighting(true)}
         onMouseLeave={() => setWithHighlighting(false)}
    >
      <div className={withHighlighting ? "col-md-auto withHighlighting" : "col-md-auto"}>
        <h4>{title}</h4>
      </div>
      <div className="col-md-auto">
        <p>{description}</p>
        {withHighlighting ? <div className="arrow"><img src={arrow} alt=""/></div> : null}
      </div>
      <div className="col text-end">
        <img className="image" src={img} alt=""/>
      </div>
      <div className="arrowMobile"><img src={arrowMobile} alt=""/></div>
    </div>
  )
}
