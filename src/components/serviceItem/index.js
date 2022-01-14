import "./styles.scss"
import arrow from "../../images/services/arrow.svg"
import arrowMobile from "../../images/services/arrowMobile.svg"

export default function ServiceItem({title, description, img}) {
  return (
    <div className="item row">
      <div className="col-md-auto">
        <h4>{title}</h4>
      </div>
      <div className="col-md-auto">
        <p>{description}</p>
        <div className="arrow"><img src={arrow} alt=""/></div>
      </div>
      <div className="col text-end">
        <img className="image" src={img} alt=""/>
      </div>
      <div className="arrowMobile"><img src={arrowMobile} alt=""/></div>
    </div>
  )
}
