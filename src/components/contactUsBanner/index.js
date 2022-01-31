import "./styles.scss"

export default function ContactUsBanner({background}) {
  return (
    <div className={background ? `${background} pb-5` : "pb-5"}>
      <div className="container">
        <div className="contactUs"/>
        <div className="business-growth">
          <div className="row gx-5">
            <div className="col-md-6">
              <h2>Are you ready for your business growth?</h2>
              <p>Let&#39;s move your business forward to the clouds! Tell us about your idea! We will interview you and offer the best solution for reaching the goal.</p>
              <button className="btn">Contact us</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
