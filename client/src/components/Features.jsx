import React from 'react'
import { connect } from 'react-redux'

const FeaturesJSX = () => (
  <section className='section-features' id='section-features'>
    <div className="row">

      <div className="col-1-of-4">
        <div className="feature-box">
          <i className="feature-box__icon fas fa-map-marked-alt"></i>
          <h3 className="heading-tertiary u-margin-bottom-small">Locations</h3>
          <p className="feature-box__text">Travel to any of our partenered locations without extra charge. Keep your
            favorite location on file to gain benefits for you as a loyal customer, as well as priority access to services
            and access.</p>
        </div>
      </div>

      <div className="col-1-of-4">
        <div className="feature-box">
          <i className="feature-box__icon fas fa-concierge-bell"></i>
          <h3 className="heading-tertiary u-margin-bottom-small">Services</h3>
          <p className="feature-box__text">Access to our personalized customer service, where you can set up dates to
            visit our locations, book services, inquire about any specials, as well as settle any disputes.</p>
        </div>
      </div>

      <div className="col-1-of-4">
        <div className="feature-box">
          <i className="feature-box__icon fas fa-id-card"></i>
          <h3 className="heading-tertiary u-margin-bottom-small">Security</h3>
          <p className="feature-box__text">Gain a personal ID card to ensure that all your information is protected, as
            well as easy hassle-free access to any of our facilities. Use your ID to gain points which you can convert to
            delux services, or a discount on your next monthly fee.</p>
        </div>
      </div>

      <div className="col-1-of-4">
        <div className="feature-box">
          <i className="feature-box__icon fas fa-cocktail"></i>
          <h3 className="heading-tertiary u-margin-bottom-small">Leisure</h3>
          <p className="feature-box__text">Enjoy our complimentary bar while you relax at our facilities. A wide selection
            of coffees, teas, as well as adult beverages ranging from local sourced alcohol to top shelf commerical
            product.</p>
        </div>
      </div>
    </div>
  </section>
)

const Features = connect(null)(FeaturesJSX)

export default Features