import React from 'react'
import { connect} from 'react-redux'

const AboutUsJSX = () => (
  <section className='section-about' id='section-about'>

    <div className="u-text-center u-margin-bottom-big">
      <h2 className="heading-secondary">Our Story</h2>
    </div>

    <div className="row">
      <div className="col-1-of-2">
        <h3 className="heading-tertiary u-margin-bottom-small">
          Our mission
        </h3>
        <p className="paragraph">
          We aim to offer women a service where they can feel treated the way they should be. With Nailed It, you pay a monthly service which allows you to come to our partenered locations and get the luxuries you deserve.
        </p>

        <h3 className="heading-tertiary u-margin-bottom-small">
          Our promise
        </h3>
        <p className="paragraph">
          We promise that all your services will be world class, with such ameneties as manicures, pedicures, haircuts, color dyes, and an open bar. Sit back and relax while we take care of all your needs.
        </p>
      </div>
      <div className="col-1-of-2">
        <div className="composition">
        <img src="https://images.unsplash.com/photo-1519170644683-24494cb5fe63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="Drinks" className="composition__photo composition__photo--p3"/>
          <img src="https://images.unsplash.com/photo-1457972729786-0411a3b2b626?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="Manicure" className="composition__photo composition__photo--p1"/>
          <img src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="Lipstick" className="composition__photo composition__photo--p2"/>
        </div>
      </div>
    </div>
  </section>
)

const AboutUs = connect(null)(AboutUsJSX)

export default AboutUs