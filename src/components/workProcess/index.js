import "./styles.scss"
import workProcessLine from "../../images/workProcessLine.svg"

export default function WorkProcess() {
  const processItems = ["Init", "Discovery", "Design", "Development", "Delivery", "Support"];
  const leftSide = [];
  const rightSide = [];
  processItems.filter((item, index) => index % 2 === 0 ? leftSide.push(item) : rightSide.push(item));
  return (
    <div className="workProcess">
      <div className='row'>
        <div className="col">
          {leftSide.map(leftItem => (
            <p className="workProcessItem">{leftItem}</p>
          ))}
        </div>
        <div className="col">
          <img src={workProcessLine} alt=""/>
        </div>
        <div className="col">
          <div className="rightItemsAlign"/>
          {rightSide.map(rightItem => (
            <p className="workProcessItem">{rightItem}</p>
          ))}
        </div>
      </div>
      <button className="button btn btn-accent">Read more</button>
    </div>
  )
}
