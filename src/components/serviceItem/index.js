import { useState } from "react";
import "./styles.scss"
import arrow from "../../images/services/arrow.svg"

export default function ServiceItem({title, description, img}) {
  let [withHighlighting, setWithHighlighting] = useState(false);
  return (
    <div className="item row"
         onMouseEnter={() => setWithHighlighting(true)}
         onMouseLeave={() => setWithHighlighting(false)}
    >
      <div className={withHighlighting ? "col-3 withHighlighting" : "col-3"}>
        <h4>{title}</h4>
      </div>
      <div className="col-6">
        <p>{description}</p>
        {withHighlighting ? <div className="arrow"> <img src={arrow} alt=""/></div> : null}
      </div>
      <div className="col-3 text-end">
        <img className="image" src={img} alt=""/>
      </div>
    </div>
  )
}
