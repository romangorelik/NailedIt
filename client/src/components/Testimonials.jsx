import React from 'react'
import { connect } from 'react-redux'

class TestimonialsJSX extends React.Component {
  render () {
    return (
      <section className='section-testimonial'>

        <div className="bg-video">
				  <video className="bg-video__content" autoPlay muted loop>
					  <source src='https://storage.googleapis.com/coverr-main/mp4%2Fcoverr--hairdresser-tools--1563963267038.mp4?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=coverr-183014%40appspot.gserviceaccount.com%2F20190806%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20190806T010654Z&X-Goog-Expires=300&X-Goog-SignedHeaders=host&X-Goog-Signature=8f251c13ca8b29d3a1c283d473b5b2ddabab71034ec6d04c246f4f10a3178f2f3937d62c341016dc2ebba42db9d260199b3b872c97790d648cd91728370ef0929378fb6a62fdf8d607ca190be5379a6855302294fb35b68ace0ec5bb618d6e218b2a484fb460783ba132483b44bc3d5f4ce6a982fe5f55db41a42cfbfbd14a07c5d8851128c3ffdd620dbbcfb78d57bd6e2758d56419c03451cba0832707099cec6568b1ec110e5c9bb176ac84ad90a32dfe91d244fd705fbaa222ce0514c285d1568491c08f3d8e3253b11c610f7d8c9d582adbf9b73bd02b854241016a606e164aea97a9e70345072f5f2f227735f35ed7fed45cbccc011c9e23829d4986e9' type='video/mp4'/>
					  Your browser is not supported!  
				  </video>
			  </div>

        <div className="u-text-center u-margin-bottom-big">
          <h2 className="heading-secondary">Here from our customers</h2>
        </div>

        <div className="row">
          <div className="story">
            <figure className="story__shape">
              <img src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="Person 1" className="story__image"/>
              <figcaption className="story__caption">Ana Vasquez</figcaption>
            </figure>
            <div className="story__text">
              <h3 className="heading-tertiary u-margin-bottom-small">Best service on the market</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat mollitia, quibusdam laborum praesentium quia suscipit harum maiores voluptates blanditiis. Commodi, hic. Consequatur in iusto tempora, enim voluptates adipisci incidunt nesciunt?</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="story">
            <figure className="story__shape">
              <img src="https://images.unsplash.com/photo-1488282396544-0212eea56a21?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="Person 1" className="story__image"/>
              <figcaption className="story__caption">Hannah Godwin</figcaption>
            </figure>
            <div className="story__text">
              <h3 className="heading-tertiary u-margin-bottom-small">They really do have the best stylists</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat mollitia, quibusdam laborum praesentium quia suscipit harum maiores voluptates blanditiis. Commodi, hic. Consequatur in iusto tempora, enim voluptates adipisci incidunt nesciunt?</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

const Testimonial = connect(null)(TestimonialsJSX)

export default Testimonial